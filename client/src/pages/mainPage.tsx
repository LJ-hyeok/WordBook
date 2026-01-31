import Menu from "../components/menuBar"
import Intro from "../components/intro";
import Start from "../components/start";
import About from "../components/about";
import Contact from "../components/contact";


const MainPage = () => {
  return (
    <>
      <div className="min-h-full bg-white">
        <Menu />
        <main>
          <Intro />
          <Start />
          <About />
        </main>
        <footer className="bg-gray-50 text-white">
          <Contact />
        </footer>
      </div>
    </>
  );
};
export default MainPage;