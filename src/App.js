import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckInternet } from './components/CheckInternet/CheckInternet';
import Layout from './components/TheLayout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout />
      <CheckInternet />
    </div>
  );
}
export default App;
