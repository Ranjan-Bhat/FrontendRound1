import React, { useState, useEffect } from "react";

export const Posts = () => {
  const [title, setTitle] = useState("");
  const [array, setArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    async function fetchTitleInfo() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        setArray(json);
        console.log("json is ", json);
      } catch (error) {
        console.log("error is ", error);
      }
    }
    fetchTitleInfo();
  }, []);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    const filterArray = array.filter((item) => item.title.includes(title));
    setFilteredArray(filterArray);
  };

  return (
    <>
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Enter title name..."
        value={title}
        onChange={handleChange}
      />
      <div>
        <button onClick={handleClick}>Search Titles</button>
      </div>
      <ul>
        {filteredArray.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
