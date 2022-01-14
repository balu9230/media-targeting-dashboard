import React, { useRef } from "react";
import styles from './CampaignInformationSection.module.scss';
import channelOptions from '../../../../../ui-data-settings/channel-section.json';
import { useState } from "react";
// import flatten from 'css-flatten';

export interface IChannelOptions {
    readonly name: string;
    checked: boolean;
  };

export type channelOptionsType = IChannelOptions[];

export const CampaignInformationSection: React.FC = () => {

  const [isFOP, setIsFOP] = useState<boolean>(true);

  const isFOPToggler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsFOP(!isFOP);
  }
  console.log(`FOP value is: ${isFOP}`);

  return (
    <div className={styles.CampaignInformation}>
      <div className={styles.Heading}>Campaign Information</div>
      <form className={styles.CampaignInformationForm}>

        <div className={styles.TextWrapper}>
          <label className={styles.Label} htmlFor="market">
              Market Name
          </label>
          <input className={styles.TextField} type="text"
            id="market" name="market"
          />
        </div>

        <div className={styles.TextWrapper}>
          <label className={styles.Label} htmlFor="campaign">
              Campaign Name
          </label>
          <input className={styles.TextField} type="text"
            id="campaign" name="campaign"
          />
        </div>

        <div className={styles.TextWrapper}>
          <label className={styles.Label} htmlFor="email">
              Email Address
          </label>
          <input className={styles.TextField} type="text"
            id="email" name="email"
          />
        </div>

        <div className={styles.TextWrapper}>
          <label className={styles.Label} htmlFor="calc_type">
              Calculation Type
          </label>
          <div className={styles.SwitchButtonWrapper}>
            <div className={styles.SwitchButton}>
              <input className={styles.SwitchButtonCheckbox} 
                name="calc_type" type="checkbox" defaultChecked={isFOP}
                onChange={isFOPToggler}/>
              <label className={styles.SwitchButtonLabel} htmlFor="calc_type">
                <span className={styles.SwitchButtonLabelSpan}>
                  FOP
                </span>
              </label>
            </div>
          </div>  
        </div>

      </form>
    </div>
    
  );
}