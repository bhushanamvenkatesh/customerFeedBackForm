
import './App.css';
import Form from './Form';
import { Provider } from 'react-redux';
import store from './store/store';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
        <Form />
        <Outlet></Outlet>
      {/* </Provider> */}

    </div>
  );
}

export default App;
