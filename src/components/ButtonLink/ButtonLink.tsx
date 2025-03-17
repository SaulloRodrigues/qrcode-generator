import React from 'react';
import './index.css';

interface ButtonLinkProps {
    url: string;
    children: React.ReactNode;
    className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ url, children, className }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`button-link ${className || ''}`}>
            {children}
        </a>
    );
};

export default ButtonLink;