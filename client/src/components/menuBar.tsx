import icon from "../assets/Gemini_Generated_Image_8cu7lk8cu7lk8cu7.png";

const Menu = () => {
  return (
    <div className="flex items-center h-15 min-h-full bg-gradient-to-br from-white-500 to-slate-500">
      <div className="flex-none align-center ml-5 text-xl font-bold text-gray-500">
        <span className="inline-flex items-baseline">
          <img src={icon} className="mx-1 size-10 self-center rounded-full"/>
          <span className="mx-1 self-center">단어장</span>
        </span>
      </div>
      <div className="flex-7"></div>
      <button className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-colors duration-200"
        // onClick={}
        >로그인</button>
      <button className="flex-1 mx-7 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-colors duration-200"
        // onClick={}
        >메뉴</button>
    </div>
  )};

export default Menu;