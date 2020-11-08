import React from 'react';
import styles from './SpaceCard.module.css';

const SpaceCard = (props) => {
  const {
    mission_name,
    flight_number,
    links,
    mission_id,
    launch_year,
    launch_success
  } = props.data;
  return (
    <>
      <div className={styles.spaceContainer}>
        <div className={styles.spaceImageContainer}>
          <img className={styles.imageStyle} src={links?.mission_patch} />
        </div>
        <div tabIndex="0" className={`${styles.textStyle}`}>
          {mission_name}
          <span>
            #<span></span>
            {flight_number}
          </span>
        </div>
        <div tabIndex="0">
          Mission Id:
          {mission_id.length > 0 &&
            mission_id.map((id) => {
              return (
                <>
                  <li className={styles.listStyle}>{id}</li>
                </>
              );
            })}
        </div>
        <div tabIndex="0" className={styles.displayRow}>
          <div className={styles.elementStyle}>Launch Year:</div>
          <div className={styles.elementStyle}>{launch_year}</div>
        </div>
        <div tabIndex="0" className={styles.displayRow}>
          <div className={styles.elementStyle}>Successful Launch:</div>
          {launch_success ? (
            <div className={styles.elementStyle}>True</div>
          ) : (
            <div className={styles.elementStyle}>False</div>
          )}
        </div>
        <div tabIndex="0" className={styles.displayRow}>
          <div className={styles.elementStyle}>Successful Landing:</div>
          <div className={styles.elementStyle}>null</div>
        </div>
      </div>
    </>
  );
};

export default SpaceCard;
