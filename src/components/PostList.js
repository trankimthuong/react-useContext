import React, { useState } from "react";

const newItem = {
  userId: 1,
  id: 4,
  title: "Hello",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum",
};

const PostList = (prop) => {
  const [lists, setLists] = useState(prop.postList);

  const addList = () => {
    setLists([...lists, newItem]);
    console.log(lists.length);
  };

  return (
    <div>
      <ul>
        {lists.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <button onClick={addList}>Add</button>
    </div>
  );
};

export default PostList;
