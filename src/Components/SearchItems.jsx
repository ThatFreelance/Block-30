import React, { useState } from "react";

function SearchItems({ posts, setFilteredPosts }) {
  // ACT ONE
  const [keyword, setKeyword] = useState("");

  // ACT TWO
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const resultsArray = posts.filter((post) => {
      const title = post.title.toLowerCase();
      const description = post.description.toLowerCase();
      return (
        title.includes(keyword.toLowerCase()) ||
        description.includes(keyword.toLowerCase())
      );
    });

    setFilteredPosts(resultsArray);
  }

  // ACT THREE
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchItems;
