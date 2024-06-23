import React, { useState } from "react";
import Button from "./Components/Button";
import "./item.css";
function Item({ list }) {
  const [color, setColor] = useState("black");
  const [imgIndex, setImgIndex] = useState(0);

  const background = {
    backgroundColor: color,
    border: "1px solid cyan",
  };

  const colorColors = {
    color: color,
  };

  const butColor = {
    color: color,
  };

  const descBack = {
    backgroundColor: "white",
  };

  const container = {
    backgroundColor: color,
    padding: "2rem",
  
    
  };

  return (
    <div className="container" style={container}>
      <div className=" image" style={background}>
        <h2>NIKE</h2>
        <img src={list.imageUrl[imgIndex]} />
      </div>
      <div className="info" style={descBack}>
        <h2 style={colorColors}>{list.title}</h2>
        <p className="para">{list.collection}</p>
        <p className="para1"> {list.description}</p>
        <div>
         <div className="colors">
          <p>Available Colours: </p>
          <Button
            setImgIndex={setImgIndex}
            setColor={setColor}
            color={list.availableColors[1]}
          />
          <Button
            setImgIndex={setImgIndex}
            setColor={setColor}
            color={list.availableColors[0]}
          />
          <Button
            setImgIndex={setImgIndex}
            setColor={setColor}
            color={list.availableColors[2]}
          />
        </div></div>
        <div className="price">
          <p style={butColor}>RS {list.price}</p>

          <button style={background}>buy now</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
