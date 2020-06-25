import React, { Component } from 'react';
import FormPage from './FormPage.js';
import Report from './Report.js';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-scroll';
import axios from 'axios';

class App extends Component {

  constructor(props) {

    super(props);

    this.getReport = this.getReport.bind(this);

    this.state = {
      newName: '',
      newRole: '',
      newCommission: '',
      newProduct: '',
      newPrice: '',

      report: [],

      staff: [
        // { name: "Jeff Terry", role: "Senior", commission: 10, id: Math.random() * Number.MAX_SAFE_INTEGER },
        // { name: "Thomas Black", role: "Manager", commission: 20, id: Math.random() * Number.MAX_SAFE_INTEGER },
        // { name: "John Rice", role: "Junior", commission: 5, id: Math.random() * Number.MAX_SAFE_INTEGER },
        // { name: "Larry Long", role: "Junior", commission: 0, id: Math.random() * Number.MAX_SAFE_INTEGER },
      ],
      prices: [
        // { product: "Fresh Lemon Lemonade", price: 1.50, id: Math.random() * Number.MAX_SAFE_INTEGER },
        // { product: "Orange & Lemon Splash", price: 2.00, id: Math.random() * Number.MAX_SAFE_INTEGER },
        // { product: "Sugary Shocker", price: 3.00, id: Math.random() * Number.MAX_SAFE_INTEGER },
        // { product: "Wild Whiskey Whack", price: 5.50, id: Math.random() * Number.MAX_SAFE_INTEGER }
      ]
    }
  }


  deleteItem(id) {
    let tempList = this.state.staff

    let tempList2 = tempList.filter((item) => item.id !== id)

    this.setState({
      staff: tempList2
    })

    axios.delete("/api/v1/employees/" + id)

  }

  deleteItem2(id) {
    let tempList = this.state.prices

    let tempList2 = tempList.filter((item) => item.id !== id)

    this.setState({
      prices: tempList2
    })

    axios.delete("/api/v1/products/" + id)

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

      axios.post("/api/v1/employees", {
        name: this.state.newName.slice(),
        position: this.state.newRole.slice(),
        amount: this.state.newCommission
      });
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
      axios.post("/api/v1/products", {
        name: this.state.newProduct.slice(),
        price: this.state.newPrice
      });
    } else {
      alert("Please fill in all fields");
    }

