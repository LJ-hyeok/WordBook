import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 단어 데이터 타입 정의
interface Word {
  id: number;
  kotoba: string;
  yomikata: string;
  meaning: string;
  JLPT: number;
}

interface Question extends Word {
  options: string[]; // 정답 + 오답 3개가 섞인 보기 배열
}

const Test = () => {
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0); // 맞은 개수
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => { //비동기인 경우의 useEffect 사용법
      try {
        const res = await fetch('/api/level-test');  // 로컬에서는 'http://localhost:8080/api/level-test'
        const data = await res.json();
        console.log(data);

        const rawWords = data;

        // 2. 퀴즈 문제 만들기 (오답 보기 생성)
        const formattedQuestions: Question[] = rawWords.map((word: Word) => {
          const answer = word.meaning;
          const distractors = ["사과", "학교", "지하철"].filter(d => d !== answer); //임시 오답
          const options = shuffleArray([answer, ...distractors]); // 정답 + 오답 섞기
          return { ...word, options };
        });

        setQuestions(formattedQuestions);
        setLoading(false);

      } catch (error) {
        console.error("Failed to fetch questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // 배열 섞기 유틸리티 함수
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // 정답 선택 처리
  const handleAnswer = (selectedMeaning: string) => {
    const currentQuestion = questions[currentIndex];
    if (selectedMeaning === currentQuestion.meaning) {
      setScore(prev => prev + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishTest();
    }
  };

  // 테스트 종료 처리
  const finishTest = () => {
    setShowResult(true);
    // 나중에 결과 페이지(/result)로 데이터를 가지고 이동하게 수정 가능
    // navigate('/result', { state: { score, total: questions.length } });
  };

  // 로딩 화면
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // 결과 화면 (간이)
  if (showResult) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">테스트 완료! 🎉</h2>
          <p className="text-gray-600 mb-6">수고하셨습니다. 당신의 점수는?</p>
          <div className="text-6xl font-extrabold text-indigo-600 mb-6">
            {score} <span className="text-2xl text-gray-400">/ {questions.length}</span>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // 문제 화면
  const currentQuestion = questions[currentIndex];
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* 상단 프로그레스 바 */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentIndex + 1}</span>
          <span>{questions.length} questions</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* 문제 카드 */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8 sm:p-10 text-center border-b border-gray-100">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full mb-4">
            JLPT N{currentQuestion?.JLPT || '?'}
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-2">
            {currentQuestion?.kotoba}
          </h2>
          {/* 요미카타는 힌트처럼 가려두거나 작게 표시할 수 있습니다 */}
          <p className="text-gray-400 text-lg mt-2 font-light">
            {/* {currentQuestion?.yomikata} */}
          </p>
        </div>

        {/* 보기 버튼 영역 */}
        <div className="p-6 bg-gray-50 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {currentQuestion?.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className="w-full p-4 bg-white border-2 border-transparent text-gray-700 text-lg font-medium rounded-xl shadow-sm hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;