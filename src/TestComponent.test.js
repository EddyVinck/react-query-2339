import "@testing-library/jest-dom";
import { TestComponent } from "./TestComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen, waitFor } from "@testing-library/react";

const client = new QueryClient();

export function Wrapper({ children }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

test("useQuery should work with jest", async () => {
  render(
    <Wrapper>
      <TestComponent />
    </Wrapper>
  );

  await waitFor(() =>
    expect(screen.getByText(/hello react query/i)).toBeInTheDocument()
  );
});
