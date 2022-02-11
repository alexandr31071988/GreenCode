import './App.css';
import './style.scss'

import Layout from './Components/Layout'
import GoodGroupItem from './Pages/GoodGroupItem'
import Main from './Pages/Main'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path={'/type/:GoodGroupName'} element={<GoodGroupItem />} />
      </Routes>
    </Layout>
  );
}

export default App;
