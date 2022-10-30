
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import './App.scss';
import Router from "./Router";
const queryClient = new QueryClient();

function App() {

  return (
      <>
          <QueryClientProvider client={queryClient}>
              <Router />
          </QueryClientProvider>
      </>
  );
}

export default App;
