import styles from "./ToolBadge.module.css";
import React from "react";

interface ToolBadgeProps {
  children: React.ReactNode;
}

function ToolBadge({children}: ToolBadgeProps) {
  return (
    <span className={styles.badge}>
      {children}
    </span>
  );
}

export default ToolBadge;