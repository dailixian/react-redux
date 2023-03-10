import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Display from "./components/Display";
import { Provider } from "react-redux";
import store from "./redux/store";
import Operations from "./components/Operations";
import ShowState from "./components/ShowState";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Display></Display>
        <Toolbar></Toolbar>
        <Operations></Operations>
        <ShowState></ShowState>
      </Provider>
    </>
  );
}

export default App;
