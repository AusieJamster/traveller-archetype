import { CardMedia, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { generatePackages } from "../../helpers/package";
import type { Archetype, onActionType } from "../../types";
import packages from "../../data/packages.json";
import PackageDisplay from "../PackageDisplay/PackageDisplay";

interface ArchetypeProfileProps {
  onAction: onActionType;
  archetype: Archetype;
}

const ArchetypeProfile: React.FC<ArchetypeProfileProps> = ({
  onAction,
  archetype,
}) => {
  const packageSelection = generatePackages(archetype);
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
        {packageSelection.map((p) => (
          <PackageDisplay myPackage={p} />
        ))}
      </Stack>
    </Paper>
  );
};

export default ArchetypeProfile;
