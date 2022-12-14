// Challenge: one useEffect is unnecessary. Get rid of it.

import { useEffect, useState } from "react";

export function RedditPosts() {
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/javascript/top.json?t=day&limit=10")
      .then((response) => response.json())
      .then(({ data }) => setData(data));
  }, []);

  useEffect(() => {
    if (!data) {
      return;
    }
    const mappedPosts = data.children.map((post) => post.data);
    setPosts(mappedPosts);
  }, [data]);

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
