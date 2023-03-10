import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Display from "./components/Display";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Display></Display>
        <Toolbar></Toolbar>
      </Provider>
    </>
  );
}

export default App;
