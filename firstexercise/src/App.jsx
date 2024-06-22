import { useState } from "react";
import LoginForm from "../login/logincomponent";
import ListComponent from "./component/list component/list";
import "./App.css";
import { data_products } from "../shoe webpage/utils/database/data";
import Datamap from "../shoe webpage/components/list.component/productmap";

import { FilterCom } from "../ecomerce/filter.component/filter";
const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "amingo",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 3,
  }
];
const data = [
  {
    id: 1,
    imageUrl: "https://example.com/product1.jpg",
    title: "Wireless Headphones",
    price: 19.99,
    date: "June 15, 2023",
    location: "New York, USA",
    category: "Electronics"
  },
  {
    id: 2,
    imageUrl: "https://example.com/product2.jpg",
    title: "Men's Leather Jacket",
    price: 29.99,
    date: "July 3, 2023",
    location: "Los Angeles, USA",
    category: "Clothing"
  },
  {
    id: 3,
    imageUrl: "https://example.com/product3.jpg",
    title: "Ceramic Vase",
    price: 39.99,
    date: "August 21, 2023",
    location: "Chicago, USA",
    category: "Home"
  },
  {
    id: 4,
    imageUrl: "https://example.com/product4.jpg",
    title: "Smartphone",
    price: 49.99,
    date: "September 10, 2023",
    location: "Houston, USA",
    category: "Electronics"
  },
  {
    id: 5,
    imageUrl: "https://example.com/product5.jpg",
    title: "Women's Dress",
    price: 59.99,
    date: "October 5, 2023",
    location: "Phoenix, USA",
    category: "Clothing"
  },
  {
    id: 6,
    imageUrl: "https://example.com/product6.jpg",
    title: "Table Lamp",
    price: 69.99,
    date: "November 18, 2023",
    location: "Philadelphia, USA",
    category: "Home"
  },
  {
    id: 7,
    imageUrl: "https://example.com/product7.jpg",
    title: "Bluetooth Speaker",
    price: 79.99,
    date: "December 25, 2023",
    location: "San Antonio, USA",
    category: "Electronics"
  },
  {
    id: 8,
    imageUrl: "https://example.com/product8.jpg",
    title: "Running Shoes",
    price: 89.99,
    date: "January 9, 2024",
    location: "San Diego, USA",
    category: "Clothing"
  },
  {
    id: 9,
    imageUrl: "https://example.com/product9.jpg",
    title: "Wall Art",
    price: 99.99,
    date: "February 14, 2024",
    location: "Dallas, USA",
    category: "Home"
  },
  {
    id: 10,
    imageUrl: "https://example.com/product10.jpg",
    title: "Smartwatch",
    price: 109.99,
    date: "March 30, 2024",
    location: "San Jose, USA",
    category: "Electronics"
  }
];


function App() {
  const [newstories] = useState(initialStories);
  const [searchinput, setsearchinput] = useState("");

  const filteredDataStories = newstories.filter((story) =>
    story.title.toLowerCase().includes(searchinput.toLowerCase())
  );
  // console .log(filteredDataStories)

  return (
    <div>
       <h1 >Stories</h1>

      <input
        type="text"
        placeholder="Search stories"
        value={searchinput}
        onChange={(input) => setsearchinput(input.target.value)}
      />
    <ListComponent list={filteredDataStories} />
     
    <hr />
    <LoginForm/>

    <hr />

<FilterCom data={data}/>

   <hr />
    <Datamap items={data_products}/>
   
  
    </div>
  );
}

export default App;
