import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import sohail from "../../../../public/Images/sohail.png";

const Index = () => {
  return (
    <Grid container spacing={2} sx={{ padding: { xs: "10px", sm: "16px" } }}>
      {/* First Grid item with Contact Us section */}
      <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap",paddingBottom:"30px"}}>
          <Typography
            variant="h5"
            sx={{
              mr: 1,
              fontFamily: "Poppins-Bold",
              fontSize: "40px",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              ml: 1,
              fontFamily: "Poppins-Regular",
              fontSize: { xs: "14px", sm: "16px" },
              textAlign: { xs: "center", sm: "left" },
              flexBasis: { xs: "100%", sm: "auto" },
            }}
          >
            Transform Your Vision into <br /> Architectural Excellence
          </Typography>
          <hr
            style={{
              flexGrow: 1,
              height: "1px",
              border: "none",
              backgroundColor: "#C89D5D",
              margin: "0px 40px",
              flexBasis: { xs: "100%", sm: "auto" },
            }}
          />
        </Box>
      </Grid>

      {/* Second row with three columns */}
      <Grid
        item
        xs={12}
        sm={4}
        sx={{ backgroundColor: "#FCF5EB", mt: { xs: 2, sm: 0 } }}
      >
        <Box sx={{ padding: "16px" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins-SemiBold",
              fontSize: { xs: "18px", sm: "24px" },
              mb: 2,
            }}
          >
            Arch. Sohail Anwer Saeed
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins-Regular",
              fontSize: { xs: "14px", sm: "16px" },
              color: "#8B6A3C",
              mb: 2,
            }}
          >
            CEO, Principal Architect
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins-Light",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            FELLOW institute of Architects Pakistan M.Sc. Arch. (Bartlett, UCL,
            UK) 1993 Urban Design Certification (UCL, UK) 2017 B.Arch. (UET,
            Lahore) 1981 MPCATP, FIAP{" "}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 2, sm: 0 } }}>
          <Image src={sohail} alt="Image Description" />
        </Box>
      </Grid>

      <Grid item xs={12} sm={4} md={5}>
        <Box sx={{ padding: "16px", mt: { xs: 2, sm: 0 } }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins-SemiBold",
              fontSize: { xs: "18px", sm: "24px" },
              color: "#8B6A3C",
              mb: 2,
            }}
          >
            Let’s Talk
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins-Light",
              fontSize: { xs: "14px", sm: "16px" },
              mb: 2,
            }}
          >
            Where Vision Meets Innovation. Discover the Art of Architectural
            Excellence with
            <Typography
              component="span"
              sx={{
                color: "#000000",
                fontFamily: "Poppins-SemiBold",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              {" Sohail Saeed & Associates,"}
            </Typography>
            {" Shaping Dreams into Concrete Realities"}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#FCF5EB",
              color: "#000000",
              borderRadius: "46px",
              border: "1px solid #8B6A3C",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Index;
