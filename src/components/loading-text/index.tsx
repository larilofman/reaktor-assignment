import React from 'react';
import './style.css';

interface Props {
    fontSize?: string | number
}

const LoadingText: React.FC<Props> = ({ fontSize = "1rem" }) => {
    return (
        <>
            <span className="loading-text" style={{ fontSize }}>Loading</span>
            <span style={{ fontSize }} className="loading-dots1">.</span>
            <span style={{ fontSize }} className="loading-dots2">.</span>
            <span style={{ fontSize }} className="loading-dots3">.</span>
        </>
    );
};

export default LoadingText;