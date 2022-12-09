import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";

interface PackageDisplayProps {
  myPackage: {
    name: string;
    nights: number;
    leadRoom: { description: string; price: { total: number } };
    images: { url: string }[];
    tripAdvisor: {
      medianUserRating: number;
    };
  };
}

const PackageDisplay: React.FC<PackageDisplayProps> = ({ myPackage }) => {
  const price = myPackage.leadRoom.price.total.toLocaleString("au", {
    style: "currency",
    currency: "AUD",
  });

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          height={60}
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${myPackage.images?.[0].url})`,
            backgroundRepeat: "no-repeat",
            alignItems: "end !important",
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h6">{myPackage.name}</Typography>
          <Typography color="GrayText">{`${myPackage.nights} nights | ${myPackage.tripAdvisor.medianUserRating} stars`}</Typography>
          <Typography>{price}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PackageDisplay;
