import React, { useState } from "react";

const TuitStats = ({ tuit }) => {
  const [tuitState, setTuitState] = useState(tuit);

  const likeTuitClickHandler = (tuit) => {
    let increment = 1
    if (tuit.liked) {
      increment = -1
    }
    const updatedTuit = {
      "_id": tuit._id,
      "topic": tuit.topic,
      "userName": tuit.userName,
      "time": tuit.time,
      "title": tuit.title,
      "image": tuit.image,
      "liked": !tuit.liked,
      "replies": tuit.replies,
      "retuits": tuit.retuits,
      "likes": tuit.likes + increment,
      "handle": tuit.handle,
      "tuit": tuit.tuit
    }
    setTuitState(updatedTuit)
  }

  return (
    <div className="row">
      <div className="col-3">
        <i
          className="bi bi-chat"
          style={{ "paddingLeft": "10px", "paddingRight": "4px" }}
        ></i>
        {tuitState.replies}
      </div>
      <div className="col-3">
        <i
          className="bi bi-arrow-repeat"
          style={{ "paddingLeft": "10px", "paddingRight": "4px" }}
        ></i>
        {tuitState.retuits}
      </div>
      <div className="col-3">
        {tuitState.liked && (
            <i
              href="#"
              className="bi bi-heart-fill"
              style={{
                color: "red",
                "paddingLeft": "10px",
                "paddingRight": "4px",
              }}
              onClick={() => likeTuitClickHandler(tuitState)}
            ></i>
        )}

        {!tuitState.liked && (
            <i
              href="#"
              className="bi bi-heart-fill"
              style={{ "paddingLeft": "10px", "paddingRight": "4px" }}
              onClick={() => likeTuitClickHandler(tuitState)}
            ></i>
        )}
        {tuitState.likes}
      </div>
      <div className="col-3">
        <i
          className="bi bi-share-fill"
          style={{ "paddingLeft": "10px", "paddingRight": "4px" }}
        ></i>
      </div>
    </div>
  );
};
export default TuitStats;
