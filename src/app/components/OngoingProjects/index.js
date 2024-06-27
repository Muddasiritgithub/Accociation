'use client'
import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import chughtaiilab from "../../../../public/Images/chughtaii-lab.png";
import grandsqauremall from "../../../../public/Images/grand-sqaure-mall.png";
import hiqtower from "../../../../public/Images/hi-q-tower.png";
import themall from "../../../../public/Images/the-mall.png";

const images = [themall, grandsqauremall];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setFadeIn(true);
        setNextImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [nextImageIndex]);

  const boxStyle = {
    backgroundColor: "#FCF5EB",
    height: "261px",
    width: "261px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "16px",
    borderRadius: "10px",
  };

  const imageStyle = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <Grid container spacing={2} sx={{ padding: { xs: "10px", sm: "16px" } }}>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "30px" }}>
          <Typography
            variant="h5"
            sx={{
              mr: 1,
              fontFamily: "Poppins-Bold",
              fontSize: { xs: "30px", md: "40px" },
            }}
          >
            Ongoing Projects
          </Typography>
          <hr
            style={{
              flexGrow: 1,
              height: "1px",
              border: "none",
              backgroundColor: "#C89D5D",
              margin: "0 40px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              ml: 1,
              fontFamily: "Poppins-Regular",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            Explore Our Dynamic On-Going <br /> Architectural Projects
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{...boxStyle , position: "relative", overflow: "hidden" }}>
              <Image src={chughtaiilab} alt="Chughtai's Lab" layout="fill" style={imageStyle} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ ...boxStyle, gap: "5px" }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Poppins-Bold", fontSize: "24px" }}
              >
                Chughtai's Lab
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: "16px",
                  color: "#8B6A3C",
                }}
              >
                Jail Road, Lahore
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                15 floors · 100,000 sft.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ ...boxStyle ,position: "relative", gap: "5px", overflow: "hidden" }}>
              <Image src={hiqtower} alt="Hi-Q Tower" layout="fill" style={imageStyle} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ ...boxStyle, justifyContent: "flex-end", gap: "5px" }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Poppins-Bold", fontSize: "24px" }}
              >
                Hi-Q Tower
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: "16px",
                  color: "#8B6A3C",
                }}
              >
                Some Street, City
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                20 floors · 150,000 sft.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ ...boxStyle, gap: "5px" }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Poppins-Bold", fontSize: "24px" }}
              >
                The Mall
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: "16px",
                  color: "#8B6A3C",
                }}
              >
                Downtown, City
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                10 floors · 80,000 sft.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                position: "relative",
                transition: "opacity 0.5s ease",
                opacity: fadeIn ? 1 : 0,
                gap: "5px",
                overflow: "hidden",
                ...boxStyle ,
              }}
              className="imageContainer"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ ...boxStyle, justifyContent: "flex-end", gap: "5px" }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Poppins-Bold", fontSize: "24px" }}
              >
                Grand Square Mall
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: "16px",
                  color: "#8B6A3C",
                }}
              >
                Main Boulevard, City
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins-Regular",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                12 floors · 120,000 sft.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ ...boxStyle ,position: "relative", gap: "5px", overflow: "hidden" }}>
              <Image src={grandsqauremall} alt="Grand Square Mall" layout="fill" style={imageStyle} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
