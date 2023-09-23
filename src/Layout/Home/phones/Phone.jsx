
import PropTypes from 'prop-types';

const Phone = ({ phone }) => {
      const { image, phone_name, brand_name, price, rating } = phone;
    
      return (
        <div className="text-center outline outline-[1px] p-3 rounded-lg outline-[#f6f6f648] space-y-2">
          <div className="w-full h-[200px]">
            <img className="w-full h-full object-cover object-top" src={image} alt="" />
          </div>
          <h2 className="font-bold">{phone_name}</h2>
          <p>Brand: {brand_name}</p>
          <p>Price: ${price}</p>
          <p>{rating}</p>
        </div>
      );
    };
    
    Phone.propTypes = {
      phone: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        phone_name: PropTypes.string.isRequired,
        brand_name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
    };
    
    export default Phone;
    