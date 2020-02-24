# Full Stack Challenge - Flower Shop
A set of interactive e-commerce product cards with an `Express/Postgres` backend.

The frontend is designed to be *mobile-first* and built using `React`, along with newer tools such as `React Hooks` and `async/await`.

## Table of Contents
1. [Requirements](#requirements)
2. [Setup](#setup)
3. [Usage](#usage)
4. [API](#api)

## Requirements
- A running Postgres server with superuser account and target database (this project used Postgres 11 on default port 5432)
- Node.js (8.15+)

## Setup
1. Clone or copy this repo
2. Run `npm install` from the root directory
3. Rename the `dotenvexample` file in the root directory to `.env` and then enter your own database credentials
4. Run `npm run start` and `npm run start:server` to run the React app and the Express server
5. Open `127.0.0.1:3000` in your browser to run the web app
6. If you'd like to query the API directly, you can make `http` requests against `127.0.0.1:3001`

## Usage
The features of this app are:

### Dynamically Render Product Cards

- On load, the page will query the express API for all currently existing flowers in the database and then display them responsively.

### Display/Hide Add Button
- Hover over a card to show the Add to Cart button

### Add flower to cart
- Click the Add to Cart button to add a flower to cart
- The Add to Cart button then changes to be a Remove from Cart button

### In-cart Indicator
- Indicator displays when a flower is in the cart

### Remove flower from cart
- Click the Remove from Cart button to add a flower to cart

### Create a new flower
- Click the Add Flower button to display the Add New Flower form
- Click outside of the form to go back to the main page and see the newly added flowers

### Basic client-side validation of input form
- Entering invalid data prevents form submission and displays a notification

## API

### Inventory
Request | URL | Method | Returns | Inputs
--------- | ---------- | ---------- | ---------- | ----------
Create flower | /inventory | POST | `JSON` | `JSON`
Read all flowers | /inventory | GET | `JSON` | none
