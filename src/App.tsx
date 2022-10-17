import ChangeLangBtn from "./components/ChangeLangBtn";
import { Chart } from "./components/Chart";
import Header from "./components/Header";
import ListItemFilter from "./components/ListItemFilter";
import SpendList from "./components/SpendList";

function App() {
  return (
    <div className="app-container">
      <ChangeLangBtn />
      <Header />
      <ListItemFilter />
      <SpendList />
    </div>
  );
}

export default App;
