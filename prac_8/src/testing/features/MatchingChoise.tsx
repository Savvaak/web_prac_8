import { Grid, List, ListItem } from '@mui/material';
import { tChoise } from "../quizData";
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, setDraggedItems } from '../features/quizSlice';
import { RootState } from '../../store';
import ChoiceTask from '../features/Choices';

interface ComponentProps {
    index: number;
    choise: tChoise;
    needReset?: boolean;
    taskType: string;
    onAnswerChange?: (choices: Record<number, string | string[]>) => void; 
}

const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

function MatchingChoise({ index, choise, needReset, taskType }: ComponentProps) {
    const displayArraySec = useMemo(() => {
        if (!Array.isArray(choise)) return [];
        return shuffleArray(choise);
    }, [needReset, choise]);

    const dispatch = useDispatch();
    const userAnswers = useSelector((state: RootState) => state.lists.lists[index]);
    
    useEffect(() => {
        if (taskType === "CO" || taskType === "CS") {
            if (needReset) {
                dispatch(setDraggedItems({ index, items: [] }));
            } else if (userAnswers === undefined) {
                dispatch(addList({ index, items: [] }));
            }
        }
    }, [dispatch, index, taskType, needReset]);

    const handleSelect = (question: string) => {
        const safeAnswers = Array.isArray(userAnswers) ? userAnswers : [];
        if (taskType === "CO") {
            dispatch(setDraggedItems({ index, items: [question] }));
        } else {
            const newSelection = safeAnswers.includes(question)
                ? safeAnswers.filter((q: string) => q !== question)
                : [...safeAnswers, question];
            dispatch(setDraggedItems({ index, items: newSelection }));
        }
    };

    return (
        <Grid container spacing={2} sx={{ justifyContent: "center", px: 2 }}>
                <List sx={{ padding: "0px" }}>
                    {displayArraySec.map((task, taskIdx) => (
                        <ListItem key={taskIdx} sx={{ display: "block" }}>
                            <ChoiceTask
                                task={task}
                                type={taskType}
                                value={userAnswers || []}
                                onChange={handleSelect}
                            />
                        </ListItem>
                    ))}
                </List>
        </Grid>
    );
}

export default MatchingChoise;