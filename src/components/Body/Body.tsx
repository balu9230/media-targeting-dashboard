import React from "react";
import styles from './Body.module.scss';
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import { ControlPanel } from "./ControlPanel/ControlPanel";

export const Body: React.FC = () => {
  return (
    <div className={styles.Body}>
      <LeftPanel />
      <ControlPanel />
      <RightPanel />
    </div>
  )
}