
export interface IngredientType {
  _id: string;
  name: string;
  type: 'bun' | 'sauce' | 'main';
  price: number;
  image: string;
  key?: string;
}

// export const IngredientType = PropTypes.shape({
//   _id: PropTypes.string,
//   name: PropTypes.string,
//   type: PropTypes.string,
//   image: PropTypes.string,
//   price: PropTypes.number,
// });
