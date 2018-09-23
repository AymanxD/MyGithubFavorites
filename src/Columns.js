import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import './Columns.css';

export default class Columns extends Component {
    render() {
        return (
            <Table id="column-names">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Latest tag</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody id={this.props.columnType}>
                </tbody>
            </Table>
        );
    }
}
