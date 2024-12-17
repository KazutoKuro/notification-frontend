import { BrowserRouter } from "react-router-dom";
import Notification from "./components/Notification";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <Notification />
      </div>
    </BrowserRouter>
  );
};

export default App;
