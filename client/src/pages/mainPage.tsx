import Intro from "../components/intro";
import Start from "../components/start";
import About from "../components/about";
import Contact from "../components/contact";

const MainPage = () => {
  return (
    <>
      <div className="min-h-full bg-gray-100">
        <div className="flex items-center h-15 min-h-full bg-gradient-to-br from-red-100 to-blue-100">
          <p className="flex-none align-center ml-5 text-xl font-bold text-gray-500">📖하루하루 일본어 단어장</p>
          <p className="flex-7"></p>
          <p className="flex-1 text-lg font-bold text-center bg-gray-100">로그인</p>
          <p className="flex-1 text-lg font-bold text-center bg-gray-100">메뉴</p>
        </div>
        <div className="min-h-full bg-blue-300 p-3">
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