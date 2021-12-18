import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./components/Home";
import Hooks from "./components/Hooks";
import Others from "./components/Others";

const queryClient = new QueryClient();

const theme = createTheme();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/others" element={<Others />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

// important links
// https://usehooks.com/
// https://react-hooks.org/docs/getting-started
// useCallback
// https://kentcdodds.com/blog/usememo-and-usecallback

// https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/types
// https://www.typescriptlang.org/docs/handbook/2/basic-types.html
// https://github.com/typescript-cheatsheets/react
