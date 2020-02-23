# Full Stack Challenge - Flower Shop
A set of interactive e-commerce product cards with an `Express/Postgres` backend.

The frontend is built using `React`, along with newer tools such as `React Hooks` and `async/await`.

## Table of Contents
1. [Requirements](#requirements)
2. [Setup](#setup)
3. [Usage](#usage)
4. [API](#api)

## Requirements
- A running Postgres server with superuser account and target database (this project used Postgres 11)
- Node.js (8.15+)

## Setup
1. Clone or copy this repo
2. Run `npm install` from the root directory
3. Run `npm run start` and `npm run start:server` to run the React app and the Express server
4. Open `127.0.0.1:3000` in your browser to run the web app
5. If you'd like to query the API directly, you can make `http` requests against `127.0.0.1:3001`

## Usage
The features of this app are:

### Dynamically render flower product cards from database data

### Display/hide Add button

### Add flower to cart

### Remove flower from cart

### Create a new flower

## API

### Inventory
Request | URL | Method | Returns | Inputs
--------- | ---------- | ---------- | ---------- | ----------
Create flower | /inventory | POST | `JSON` | `JSON`
Read all flowers | /inventory | GET | `JSON` | none
