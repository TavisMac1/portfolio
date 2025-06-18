import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

export const Progression: React.FC<{ value: number }> = ({ value }): React.ReactElement => {

    if (value > 100) value = 100;

    return (
        <Box
            sx={{
            bgcolor: '#181818',
            p: 2,
            mt: 3,
            mb: 2,
            maxWidth: 400,
            mx: 'auto',
            fontFamily: 'monospace'
            }}
        >
            <Typography
                sx={{
                    color: '#00FF41',
                    fontFamily: 'monospace',
                    mb: 1,
                    textAlign: 'center',
                    fontSize: '1.1em',
                    letterSpacing: 1,
                }}
            >
                {
                    value === 100 ?
                        "thank you for looking through my portfolio!"
                    :
                        "your progression in my portfolio"
                }
            </Typography>
            <Box sx={{ width: '100%', bgcolor: '#232323' }}>
                <LinearProgress
                    variant="determinate"
                    value={value}
                    sx={{
                        height: 12,
                        borderRadius: 0,
                        backgroundColor: '#232323',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#00FF41',
                        },
                    }}
                />
                <Typography
                    sx={{
                        color: '#B2FFB2',
                        fontFamily: 'monospace',
                        textAlign: 'center',
                        mt: 1,
                        fontSize: '0.95em',
                        margin:"auto",
                    }}
                >
                    {`${Math.round(value)}%`}
                </Typography>
            </Box>
        </Box>
    );
};