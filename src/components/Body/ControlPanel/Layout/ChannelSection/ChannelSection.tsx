import React, { useState } from "react";
import styles from './ChannelSection.module.scss';
import channelOptions from '../../../../../ui-data-settings/channel-section.json';
import { BsCheck2Square } from 'react-icons/bs';
import { BsSquare } from 'react-icons/bs';

export interface IChannelOptions {
    readonly name: string;
    checked: boolean;
  };

export type channelOptionsType = IChannelOptions[];

export const ChannelSection: React.FC = () => {

  const [options, setOptions] = useState<channelOptionsType>(channelOptions);

  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const objIndex = options.findIndex((obj => obj.name === e.target.value));
    options[objIndex].checked = !options[objIndex].checked
    const updatedOptions = options.map(obj => ({...obj}));
    setOptions(updatedOptions);
  }

  return (
    <div className={styles.Section}>
      <div className={styles.Heading}>Channel</div>
      <div className={styles.Options}>
        {
          options.map(el =>
            <div className={styles.CheckOptionWrapper}>
              <input className={styles.CheckOption} type="checkbox"
                key={"input_"+el.name} id={el.name}
                name={el.name} value={el.name}
                onChange={checkboxChangeHandler}
              />
              <label className={styles.CheckOption}
                htmlFor={el.name} key={"label_"+el.name}>
                  <div className={styles.LabelWrapper} key={"wrapper_div_"+el.name}>
                    {el.checked ? <BsCheck2Square size="1rem" color="white"/>: <BsSquare color="white"/>}
                    <div>{el.name}</div>
                  </div>                  
              </label>
            </div>
          )
        }
      </div>
    </div>
  )
}