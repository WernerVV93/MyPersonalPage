import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <main className="text-gray-400 bg-gray-800 body-font">
      <Navbar />
      <About />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
}
export default App;
