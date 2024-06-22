import React from "react";
import { useState } from "react";
import { Product } from "../product.component/product";
export const FilterCom = ({ data }) => {
  const [searchinput, setsearchinput] = useState("");
  const [Electronics, setelectronics] = useState(false);
  const [clothing, setclothing] = useState(false);
  const [home, sethome] = useState(false);

  function changehandler(event) {
    setsearchinput(event.target.value);
  }
  function change1(event) {
    setelectronics(event.target.checked);
  }
  function change2(event) {
    setclothing(event.target.checked);
  }
  function change3(event) {
    sethome(event.target.checked);
  }

  const filtereddata = data.filter((datas) =>
    datas.title.toLowerCase().includes(searchinput.toLowerCase())
  );

  const filteredbycategory = data.filter((data) => {
    if (clothing & Electronics & home) {
      return data.category.includes("o");
    } else if (clothing & Electronics & !home) {
      return data.category.includes("t");
    } else if (clothing & !Electronics & home) {
      return data.category.toLowerCase().includes("h");
    } else if (!clothing & Electronics & home) {
      return data.category.includes("e");
    } else if (clothing & !Electronics & !home) {
      return data.category.includes("lothing");
    } else if (!clothing & Electronics & !home) {
      return data.category.includes("Electr");
    } else if (!clothing & !Electronics & home) {
      return data.category.includes("Home");
    }
  });

  return (
    <div>
      <input type="text" />
      <br />
      <input type="checkbox" name="" id="" onChange={change1} />{" "}
      <label htmlFor="">Electronics</label>
      <br />
      <input type="checkbox" name="" id="" onChange={change2} />
      <label htmlFor="">Clothing</label>
      <br />
      <input type="checkbox" name="" id="" onChange={change3} />{" "}
      <label htmlFor="">Home</label>
      <Product productdata={filteredbycategory} />
    </div>
  );
};
