import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unstable_HistoryRouter, useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../actions/actionsProducts";
import { addItem } from "../actions/actionsCart";

interface FeaturedViewProps {
  category: string;
  description: string;
  id: number;
  image: string[];
  price: number;
  rating: any[];
  title: string;
}



const SingleProduct=()=> {
  const [imageNo, setImageNo] = useState<number>(0);
  const navigate =useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(getProduct(id));
  const product: FeaturedViewProps = useSelector((state: any) => state.products.Product);
  if (!id) {
    // Handle the case where "id" is undefined or falsy
    return <div>No product ID provided</div>;
  }
  
  
  
  // console.log("pro", product);

  // console.log(Product, id);
  

  function handleSetImage(index: number) {
    setImageNo(index);
  }
  return (
    <main className="section_product">
      <div className="image_section">
        <div className="banner__image">
          <img
            src={product.image[imageNo]}
            alt="productpic"
          ></img>
        </div>
        <div className="gallery">
          {product.image.map((ee, i) => (
            <GalleryView
              image={ee}
              i={i}
              key={i}
              onChangeImage={handleSetImage}
              border={imageNo === i ? "1px solid #1c9c9c" : ""} />
          ))}
        </div>
      </div>
      <ProductDetails />
    </main>
  );
}
interface GalleryViewProps {
  image: string;
  i: number;
  onChangeImage: (index: number) => void;
  border?: string;
}

export function GalleryView({
  image,
  i,
  onChangeImage,
  border = "",
}: GalleryViewProps) {
  return (
    <div className="preview_gallery">
      <img
        style={{ border: border }}
        src={image}
        alt="fa1"
        onMouseEnter={() => onChangeImage(i)}
      ></img>
    </div>
  );
}

export const ProductDetails=()=>{
  return (
    <div className="product__details">
      <CategoryName  />
      <PriceQuantity />
      <Paragraph />
    </div>
  );
}
export const CategoryName=() =>{
  const product:FeaturedViewProps = useSelector((state: any) => state.products.Product);
  return (
    <>
      {" "}
      <div>
        <span>Home/{product.category}</span>
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
    </>
  );
}
export const  PriceQuantity=()=> {
  const [inputValue, setInputValue] = useState(1);
  const[size,setSize]=useState('XS');
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const product:FeaturedViewProps = useSelector((state: any) => state.products.Product);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(event.target.value);

    // Ensure the value is within the specified range
    if (newValue < 1) {
      newValue = 1;
    } else if (newValue > 5) {
      newValue = 5;
    }

    setInputValue(newValue);
  };
  function handleSize(e:React.ChangeEvent<HTMLSelectElement>){
        setSize(s=>e.target.value);
  }
  function handleAddCart(){
    const cartPro = {...product,quantity:inputValue,size:size};
dispatch(addItem(cartPro))
    // navigate('/cart');

  }
  return (
    <div className="select_op">
      <h3>{product.price} Pkr</h3>
      <select value={size}onChange={handleSize}>
                
        <option value="XS">XS</option>
        <option value="XM">XM</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <div className="qt__cart">
        <input
          type="number"
          value={inputValue}
          min={1}
          max={5}
          onChange={handleInputChange}
        ></input>
        <button className="add__button" onClick={handleAddCart}>Add to Cart</button>
      </div>
    </div>
  );
}
export function Paragraph() {
  return (
    <div className="detail__para">
      <h2>Product Details</h2>
      <p>
        Elevate your style with our sophisticated formal shirt. Meticulously
        crafted for timeless elegance, this shirt combines exquisite tailoring
        with premium materials. The classic design is complemented by a refined
        collar and cuffs, adding a touch of distinction to any ensemble. Whether
        worn in the boardroom or at special occasions, this shirt exudes
        confidence and refined charm. Make a lasting impression with a garment
        that embodies the essence of refined sophistication. Experience
        impeccable comfort and unmatched versatility, as this formal shirt
        seamlessly transitions from day to night. Elevate your wardrobe with a
        garment that embodies the perfect blend of style and sophistication.
      </p>
    </div>
  );
}
export default SingleProduct;