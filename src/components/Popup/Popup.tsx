import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { onActionEvents } from "../../types";
interface PopupProps {
  onAction: ({ type, data }: { type: string; data?: string }) => void;
}

const Popup: React.FC<PopupProps> = ({ onAction }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box onClick={() => setOpen(!open)}>
      <Box
        sx={{
          border: 1,
          width: 500,
          opacity: open ? 1 : 0,
          transition: "all 1s",
          position: "fixed",
          top: "10%",
          left: "10%",
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
      </Box>
    </Box>
  );
};

export default Popup;
