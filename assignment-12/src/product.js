/*

Imports Filters, ProductTable, and ProductForm components
Defines the data model (JSON data) *
Renders a static heading and three components including <Filters>, <ProductTable>, and <ProductForm> in that order.

Add the constructor and super() to the Products class and pass in props
Create two properties in state: filterText = ‘’ and products = PRODUCTS
Pass the state of filterText down to the <ProductTable component: filterText={this.state.filterText}
Pass the state of the current list of products down to the <ProductTable> component: products={this.state.products}
<ProductTable> now has to take the list of products and optionally filter it according to the currently entered filter. This means it has to know:
•	The state of the current list:
o	this should be passed in via props.products 
•	The state of the currently entered filter:
o	this should be passed in via props.filterText



*/