    this.setState({
      newProduct: '',
      newPrice: '',
      prices: tempList
    })

  }

  getReport(val) {
    this.setState({
      report: val
    })
  }

  componentDidMount = () => {

    //http GET employee
    axios.get("/api/v1/employees").then(response => {
      var jsonData = JSON.parse(JSON.stringify(response.data.data));

      for (var i = 0; i < jsonData.length; i++) {
        var counter = jsonData[i];
        const newItem = {
          id: counter._id,
          name: counter.name.slice(),
          role: counter.position.slice(),
          commission: counter.amount
        }


        let tempList = this.state.staff
        tempList.push(newItem)


        this.setState({
          staff: tempList
        })
      }
    })

    //http GET product

    axios.get("/api/v1/products").then(response => {
      var jsonData2 = JSON.parse(JSON.stringify(response.data.data));

      for (var i = 0; i < jsonData2.length; i++) {
        var counter2 = jsonData2[i];
        const newItem = {
          id: counter2._id,
          product: counter2.name.slice(),
          price: counter2.price
        }


        let tempList = this.state.prices;
        tempList.push(newItem);


        this.setState({
          prices: tempList
        })
      }
    })



    document.body.style.backgroundColor = '#5fdde5';
    document.body.style.color = '#e84a5f';
  }

  render() {
    const mystyle = {
      position: "fixed",
      top: 0,
      width: "100%",
      margin: 0
    };
    return (
      <div>

        <ReactBootStrap.Navbar className="justify-content-end" bg="primary" style={mystyle}>
          <ReactBootStrap.Nav variant="tabs"  >
            <ReactBootStrap.Nav.Item>

              <ReactBootStrap.Nav.Link> <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} style={{ color: "white", fontWeight: "bold" }}>Employee List</Link></ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav.Item>

            <ReactBootStrap.Nav.Item>

              <ReactBootStrap.Nav.Link><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} style={{ color: "white", fontWeight: "bold" }}>Product List</Link></ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav.Item>

            <ReactBootStrap.Nav.Item>

              <ReactBootStrap.Nav.Link><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} style={{ color: "white", fontWeight: "bold" }}>Form</Link></ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav.Item>

            <ReactBootStrap.Nav.Item>

              <ReactBootStrap.Nav.Link><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} style={{ color: "white", fontWeight: "bold" }}>Report</Link></ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav.Item>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar>
        <br /><br /><br />
        <h1 class="text-center" >Lemonade Stand</h1>
        <div >
          <ReactBootStrap.Image width="200" className="rounded mx-auto d-block" src={require('./lemonade.jpg')} alt="Lemonade" fluid roundedCircle />
        </div>
        <br name='test1' ></br>
        <br />
        <h2 >Employee List</h2>
        <ReactBootStrap.Table variant="primary" striped bordered hover>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Position</th>
              <th>Commission (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.staff.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{((item.commission / 100) * 100).toFixed(2) + '%'}</td>
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
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in' placeholder="Enter Full Name" type='text' value={this.state.newName} onChange={(e) => this.updateName(e.target.value)} />
          </ReactBootStrap.InputGroup>


          <ReactBootStrap.InputGroup className="mb-3">
            <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text id="basic-addon1">Position:</ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in2' placeholder="Enter Position" type='text' value={this.state.newRole} onChange={(e) => this.updateRole(e.target.value)} />
          </ReactBootStrap.InputGroup>

          <ReactBootStrap.InputGroup className="mb-3">
            <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text id="basic-addon1">Commission (%):</ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in3' placeholder="Enter Commission Rate" type='number' value={this.state.newCommission} onChange={(e) => this.updateCommission(e.target.value)} />
          </ReactBootStrap.InputGroup>

          <ReactBootStrap.Button size="lg" block className='addBtn' onClick={() => this.addItem()}>ADD EMPLOYEE</ReactBootStrap.Button>
        </ReactBootStrap.Form>


        <br></br>
        <br ></br>
        <hr name='test2' style={{
          color: '#000000',
          backgroundColor: '#000000',
          height: 5,
          borderColor: '#000000'
        }}></hr>
        <br ></br>
        <br ></br>

        <p class="h3" >Products and Prices</p>
        <ReactBootStrap.Table variant="primary" striped bordered hover>
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
                  <td>{'$' + (Math.round(item.price * 100) / 100).toFixed(2)}</td>
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
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in' placeholder="Enter Product Name" type='text' value={this.state.newProduct} onChange={(e) => this.updateProduct(e.target.value)} />
          </ReactBootStrap.InputGroup>


          <ReactBootStrap.InputGroup className="mb-3">
            <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text id="basic-addon1">Price:</ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.FormControl style={{ backgroundColor: '#f4ea8e' }} aria-describedby="basic-addon1" className='in2' placeholder="Enter Price" type='number' value={this.state.newPrice} onChange={(e) => this.updatePrice(e.target.value)} />
          </ReactBootStrap.InputGroup>

          <ReactBootStrap.Button size="lg" block className='addBtn' onClick={() => this.addItem2()}>ADD ITEM</ReactBootStrap.Button>
        </ReactBootStrap.Form>

        <br />
        <br />
        <hr name="test3" style={{
          color: '#000000',
          backgroundColor: '#000000',
          height: 5,
          borderColor: '#000000'
        }} />
        <br />

        <div>
          <FormPage sendReport={this.getReport} staff={this.state.staff} products={this.state.prices} />
        </div>

        <br />
        <br />
        <hr name="test4" />

        <div>
          <Report report={this.state.report} />
        </div>
      </div >
    )
  }
}
export default App;
