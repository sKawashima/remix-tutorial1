import { Link, Outlet, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";
import adminStyles from "~/styles/admin.css";
import { useState } from "react";

export const links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
};

export const loader = () => {
  return getPosts();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  const [count, setCount] = useState(0)
  const test = () => {
    console.log(window.innerHeight)
  }
  return (
    <div className="admin">
      <nav>
        <h1 onClick={test}>Admin</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <p>count: {count}</p>
        <button onClick={() => {setCount(count + 1)}}>add</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
