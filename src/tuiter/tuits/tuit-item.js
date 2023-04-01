import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
// import { deleteTuit } from "../tuits/tuits-reducer"
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            alt=""
            width="px"
            src={`tuiter/images/${tuit.image}`}
            className="img-fluid rounded-circle"
            style={{ textAlign: "center" }}
          />
        </div>

        <div className="col-10">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
          {tuit.userName}
          <i className="bi bi-check-circle-fill" style={{ padding: "8px" }}></i>
          {tuit.handle} - {tuit.time}
          <p>{tuit.tuit}</p>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </div>
  );
};
export default TuitItem;
