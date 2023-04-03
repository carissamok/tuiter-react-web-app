import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col">
        <i
          className="bi bi-chat"
          style={{ paddingLeft: "10px", paddingRight: "4px" }}
        ></i>
        {tuit.replies}
      </div>
      <div className="col">
        <i
          className="bi bi-arrow-repeat"
          style={{ paddingLeft: "10px", paddingRight: "4px" }}
        ></i>
        {tuit.retuits}
      </div>
      <div className="col">
        {tuit.liked && (
            <i
              href="#"
              className="bi bi-heart-fill"
              style={{
                color: "red",
                "paddingLeft": "10px",
                "paddingRight": "4px",
              }}
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    liked: !tuit.liked,
                    likes: tuit.likes - 1,
                  })
                )}
            ></i>
        )}

        {!tuit.liked && (
            <i
              href="#"
              className="bi bi-heart-fill"
              style={{ "paddingLeft": "10px", "paddingRight": "4px" }}
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    liked: !tuit.liked,
                    likes: tuit.likes + 1,
                  })
                )}
            ></i>
        )}
        {tuit.likes}
      </div>
      <div className="col">
        {tuit.disliked && (
            <i
              href="#"
              className="bi bi-hand-thumbs-down-fill"
              style={{
                "paddingLeft": "10px",
                "paddingRight": "4px",
              }}
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    disliked: !tuit.disliked,
                    dislikes: tuit.dislikes - 1,
                  })
                )}
            ></i>
        )}

        {!tuit.disliked && (
            <i
              href="#"
              className="bi bi-hand-thumbs-down"
              style={{ "paddingLeft": "10px", "paddingRight": "4px" }}
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    disliked: !tuit.disliked,
                    dislikes: tuit.dislikes + 1,
                  })
                )}
            ></i>
        )}
        {tuit.dislikes}
      </div>
      <div className="col">
        <i
          className="bi bi-share-fill"
          style={{ paddingLeft: "10px", paddingRight: "4px" }}
        ></i>
      </div>
    </div>
  );
};
export default TuitStats;
