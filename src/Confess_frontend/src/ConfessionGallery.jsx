import { Confess_backend } from "../../declarations/Confess_backend";
import React, { useState, useEffect } from "react";

function ConfessionGallery() {
  const [LikeCount, setLikeCount] = useState(0);
  const [DisCount, setDisCount] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await Confess_backend.getReviews();
      setData(res);
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

 const post= 
    data.map((a, index) => (
      <ul className="abc" key={index}>
        <li className="item">
          <div className="review">
            <span className="text">{a.review}</span>
          </div>
          <div className="votebtns">
            <button
              id={`like-${index}`}
              onClick={() => handleLikeClick(index)}
              className="like a AddBtn2"
            >
              💗{a.likecount}
            </button>
            <button
              id={`dislike-${index}`}
              onClick={() => handleDislikeClick(index)}
              className="dislike b AddBtn2"
            >
              💔{a.dislikecount}
            </button>
          </div>
        </li>
      </ul>
    ));
  
  return <div className="wrapper">
    {post}
  </div>;
}

export { ConfessionGallery };
