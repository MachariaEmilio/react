import { useState } from "react";
import LoginForm from "../login/logincomponent";
import ListComponent from "./component/list component/list";
import "./App.css";
import Products from "../Card products/Products";

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
const data = [ {"title": "Men's Leather Jacket",
  "imageurl": "https://example.com/product2.jpg",
  "price": 29.99,
  "location": "Los Angeles, USA",
  "date": "July 3, 2023",
  "category": "Clothing"
},
{
  "title": "Women's Dress",
  "imageurl": "https://example.com/product5.jpg",
  "price": 59.99,
  "location": "Phoenix, USA",
  "date": "October 5, 2023",
  "category": "Clothing"
},
{
  "title": "Running Shoes",
  "imageurl": "https://example.com/product8.jpg",
  "price": 89.99,
  "location": "San Diego, USA",
  "date": "January 9, 2024",
  "category": "Clothing"
},

{
  "title": "Wireless Headphones",
  "imageurl": "https://example.com/product1.jpg",
  "price": 19.99,
  "location": "New York, USA",
  "date": "June 15, 2023",
  "category": "Electronics"
},
{
  "title": "Smartphone",
  "imageurl": "https://example.com/product4.jpg",
  "price": 49.99,
  "location": "Houston, USA",
  "date": "September 10, 2023",
  "category": "Electronics"
},
{
  "title": "Bluetooth Speaker",
  "imageurl": "https://example.com/product7.jpg",
  "price": 79.99,
  "location": "San Antonio, USA",
  "date": "December 25, 2023",
  "category": "Electronics"
},
{
  "title": "Smartwatch",
  "imageurl": "https://example.com/product10.jpg",
  "price": 109.99,
  "location": "San Jose, USA",
  "date": "March 30, 2024",
  "category": "Electronics"
}
,
{
  "title": "Ceramic Vase",
  "imageurl": "https://example.com/product3.jpg",
  "price": 39.99,
  "location": "Chicago, USA",
  "date": "August 21, 2023",
  "category": "Home"
},
{
  "title": "Table Lamp",
  "imageurl": "https://example.com/product6.jpg",
  "price": 69.99,
  "location": "Philadelphia, USA",
  "date": "November 18, 2023",
  "category": "Home"
},
{
  "title": "Wall Art",
  "imageurl": "https://example.com/product9.jpg",
  "price": 99.99,
  "location": "Dallas, USA",
  "date": "February 14, 2024",
  "category": "Home"
}
]



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
    {/* <Datamap items={data_products}/> */}
   
    <Products/>
    </div>
  );
}

export default App;
