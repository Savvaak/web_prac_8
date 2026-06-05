import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import List from '@mui/material/List';
import { SortableItem } from "../features/SortableItem";
import { useDispatch, useSelector } from 'react-redux';
import { setDraggedItems } from "../features/quizSlice";
import { RootState } from '../../store';
import { tTasks } from "../quizData";

interface ComponentProps {
    index: number;
    answers: tTasks;
    taskType: string;
  }

function SortableList({ index, answers, taskType }: ComponentProps ) {
  const dispatch = useDispatch();
  const arr = useSelector((state: RootState) => state.lists.lists[index])
  const draggedItems = arr || []; 

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
       const oldIndex = draggedItems.indexOf(active.id);
       const newIndex = draggedItems.indexOf(over.id);
       const newList = arrayMove(draggedItems, oldIndex, newIndex);
       dispatch(setDraggedItems({ index, items: newList }));
    } 
  };
 
    return (
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={ draggedItems } 
                         strategy={verticalListSortingStrategy}>
          <List sx={{padding: "0px"}}>
            {draggedItems.map((item) => {
              const text = answers.find(i => i.answer === item);
              const displayText = taskType === "S" ? text?.question : text?.answer;
              return ( <SortableItem item={ displayText || "Нет ответа" } id={ item } /> );
          })}
          </List>
        </SortableContext>
      </DndContext>
    );
}

export default SortableList;