import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 to-blue-100 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">당신의 일본어 실력,</span>
            <span className="block text-indigo-600">지금 바로 확인해보세요</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            JLPT N5부터 N1까지, 실제 기출 난이도를 기반으로 한 <br className="hidden md:inline" />
            정밀 레벨 테스트로 현재 위치를 진단해 드립니다.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
              <Link to="/test">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  무료 레벨 테스트 시작하기 🚀
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* 배경 장식용 원 (선택사항) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Intro;