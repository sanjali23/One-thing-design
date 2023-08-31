import "./App.css";
import Faqs from "./Components/Faqs";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Freedom from "./Components/Freedom";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Rewards from "./Components/Rewards";
import Style from "./Components/Style";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Freedom />
      <Form />
      <Rewards />
      <Style />
      <Faqs />
      <Footer/>
    </div>
  );
}

export default App;
