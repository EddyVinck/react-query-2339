import { useQuery } from "react-query";

function getPost() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: "Hello React Query" });
    }, 1000);
  });
}

export const TestComponent = () => {
  const { data, status } = useQuery("post", getPost);
  return (
    <article>
      <h2>Test component</h2>
      {status === "error" ? (
        <p>An error occurred</p>
      ) : status === "loading" ? (
        <p>Loading....</p>
      ) : (
        <p>{JSON.stringify(data)}</p>
      )}
    </article>
  );
};
