const About = () => {
  const features = [
    {
      title: "다양한 난이도",
      desc: "JLPT N5 기초부터 N1 고급 어휘까지, 폭넓은 데이터셋을 기반으로 출제됩니다.",
      icon: "📚",
    },
    {
      title: "빠른 결과 분석",
      desc: "테스트 종료 즉시 점수와 추정 등급을 시각적인 그래프로 보여드립니다.",
      icon: "⚡",
    },
    {
      title: "맞춤형 학습 제안",
      desc: "부족한 부분을 파악하고, 내 수준에 맞는 단어를 추천받을 수 있습니다.",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            왜 이 테스트를 봐야 할까요?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;