import React from 'react';

interface AppWindowProps {
    title: string;
    onClose?: () => void;
    children: React.ReactNode;
}

function AppWindow({title, onClose, children}: AppWindowProps) {
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={onClose}>Close</button>
            {children}
        </div>
    )
}

export default AppWindow;