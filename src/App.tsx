import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Button, Stack } from '@mui/material';
import Terminal from './components/Terminal';
import { LINKEDIN, GITHUB } from './consts';
import ProjectsView from './components/ProjectsView';
import { GeneralUtils } from './utils/GeneralUtils';

const typingText = "Hi, I'm Tavis!";

function App() {
  const [displayed, setDisplayed] = useState('');
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = React.useState<boolean>(false);
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
        minHeight: '100vh',
        bgcolor: '#181818',
        color: '#00FF41',
        fontFamily: 'monospace',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
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
            <hr/> 
            Welcome to my portfolio! <br />
            Use the terminal located on the bottom right of your screen to navigate . . .    
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
    <Terminal setProjectViewOpen={setIsProjectDrawerOpen}/>
    <ProjectsView 
      open={isProjectDrawerOpen} 
      setOpen={setIsProjectDrawerOpen}
      projects={generalUtils.GenerateProjects()}
    />
    </>
  );
}

export default App;
