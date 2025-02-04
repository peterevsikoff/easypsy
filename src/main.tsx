import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./scss/index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Main } from "./components/index.ts";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Main />} errorElement={<div>Error</div>} loader={async({reguest}) => {
//       // setTimeout(() => {return("Hello")}, 5000)}
//       const res = await fetch("https://dummyjson.com/quotes?limit=145466");
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//       const quotes = await res.json();
//       await new Promise(resolve => setTimeout(resolve, 5000));
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//       return quotes;
//       }}>
//       {/* <Route path="dashboard" element={<Dashboard />} /> */}
//       {/* ... etc. */}
//     </Route>
//   )
// );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
);
