// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter, defer, Route, Routes } from "react-router-dom";
import { Main } from "./components";

const App = () => {
  //const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/">
          <Route index element={<Main />}></Route>
          {/* <Route path="registrationSuccess" element={<RegistrationSuccess/>}/>
              <Route path="activate/:uid/:token" element={<SignUpActivation/>}/>
              <Route path="sign" element={<Sign />}/>
              <Route path="account" element={<Account />}/>
              <Route path="books">
                <Route index element={<Books/>}></Route>
                <Route path=":id" element={<SelectedBook />}></Route>
                <Route path="search">
                  <Route path=":searchValue" element={<SearchResult />}></Route>
                </Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="favorites" element={<Favorites />}></Route>
              </Route> */}
          <Route path="*" element={<div>Wrong Page</div>}></Route>
        </Route>
      </Routes>
      {/* <Footer/> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <Loader/> */}
    </BrowserRouter>
  );
};

export { App };
