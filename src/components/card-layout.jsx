
import './card-layout.css';

// eslint-disable-next-line react/prop-types
const CardLayout = ({ title, description, image, price, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="card-price">${price}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default CardLayout;
