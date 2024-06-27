import React from "react";
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import stylo from "../../../../public/Images/stylo.png";
import oldbuilding from "../../../../public/Images/oldbuilding.png";

const Index = () => {
  return (
    <Grid container spacing={2} sx={{ padding: { xs: "10px", sm: "16px" } }}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            paddingBottom:"30px"
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mr: 1,
              fontFamily: "Poppins-Bold",
              fontSize: { xs: "24px", sm: "40px" },
            }}
          >
            Our Projects
          </Typography>
          <hr
            style={{
              flexGrow: 1,
              height: "1px",
              border: "none",
              backgroundColor: "#C89D5D",
               margin:"0px 40px"
            }}
          />
          <Typography
            variant="body1"
            sx={{
              ml: { xs: 0, sm: 1 },
              fontFamily: "Poppins-Regular",
              fontSize: { xs: "14px", sm: "16px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Discover the Essence of Our Inspiring <br />
            Architectural Projects
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Box
            sx={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#8B6A3C",
              paddingBottom: "20px",
            }}
          >
            <List
              sx={{
                padding: 0,
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: { xs: "4px", sm: "8px" },
              }}
            >
              {[
                "Commercial",
                "Residential",
                "Institutional",
                "Hospitality",
                "Healthcare",
                "Interiors",
                "Master Planning",
                "Sketches",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                    backgroundColor: index === 0 ? "#FFECD1" : "transparent",
                    borderRadius: "5px",
                    padding: "6px",
                    width: { xs: "auto", sm: "auto" },
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "#8B6A3C",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Poppins-Regular",
                      color: index === 0 ? "#8B6A3C" : "#000000",
                      fontSize: { xs: "14px", sm: "16px" },
                    }}
                  >
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            border: "2px solid #8B6A3C",
            padding: "5px",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={stylo}
            alt="Stylo Image"
            style={{ borderRadius: "8px", maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: { xs: "auto", sm: "450px" },
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Image
            src={oldbuilding}
            alt="Oldbuilding Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: { xs: "auto", sm: "450px" },
            overflow: "hidden", // Hide overflow content
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                aria-label="previous"
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #000000",
                  padding: "8px",
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                aria-label="next"
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #000000",
                  padding: "8px",
                  ml: 2,
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h5"
              sx={{ paddingRight: { xs: "0px", sm: "60px" } }}
            >
              01/10
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              backgroundColor: "#FCF5EB",
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                p: 1,
                width: { xs: "auto", sm: "350px" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: { xs: "18px", sm: "24px" },
                  color: "#000000",
                }}
              >
                The Mall
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "#8B6A3C",
                }}
              >
                Rawalpindi
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "#000000",
                }}
              >
                10 floors · 360,000 sft.
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Poppins-Light",
                fontSize: { xs: "14px", sm: "16px" },
                mt: 2,
              }}
            >
              The SSA philosophy is to produce buildings of quality through
              creative design, using appropriate methodology and within the
              brief defined by the client. Considerable proficiency has been
              achieved through the technologies and resources provided by the
              practice’s state-of-the-art CAD system and its comprehensive
              database.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Index;
