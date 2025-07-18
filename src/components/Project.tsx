import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Stack
} from '@mui/material';
import { Interfaces } from '../interfaces/main_d';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { ZoomIn } from '@mui/icons-material';

export const Project: React.FC<{ project: Interfaces.IProject }> = ({project}) => {

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, position: 'relative', height: '100%' }}>
        <Typography
            variant="h5"
            sx={{
                fontFamily: 'monospace',
                textAlign: 'center',
                mb: 2,
                color: '#00FF41',
                textShadow: '0 0 8px #00FF41',
                letterSpacing: 1,
                userSelect: 'none',
            }}
        >
            {project.title || 'None'}
        </Typography>
        {project.image && (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 3,
                }}
            >
                <Box
                    sx={{
                        border: '1px solid #00FF41',
                        borderRadius: 2,
                        bgcolor: '#181818',
                        boxShadow: '0 0 16px #00FF41',
                        overflow: 'hidden',
                        maxWidth: '90%',
                        maxHeight: 240,
                        position: 'relative',
                    }}
                >
                      <PhotoProvider>
                          <PhotoView src={project.image}>
                              <Box sx={{ position: 'relative', cursor: 'pointer' }}>
                                  <img
                                      src={project.image}
                                      alt={project.title}
                                      style={{
                                          maxHeight: 150,
                                          maxWidth: '100%',
                                          objectFit: 'contain',
                                          display: 'block',
                                          margin: '0 auto',
                                      }}
                                 />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        bgcolor: 'rgba(24,24,24,0.7)',
                                        borderRadius: '50%',
                                        p: 0.5,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                  >
                                      <ZoomIn sx={{ color: '#00FF41', fontSize: 28 }} />
                                  </Box>
                              </Box>
                          </PhotoView>
                      </PhotoProvider>
                </Box>
            </Box>
        )}
        <Typography
            variant="body1"
            sx={{
                fontFamily: 'monospace',
                textAlign: 'center',
                mb: 3,
                color: '#B2FFB2',
                whiteSpace: 'pre-line',
            }}
        >
            {project.description}
        </Typography>
        {project.technologies.length > 0 && (
            <Box sx={{ mt: 2 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                    fontFamily: 'monospace',
                    color: '#00FF41',
                    mb: 1,
                    textAlign: 'center',
                    letterSpacing: 1,
                    textShadow: '0 0 4px #00FF41',
                    }}
                >
                    Technologies Used
                </Typography>
                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    flexWrap="wrap"
                    sx={{ mb: 2 }}
                >
                    { project.technologies.map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            sx={{
                                bgcolor: '#181818',
                                color: '#00FF41',
                                border: '1px solid #00FF41',
                                fontFamily: 'monospace',
                                fontSize: '1em',
                                m: 0.5,
                            }}
                        />
                    ))}
                </Stack>
            </Box>
        )}
        <Box
            sx={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            color: '#00FF41',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            opacity: 0.4,
            textAlign: 'center',
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: 1,
            }}
        >
            {'└' + '─'.repeat(40) + '┘'}
        </Box>
    </Box>
  );
};