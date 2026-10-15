import styles from "./ToolBadge.module.scss";
import React from "react";

interface ToolBadgeProps {
  children: React.ReactNode;
}

function ToolBadge({ children }: ToolBadgeProps) {
  return <li className={styles['tool-badge']}>{children}</li>;
}

export default ToolBadge;