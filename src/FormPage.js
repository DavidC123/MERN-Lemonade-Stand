import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";


class FormPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newName: '',
            newCommission: '',
            newLemon: '',
            newOrange: '',
            newSugary: '',
            newWild: '',
        }
    }

    addForm() {
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

    updateName(input) {
        this.setState({
            newName: input
        })
    }

    updateCommission(input) {
        this.setState({
            newCommission: input
        })
    }

    updateLemon(input) {
        this.setState({
            newLemon: input
        })
    }

    updateOrange(input) {
        this.setState({
            newOrange: input
        })
    }

    updateSugary(input) {
        this.setState({
            newSugary: input
        })
    }

    updateWild(input) {
        this.setState({
            newWild: input
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" value={this.state.newName} onChange={(e) => this.updateName(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Commission (%)</Form.Label>
                        <Form.Control type="number" placeholder="Enter your Commission Rate" value={this.state.newCommission} onChange={(e) => this.updateCommission(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fresh Lemon Lemonade @ $1.50/cup</Form.Label>
                        <Form.Control type="number" placeholder="Enter Amount Sold" value={this.state.newLemon} onChange={(e) => this.updateLemon(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Orange & Lemon Splash @ $2.00/cup</Form.Label>
                        <Form.Control type="number" placeholder="Enter Amount Sold" value={this.state.newOrange} onChange={(e) => this.updateOrange(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sugary Shocker @ $3.00/cup</Form.Label>
                        <Form.Control type="number" placeholder="Enter Amount Sold" value={this.state.newSugary} onChange={(e) => this.updateSugary(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Wild Whiskey Whack @ $5.50/cup</Form.Label>
                        <Form.Control type="number" placeholder="Enter Amount Sold" value={this.state.newWild} onChange={(e) => this.updateWild(e.target.value)} />
                    </Form.Group>
                    <Button type="submit" size="lg" block className='addBtn' onClick={() => this.addForm()}>
                        Submit
                </Button>
                </Form>

            </div>
        )
    }
}

export default FormPage

