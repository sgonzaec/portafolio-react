import { Toaster } from "react-hot-toast";
import "./App.css";
import GeneralInfo from "./Blocks/GeneralInfo";
import Tabs from "./Components/Tabs/Tabs";
import SplashCursor from "./Animations/SplashCursor/SplashCursor";

function App() {

  return (
    <div className="flex h-screen flex-col md:flex-row ">
      <GeneralInfo />
      <Tabs />
      <Toaster position="top-right" reverseOrder={false} />
      {/* <SplashCursor /> */}
    </div>
  );
}

export default App;
