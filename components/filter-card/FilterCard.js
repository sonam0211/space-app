import React, { useEffect, useState } from 'react';
import styles from './FilterCard.module.css';
import Button from '../button/Button';

const yearsList = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020
];
const FilterCard = ({ handleFilter, state }) => {
  return (
    <>
      <div className={styles.filterContainer}>
        <h4 className={styles.filterHeader}>Filter</h4>
        <div className={styles.filterHeader}>Launch Year</div>

        {/* <div className={styles.displayFilterRow}> */}
        {yearsList.map((year) => {
          return (
            <Button
              className={styles.buttonStyle}
              isSelected={String(year) === String(state.year)}
              handleClick={() => {
                handleFilter(year, 'year');
              }}
              label={year}
            ></Button>
          );
        })}

        {/* </div> */}
        <div className={styles.filterHeader}>Successful Launch</div>

        <Button
          className={styles.buttonStyle}
          isSelected={'true' === state.launch}
          handleClick={() => {
            handleFilter('true', 'launch');
          }}
          label={'True'}
        ></Button>

        <Button
          className={styles.buttonStyle}
          isSelected={'false' === state.launch}
          handleClick={() => {
            handleFilter('false', 'launch');
          }}
          label={'False'}
        ></Button>

        <div className={styles.filterHeader}>Successful Landing </div>

        <Button
          className={styles.buttonStyle}
          isSelected={'true' === state.landing}
          handleClick={() => handleFilter('true', 'landing')}
          label={'True'}
        ></Button>

        <Button
          className={styles.buttonStyle}
          isSelected={'false' === state.landing}
          handleClick={() => handleFilter('false', 'landing')}
          label={'False'}
        ></Button>
      </div>
    </>
  );
};

export default FilterCard;
