import React from 'react';

interface ProjectCardProps {
    image: string;
    header: string;
}

const cardStyle: React.CSSProperties = {
    background: '#1a1a1a',
    color: '#33ff33',
    border: '2px solid #33ff33',
    borderRadius: '8px',
    padding: '1.5rem',
    fontFamily: 'monospace',
    boxShadow: '0 0 16px #33ff3380',
    maxWidth: '340px',
    margin: '1rem auto',
    textAlign: 'center',
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '1rem',
    border: '1px solid #33ff33',
    background: '#222',
};

const headerStyle: React.CSSProperties = {
    fontSize: '1.4rem',
    margin: '0 0 0.5rem 0',
    letterSpacing: '1px',
    textShadow: '0 0 4px #33ff33',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ image, header }) => (
    <div style={cardStyle}>
        <img src={image} alt={header} style={imageStyle} />
        <h2 style={headerStyle}>{header}</h2>
    </div>
);

export default ProjectCard;