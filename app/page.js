import Link from "next/link";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();
  return result;
}
export default async function Home() {
  const posts = await fetchData();
  return (
    <div>
      <h1>Main page</h1>
      {posts.map((item) => (
        <div key={item.id} className="post">
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        <Link href={`/post/` + item.id}>Details</Link>
        </div>
      ))}
    </div>
  );
}
