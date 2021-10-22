import { greet } from "./utils/greet";

function App(): JSX.Element {
  return <h1 style="background-colour: black">{greet("Grace")}</h1>;
}

export default App;
