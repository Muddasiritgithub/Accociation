'use client'
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const slides = [
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  {
    title: "UCL IRDR 8th Annual Conference",
    location: "UCL, UK, Jun 2018",
    description:
      "The SSA philosophy is to produce buildings of quality through creative design, using appropriate methodology and within the brief defined by the client.",
  },
  
  // Add more slides as needed
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const handleChangeIndex = (index) => {
    setCurrentSlide(index);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <Grid container spacing={2}  sx={{ padding: { xs: "10px", sm: "16px" } }}>
       <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center",paddingBottom:"30px" }}>
          <Typography
            variant="h5"
            sx={{ mr: 1, fontFamily: "Poppins-Bold", fontSize: "40px" }}
          >
            Conferences
          </Typography>
          <Typography
            variant="body1"
            sx={{ ml: 1, fontFamily: "Poppins-Regular", fontSize: "16px" }}
          >
            Unveiling Innovation at our <br /> Architectural Conferences
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
        </Box>
      </Grid>

      {/* Slider Container */}
      <Grid item xs={12} sx={{ position: "relative" }}>
        <SwipeableViews
          index={currentSlide}
          onChangeIndex={handleChangeIndex}
          enableMouseEvents={true}
          springConfig={{
            duration: "1s",
            easeFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            delay: "0s",
            animation: "slide 0.2s forwards",
          }}
          style={{
            overflow: "hidden",
          }}
          axis="x"
        >
          {slides.map((slide, index) => (
            <Box key={index} sx={{ padding: "0 40px" }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  {/* Placeholder Box */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "30px",
                      border: "5px solid #FCF5EB",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Poppins-Bold", fontSize: "24px" }}
                    ></Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  {/* Actual Content */}
                  <Box>
                    <Typography
                      sx={{ fontFamily: "Poppins-Bold", fontSize: "26px" }}
                    >
                      {slide.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins-Regular",
                        fontSize: "24px",
                        color: "#8B6A3C",
                      }}
                    >
                      {slide.location}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "Poppins-Regular", fontSize: "16px" }}
                    >
                      {slide.description}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  {/* Placeholder Box */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "30px",
                      border: "5px solid #FCF5EB",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Poppins-Bold", fontSize: "24px" }}
                    ></Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  {/* Actual Content */}
                  <Box>
                    <Typography
                      sx={{ fontFamily: "Poppins-Bold", fontSize: "26px" }}
                    >
                      {slide.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins-Regular",
                        fontSize: "24px",
                        color: "#8B6A3C",
                      }}
                    >
                      {slide.location}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "Poppins-Regular", fontSize: "16px" }}
                    >
                      {slide.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </SwipeableViews>
        {/* Navigation Buttons */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 350,
            bottom: "10px", // Adjust as per your design
            display: "flex",
            justifyContent: "center",
            color: "#000000",
            zIndex: 1000, 
          }}
        >
          <IconButton
            aria-label="previous"
            sx={{
              borderRadius: "50%",
              padding: "8px",
              ml: 2,
              backgroundColor:"#FCF5EB"
            }}
            onClick={handlePrev}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            aria-label="next"
            sx={{
              borderRadius: "50%",
              border: "1px solid #8B6A3C",
              padding: "8px",
              ml: 2,
              backgroundColor:"#FCF5EB"
            }}
            onClick={handleNext}
          >
            <ArrowForwardIcon />
          </IconButton>
          <Typography variant="body2" sx={{paddingLeft:"60px",fontSize:"25px",color:"#8B6A3C"}}>
            {currentSlide + 1}/{totalSlides}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Index;
