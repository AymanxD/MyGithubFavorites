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
                        {this.props.input.map((input) => {
                            return(
                            <tr>
                                <td>{input.name}</td>
                                <td>{input.language}</td>
                                <td>{input.tag}</td>
                                <td><a>{input.link}</a></td>
                            </tr>
                            )
                        })}
                </tbody>
            </Table>
        );
    }
}
