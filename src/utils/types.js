import PropTypes from "prop-types";

export const IngredientType = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
});
