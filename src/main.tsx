import React from "react";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Navbar/>
      <App />
      </QueryClientProvider>
     
    </Router>
  </React.StrictMode>
);
