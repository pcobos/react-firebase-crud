import { ToastContainer } from 'react-toastify';
import './App.css';
import Link from './components/Link';

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <Link/>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
