import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://127.0.0.1:3001/inventory';

const FormWrapper = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Form = styled('form')`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  opacity: 100%;
  z-index: 16;
  background: #fff;
  padding: 50px;
  bording: 1px solid gray;
  border-radius: 5px;
`;

const FormInput = styled('input')`
  margin: 0px 5px;
`;

export default () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stars, setStars] = useState('');

  const createFlower = async (endpoint, formData) => {
    const response = await fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .catch((error) => {
        const message = `Error fetching flower inventory: ${error}`;
        console.log(message);
      });

    console.log({ response });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const colors = ['blue', 'pink', 'orange'];
    const image = colors[Math.floor(Math.random() * colors.length)];
    const formData = {
      image,
      name,
      price,
      stars,
    };
    createFlower(ENDPOINT, formData);
  };

  return(
    <div>
      <FormWrapper>
        <Form>
          <p>Add a New Flower</p>
          Flower Name
          <FormInput
            type="text"
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
          Price
          <FormInput
            type="text"
            value={price}
            name='price'
            onChange={(e) => setPrice(e.target.value)}
          />
          Stars
          <FormInput
            type="number"
            value={stars}
            name='stars'
            onChange={(e) => setStars(e.target.value)}
            min="0"
            max="5"
          />
          <button type="submit" onClick={handleSubmit} >
            Submit
          </button>
        </Form>
      </FormWrapper>
    </div>
  )
};
