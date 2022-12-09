import { Box, ButtonBase, Grid, Paper, Stack, Typography } from "@mui/material";
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
    <Paper
      sx={{
        m: 2,
        elevation: 12,
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
                  alignItems: "end !important",
                }}
                disabled={disable}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    width: "100%",
                    padding: 1,
                  }}
                >
                  <Typography color="white">{answer.label}</Typography>
                </Box>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Paper>
  );
};

export default Questionnaire;
