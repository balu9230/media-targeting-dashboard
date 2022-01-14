import React, { useState } from "react";
import styles from './ControlPanel.module.scss';
import { ButtonToggleSection } from "./ButtonToggleSection/ButtonToggleSection";
import { ChannelSection } from "./Layout/ChannelSection/ChannelSection";
import { CampaignInformationSection } from "./Layout/CampaignInformationSection/CampaignInformationSection";

export const ControlPanel: React.FC = () => {

  const [isCampaignInfoSelected, setIsCampaignInfoSelected] = useState<boolean>(true);

  return (
    <div className={styles.ControlPanel}>
      <ButtonToggleSection 
        isCampaignInfoSelected={isCampaignInfoSelected} 
        setIsCampaignInfoSelected={setIsCampaignInfoSelected}
      />
      {/* <div className={styles.IndentWrapper}> */}
      {
        isCampaignInfoSelected ?
          <>
            <ChannelSection />
            <CampaignInformationSection />
          </>:
            <CampaignInformationSection />
      }
      {/* </div> */}
    </div>
  )
}