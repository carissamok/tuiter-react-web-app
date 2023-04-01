import React, { useEffect } from "react";
import TuitItem from "./tuit-item";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  console.log("tuitsList", tuits)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <div className="list-group">
        {loading && <li className="list-group-item">Loading...</li>}

        {tuits.map((tuit) => (
          <TuitItem key={tuit._id} tuit={tuit} />
        ))}
      </div>
    </div>
  );
};
export default TuitsList;
