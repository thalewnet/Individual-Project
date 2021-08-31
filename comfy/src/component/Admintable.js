import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Decoration = styled.div`
  overflow-x: auto;

  .admintable {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }

  .admintable td,
  .admintable th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .admintable tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .admintable tr:hover {
    background-color: #ddd;
  }

  .admintable th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background: rgba(183, 115, 53, 0.81);
    color: white;
  }

  td:last-child {
    text-align: center;
  }
  .edit-btn {
    width: 100px;
    color: whitesmoke;
    background: #204d48;
    border-radius: 5px;
    padding: 3px 20px;
    text-decoration: none;
    margin: auto;
  }
`;

function Admintable() {
  return (
    <Decoration>
      <table className="admintable">
        <tr>
          <th>Order</th>
          <th>Customer</th>
          <th>Order amount</th>
          <th>Order status</th>
          <th></th>
        </tr>
        <tr>
          <td>CFF-001</td>
          <td>Thapanaphong</td>
          <td>860</td>
          <td>Waiting for confirm</td>
          <td>
            <Link to={'/admin-ordercheck'} className="edit-btn">
              Edit
            </Link>
          </td>
        </tr>
        <tr>
          <td>CFF-002</td>
          <td>Thapanaphong</td>
          <td>860</td>
          <td>Waiting for confirm</td>
          <td>
            <Link to={'/admin-ordercheck'} className="edit-btn">
              Edit
            </Link>
          </td>
        </tr>
        <tr>
          <td>CFF-003</td>
          <td>Thapanaphong</td>
          <td>860</td>
          <td>Waiting for confirm</td>
          <td>
            <Link to={'/admin-ordercheck'} className="edit-btn">
              Edit
            </Link>
          </td>
        </tr>
        <tr>
          <td>CFF-004</td>
          <td>Thapanaphong</td>
          <td>860</td>
          <td>Waiting for confirm</td>
          <td>
            <Link to={'/admin-ordercheck'} className="edit-btn">
              Edit
            </Link>
          </td>
        </tr>
      </table>
    </Decoration>
  );
}

export default Admintable;
