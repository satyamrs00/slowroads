# SQL Query App

This project is a React application that allows users to run SQL queries and display the results in a tabular format. It includes components for selecting predefined queries, editing SQL queries, and displaying the results.

## Features

- Select from a list of predefined SQL queries.
- Edit and run custom SQL queries.
- Display query results in a table format.
- Run a part of query without executing the whole query.
- See the history of executed queries and select from them.
- Export query results to CSV format.
- Clear the query editor in one click.

## Framework

This project is built using React, a popular JavaScript library for building user interfaces. It utilizes functional components and hooks for state management. No major plugins or libraries are used beyond React and CSS for styling.

## Page load time

The application is designed to load quickly, with an average load time of approximately **0.4 seconds**. This is achieved through efficient code splitting and optimization techniques.
This is measured using Chrome DevTools Lighthouse, which provides insights into the performance of the application. The load time may vary based on network conditions and device performance.

## Optimisations

The application is very simple and does not require any major optimizations. However, the following techniques could be applied in future when the application grows:

- **Code Splitting**: Implementing React's lazy loading for components to reduce the initial load time.
- **Static Assets**: Optimizing images and minimizing CSS for faster rendering.
- **Caching**: Leveraging browser caching for static assets to improve load times on subsequent visits.
- **Minification**: Minifying JavaScript and CSS files to reduce their size and improve load times.
- **Tree Shaking**: Removing unused code from the final bundle to reduce its size.


## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/satyamrs00/slowroads.git
   ```

2. Navigate to the project directory:
   ```
   cd slowroads
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the application, run:
```
npm start
```
This will start the development server and open the application in your default web browser.

### Deployment

The application is deployed on [Vercel](https://vercel.com). You can access the live version of the app [here](https://slowroads-alpha.vercel.app/).
