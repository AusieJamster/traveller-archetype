import {
  Button,
  CardMedia,
  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { onActionEvents } from "../../types";
import { getArchetype } from "../../helpers/archetype";
interface PopupProps {
  onAction: ({ type, data }: { type: string; data?: string }) => void;
}

const Popup: React.FC<PopupProps> = ({ onAction }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  const cardMediaStyle = {};

  return (
    <Modal open={open} onClose={handleClose}>
      <Stack spacing={2}>
        <Grid container>
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
        <Typography textAlign="center" sx={{ m: 2 }}>
          What type of traveller are you?
        </Typography>
        <Button onClick={() => onAction({ type: onActionEvents.takeQuiz })}>
          Unsure? Take the quiz!
        </Button>
      </Stack>
    </Modal>
  );
};

export default Popup;
