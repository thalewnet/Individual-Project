import React from 'react';
import styled from 'styled-components';
import card3 from '../image/card3.jpg';
import { Link } from 'react-router-dom';
const Decoration = styled.div`
  .card-container {
    width: 500px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
    position: relative;
  }

  .card-container:hover {
    transform: translateY(-3px);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }

  .image-container img {
    overflow: hidden;
    height: 450px;
    width: 100%;
  }

  .card-title {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    background: rgba(196, 196, 196, 0.49);
    align-items: center;
  }

  .card-text {
    margin: 0;
    display: flex;
    align-items: center;
    line-height: 50px;
    padding-left: 10px;
    font-size: 24px;
    font-weight: 500;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    color: #ffffff;
    text-decoration: none;
  }

  @media (max-width: 1050px) {
    .card-container {
      width: 100%;
      height: 250px;
      margin: 0 auto;
    }

    .image-container img {
      overflow: hidden;
      height: 100%;
      width: 100%;
    }
  }
`;
function Card3({ title }) {
  return (
    <Decoration>
      <div className="card-container">
        <div className="image-container">
          <Link to={'/importproducts'}>
            <img className="card" src={card3} alt="" />
          </Link>
        </div>
        <div className="card-title">
          <Link to={'/importproducts'} className="card-text">
            {title}
          </Link>
        </div>
      </div>
    </Decoration>
  );
}

export default Card3;
