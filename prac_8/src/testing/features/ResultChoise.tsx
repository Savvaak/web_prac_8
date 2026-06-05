import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { Typography } from '@mui/material';

import { tChoise } from '../quizData';

interface ResultsProps {
  index: number;
  correctAnswers: tChoise;
  taskType: string;
}

function ResultChoise({ index, correctAnswers, taskType }: ResultsProps) {
  const answers = useSelector((state: RootState) => 
    state.lists.lists[index]
  );

    if (!answers) {
      return (
          <></>
      );
    }

   if (taskType === "CO") {
        const correct = correctAnswers.find(t => t.answer)?.question;
        const isRight = answers[0] === correct;
        return <Typography>Задание {index + 5} : {isRight ? "Верный ответ!" : "Неверный ответ!"}</Typography>;
    }

    if (taskType === "CS") {
        const correctQuestions = correctAnswers.filter(t => t.answer).map(t => t.question);
        
        if (answers.length > correctQuestions.length) {
          return <Typography>Задание {index + 5} : Неверное решение</Typography>;
        }
    

        const isRight = answers.length === correctQuestions.length && correctQuestions.every((q: string) => answers.includes(q));
        
        const correctCount = answers.filter((q: string) => 
            correctQuestions.includes(q)
        ).length;
        
        const result = isRight 
            ? "Все ответы верные!" 
            : `Верных ответов - ${correctCount} из ${correctQuestions.length}`;
        
        return <Typography>Задание {index + 5} : {result}</Typography>;
    }


  return (<></>);
}

export default ResultChoise;