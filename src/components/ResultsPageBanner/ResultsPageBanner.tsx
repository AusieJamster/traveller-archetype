import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { onActionEvents, onActionType } from "../../types";

interface ResultsPageBannerProps {
  onAction: onActionType;
}

const ResultsPageBanner: React.FC<ResultsPageBannerProps> = ({ onAction }) => {
  return (
    <Button
      sx={{
        height: 100,
        width: "100%",
        borderRadius: 6,
        maxWidth: 600,
      }}
      variant="contained"
      onClick={() => onAction({ type: onActionEvents.takeQuiz })}
    >
      <Box>
        <Typography variant="h6">What type of traveller are you?</Typography>
        <Typography>Take the quiz to find out</Typography>
      </Box>
    </Button>
  );
};

export default ResultsPageBanner;
