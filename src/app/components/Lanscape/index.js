"use client";
import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button, List, ListItem } from "@mui/material";
import Image from "next/image";
import Rectangle from "../../../../public/Images/Rectangle.png";
import Rectangleone from "../../../../public/Images/Rectangleone.png";
import alphatower from "../../../../public/Images/alphatower.png";
 
function Index() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      <Grid item xs={12} sm={6} sx={{ display: { lg: "none", sm: "block" } }}>
  <Box
    p={2}
    sx={{
      display: "flex",
      gap: { xs: "10px", sm: "20px" },
      flexDirection: { xs: "column", sm: "row" },
      alignItems: { xs: "center", sm: "flex-start" },
      textAlign: { xs: "center", sm: "left" },
    }}
  >
    <Box
      sx={{
        width: isVisible ? { xs: "100%", sm: "30%" } : "0%",
        transition: "width 1s ease",
      }}
    >
      <Image objectFit="contain" src={Rectangle} />
    </Box>
    <Box
      sx={{
        width: isVisible ? "0%" : { xs: "100%", sm: "50%" },
        transition: "width 1s ease",
      }}
    >
      <Image objectFit="contain" src={Rectangleone} />
    </Box>
    <Box
      sx={{
        width: isVisible ? { xs: "100%", sm: "50%" } : "0%",
        transition: "width 1s ease",
      }}
    >
      <Image objectFit="contain" src={alphatower} />
    </Box>
  </Box>
</Grid>

      <Grid item xs={12} sm={6}>
        <Box sx={{ paddingLeft: { xs: "10px", sm: "30px" } }}>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "40px", sm: "84.93px" },
                fontFamily: "Poppins-Semibold",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              SOHAIL SAEED
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "30px", sm: "57.73px" },
                letterSpacing: { xs: "5px", sm: "20px" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              & Associates
            </Typography>
          </Box>
          <Box p={2}>
            <Box
              sx={{
                fontFamily: "Poppins-Regular",
                fontSize: { xs: "12px", sm: "14px" },
                color: "#8B6A3C",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <List
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: "8px",
                  padding: 0,
                }}
              >
                {[
                  "Architecture",
                  "Engineering",
                  "Planning",
                  "Interiors",
                  "Landscape",
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: 0,
                      marginRight: { xs: "0", sm: "8px" },
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <div
                      style={{
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        backgroundColor: "#8B6A3C",
                        marginRight: "4px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Poppins-Regular", fontSize: "16px" }}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Poppins-Light",
                fontSize: { xs: "10px", sm: "12px" },
                lineHeight: "27px",
                color: "#000000",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              The practice is characterized by a close long-standing
              relationship with many of our clients, who acknowledge the quality
              and commitment of the work produced by SSA.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "30%" },
                borderBottom: "1px solid #000000",
                mr: 2,
                color: "#C89D5D",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Poppins-Light",
                fontSize: "12px",
                color: "#000000",
                whiteSpace: "nowrap",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Let our skilled architects turn your vision into reality
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              gap: "90px",
              mt: 2,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#FCF5EB",
                color: "#000000",
                borderRadius: "46px",
                border: "none",
              }}
            >
              View Projects
            </Button>
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
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: { lg: "block", sm: "none" ,md:"none"} }}>
        <Box
          p={2}
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: "20px" },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box
            sx={{
              width: isVisible ? { xs: "100%", sm: "30%" } : "0%",
              transition: "width 1s ease",
            }}
          >
            <Image objectFit="contain" src={Rectangle} />
          </Box>
          <Box
            sx={{
              width: isVisible ? "0%" : { xs: "100%", sm: "50%" },
              transition: "width 1s ease",
            }}
          >
            <Image objectFit="contain" src={Rectangleone} />
          </Box>
          <Box
            sx={{
              width: isVisible ? { xs: "100%", sm: "50%" } : "0%",
              transition: "width 1s ease",
            }}
          >
            <Image objectFit="contain" src={alphatower} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Index;
