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
  font-family: arial;
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
  padding: 25px 50px 50px 50px;
  bording: 1px solid gray;
  border-radius: 5px;
`;

const InputLabel = styled('span')`
  margin: 5px;
  font-weight: bold;
  color: #444;
`;

const FormInput = styled('input')`
  margin: 0px 5px;
  border: 1px solid #6BBD77;

  &:invalid {
    border-color: #FCC;
    background: #FEE;
  }
`;

const SubmitButton = styled('button')`
  display: flex;
  align-items: center;
  flex: 0 0 30px;
  padding: 0px 10px;
  margin: 10px 5px;
  border: none;
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

const ErrorMessage = styled('span')`
  color: #A66;
`;

const SuccessMessage = styled('span')`
  color: #6A6;
`;

export default ({ flowers }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stars, setStars] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [success, setSuccess] = useState('');

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
      });

    return response;
  };

  const isValid = (e, name) => {
    return e.target.form.name.validity.valid
    && e.target.form.price.validity.valid
    && e.target.form.stars.validity.valid
  };

  const handleSubmit = async (e) => {
    e.persist();
    if (isValid(e)) {
      e.preventDefault();
      const colors = ['blue', 'pink', 'orange'];
      const image = colors[Math.floor(Math.random() * colors.length)];
      const formData = {
        image,
        name,
        price,
        stars,
      };
      await createFlower(ENDPOINT, formData);
      setSuccess(true);
    }
    if (flowers.map(flower => flower.name).includes(name)) {
      e.preventDefault();
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }

  };

  return(
    <div>
      <FormWrapper>
        <Form>
          {isDuplicate && <ErrorMessage>A flower with this name already exists</ErrorMessage>}
          <h2>Add a New Flower</h2>
          <InputLabel>Flower Name</InputLabel>
          <FormInput
            name='name'
            required
            title="Enter a unique flower name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputLabel>Price</InputLabel>
          <FormInput
            min={0.01}
            name='price'
            placeholder={0}
            required
            step="0.01"
            title="Enter a price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <InputLabel>Stars</InputLabel>
          <FormInput
            max="5"
            min="1"
            name='stars'
            placeholder={0}
            required
            title="Rate this flower from 1 to 5 stars"
            type="number"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
          />
          <SubmitButton type="submit" onClick={handleSubmit} >
            Submit
          </SubmitButton>
          {success && <SuccessMessage>Flower successfully added</SuccessMessage>}
        </Form>
      </FormWrapper>
    </div>
  )
};
