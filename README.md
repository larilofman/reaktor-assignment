  <h1 align="center">Warehouse App</h1>
  <p align="center">
    Project assigment for Reaktor's junior position.
    <br />
    <a href="https://warehouse-listing.herokuapp.com/" target="_blank"><strong>Open app on Heroku »</strong></a>
  </p>
  
## Table of Contents

* [About the Project](#about-the-project)
  * [List Of Features](#list-of-features)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Running](#running)
* [Usage](#usage)
* [Major Components](#major-components)
  * [UseInitData](#use-init-data)
  * [Products Reducer](#products-reducer)
* [Roadmap](#roadmap)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project

A frontend React web application for desktop use. Assigment can be found at <a href="https://www.reaktor.com/junior-dev-assignment/" target="_blank">https://www.reaktor.com/junior-dev-assignment/</a>

### List Of Features

* Three categories of fake products to display: gloves, facemasks and beanies.
* List of products can be viewed with an infinitely scrolling page. Enjoy thousands of products!

### Built With

* [React](https://reactjs.org)

## Getting Started

### Installation

After cloning or downloading the project, install the dependencies with `npm install`.

### Running

Start the project on localhost port 3000 with `npm run dev`.  
Build and serve the project on localhost port 5000 with `npm run bns`.

## Usage

Click a category on the navigation bar on the left side to view a product list.

## Major Components

### Use Init Data

App component uses the <a href="https://github.com/larilofman/reaktor-assignment/blob/main/src/hooks/use-init-data/index.ts" target="_blank">useInitData-hook</a> to initialize data. Categories are stored in <a href="https://github.com/larilofman/reaktor-assignment/blob/main/src/config.ts" target="_blank">config.ts</a> from which the category slice of Redux state gets its initial state. Once all the products are stored and an useEffect fires, the hook finds all different manufacturers and stores those in the state. Tracking those with another useEffect, the hook then sends a dispatch to get their availability/stock data from another api endpoint.

### Products Reducer

Product reducer has two <a href="https://github.com/larilofman/reaktor-assignment/blob/main/src/components/state/reducer/products/action.ts" target="_blank">async actions</a>,
one for fetching products by category and one for fetching availability by manufacturer. 

Once the GetProducts function gets a response, it maps all the returned products so that their availability status is set to loading.

The GetAvailability function runs until it gets a valid response from the api and proceeds turning that data into an object with product ids as keys and an Availability enum as value
before sending a dispatch to store it.

## Roadmap

* Add a search and filters to find specific products.
* Endless scroll hook could use some cleaning up.

## Contact

larwazor@gmail.com

## Acknowledgements
* [React Redux](https://react-redux.js.org/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [TypeScript](https://www.typescriptlang.org/)
* [Reaktor](https://www.reaktor.com/)
