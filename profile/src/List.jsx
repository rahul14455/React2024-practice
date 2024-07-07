import React from "react";
const List = () => {
  let lang = "js";
  const langs = ["js", "HTML", "CSS", "React"];
  let stringsArray = ["apple", "banana", "orange", "grape", "kiwi"];
  const iplTeams = [
    "Chennai Super Kings",
    "Delhi Capitals",
    "Kolkata Knight Riders",
    "Mumbai Indians",
    "Punjab Kings",
    "Rajasthan Royals",
    "Royal Challengers Bangalore",
    "Sunrisers Hyderabad",
  ];

  return (
    <div>
      <h1>Lists and keys in React using Map Method</h1>
      <p>{lang}</p>
      <h2>{langs}</h2>
      {langs.map((l, index) => (
        <li key={index}>{l}</li>
      ))}

      {stringsArray.map((p, index) => (
        <li key={index}>{p}</li>
      ))}

      {iplTeams.map((ipl, index) => (
        <li key={index}>{ipl}</li>
      ))}

      {/* Conditional rendering */}
    </div>
  );
};

export default List;
