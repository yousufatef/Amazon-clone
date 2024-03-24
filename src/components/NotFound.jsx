import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center ">
      <div>
        <h2 className="text-[#f08804] text-[20px] font-bold">
          Looking for something?
        </h2>
        <span className="text-[18px] block">
          We are sorry. The Web address you entered is not a functioning page on
          our site
        </span>
        <span className="text-20px font-bold">
          Go to Amazon{`'`}s{" "}
          <Link to="/" className="text-blue-700 underline">
            Home
          </Link>{" "}
          Page
        </span>
      </div>
    </div>
  );
};

export default NotFound;
