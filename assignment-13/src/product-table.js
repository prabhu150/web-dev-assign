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

    onModify = (id) => {
        this.props.onModify(id)
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
                            <th>Price</th>
                            <th>Category</th>
                            <th colSpan="2">In Stock</th>
                            <th colSpan ="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(products).filter(
                                key => products[key].name.indexOf(filterText) >= 0
                            ).map( 
                                item => {
                                    return (
                                        <ProductRow 
                                            key = {products[item].productId} 
                                            product = {products[item]}
                                            onDelete={this.onDelete}
                                            onModify={this.onModify}
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