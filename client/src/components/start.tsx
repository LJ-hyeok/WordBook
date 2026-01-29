import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="h-100 bg-gray-700 p-2 my-2">
      <div className="text-center bg-gray-200 p-2">
        바로 사용하기 ➡ 
        <Link to="/test">
          <button className="m-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          transition-colors duration-200"
          >시작하기</button>
        </Link>
        <br/>Test.<br/>Test.
      </div>
    </div>
  )
};

export default Start;