import { Star } from "@mui/icons-material";
import PropTypes from "prop-types"; // Import PropTypes
import { useAuth } from "../context/GlobalState";

const Product = ({ id, title, price, image, rating }) => {
  const { dispatch, cart } = useAuth();
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  console.log(cart)
  return (
    <div className="flex flex-col p-5 justify-center items-center bg-white">
      <div>
        <img
          src={image}
          alt=""
          className="max-w-[200px] object-contain mb-[15px] "
        />
      </div>
      <div className="flex flex-col justify-center mb-8 text-center gap-2">
        <span className="m-3 text-yellow-500 flex justify-center items-center">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <Star />
              </p>
            ))}
        </span>
        <h1 className="text-2xl font-bold">${price}</h1>
        <h1 className="tracking-[0.9] leading-8 text-[19px] font-normal">
          {title}
        </h1>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-[#cd9042] text-white font-semibold text-[18px] hover:opacity-[0.9] rounded-sm p-[5px] w-[35%] mb-5"
      >
        Add to Cart
      </button>
    </div>
  );
};
// Add PropTypes validation
Product.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
export default Product;
