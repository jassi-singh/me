import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-darkNavy flex flex-col">
      <Navbar />
      <Intro />

      {/* <div className="h-96"></div> */}
    </div>
  );
}

export default App;
