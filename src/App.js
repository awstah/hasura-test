import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";


function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path="/" element={<Notes />}/>
      <Route path="new" element={<Create />}/>
    </Routes>
    </div>
  );
}

export default App;
