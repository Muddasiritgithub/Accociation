import React from "react";
import { Box } from '@mui/material';
import Landscape from '../../src/app/components/Lanscape';
import OngoingProjects from '../../src/app/components/OngoingProjects';
import FirmPage from '../../src/app/components/FirmPage'
import ContactUs from '../../src/app/components/ContactUs'
import Project from '../../src/app/components/Project'
import Awards from '../../src/app/components/Awards'
import Conferences from '../../src/app/components/Conferences'

export default function Home() {
  return (
    <>
      <Box sx={{ marginBottom: '80px' }}>
        <Landscape />
      </Box>
      <Box sx={{ marginTop: '80px' }}>
        <OngoingProjects />
      </Box>
      <Box sx={{ marginTop: '80px' }}>
        <FirmPage />
      </Box>
      <Box sx={{ marginTop: '80px' }}>
        <Project />
      </Box>
      <Box sx={{ marginTop: '80px' }}>
        <ContactUs />
      </Box>
      <Box sx={{ marginTop: '80px' }}>
        <Awards />
      </Box>
      <Box sx={{ marginTop: '80px' }}>
        <Conferences />
      </Box>
    </>
  );
}
