import { useState } from "react";

export default function UseStateBasics() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [isDay, setIsDay] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="wrapper">
        <h1>Hi {name ? name : "newbie"}</h1>
        <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="input"> ⬅️ enter your name to personalise experience</label>
      </div>

      <div className="wrapper">
        <p>You clicked {counter} times</p>

        <button onClick={() => setCounter(counter + 1)}>Click me to add one</button>
      </div>

      <div className="wrapper">
        <button onClick={() => setIsDay(!isDay)}>{isDay ? "Switch to night" : "Switch to day"}</button>

        <p>It is {isDay ? "🌞" : "🌚"} time</p>
      </div>

      <div className="wrapper">
        <div className="image-wrap">
          <img src="https://media.istockphoto.com/id/1341193833/photo/fields-of-lupines-along-a-path.jpg?s=612x612&w=0&k=20&c=mhmXy7IvZDw4qR8CQ9ZW00LGFxHW_GAQxsyQPQQZRQI=" alt="" />

          <button className="like-btn" onClick={() => setLiked(!liked)}>
            Like this picture? {liked ? "❤️" : "🖤"}
          </button>
        </div>
      </div>

      <div className="wrapper"></div>
    </>
  );
}
