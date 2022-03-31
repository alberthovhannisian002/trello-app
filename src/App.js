import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import Dashboard from "./components/Dashboard/Dashboard";
import './styles/App.css';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard/>
      </div>
    </Provider>
  );
}

export default App;
