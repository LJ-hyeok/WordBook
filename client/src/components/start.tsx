import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">준비 되셨나요?</span>
          <span className="block text-indigo-200">당신의 일본어 잠재력을 확인하세요.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          회원가입 없이 5분 안에 결과를 확인할 수 있습니다.
        </p>
        <Link to="/test" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto transition-colors">
          테스트 시작하기
        </Link>
      </div>
    </div>
  );
};

export default Start;