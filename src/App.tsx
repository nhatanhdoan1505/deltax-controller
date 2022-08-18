import { MainPage } from "pages";
import { AppProvider } from "store/context";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
}

export default App;
