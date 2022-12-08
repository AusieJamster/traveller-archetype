import { Box, ButtonBase, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { onActionEvents, onActionType } from "../../types";
import questions from "../../data/questions.json";

interface QuestionnaireProps {
  onAction: onActionType;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onAction }) => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const [disable, setDisable] = useState(false);

  const onAnswerSelected = (archetype: string) => {
    const answersClone = [...answers, archetype];
    setAnswers(answersClone);

    if (currQuestionIndex + 1 < questions.length)
      setCurrQuestionIndex(currQuestionIndex + 1);
    else {
      setDisable(true);
      onAction({ type: onActionEvents.getAnswers, data: answersClone });
    }
  };

  return (
    <Box
      sx={{
        border: 1,
        width: 500,
        borderRadius: 5,
        padding: 2,
      }}
    >
      <Stack spacing={2}>
        <Typography textAlign="center" fontSize={16} color="GrayText">
          Your traveller Archetype
        </Typography>
        <Typography textAlign="center" fontSize={20}>
          {questions[currQuestionIndex].question}
        </Typography>
        <Grid container>
          {questions[currQuestionIndex].answers.map((answer, i) => (
            <Grid item key={`answer ${i}`} xs={6} height={200}>
              <ButtonBase
                onClick={() => onAnswerSelected(answer.archetype)}
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundImage: `url(${answer.image})`,
                  backgroundRepeat: "no-repeat",
                }}
                disabled={disable}
              >
                <Typography>{answer.label}</Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Questionnaire;
