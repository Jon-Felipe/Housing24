import React from 'react';
import styled from 'styled-components';

// components
import Blurb from './ui/Blurb';
import Search from './ui/Search';

// property categories
import { propertyCategories } from '../utils/constants';

const FilterBar = () => {
  return (
    <FilterBarWrapper>
      {/* property filters */}
      <div className='filterbar-content'>
        <div className='property-filters'>
          {propertyCategories.map((category) => {
            return (
              <Blurb
                key={category.id}
                icon={category.icon}
                text={category.text}
              />
            );
          })}
        </div>

        {/* search bar */}
        <Search type='text' placeholder='Search e.g. Home Apartment...' />
      </div>
    </FilterBarWrapper>
  );
};

export default FilterBar;

const FilterBarWrapper = styled.div`
  background-color: var(--white);
  height: 5rem;
  display: flex;
  align-items: center;
  box-shadow: var(--shadow-1);
  .filterbar-content {
    width: 90vw;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .property-filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
