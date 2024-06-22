import "./shoe.css";
import { useState } from "react";


export const Populate = ({ item }) => {
  const [bcolor, setbcolor] = useState("black");
  const background = {
    backgroundColor: bcolor,
  };

  const color = {
    color: bcolor,
  };
  const backstyle={
    backgroundColor :bcolor
  }
  function changebg() {
    setbcolor("black");
  }
  function changebg1() {
    setbcolor("red");
  }
  function changebg2() {
    setbcolor("orange");
  }

  return (
    <div className="container">
      <div style={background} className=" images">
        <p>Nike</p>
        <img src="../../" alt="" />
      </div>
      <div className="info">
        <h2 style={color}>{item.title}</h2>
        <p>{item.collection}</p>
        <p>{item.description}</p>
        <div className="colors">
          <p>availablecolors </p>
          <button  className="button1"onClick={changebg}></button>
          <button className="button2" onClick={changebg1}></button>
          <button  className="button3" onClick={changebg2}></button>
        </div>{" "}
        <div className="submit">
          <p style={color}>RS {item.price} </p>
          <button style={backstyle}> buy now</button>
        </div>
      </div>
    </div>
  );
};
