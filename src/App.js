import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./AppRouting";
import MatchHeader from "./components/MatchHeader";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>
      <Toaster />
      <AppRouting />
    </Router>
  );
}

export default App;
