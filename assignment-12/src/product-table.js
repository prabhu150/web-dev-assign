// Imports ProductRow component
// Maps our data model (represented as an object) to an array **
// Iterates through that array (.forEach()) and pushes a programmatically constructed <ProductRow> component to a temporary array. Call it ‘rows’ to makes things easy ***
// Renders a table. Table should contain headings and render out product row (now represented by rows array)

import React,{Component} from 'react'

import ProductRow from './product-row'

class ProductTable extends Component {
    onDelete = (id) => {
        this.props.onDelete(id)
    }

    render() {
        let filterText = this.props.filterText;
        let products = this.props.products;
        return (
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(products)
                                .filter(
                                    key => products[key].name.indexOf(filterText) >= 0
                                )
                                .map( 
                                key => {
                                    return (
                                        <ProductRow 
                                            key = {products[key].id} 
                                            product = {products[key]}
                                            onDelete={this.onDelete}
                                        />
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;