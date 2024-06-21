import { useState } from "react";
import LoginForm from "./component/login/logincomponent";
import ListComponent from "./component/list component/list";
import "./App.css";

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

function App() {
  const [newstories] = useState(initialStories);
  const [searchinput, setsearchinput] = useState("");

  const filteredDataStories = initialStories.filter((story) =>
    story.title.toLowerCase().includes(searchinput.toLowerCase())
  );
  console .log(filteredDataStories)

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

    
    
    
    </div>
  );
}

export default App;
