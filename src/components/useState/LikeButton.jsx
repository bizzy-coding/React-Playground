import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="wrapper">
        <div className="image-wrap">
          <img src="https://media.istockphoto.com/id/1341193833/photo/fields-of-lupines-along-a-path.jpg?s=612x612&w=0&k=20&c=mhmXy7IvZDw4qR8CQ9ZW00LGFxHW_GAQxsyQPQQZRQI=" alt="" />

          <button className="like-btn" onClick={() => setLiked(!liked)}>
            Like this picture? {liked ? "❤️" : "🖤"}
          </button>
        </div>
      </div>
    </>
  );
}
