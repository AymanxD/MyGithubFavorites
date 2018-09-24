import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import './Columns.css';

export default class Columns extends Component {

    // Colums component reused on both sides of the application for adding and removing repositories.

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
                <tbody>
                        {this.props.input.map((input, i) => {
                            return(
                            <tr key={i}>
                                <td>{input.name}</td>
                                <td>{input.language}</td>
                                <td>{input.tag}</td>
                                <td className="link"><a onClick={() => this.props.action(i)}>{input.link}</a></td>
                            </tr>
                            )
                        })}
                </tbody>
            </Table>
        );
    }
}
