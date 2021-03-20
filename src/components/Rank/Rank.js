import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3 ">{`Hello ${name}, give this a try...`}</div>
      <div className="white f1 ">{entries}</div>
    </div>
  );
};

export default Rank;
