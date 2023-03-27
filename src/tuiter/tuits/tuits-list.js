import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";

const TuitsList = () => {

  const tuitsArray = useSelector(state => state.tuits)

  return (
    <div>
      <h2>Home</h2>
      <div className="list-group">
        {tuitsArray.map((tuit) => (
          <TuitItem key={tuit._id} tuit={tuit} />
        ))}
      </div>
    </div>
  );
};
export default TuitsList;
