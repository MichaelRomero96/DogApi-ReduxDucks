//redux
import { Provider } from 'react-redux'
import generateStore from "./reduxDucks/store";
//components
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
  const store = generateStore();
  return (
    <Provider
      store={store}
    >
      <Login />
      <NavBar />
      <Home />
    </Provider>
  );
}

export default App;
