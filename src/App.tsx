import "./styles/__index.scss";
import { Post, Input } from "./components";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Post />
    </div>
  );
};

export default App;
