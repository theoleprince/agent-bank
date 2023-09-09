import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header';
import AppRouting from './App-routing';
import Footer from './components/Footer/Footer';
function App() {
  return <Router>
  <Header />
  <AppRouting />
</Router>;
}

export default App;
