import { Box, CardMedia, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import type { Archetype, onActionType } from "../../types";

interface ArchetypeProfileProps {
  onAction: onActionType;
  archetype: Archetype;
}

const ArchetypeProfile: React.FC<ArchetypeProfileProps> = ({
  onAction,
  archetype,
}) => {
  return (
    <Box
      sx={{
        border: 1,
        width: 500,
        borderRadius: 5,
        padding: 2,
      }}
    >
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <CardMedia
            component="img"
            sx={{
              width: 50,
              height: 50,
            }}
            src={archetype.image}
          />
          <Typography variant="h4">{archetype.name}</Typography>
        </Stack>
        <Typography variant="body2">{archetype.header}</Typography>
        <Typography>{archetype.description}</Typography>
      </Stack>
    </Box>
  );
};

export default ArchetypeProfile;
