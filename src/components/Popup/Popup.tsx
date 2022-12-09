import {
  Box,
  Button,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { onActionEvents } from "../../types";
interface PopupProps {
  onAction: ({ type, data }: { type: string; data?: string }) => void;
}

const Popup: React.FC<PopupProps> = ({ onAction }) => {
  return (
    <Paper
      elevation={12}
      sx={{
        width: 500,
        borderRadius: 5,
      }}
    >
      <Stack spacing={2} margin={2}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
            />
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
            />
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
            />
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
            />
          </Grid>
        </Grid>
        <Typography textAlign="center" sx={{ m: 2 }} fontSize={20}>
          What type of traveller are you?
        </Typography>
        <Button
          variant="contained"
          onClick={() => onAction({ type: onActionEvents.takeQuiz })}
        >
          Unsure? Take the quiz!
        </Button>
      </Stack>
    </Paper>
  );
};

export default Popup;
