import './App.css';
import LinkForm from './components/LinkForm';
import Link from './components/Link';

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <LinkForm/>
        <Link/>
      </div>
    </div>
  );
}

export default App;
