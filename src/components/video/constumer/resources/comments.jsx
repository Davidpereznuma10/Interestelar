import React from "react";

function CommentsComponent({ comments }) {
  return (
    <div className="tab-content">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <span className="username">{comment.userName}:</span> {comment.comment} ({comment.videoName})
        </div>
      ))}
    </div>
  );
}

export { CommentsComponent};
