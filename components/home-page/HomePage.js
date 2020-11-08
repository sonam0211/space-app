import React, { useEffect, useState } from 'react';
import { ajax } from 'rxjs/ajax';

import styles from './HomePage.module.css';
import FilterCard from '../filter-card/FilterCard';
import SpaceCard from '../space-card/SpaceCard';
import { useRouter } from 'next/router';

const HomePage = ({ data }) => {
  const initialState = {
    year: null,
    launch: null,
    landing: null,
    totalCard: data,
    buttonColor: false,
    filterCheck: false
  };

  const [state, setState] = useState(initialState);

  const { year, launch, landing, totalCard, filterCheck } = state;

  let url = 'https://api.spacexdata.com/v3/launches?limit=100';
  let query = {};

  const router = useRouter();

  useEffect(() => {
    if (launch) {
      url = `${url}&launch_success=${launch}`;
      query.launch = launch;
    }
    if (landing) {
      url = `${url}&land_success=${landing}`;
      query.landing = landing;
    }
    if (year) {
      url = `${url}&launch_year=${year}`;
      query.year = year;
    }

    if (filterCheck) {
      ajax(url).subscribe((response) =>
        setState({ ...state, totalCard: response.response })
      );
      router.push({
        pathname: '/',
        query,
        shallow: true
      });
    }
  }, [year, launch, landing]);

  useEffect(() => {
    const { query } = router;
    const { year, launch, landing } = query || {};
    setState({ ...state, year, launch, landing });
  }, []);

  const handleFilter = (value, type) => {
    value = state[type] === value ? null : value;
    setState({ ...state, [type]: value, filterCheck: true });
  };

  return (
    <div className={styles.spacePageContainer}>
      {/* <h2>SpaceX Launch Program</h2> */}

      <FilterCard state={state} handleFilter={handleFilter} />
      <div className={styles.spaceCard}>
        {totalCard.map((item) => {
          return <SpaceCard data={item} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
