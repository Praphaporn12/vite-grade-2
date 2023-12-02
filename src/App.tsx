import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Subject from "./pages/Subject";
import Result from "./pages/Result";
import NoPage from "./pages/NoPage";
import "./index.css";
import Score from "./pages/Score";


 function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Subject />} />
        <Route path="Result" element={<Result />} />
        <Route path="Score" element={<Score />} />
        <Route path="Subject" element={<Subject />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes> 

    </>
  );
}
export default App;
