import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  position: relative;
`;

const ModalWrapper = styled('div')`
  width: 100%:
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: arial;
`;

const CardWrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 85vw;
  background: #fff;
  box-shadow: 0 6px 20px rgba(0,0,0,0.09), 0 5px 5px rgba(0,0,0,0.06);
  padding: 11px;
  margin-bottom: 25px;
  margin-right: 10px;
  transition: all 0.2s ease-out;

  &:hover {
    filter: opacity(50%);
  }

  @media (min-width: 850px) {
    flex: 0 0 auto;
  }
`;

const CardButton = styled('button')`
  background: #3DD187;
  position: absolute;
  align-self: center;
  z-index: 10;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 14px 8px 14px ;
  transition: all 0.1s ease-out;

  &:hover {
    background: #5ff3A9;
    cursor: pointer;
  }

  &:hover + ${CardWrapper} {
    filter: opacity(50%);
  }
`;

const CardImage = styled('img')`
  max-width: 80vmin;
  border-bottom: 1px solid #DCDCDC;
  margin-bottom: 10px;
`;

const CardName = styled('span')`
  font-size: 3vmin;;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardPrice = styled('span')`
  font-size: 2.5vmin;;
`;

const Stars = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const InactiveStar = styled(`span`)`
  opacity: 0.5;
`;

const InCartTag = styled('div')`
  position: absolute;
  height: 48px;
  width: 48px;
  top: -10px;
  left: -5px;
  border-radius: 50%;
  background: #FF6347;
  z-index: 11;
  display: flex;
  align-self: flex-start;
  justify-content: center;
`;

const InCartText = styled('span')`
  position: relative;
  font-size: 11px;
  color: white;
  align-self: center;
`;

export default ({ image, name, price, stars }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [inCart, setInCart] = useState(false);

  const handleClick = (e) => {
    setInCart(!inCart);
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container>

      <ModalWrapper>
        {
          isHovered
          && (
            inCart
            ? <CardButton
                onMouseEnter={handleMouseEnter}
                onClick={handleClick}
              >
                Remove from Cart
              </CardButton>
            : <CardButton
                onMouseEnter={handleMouseEnter}
                onClick={handleClick}
              >
                Add to Cart
              </CardButton>
          )
        }
        <CardWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {
            inCart
            && <InCartTag>
                <InCartText>In Cart</InCartText>
              </InCartTag>
          }
          <CardImage alt={`${image} flower`} src={`/images/${image}-flower.png`} />
          <CardName>{name}</CardName>
          <CardPrice>${(Math.round(price * 100) / 100).toFixed(2)}</CardPrice>
          <Stars>
            {
              [1, 2, 3, 4, 5].map((star) => {
                const key = `${name}star${star}`;
                if (star <= stars) {
                  return <span key={key}>★</span>
                } else {
                  return <InactiveStar key={key}>★</InactiveStar>
                }
              })
            }
          </Stars>
        </CardWrapper>
      </ModalWrapper>
    </Container>
  );
};