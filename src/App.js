import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExplorerPage from "./Containers/Explorer";
import Schema from "./Containers/Schema";


function App() {
 return (
   <Routes>
     <Route path="/" element={<Schema />}/>
     <Route path="/schema" element={<Schema />}/>
     <Route path="/explorer" element={<ExplorerPage />}/>
   </Routes>
 )
}

export default App;
