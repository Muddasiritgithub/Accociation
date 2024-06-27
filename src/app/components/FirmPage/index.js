import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

function Index() {
  return (
    <Grid container spacing={2} sx={{ padding: { xs: "10px", sm: "16px" } }}>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: { xs: "wrap", sm: "nowrap" },paddingBottom:"30px" }}>
          <Typography variant="h5" sx={{ mr: 1, fontFamily: "Poppins-Bold", fontSize: { xs: "24px", sm: "40px" } }}>
            The Firm
          </Typography>
          <Typography variant="body1" sx={{ ml: { xs: 0, sm: 1 }, mt: { xs: 1, sm: 0 }, fontFamily: "Poppins-Regular", fontSize: { xs: "14px", sm: "16px" } }}>
            Our company is a Lahore-based <br />architectural practice led by Arch.
          </Typography>
          <Box sx={{ flexGrow: 1, ml: { xs: 0, sm: 2 }, mt: { xs: 2, sm: 0 } }}>
            <hr
              style={{
                height: "1px",
                border: "none",
                backgroundColor: "#C89D5D",
                margin:"0px 40px"
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FCF5EB",
          borderRadius: "10px",
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
          p: 2,
        }}
      >
        <Image src={vector} alt="Vector Image" sx={{ width: "100px", height: "auto" }} />
        <Box ml={{ sm: 2 }} mt={{ xs: 2, sm: 0 }}>
          <Typography variant="h3" sx={{ fontFamily: "Poppins-Semibold", fontSize: { xs: "20px", sm: "24px" }, fontWeight: "600" }}>
            Arch. Sohail Anwer Saeed
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins-Regular",
              fontSize: { xs: "14px", sm: "16px" },
              color: "#8B6A3C",
            }}
          >
            39 years of wide range of experience in variety of project types.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1" sx={{ fontFamily: "Poppins-Light", fontSize: { xs: "14px", sm: "16px" }, textAlign: { xs: "center", sm: "left" } }}>
          The SSA philosophy is to produce buildings of quality through creative
          design, using appropriate methodology and within the brief defined by
          the client. Considerable proficiency has been achieved through the
          technologies and resources provided by the practice’s state-of-the-art
          CAD system and its comprehensive database.
        </Typography>
      </Grid>

      {/* Full width column */}
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ fontFamily: "Poppins-Light", fontSize: { xs: "14px", sm: "16px" }, textAlign: { xs: "center", sm: "left" } }}>
          The practice is characterized by a close long-standing relationship
          with many of its clients, who acknowledge the quality and commitment
          of the work produced by SSA. This has been achieved by a caring, yet
          progressive approach to architecture, using the latest technology to
          produce exciting, well detailed buildings within the identifiable
          constraints, whilst meeting the clients’ aspirations.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Index;
