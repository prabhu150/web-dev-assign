import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
* Note: You’ll need to include your JSON data somewhere. Since the data will flow "down" to all the components that need it, it makes sense to represent this data in the highest level component. In this case, that would be the 'Products' component. To pass the data down to child components (<ProductTable>) you'll use the props attribute: <ProductTable products={PRODUCTS}></ProductsTable>
** Note: To render a collection in React, you’ll need to build up an array of <ProductRow> components by iterating over props.products. Since the data model is an object, not an array, you'll need to map it to an array using the Object.keys() and .map() functions. 
*** Note: Remember that JSX tags are compiled to normal JavaScript objects, and can be stored and passed around as such. This is pretty straightforward, but take note of the key attribute on the <ProductRow> component. Whenever you're building a list in React, you need to add unique keys to the items in the list, so that React can keep track of them when their order changes and avoid unnecessary re-rendering.




*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
