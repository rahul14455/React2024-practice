import React, { useState } from "react";

const StatesAdvance = () => {
  const initialArray = [
    {
      id: 1,
      fname: "emma",
      lname: "watson",
      age: 27,
    },
    {
      id: 2,
      fname: "James",
      lname: "Bond",
      age: 37,
    },
    {
      id: 3,
      fname: "Takkar",
      lname: "Donga",
      age: 47,
    },
  ];
  const handleDelete = (comingID) => {
    console.log(comingID);
    const filterData = data.filter((eachitem) => {
      return eachitem.id !== comingID;
    });
    console.log(filterData);
  };
  const [data, setData] = useState(initialArray);
  return (
    <div>
      <ul>
        {data.map((eachitem, index) => {
          const { fname, lname, age } = eachitem;
          return (
            <li key={index}>
              <h1>FirstName:{fname}</h1>
              <h1>LastName:{lname}</h1>
              <h1>Age:{age}</h1>
            </li>
          );
        })}
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default StatesAdvance;
