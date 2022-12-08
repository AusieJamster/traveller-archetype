import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";
import { onActionEvents, onActionType } from "../../types";
import Fingerprint from "@mui/icons-material/Fingerprint";

interface IconButtonProps {
  onAction: onActionType;
}

const IconButton: React.FC<IconButtonProps> = ({ onAction }) => {
  return (
    <MuiIconButton
      aria-label="fingerprint"
      color="secondary"
      size="large"
      onClick={() => onAction({ type: onActionEvents.takeQuiz })}
    >
      <Fingerprint fontSize="large" />
    </MuiIconButton>
  );
};

export default IconButton;
