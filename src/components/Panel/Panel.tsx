import React from "react";
import styles from "./Panel.module.css";
import CloseButton from "./CloseButton";
import { useState, useEffect, useRef } from "react";
import type { PanelPosition } from "../../App";

interface PanelProps {
  title: string;
  initialX: number;
  initialY: number;
  maxWidth?: string;
  maxHeight?: string;
  zIndex: number;
  onRaise: () => void;
  onClose: (pos: PanelPosition) => void;
  children: React.ReactNode;
}

function Panel({title, initialX, initialY, maxWidth, maxHeight, zIndex, onClose, onRaise, children}: PanelProps) {
  const PANEL_BORDER_OFFSET = 6; // 3px border on each side
  const isMobile = window.innerWidth <= 850;
  
  // Tracks the panel's current position on screen
  const [position, setPosition] = useState( {x: initialX, y: initialY} );
  // Tracks the distance between the cursor and the panel's top-left corner when dragging starts
  const [offset, setOffset] = useState( {x: 0, y: 0} );
  const [isDragging, setIsDragging] = useState(false);

  // Reference to the title bar element to measure its dimensions for drag boundary calculations
  const titleBarRef = useRef<HTMLDivElement>(null);

  // Initiates dragging and calculates the cursor's offset from the panel's top-left corner
  const handleMouseDown = (event : React.MouseEvent) => {
    // Prevent text selection while dragging
    event.preventDefault();

    setIsDragging(true);
    setOffset( {x: event.clientX - position.x, y: event.clientY - position.y} );
  };

  // Adds mouse listeners when dragging starts, cleans them up when dragging stops
  useEffect(() => {
    const controller = new AbortController();

    if (isDragging) {
      // Updates panel position based on cursor movement minus the initial offset
      document.addEventListener('mousemove', event => {
        // Max position before panel goes off screen
        const maxX = window.innerWidth - (titleBarRef.current?.offsetWidth || 0) - PANEL_BORDER_OFFSET;
        const maxY = window.innerHeight - (titleBarRef.current?.offsetHeight || 0);

        // Clamp new position between 0 and max bounds
        const currX = Math.max(0, Math.min(event.clientX - offset.x, maxX));
        const currY = Math.max(0, Math.min(event.clientY - offset.y, maxY));

        setPosition( {x: currX, y: currY} );
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

  // Clamps panel position to viewport bounds when the browser is resized
  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener('resize', () => {
      // Calculate the maximum allowed position based on the new viewport size
      const maxX = window.innerWidth - (titleBarRef.current?.offsetWidth || 0) - PANEL_BORDER_OFFSET;
      const maxY = window.innerHeight - (titleBarRef.current?.offsetHeight || 0);

      // Push panel back in bounds if it now exceeds the new viewport dimensions
      setPosition( prev => ({
        x: Math.min(prev.x, maxX),
        y: Math.min(prev.y, maxY),
      }));

      }, {signal: controller.signal});

      // Runs when panel closes and disappears from the DOM
      return () => {
        controller.abort();
      }
    }, []);

    return (
      <div style=
        { {
          maxWidth: maxWidth, 
          maxHeight: maxHeight, 
          top: isMobile ? 0 : `${position.y}px`, 
          left: isMobile ? 0 : `${position.x}px`, 
          zIndex: zIndex
        } } className={styles.panel} onMouseDown={onRaise}>
        <div ref={titleBarRef} className={styles.titleBar} onMouseDown={handleMouseDown}>
          <span>{title}</span>
          <CloseButton onClose={() => onClose(position)} title="x"/>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  }

export default Panel;