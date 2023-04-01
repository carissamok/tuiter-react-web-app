import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const [tuitState, setTuitState] = useState(tuit);
  const dispatch = useDispatch();

  // const likeTuitClickHandler = (tuit) => {
  //   let increment = 1;
  //   if (tuit.liked) {
  //     increment = -1;
  //   }
  //   const updatedTuit = {
  //     _id: tuit._id,
  //     topic: tuit.topic,
  //     userName: tuit.userName,
  //     time: tuit.time,
  //     title: tuit.title,
  //     image: tuit.image,
  //     liked: !tuit.liked,
  //     replies: tuit.replies,
  //     retuits: tuit.retuits,
  //     likes: tuit.likes + increment,
  //     handle: tuit.handle,
  //     tuit: tuit.tuit,
  //   };
  //   setTuitState(updatedTuit);
  // };

  return (
    <div className="row">
      <div className="col">
        <i
          className="bi bi-chat"
          style={{ paddingLeft: "10px", paddingRight: "4px" }}
        ></i>
        {tuitState.replies}
      </div>
      <div className="col">
        <i
          className="bi bi-arrow-repeat"
          style={{ paddingLeft: "10px", paddingRight: "4px" }}
        ></i>
        {tuitState.retuits}
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
