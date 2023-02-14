import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

// components
import Card from '../ui/Card';
import Pill from '../ui/Pill';

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
            <div className='property-details'>
              <Pill>
                <p className='category'>{property.category}</p>
              </Pill>
              <h4 className='text'>{property.text}</h4>
              <p className='address'>{property.address}</p>
              <p className='price'>${formatNumber(property.price)}</p>
              <div className='property-info'>
                <Pill>
                  <p>{property.beds} Beds</p>
                </Pill>
                <Pill>
                  <p>{property.baths} Baths</p>
                </Pill>
                <Pill>
                  <p>{property.size} m2</p>
                </Pill>
              </div>
              <div className='favourite-icon'>
                <FaHeart />
              </div>
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
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .property-details {
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
      font-size: 1.35rem;
      font-weight: bold;
      color: var(--primary-500);
    }
    .property-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .favourite-icon {
      position: absolute;
      top: 10px;
      right: 15px;
      width: 45px;
      height: 45px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: var(--red-medium);
        font-size: 1.2rem;
        cursor: pointer;
        :hover {
          transform: scale(1.2);
          transition: var(--transition);
        }
      }
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
