import React, { useState, useEffect } from 'react';
import AddFlowerForm from './components/AddFlowerForm';
import Card from './components/Card';
import styled from 'styled-components';

const FormModal = styled('div')`
  position: fixed;
  margin: -10px;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 40%;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled('div')`
  position: relative;
  display: grid;
  grid-template-columns: 5vw 1fr 5vw;
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 3vmin;
  font-family: arial;
`;

const GridHeader = styled('div')`
  grid-column: 1 / span 3;
  padding-left: 2vmin;
`;

const GridMenu = styled('div')`
  grid-column: 1 / span 3;
  display: flex;
  padding-left: 2vmin;
  padding-bottom: 2vmin;
  align-items: center;
`;

const CardsWrapper = styled('div')`
  grid-column: 2 / span 1;
  margin-top: 2vmax;
`;

const H1 = styled('h1')`
  color: #444444;
`;

const AddButton = styled('span')`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #6BBD77;
  color: white;
  font-weight: bold;
  font-size: 15px;
  transition: all 0.1s ease-out;

  &:hover {
    background: #5ff3A9;
    cursor: pointer;
  }
`;

const Plus = styled('span')`
  font-size: 4vmax;
  margin-right: 10px;
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
    { image: 'orange', name: 'Orange Flower', price: 40.22, stars: 3 },
    { image: 'pink', name: 'Pink Flower', price: 20, stars: 5 },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleModalClick = () => {
    setShowForm(false);
  };

  return (
    <div>
      {
        showForm
        && <div>
          <FormModal onClick={handleModalClick} />
          <AddFlowerForm />
        </div>
      }
      <Wrapper>
        <GridHeader>
          <H1>Flower Shop</H1>
        </GridHeader>
        <GridMenu>
          <AddButton onClick={handleButtonClick}>
            <Plus>+</Plus>Add Flower
          </AddButton>
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
    </div>
  );
}

export default App;
