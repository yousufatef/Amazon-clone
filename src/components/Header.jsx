import { Search, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import { auth } from "../utils/firebase";

const Header = () => {
  const { user, cart } = useAuth();
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div className="bg-[#131921] h-[60px] flex items-center sticky">
      <Link to="/">
        <img
          src="/public/assets/header-logo.png"
          alt="Logo-image"
          className="w-[100px] mt-[18px] mx-[20px] object-contain"
        />
      </Link>
      <div className="flex justify-center items-center flex-1 rounded-3xl">
        <input
          type="text"
          className="w-full pl-[6px] py-[12px] h-[22px] border-none outline-none"
        />
        <Search className="bg-[#cd9042] !h-[24px] p-[5px]" />
      </div>
      <div className="flex justify-evenly items-center text-white">
        <Link
          //to handle signOut routing
          to={!user && "/login"}
          onClick={handleSignOut}
          className="flex flex-col mr-[10px] ml-[10px] hover:underline "
        >
          <span className="text-[11px]">
            Hello {user ? `${user.email}` : "Guest"}
          </span>
          <span className="text-[13px] font-[800]">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </Link>
        <Link
          to="/orders"
          className="flex flex-col mr-[10px] ml-[10px] hover:underline"
        >
          <span className="text-[11px]">Returns</span>
          <span className="text-[13px] font-[800]">& Orders</span>
        </Link>
        <Link to="/checkout" className="flex items-center mr-[10px] ml-[10px]">
          <ShoppingCartCheckoutOutlined />
          <span className="text-[#f08804] text-[13px] font-[800]">
            {cart.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
