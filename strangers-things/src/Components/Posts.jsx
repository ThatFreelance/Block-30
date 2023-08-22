import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { deletePost } from "../API";
import SearchItems from "./SearchItems";
import API_URL from "../API"
//import MessagesForm from "./MessageForm.jsx"


function Posts({ posts, token }) {
  const tempPosts = Array.from(posts);
  const [filteredPosts, setFilteredPosts] = useState(tempPosts);

  // Only delete after refreshing page
  async function confirmDelete(token, postIdToDelete) {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    const deleted = await deletePost(token, postIdToDelete);
    return deleted;
  }

  return (

    <div id="outer div element">
      <div>
        <h2>Items For Sale</h2>
        <SearchItems posts={posts} setFilteredPosts={setFilteredPosts} />
      </div>
      {filteredPosts.map((post) => {
        const { description, location, price, title, _id, isAuthor } = post;
        return (
          <div key={_id}>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Location: {location}</p>
            {isAuthor ? (
              <>
                <button>
                  <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                </button>
                <button
                  onClick={(event) => {
                    confirmDelete(token, _id);
                  }}
                >
                  Delete Post
                </button>
              </>
            ) : (
              <Link to={`/posts/${_id}`}>View Post</Link>
            )}
          </div>
        );
      })}
  );
}

export default Posts;
