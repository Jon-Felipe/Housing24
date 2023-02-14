import React from 'react';
import styled from 'styled-components';

// components
import FilterBar from '../components/FilterBar';
import Properties from '../components/property/Properties';

const Home = () => {
  return (
    <HomeWrapper className='full-page'>
      {/* Filter bar */}
      <section>
        <FilterBar />
      </section>

      {/* List of properties */}
      <section>
        <Properties />
      </section>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.main``;
