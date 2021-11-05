import React from "react";
import { TestComponent } from "./TestComponent";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <QueryClientProvider client={client}>
        <TestComponent />
      </QueryClientProvider>
    </div>
  );
}
