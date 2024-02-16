import React from 'react';
import { Table } from 'react-bootstrap';
import '../styles/ResultTable.css';

const ResultTable = ({ result }) => {
  return (
    result && (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{result.Marca}</td>
            <td>{result.Modelo}</td>
            <td>{result.AnoModelo}</td>
            <td>{result.Valor}</td>
          </tr>
        </tbody>
      </Table>
    )
  );
};

export default ResultTable;

