// Renders a form and submits a new product when user hits submit.
import React,{Component} from 'react'
const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {

    validateFields = () => {

        let name = this.state.product.name;
        let category = this.state.product.category;
        let price = this.state.product.price;
        let errors = {}

        if(name === "") {
            errors['name'] = "name error"
            this.setState({errors:errors})
            return false
        }  
        if(category === "") {
            errors['category'] = "category error"
            this.setState({errors:errors})
            return false
        }
        if(price === ""){
            errors['price'] = "price error"
            this.setState({errors:errors})
            return false
        }
        return true;
    }

    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
       }
    }

    onSubmit = (event) => {
        if(this.validateFields()) {
            this.props.onSubmit(this.state.product);
            this.setState({
                product: Object.assign({}, RESET_VALUES), errors: {}
            })
        }
        event.preventDefault();
    }

    onChange = (event) => {
        const target = event.target    
        const name = target.name
        const value = target.value

        this.setState((prevState) => {
             prevState.product[name] = value
             return { product: prevState.product }
        })
    }

    render() {
        return (
            <div>
                <h4>Add a new Product</h4>
                <div className="col-md-6">
                    <form> 
                        <div className="form-group">
                            <label htmlFor="productName">Name</label>
                            <input placeholder="Enter Product Name" className="form-control" id="productName" type="text" onChange={this.onChange} value={this.state.product.name} name="name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productCategory">Category</label>
                            <input placeholder="Enter Category"
                            className="form-control" id="productCategory" type="text" onChange={this.onChange} value={this.state.product.category} name="category"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Price</label>
                            <input className="form-control" placeholder="Enter Price" id="productPrice" type="text" onChange={this.onChange} value={this.state.product.price} name="price"></input>
                        </div>
                        <button className="btn btn-info" type="button" onClick={this.onSubmit}>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductForm;
