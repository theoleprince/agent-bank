import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouting from "./App-routing";
import { Provider } from "react-redux";
import store from "../stores";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="body">
      <Provider store={store}>
        <Router>
          <Header />
          {/* <main className="main"> */}
          <AppRouting />
          {/* </main> */}
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
