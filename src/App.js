import { Provider } from "react-redux";
import "./index.css";
import "./App.css";
import ProductList from "./components/products/ProductList";
import Header from "./components/header/Header";
import configureStore from "./store";

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <h1 className="font-bold text-3xl font-sans ml-10 my-4 tracking-wide">
          Random Products
        </h1>
        <Header />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
