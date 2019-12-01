// passes all the data to product table, gets new product from 
// form, gets filtered list of products from the input box
import React, {Component} from 'react';
import Filter from './Filter';
import ProductTable from './product-table';
import ProductForm from './product-form';

let PRODUCTS = {
  '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
  '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
  '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
  '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
};

class Product extends Component {

  onDelete = (productId) => {
    this.setState((prevState) => {
      let products = prevState.products
      delete products[productId]
      return { products }
    });
}

onFilterChange = (filterInput) => {
  this.setState(filterInput);
}

constructor(props) {
  super(props);
  this.state = {
      products : PRODUCTS,
      filterText : ''
    }
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>My Inventory</h3>
            <Filter 
                onFilter={this.onFilterChange}/>
            <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText}
                onDelete={this.onDelete}/>
            <ProductForm
                onSubmit={this.onSubmitForm}/>
            </div>
        </div>
      </div>
    )
  }

  onSubmitForm = (newProduct) => {
    if (!newProduct.id) {
      newProduct.id = new Date().getTime()
    }
    this.setState((prevState) => {
      let products = prevState.products
      products[newProduct.id] = newProduct
      return { products }
    });
  }
}

export default Product;
