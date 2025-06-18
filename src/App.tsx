import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Button, Stack } from '@mui/material';
import Terminal from './components/Terminal';
import { LINKEDIN, GITHUB } from './consts';
import ProjectsView from './components/ProjectsView';
import { GeneralUtils } from './utils/GeneralUtils';
import { Progression } from './components/Progression';

const typingText = "Hi, I'm Tavis!";

function App() {
  const [displayed, setDisplayed] = useState('');
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = React.useState<boolean>(false);
  const [progression, setProgression] = React.useState<number>(0);
  const generalUtils: GeneralUtils = new GeneralUtils();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(typingText.slice(0, i + 1));
      i++;
      if (i === typingText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: 1200,
          pointerEvents: 'none',
          opacity: 0.5,
          userSelect: 'none',
        }}
      >
        <svg width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 Q360,80 720,40 T1440,40 V80 H0 Z"
            fill="#00FF41"
            fillOpacity="0.15"
          />
          <path
            d="M0,60 Q360,20 720,60 T1440,60"
            stroke="#00FF41"
            strokeWidth="2"
            fill="none"
            strokeDasharray="12 8"
            opacity="0.7"
          />
        </svg>
      </Box>
      <Box
        sx={{
          pointerEvents: 'none',
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1100,
          opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml;utf8,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>")`,
          backgroundRepeat: 'repeat',
        }}
      />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: '#181818',
          color: '#00FF41',
          fontFamily: 'monospace',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Progression value={progression}/>
          <br/>
          <Paper
            elevation={6}
            sx={{
              bgcolor: '#232323',
              p: 4,
              borderRadius: 3,
              border: '1px solid #333',
              boxShadow: '0 0 24px #00FF41',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'monospace',
                textAlign: 'center',
                mb: 1,
                color: '#00FF41',
                textShadow: '0 0 8px #00FF41',
                minHeight: '2.5em',
                letterSpacing: 1,
                position: 'relative',
                '&::after': {
                  content: '""',
                  display: 'inline-block',
                  width: '0.7ch',
                  height: '1.2em',
                  bgcolor: '#00FF41',
                  ml: '2px',
                  animation: 'blink 1s steps(1) infinite',
                  verticalAlign: 'bottom',
                },
                '@keyframes blink': {
                  '0%, 50%': { opacity: 1 },
                  '51%, 100%': { opacity: 0 },
                },
              }}
            >
              {displayed}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'monospace',
                textAlign: 'center',
                mb: 3,
                color: '#B2FFB2',
              }}
            >
              Full Stack Developer
              <br />
              <span>------------------------------</span><br/>
              Welcome to my portfolio! <br />
              Use the terminal located on the right of your screen to navigate    
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="outlined"
                sx={{
                  color: '#00FF41',
                  borderColor: '#00FF41',
                  fontFamily: 'monospace',
                  '&:hover': {
                    borderColor: '#B2FFB2',
                    background: '#181818',
                  },
                }}
                target="_blank"
                rel="noopener noreferrer"
                href={LINKEDIN}
              >
                {'LINKEDIN'}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: '#00FF41',
                  borderColor: '#00FF41',
                  fontFamily: 'monospace',
                  '&:hover': {
                    borderColor: '#B2FFB2',
                    background: '#181818',
                  },
                }}
                target="_blank"
                rel="noopener noreferrer"
                href={GITHUB}
              >
                {'GITHUB'}
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
      <Terminal 
        setProjectViewOpen={setIsProjectDrawerOpen}
        setProgression={setProgression}
        progression={progression}
      />
      <ProjectsView 
        open={isProjectDrawerOpen} 
        setOpen={setIsProjectDrawerOpen}
        projects={generalUtils.GenerateProjects()}
      />
    </>
  );
}

export default App;
