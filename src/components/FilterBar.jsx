import React from 'react';
import { BsFilterRight } from 'react-icons/bs';
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
      <div className='filter-content'>
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
        <div className='search-filter'>
          <Search type='text' placeholder='Search e.g. Home, Apartment...' />
        </div>

        {/* toggle filters */}
        <div className='toggle-filters'>
          <BsFilterRight />
        </div>
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
  .filter-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    max-width: 1440px;
    margin: 0 auto;
  }
  .search-filter {
    width: 100%;
  }
  .property-filters {
    display: none;
  }
  .toggle-filters {
    justify-self: end;
    margin-left: 1rem;
    svg {
      font-size: 1.85rem;
    }
  }

  @media screen and (min-width: 768px) {
    .toggle-filters {
      display: none;
    }
    .filter-content {
      display: grid;
      grid-template-columns: 1fr 250px;
    }
    .property-filters {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .filter-content {
      grid-template-columns: 1fr 350px;
    }
    .property-filters {
      column-gap: 1rem;
    }
  }
`;
