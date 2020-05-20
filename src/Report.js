import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

function Report() {
    return (
        <div>
            <p class="h3">Report</p>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Items Sold</th>
                        <th>Total Price</th>
                        <th>Commission Earned</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Date.now()}</td>
                        <td>list of items</td>
                        <td>$12.90</td>
                        <td>$1.29</td>
                    </tr>
                    <tr>

                        <td>{Date.now()}</td>
                        <td>list of items</td>
                        <td>$5.50</td>
                        <td>$0.55</td>
                    </tr>
                    <tr>

                        <td>TOTALS</td>
                        <td></td>
                        <td>$18.40</td>
                        <td>$1.84</td>
                    </tr>

                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}

export default Report

