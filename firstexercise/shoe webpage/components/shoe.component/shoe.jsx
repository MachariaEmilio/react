import "./shoe.css";


data ={
title: "Jordan Proto Lyte",
collection: "Running Collection",
description: "Lightweight and breathable, perfect for running.",
availableColors: ["Red", "Black", "Orange"],
price: 245,
productID: 0,}

export const Populate = ({item}) => {
 



  return (


    <div className="container">
      <div className=" images">
        <p>hey am</p>
        <img src="" alt="" />
      </div>
      <div className="info">
        <h2>Jordan proto-lyte</h2>
        <p>running collection</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          ipsa eum. Quas voluptas dicta in? Facilis modi soluta doloribus autem
          ullam, debitis atque. Dolores porro expedita odit doloremque
          obcaecati?
        </p>
        <div className="colors">
        <p>availablecolors </p>
        <button></button>
        <button></button>
        <button></button>
        </div> <div className="submit">
        <p >RS 12,800 </p> 
        <button> buy now</button>
        </div>
      </div>
    </div>
  );
};
