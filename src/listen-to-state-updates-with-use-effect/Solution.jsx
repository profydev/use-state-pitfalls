// Solution: We can transform the data directly and remove
// the "data" state. This makes the second useEffect obsolete.

import { useEffect, useState } from "react";

export function RedditPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/javascript/top.json?t=day&limit=10")
      .then((response) => response.json())
      .then(({ data }) => {
        // transform the data directly after fetching it
        const mappedPosts = data.children.map((post) => post.data);
        setPosts(mappedPosts);
      });
  }, []);

  return (
    <>
      <h3>Most popular Reddit posts in r/javascript</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
