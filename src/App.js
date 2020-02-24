import React, { useState, useEffect } from 'react';
import AddFlowerForm from './components/AddFlowerForm';
import Card from './components/Card';
import styled from 'styled-components';

const ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://127.0.0.1:3001/inventory';

const FormModalWrapper = styled('div')`
  position: absolute;
`;

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

  @media (min-width: 850px) {
    grid-template-columns: 5vw repeat(3, 1fr) 5vw;
  }
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

  @media (min-width: 850px) {
    position: relative;
    grid-column: 5 / span 1;
    right: 10vmax;
  }
`;

const CardsWrapper = styled('div')`
  grid-column: 2 / span 1;
  margin-top: 2vmax;

  @media (min-width: 850px) {
    grid-column: 2 / span 3;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`;

const H1 = styled('h1')`
  color: #444444;
`;

const AddButton = styled('span')`
  display: flex;
  align-items: center;
  flex: 0 0 100px;
  padding: 0px 10px;
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
  font-size: 30px;
  margin: 5px;
  margin-right: 10px;
`;

function App() {
  const [flowers, setFlowers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleModalClick = () => {
    setShowForm(false);
    getFlowers(ENDPOINT);
  };

  const getFlowers = async (endpoint) => {
    const response = await fetch(endpoint)
      .catch((error) => {
        const message = `Error fetching flower inventory: ${error}`;
        console.log(message);
      });

    const flowerData = await response.json()
      .catch((error) => {
        const message = `Error getting flower JSON from response: ${error}`;
        console.log(message);
      });

    setFlowers(flowerData);
  };

  useEffect(() => {
    getFlowers(ENDPOINT);
  },[]);

  return (
    <div>
      {
        showForm
        && <FormModalWrapper>
          <FormModal onClick={handleModalClick} />
          <AddFlowerForm flowers={flowers} />
        </FormModalWrapper>
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
        {
          flowers && flowers.length === 0
            ? 'Loading Flowers'
            : <CardsWrapper>
                {
                  flowers.map((flower) => {
                    const { image, name, price, stars } = flower;
                    return (
                      <Card
                        key={name}
                        image={image}
                        name={name}
                        price={price}
                        stars={stars}
                      />
                    );
                  })
                }
              </CardsWrapper>
        }
      </Wrapper>
    </div>
  );
}

export default App;
