import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header, Home } from "./components";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
        <BrowserRouter>
        <Header/>
        <div className="content">
            <Routes>
                <Route path="/">
                <Route index element={<Home/>}></Route>
                <Route path="works" element={<div>Works</div>}></Route>
                <Route path="about" element={<div>About</div>}></Route>
                <Route path="admin" element={<div>Admin</div>}></Route>
                <Route path="*" element={<div>Wrong Page</div>}></Route>
                </Route>
            </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
    </HelmetProvider>
  );
};

export { App };
