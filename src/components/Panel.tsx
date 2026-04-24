import React from 'react';
import styles from '../styles/Panel.module.css';
import { useState, useEffect } from 'react';

interface PanelProps {
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
}

function Panel({title, onClose, children}: PanelProps) {
  // Tracks the panel's current position on screen
  const [position, setPosition] = useState( {x: 0, y: 0} );
  // Tracks the distance between the cursor and the panel's top-left corner when dragging starts
  const [offset, setOffset] = useState( {x: 0, y: 0} );
  const [isDragging, setIsDragging] = useState(false);

  // Initiates dragging and calculates the cursor's offset from the panel's top-left corner
  const handleMouseDown = (event : React.MouseEvent) => {
    setIsDragging(true);
    setOffset( {x: event.clientX - position.x, y: event.clientY - position.y} );
  };

  // Adds mouse listeners when dragging starts, cleans them up when dragging stops
  useEffect(() => {
    const controller = new AbortController();

    if (isDragging) {
      // Updates panel position based on cursor movement minus the initial offset
      document.addEventListener('mousemove', event => {
        setPosition( {x: event.clientX - offset.x, y: event.clientY - offset.y} );
      }, {signal: controller.signal});

      document.addEventListener('mouseup', () => {
        setIsDragging(false);
      }, {signal: controller.signal});
    }

    return () => {
      // Removes all listeners by aborting the controller
      controller.abort();
    }
  }, [isDragging, offset]);

    return (
      <div style={ {top:`${position.y}px`, left:`${position.x}px`} } className={styles.panel}>
        <div className={styles.titleBar} onMouseDown={handleMouseDown}>
          <h1>{title}</h1>
          <button onClick={onClose}>Close</button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      )
  }

export default Panel;