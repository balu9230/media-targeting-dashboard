import React, { Dispatch, SetStateAction } from "react";
import styles from './ButtonToggleSection.module.scss';
import cn from 'classnames';

interface Props {
  isCampaignInfoSelected: boolean
  setIsCampaignInfoSelected: Dispatch<SetStateAction<boolean>>
};

export const ButtonToggleSection: React.FC<Props> = ({isCampaignInfoSelected, setIsCampaignInfoSelected}) => {
  return (
    <div className={styles.ButtonToggleSection}>
      <button 
        className={cn(styles.ButtonBox, {[styles.Selected] : isCampaignInfoSelected})}
        onClick={() => setIsCampaignInfoSelected(!isCampaignInfoSelected)}
      >
        Campaign Info.
      </button>
      <button 
        className={cn(styles.ButtonBox, {[styles.Selected] : !isCampaignInfoSelected})}
        onClick={() => setIsCampaignInfoSelected(!isCampaignInfoSelected)}
      >
        Segment Info.
      </button>
    </div>
  )
}