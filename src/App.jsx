import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h2>Main page</h2>}>
          <Route index element={<h2>Main page</h2>} />
          <Route path="tweets" element={<h2>Tweets</h2>} />
        </Route>
        <Route path="*" element={<h2>Main page</h2>}></Route>
      </Routes>
    </>
  );
}

export default App;
