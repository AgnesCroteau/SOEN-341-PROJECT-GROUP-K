export const [cart, setCart] = useState([]);

export const addToCart = (product) => {
  setCart({...cart, product});
  console.log("We are on added to cart.");
}