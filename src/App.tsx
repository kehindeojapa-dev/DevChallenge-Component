import "./App.scss";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button
        size="lg"
        text="Login"
        // variant="outline"
        color="danger"
        endIcon="facebook"
      />
    </>
  );
}

export default App;
