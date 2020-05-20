import React from 'react'
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Nav variant="tabs" className="justify-content-end" >
                <Nav.Item>
                    <Link to="/">
                        <Nav.Link href="/home">Employees And Products</Nav.Link>
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to='/sales/form/'>
                        <Nav.Link href="/sales/form/" eventKey="link-1">Form</Nav.Link>
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to='/sales/report/'>
                        <Nav.Link href="/sales/report/" eventKey="link-2">Report</Nav.Link>
                    </Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navigation
