import React from 'react';
import '@/components/Input/index.css';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
    return (
        <>
            <input {...props} />
        </>
    )
}

export default Input;