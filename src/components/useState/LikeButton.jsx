import { useState } from "react";

export default function LikeButton() {
  const [like, setLike] = useState(false);

  return (
    <>
      <h1>Do you like this?</h1>

      <p>Leave us a like: </p>

      <button onClick={() => setLike(!like)}>
        Like this pic?
        {like ? "🖤" : "❤️"}
      </button>
    </>
  );
}
