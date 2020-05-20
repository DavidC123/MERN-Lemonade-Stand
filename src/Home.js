import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newName: '',
            newRole: '',
            newCommission: '',
            newProduct: '',
            newPrice: '',
            staff: [
                { name: "Jeff Terry", role: "Senior", commission: "10%", id: Math.random() * Number.MAX_SAFE_INTEGER },
                { name: "Thomas Black", role: "Manager", commission: "20%", id: Math.random() * Number.MAX_SAFE_INTEGER },
                { name: "John Rice", role: "Junior", commission: "5%", id: Math.random() * Number.MAX_SAFE_INTEGER },
                { name: "Larry Long", role: "Junior", commission: "0%", id: Math.random() * Number.MAX_SAFE_INTEGER },
            ],
            prices: [
                { product: "Fresh Lemon Lemonade", price: "$1.50/cup", id: Math.random() * Number.MAX_SAFE_INTEGER },
                { product: "Orange & Lemon Splash", price: "$2.00/cup", id: Math.random() * Number.MAX_SAFE_INTEGER },
                { product: "Sugary Shocker", price: "$3.00/cup", id: Math.random() * Number.MAX_SAFE_INTEGER },
                { product: "Wild Whiskey Whack", price: "$5.50/cup", id: Math.random() * Number.MAX_SAFE_INTEGER }
            ]
        }
    }


    deleteItem(id) {
        let tempList = this.state.staff

        let tempList2 = tempList.filter((item) => item.id !== id)

        this.setState({
            staff: tempList2
        })
    }

    deleteItem2(id) {
        let tempList = this.state.prices

        let tempList2 = tempList.filter((item) => item.id !== id)

        this.setState({
            prices: tempList2
        })
    }

    updateName(input) {
        this.setState({
            newName: input
        })
    }

    updateRole(input) {
        this.setState({
            newRole: input
        })
    }

    updateCommission(input) {
        this.setState({
            newCommission: input
        })
    }

    updateProduct(input) {
        this.setState({
            newProduct: input
        })
    }

    updatePrice(input) {
        this.setState({
            newPrice: input
        })
    }

    addItem() {
        const newItem = {
            id: Math.random() * Number.MIN_SAFE_INTEGER,
            name: this.state.newName.slice(),
            role: this.state.newRole.slice(),
            commission: this.state.newCommission.slice(),
        }


        let tempList = this.state.staff

        if (newItem.name !== '' && newItem.role !== '' && newItem.commission !== '') {
            tempList.push(newItem)
        } else {
            alert("Please fill in all fields");
        }

        this.setState({
            newName: '',
            newRole: '',
            newCommission: '',
            staff: tempList
        })
    }

    addItem2() {
        const newItem = {
            id: Math.random() * Number.MIN_SAFE_INTEGER,
            product: this.state.newProduct.slice(),
            price: this.state.newPrice.slice(),
        }


        let tempList = this.state.prices

        if (newItem.product !== '' && newItem.price !== '') {
            tempList.push(newItem)
        } else {
            alert("Please fill in all fields");
        }

        this.setState({
            newProduct: '',
            newPrice: '',
            prices: tempList
        })
    }





    render() {
        return (
            <div>
                <h1 class="text-center" >Lemonade Stand</h1>
                <br></br>
                <p class="h3">Employee List</p>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Position</th>
                            <th>Commission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.staff.map(item => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.role}</td>
                                    <td>{item.commission}</td>
                                    <ReactBootStrap.Button variant="danger" onClick={() => this.deleteItem(item.id)}>Delete Row</ReactBootStrap.Button>
                                </tr>
                            )
                        })}
                    </tbody>
                </ReactBootStrap.Table>
                <br></br>
                <br ></br>
                <p class="h3">Enter a new employee</p>
                <ReactBootStrap.Form>

                    <ReactBootStrap.InputGroup className="mb-3">
                        <ReactBootStrap.InputGroup.Prepend>
                            <ReactBootStrap.InputGroup.Text id="basic-addon1">Full Name:</ReactBootStrap.InputGroup.Text>
                        </ReactBootStrap.InputGroup.Prepend>
                        <ReactBootStrap.FormControl aria-describedby="basic-addon1" className='in' placeholder="Enter Full Name" type='text' value={this.state.newName} onChange={(e) => this.updateName(e.target.value)} />
                    </ReactBootStrap.InputGroup>


                    <ReactBootStrap.InputGroup className="mb-3">
                        <ReactBootStrap.InputGroup.Prepend>
                            <ReactBootStrap.InputGroup.Text id="basic-addon1">Position:</ReactBootStrap.InputGroup.Text>
                        </ReactBootStrap.InputGroup.Prepend>
                        <ReactBootStrap.FormControl aria-describedby="basic-addon1" className='in2' placeholder="Enter Position" type='text' value={this.state.newRole} onChange={(e) => this.updateRole(e.target.value)} />
                    </ReactBootStrap.InputGroup>

                    <ReactBootStrap.InputGroup className="mb-3">
                        <ReactBootStrap.InputGroup.Prepend>
                            <ReactBootStrap.InputGroup.Text id="basic-addon1">Commission:</ReactBootStrap.InputGroup.Text>
                        </ReactBootStrap.InputGroup.Prepend>
                        <ReactBootStrap.FormControl aria-describedby="basic-addon1" className='in3' placeholder="Enter Commission Rate" type='text' value={this.state.newCommission} onChange={(e) => this.updateCommission(e.target.value)} />
                    </ReactBootStrap.InputGroup>

                    <ReactBootStrap.Button size="lg" block className='addBtn' onClick={() => this.addItem()}>ADD EMPLOYEE</ReactBootStrap.Button>
                </ReactBootStrap.Form>


                <br></br>
                <br ></br>
                <hr></hr>
                <br ></br>
                <br ></br>

                <p class="h3">Products and Prices</p>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Lemonade</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.prices.map(item => {
                            return (
                                <tr>
                                    <td>{item.product}</td>
                                    <td>{item.price}</td>
                                    <ReactBootStrap.Button variant="danger" onClick={() => this.deleteItem2(item.id)}>Delete Row</ReactBootStrap.Button>
                                </tr>
                            )
                        })}
                    </tbody>
                </ReactBootStrap.Table>
                <br></br>
                <br ></br>
                <p class="h3">Add item to menu</p>

                <ReactBootStrap.Form>

                    <ReactBootStrap.InputGroup className="mb-3">
                        <ReactBootStrap.InputGroup.Prepend>
                            <ReactBootStrap.InputGroup.Text id="basic-addon1">Lemonade Name:</ReactBootStrap.InputGroup.Text>
                        </ReactBootStrap.InputGroup.Prepend>
                        <ReactBootStrap.FormControl aria-describedby="basic-addon1" className='in' placeholder="Enter Product Name" type='text' value={this.state.newProduct} onChange={(e) => this.updateProduct(e.target.value)} />
                    </ReactBootStrap.InputGroup>


                    <ReactBootStrap.InputGroup className="mb-3">
                        <ReactBootStrap.InputGroup.Prepend>
                            <ReactBootStrap.InputGroup.Text id="basic-addon1">Price:</ReactBootStrap.InputGroup.Text>
                        </ReactBootStrap.InputGroup.Prepend>
                        <ReactBootStrap.FormControl aria-describedby="basic-addon1" className='in2' placeholder="Enter Price" type='text' value={this.state.newPrice} onChange={(e) => this.updatePrice(e.target.value)} />
                    </ReactBootStrap.InputGroup>

                    <ReactBootStrap.Button size="lg" block className='addBtn' onClick={() => this.addItem2()}>ADD ITEM</ReactBootStrap.Button>
                </ReactBootStrap.Form>

            </div>

        )
    }

}
export default Home;

