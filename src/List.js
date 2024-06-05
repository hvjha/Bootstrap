import React from "react";
import {Table} from 'react-bootstrap'
export default function List() {
  const users = [
    { name: "Aman", email: "ajha@gmail.com", contact: 12345, address:[
        {Hn:"46",city:"Benipur",state:"Bihar"},
        {Hn:"4",city:"Bahera",state:"Bihar"},
        {Hn:"66",city:"Supaul",state:"Bihar"},
        {Hn:"76",city:"Biraul",state:"Bihar"},
    ]},
    { name: "Jyoti", email: "jyoti@gmail.com", contact: 1237655,  address:[
        {Hn:"46",city:"Benipur",state:"Bihar"},
        {Hn:"4",city:"Bahera",state:"Bihar"},
        {Hn:"66",city:"Supaul",state:"Bihar"},
        {Hn:"76",city:"Biraul",state:"Bihar"},
    ]},
    { name: "Harsh", email: "harsh@gmail.com", contact: 1209875, address:[
        {Hn:"46",city:"Benipur",state:"Bihar"},
        {Hn:"4",city:"Bahera",state:"Bihar"},
        {Hn:"66",city:"Supaul",state:"Bihar"},
        {Hn:"76",city:"Biraul",state:"Bihar"},
    ]},
    { name: "Priti", email: "pri@gmail.com", contact: 8907645, address:[
        {Hn:"46",city:"Benipur",state:"Bihar"},
        {Hn:"4",city:"Bahera",state:"Bihar"},
        {Hn:"66",city:"Supaul",state:"Bihar"},
        {Hn:"76",city:"Biraul",state:"Bihar"},
    ]},
  ];
  return (
    <div>
      <h1>List with bootstrap</h1>
      <Table striped variant="dark">
      <tbody>
      <tr>
      <td>S.N</td>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
          <td>Address</td>
        </tr>
      {users.map((item,i) => (
        <tr key ={i}>
        <td>{i+1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
          <td>
          <Table striped variant="dark">
          <thead>
            <tr>
                <th>Hn</th>
                <th>City</th>
                <th>State</th>
            </tr>
          </thead>
          <tbody>
          {
                item.address.map((data)=>
                
                <tr>
                    <td>{data.Hn}</td>
                    <td>{data.city}</td>
                    <td>{data.state}</td>
                </tr>
                )
            }
            </tbody>
          </Table> 
          </td>
        </tr>
      ))}
      </tbody>
      </Table>
      
    </div>
  );
}
