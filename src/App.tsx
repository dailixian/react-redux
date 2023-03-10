import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Display from "./components/Display";
import { Provider } from "react-redux";
import store from "./redux/store";
import Operations from "./components/Operations";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Display></Display>
        <Toolbar></Toolbar>
        <Operations></Operations>
      </Provider>
    </>
  );
}

export default App;
