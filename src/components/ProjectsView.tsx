import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Interfaces } from '../interfaces/main_d';

export const ProjectsView: React.FC<Interfaces.ITerminalDrawerProps> = ({
  setOpen,
  open,
  projects = [],
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!open) setIndex(0);
  }, [open]);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  
  const handleClose = () => {
    if (typeof setOpen === 'function') {
      setOpen(false);
    }
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      PaperProps={{
        sx: {
          bgcolor: '#232323',
          color: '#00FF41',
          fontFamily: 'monospace',
          borderRadius: '16px 0 0 16px',
          border: '2px solid #00FF41',
          boxShadow: '0 0 24px #00FF41',
          width: fullScreen ? '100vw' : '480px',
          maxWidth: '100vw',
          height: '95vh',
          maxHeight: '98vh',
          top: 'auto',
          bottom: 0,
        },
      }}
      transitionDuration={400}
    >
      <Box sx={{ p: { xs: 2, sm: 4 }, position: 'relative', height: '100%', overflowY: 'auto' }}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: '#00FF41',
            zIndex: 2,
            '&:hover': { color: '#B2FFB2' },
          }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
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
          Projects
        </Typography>
        <Box sx={{ mt: 3, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {projects.length > 0 ? (
            projects[index]
          ) : (
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'monospace',
                textAlign: 'center',
                color: '#B2FFB2',
              }}
            >
              No projects to display.
            </Typography>
          )}
        </Box>
        {projects.length > 1 && (
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <IconButton
              onClick={handlePrev}
              sx={{
                color: '#00FF41',
                '&:hover': { color: '#B2FFB2' },
                border: '1px solid #00FF41',
                bgcolor: '#181818',
              }}
              aria-label="previous project"
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <Typography
              sx={{
                fontFamily: 'monospace',
                color: '#B2FFB2',
                minWidth: 60,
                textAlign: 'center',
              }}
            >
              {index + 1} / {projects.length}
            </Typography>
            <IconButton
              onClick={handleNext}
              sx={{
                color: '#00FF41',
                '&:hover': { color: '#B2FFB2' },
                border: '1px solid #00FF41',
                bgcolor: '#181818',
              }}
              aria-label="next project"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Stack>
        )}
      </Box>
    </Drawer>
  );
};

export default ProjectsView;