import React from 'react';
import styled from 'styled-components';

// components
import Card from '../ui/Card';

// extras
import { properties } from '../../utils/constants';
import house1 from '../../assets/house-1.jpg';
import { formatNumber } from '../../utils/helpers';

const Properties = () => {
  return (
    <PropertiesWrapper>
      {properties.map((property) => (
        <Card key={property.id}>
          <div className='property'>
            <img src={house1} alt='house' />
            <div className='property-content'>
              <h4 className='text'>{property.text}</h4>
              <p className='address'>{property.address}</p>
              <p className='price'>${formatNumber(property.price)}</p>
            </div>
          </div>
        </Card>
      ))}
    </PropertiesWrapper>
  );
};

export default Properties;

const PropertiesWrapper = styled.section`
  width: 90vw;
  max-width: 1440px;
  margin: 1rem auto;
  display: grid;
  grid-row-gap: 1.5rem;
  .property {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .property-content {
    padding: 10px 15px;
    .text {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .address {
      font-size: 0.85rem;
      color: var(--grey-400);
    }
    .price {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary-500);
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
