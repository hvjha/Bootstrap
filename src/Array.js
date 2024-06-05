

import React from "react";

export default function Array() {
  const students = [
    { name: "Aman", email: "ajha@gmail.com", contact: 12345 },
    { name: "Jyoti", email: "jyoti@gmail.com", contact: 1237655 },
    { name: "Harsh", email: "harsh@gmail.com", contact: 1209875 },
    { name: "Priti", email: "pri@gmail.com", contact: 8907645 },
  ];

  return (
    <div>
      <h1>Handle Array With List</h1>
       <table border="1">
       <tr>
         <th>Name</th>
         <th>Email</th>
         <th>Contact</th>
       </tr>
       {
         students.map((data) => (
          <tr>
           <td>{data.name}</td>
           <td>{data.email}</td>
           <td>{data.contact}</td>
          </tr>
         ))
       }
       </table>
    </div>
  );
}
