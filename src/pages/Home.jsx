import React from 'react';
import styled from 'styled-components';

// components
import FilterBar from '../components/FilterBar';
import PropertyListings from '../components/PropertyListings';

const Home = () => {
  return (
    <HomeWrapper className='full-page'>
      <section>
        <FilterBar />
      </section>
      <section>{/* <PropertyListings /> */}</section>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.main``;
