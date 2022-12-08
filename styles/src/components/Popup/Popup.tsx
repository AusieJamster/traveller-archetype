import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { onActionEvents } from "../../types";

interface PopupProps {
  onAction: ({ type, data }: { type: string; data?: string }) => void;
}

const Popup: React.FC<PopupProps> = ({ onAction }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Stack spacing={2}>
        <Typography sx={{ m: 2 }}>What type of traveller are you?</Typography>
        <Button onClick={() => onAction({ type: onActionEvents.takeQuiz })}>
          Unsure? Take the quiz!
        </Button>
      </Stack>
    </Modal>
  );
};

export default Popup;
