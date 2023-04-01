import React from "react";
import { useSelector } from "react-redux";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  const postsArray = useSelector((state) => state.tuitsData.tuits);
  console.log("posts", postsArray)
  return (
    <ul className="list-group" style={{ padding: "0px" }}>
      {postsArray.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
