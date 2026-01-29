import Menu from "../components/menuBar"
import Intro from "../components/intro";
import Start from "../components/start";
import About from "../components/about";
import Contact from "../components/contact";


const MainPage = () => {
  return (
    <>
      <div className="min-h-full bg-gray-100">
        <Menu />
        <div className="min-h-full bg-slate-600 p-3">
          <Intro />
          <Start />
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
};
export default MainPage;