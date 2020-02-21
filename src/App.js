import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import styled from 'styled-components';

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: 5vw 1fr 5vw;
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 3vmin;
`;

const GridHeader = styled('div')`
  grid-column: 1 / span 3;
`;

const GridMenu = styled('div')`
  grid-column: 1 / span 3;
`;

const CardsWrapper = styled('div')`
  grid-column: 2 / span 1;
`;

const H1 = styled('h1')`
  color: #444444;
`;

/*
Notes:
Card size: 273 x 339px
Image size: ~250px
Padding/inner margin: 11px
Description text: 9px
Price text: 8px
Stars: 7px
Margin above description: 10px
grid-gap: 20px
*/

function App() {
  const [flowers, setFlowers] = useState([
    { image: 'blue', name: 'Blue Flower', price: 80, stars: 4 },
    { image: 'orange', name: 'Blue Flower', price: 80, stars: 4 },
    { image: 'pink', name: 'Blue Flower', price: 80, stars: 4 },
  ]);

  return (
    <Wrapper>
      <GridHeader>
        <H1>Flower Shop</H1>
      </GridHeader>
      <GridMenu>
        <h2>+ Add Flower</h2>
      </GridMenu>
      <CardsWrapper>
        {
          flowers.map((flower) => {
            const { image, name, price, stars } = flower;
            return (
              <Card
                image={image}
                name={name}
                price={price}
                stars={stars}
              />
            );
          })
        }
      </CardsWrapper>
    </Wrapper>
  );
}

export default App;
