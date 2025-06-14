import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface TerminalDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  images?: string[];
}

const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  open,
  onClose,
  title,
  description,
  images = [],
}) => {
  const [index, setIndex] = React.useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    if (!open) setIndex(0);
  }, [open]);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          bgcolor: '#232323',
          color: '#00FF41',
          fontFamily: 'monospace',
          borderRadius: '0 0 16px 16px',
          border: '2px solid #00FF41',
          boxShadow: '0 0 24px #00FF41',
          height: fullScreen ? '90vh' : '70vh',
          maxHeight: '95vh',
        },
      }}
      transitionDuration={400}
    >
      <Box sx={{ p: { xs: 2, sm: 4 }, position: 'relative', height: '100%' }}>
        <IconButton
          onClick={onClose}
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
          {title || 'Terminal Drawer'}
        </Typography>
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
          {description}
        </Typography>
        {images.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mt: 2,
              position: 'relative',
              width: '100%',
              height: { xs: 180, sm: 300, md: 350 },
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                color: '#00FF41',
                '&:hover': { color: '#B2FFB2' },
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
              }}
              aria-label="previous image"
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #00FF41',
                borderRadius: 2,
                bgcolor: '#181818',
                height: { xs: 180, sm: 300, md: 350 },
                overflow: 'hidden',
                boxShadow: '0 0 16px #00FF41',
              }}
            >
              <img
                src={images[index]}
                alt={`carousel-${index}`}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </Box>
            <IconButton
              onClick={handleNext}
              sx={{
                color: '#00FF41',
                '&:hover': { color: '#B2FFB2' },
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
              }}
              aria-label="next image"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        )}
        {/* ASCII art terminal border */}
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
    </Drawer>
  );
};

export default TerminalDrawer;