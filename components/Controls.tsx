import React from "react";

import styles from "../styles/Controls.module.css";
import BackgroundControl from "./BackgroundControl";
import DarkModeControl from "./DarkModeControl";
import ExportButton from "./ExportButton";
import LanguageControl from "./LanguageControl";
import PaddingControl from "./PaddingControl";
import ThemeControl from "./ThemeControl";

const Controls: React.FC = () => {
  return (
    <div className={styles.controls}>
      <ThemeControl />
      <BackgroundControl />
      <DarkModeControl />
      <PaddingControl />
      <LanguageControl />
      <ExportButton />
    </div>
  );
};

export default Controls;
