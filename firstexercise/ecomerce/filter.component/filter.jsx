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
    if (Electronics) {
      let arr = data.category ==="Electronics"
      return arr

      // return data.category==="Electronics";
    } else if (clothing) {
      return data.category.includes("Clothing");
    } else if (home) {
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
