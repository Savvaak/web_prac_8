import { Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import {tTasks} from "../quizData"
import SortableList from "../components/SortableList";
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, setDraggedItems } from '../features/quizSlice';
import { RootState } from '../../store';
import ChoiceTask from '../features/Choices';

interface ComponentProps {
    index: number
    tasks: tTasks;
    needReset?: boolean;
    taskType: string;
    onAnswerChange?: (choices: Record<number, string | string[]>) => void; 
  }

function Matching({index, tasks, needReset, taskType, onAnswerChange}: ComponentProps) {

    const displayArray = useMemo(() => {
      return [...tasks].sort(() => Math.random() - 0.5);
    }, [needReset, tasks, taskType]);

    const dispatch = useDispatch();
    const userAnswers = useSelector((state: RootState) => state.lists.lists[index]) || [];

    useEffect(() => {
      if (taskType === "M" || taskType === "S") {
        dispatch(addList({ index, items: displayArray.map(item => item.answer as string) }));
      }
    }, [dispatch, index, displayArray]);
    
    useEffect(() => {
        if (taskType === "CO" || taskType === "CS") {
            if (needReset) {
                dispatch(setDraggedItems({ index, items: [] }));
            } else if (!userAnswers.length) {
                dispatch(addList({ index, items: [] }));
            }
        } else {
            const answers = displayArray.map(item => item.answer);
            dispatch(addList({ index, items: answers }));
        }
    }, [dispatch, index, displayArray, taskType, needReset]);

    const handleSelect = (question: string) => {
        if (taskType === "CO") {
            dispatch(setDraggedItems({ index, items: [question] }));
        } else {
            const newSelection = userAnswers.includes(question)
                ? userAnswers.filter((q: string) => q !== question)
                : [...userAnswers, question];
            dispatch(setDraggedItems({ index, items: newSelection }));
        }
    };

  return (
      taskType === "M" ?
      (
      <Grid container spacing={2}>
        <Grid size={6}>
          <List sx={{padding: "0px"}}> 
            {tasks.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton 
                sx={{
                  border: '1px solid gray',
                  borderRadius: '5px',
                  textAlign: 'right',
              }}>
                <ListItemText primary={item.question} />
            </ListItemButton>
            </ListItem> 
            ))}
          </List>
        </Grid>

        <Grid size={6}>
          <List sx={{padding: "0px"}}>
              <SortableList index={index} answers={displayArray} taskType={taskType}/>
          </List>
        </Grid>
      </Grid>
      )
      :
      (
      <Grid container spacing={2} sx={{justifyContent:"center"}}>
        <Grid size={6}>
          <List sx={{padding: "0px"}}>
              <SortableList index={index} answers={displayArray} taskType={taskType}/>
          </List>
        </Grid>
      </Grid>
      )
  );
}

export default Matching;