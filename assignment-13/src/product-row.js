//Renders a table row complete with <td> tags
// Each <td> tag will display name and price (retrieved from props), and a button to delete an item

import React,{Component} from 'react'

class ProductRow extends Component {
    

    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
        this.modify = this.modify.bind(this)
    }

   delete = () => {
        let id = this.props.product.productId
        console.log("row",id)
        this.props.onDelete(id);
   }

   modify = () => {
    let id = this.props.product.productId;
    this.props.onModify(id);
   }

    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>${this.props.product.price}</td>
                <td>{this.props.product.category}</td>
                <td>{this.props.product.instock == true ? "Yes" : "No"}</td>
                <td>
                    <button className="btn btn-info" type="button" onClick={this.delete}>Delete</button>
                </td>
                <td>
                <button className="btn btn-info" type="button" onClick={this.modify}>Modify</button>
                </td>

            </tr>
        )
    }
}

export default ProductRow;