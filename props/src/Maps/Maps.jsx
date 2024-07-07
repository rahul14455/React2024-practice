import React from "react";

const Maps = () => {
  const arr = ["React js", "Node js", "Express js", "Angular Js"];
  const arrayData = [1, 2, 3, 4, 5];
  const fruits = ["Apple", "Mango", "Banana", "GFG"];
  const obj = [
    { id: 1, title: "React js" },
    { id: 2, title: "Node js" },
    { id: 3, title: "Express js" },
    { id: 4, title: "Angular js" },
    { id: 5, title: "Html" },
  ];
  const cityList = [
    { name: "Goa", country: "India" },
    { name: "Amsterdam", country: "Netherlands" },
    { name: "New York", country: "USA" },
    { name: "Darjeeling", country: "India" },
    { name: "Tokyo", country: "Japan" },
    { name: "Lonavala", country: "India" },
    { name: "Brandenburg Gate", country: "Germany" },
    { name: "Reichstag Building", country: "Germany" },
    { name: "Museum Island", country: "Germany" },
    { name: "Munnar", country: "India" },
    { name: "Leh Ladakh", country: "India" },
    { name: "Goa", country: "India" },
    { name: "Agra", country: "India" },
    { name: "Dalhousie", country: "India" },
    { name: "Coorg", country: "India" },
    { name: "Rome", country: "Italy" },
    { name: "Milan", country: "Italy" },
    { name: "Venice", country: "Italy" },
    { name: "Varanasai", country: "India" },
    { name: "Jaipur", country: "India" },
    { name: "The Hofburg", country: "Austria" },
    { name: "Belvedere Palace", country: "Austria" },
    { name: "St. Stephen Cathedral", country: "Austria" },
    { name: "Kahna National Park", country: "India" },
    { name: "Amritsar", country: "India" },
    { name: "Mussoorie", country: "India" },
    { name: "Mount Abu", country: "India" },
    { name: "Tirupati", country: "India" },
  ];
  return (
    <div>
      <h1>Rendering Lists Using Map()</h1>
      {arr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

      {arrayData.map((item, index) => (
        <li>{item}</li>
      ))}

      {fruits.map((value, index) => (
        <li>{value}</li>
      ))}

      {obj.map((value) => (
        <li key={value.id}>{value.title}</li>
      ))}

      {cityList.map((value) => (
        <li>
          {value.name}
          {value.country}
        </li>
      ))}
    </div>
  );
};

export default Maps;
