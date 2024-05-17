import { Provider } from "react-redux";
import "./App.css";
import { AppWrapper } from "./AppWrapper";
import store from "./store/store";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { MainComponent } from "./components/MainComponent";

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" exact element={<MainComponent />} />
        </Routes>
      </AppWrapper>
    </Provider>
  );
}

export default App;
