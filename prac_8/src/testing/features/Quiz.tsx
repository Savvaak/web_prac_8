import { Box, Button, Container, Typography } from '@mui/material';
import { quiz, quiz2 } from "../quizData";
import Matching from './Matching';
import Results from './Results';
import { useState } from "react";
import ResultChoise from './ResultChoise';
import MatchingChoise from './MatchingChoise';

function Quiz() {
   
  const [showAnswers, setShowAnswers] = useState(false);
  const [needReset, setNeedReset] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswers(true);
  }

  const handleRestart = () => {
    setShowAnswers(false);
    setNeedReset(value => !value);
  }

  return (
    <Container maxWidth="md">
      {quiz.map((item, index) => (
        <Box key={item.id} component="section" sx={{ m: 2, p:2 }}>
          <Typography variant="h5" gutterBottom>
                {index + 1}. { item.title }
          </Typography>
          <Matching index={item.id} tasks={item.tasks} needReset={needReset} taskType={item.type}/>
        </Box>
        ))
      }
      {quiz2.map((item, index) => (
        <Box key={item.id} component="section" sx={{ m: 2, p:2 }}>
          <Typography variant="h5" gutterBottom>
                {index + 5}. { item.title }
          </Typography>
          <MatchingChoise index={item.id} choise={item.choise} needReset={needReset} taskType={item.type}/>
        </Box>
        ))
      }
      <Box sx={{ display: 'flex', justifyContent:'space-around' }}>
        <Button variant="contained" onClick={handleShowAnswer}>Проверить</Button>
        <Button variant="contained" onClick={handleRestart}>Начать снова</Button>
      </Box>

      <Box sx={{display: showAnswers ? "block" : "none", textAlign: "center", mt: "20px"}}>
        <Typography variant="h5">Результаты теста</Typography>
        {
          quiz.map((item) => (
          <Results index={item.id} correctAnswers={item.tasks} taskType={item.type}/>
          ))
        }
        {
          quiz2.map((item) => (
            <ResultChoise index={item.id} correctAnswers={item.choise} taskType={item.type}/>
          ))
        }
      </Box>
    </Container>
  );
}

export default Quiz;