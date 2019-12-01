//Renders a table row complete with <td> tags
// Each <td> tag will display name and price (retrieved from props), and a button to delete an item

import React,{Component} from 'react'

class ProductRow extends Component {
    
    delete = () => {
        this.props.onDelete(this.props.product.id);
   }

    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.category}</td>
                <td>
                    <button className="btn btn-info" type="button" onClick={this.delete}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default ProductRow;