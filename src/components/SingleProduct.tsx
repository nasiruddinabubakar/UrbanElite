import { useState } from "react";
import { useParams } from 'react-router-dom';

interface FeaturedViewProps {
  category: string;
  description: string;
  id: number;
  image: string[];
  price: number;
  rating: any[];
  title: string;
}

const Products: FeaturedViewProps[] = [
  {
    category: "",
    description: "",
    id: 1,
    image: [
      "/products/f1.jpg",
      "/products/f2.jpg",
      "/products/f3.jpg",
      "/products/f4.jpg",
      "/products/f5.jpg",
    ],

    price: 132.2,
    rating: [],
    title: "Miami Vibe T-Shirt",
  },
  {
    category: "",
    description: "",
    id: 2,
    image: [
      "/products/f3.jpg",
      "/products/f2.jpg",
      "/products/f1.jpg",
      "/products/f4.jpg",
      "/products/f5.jpg",
    ],

    price: 112.2,
    rating: [],
    title: "Swagger T-Shirt",
  },
  {
    category: "",
    description: "",
    id: 3,
    image: [
      "/products/n5.jpg",
      "/products/n1.jpg",
      "/products/n2.jpg",
      "/products/n3.jpg",
      "/products/n7.jpg",
    ],

    price: 200.2,
    rating: [],
    title: "Formal Shirt",
  },
];




export default function SingleProduct() {
  const [imageNo, setImageNo] = useState<number>(0);
  const {id} = useParams();
  if (!id) {
    // Handle the case where "id" is undefined or falsy
    return <div>No product ID provided</div>;
  }
  const productId = parseInt(id, 10);
 
  function handleSetImage(index: number) {
    setImageNo(index);
  }
  
  return (
    <main className="section_product">
      <div className="image_section">
        <div className="banner__image">
          <img src= "/products/n5.jpg" alt="productpic"></img>
        </div>
        <div className="gallery">
          {Products[productId].image.map((ee, i) => (
            <GalleryView
              image={ee}
              i={i}
              key={i}
              onChangeImage={handleSetImage}
              border={imageNo === i ? "1px solid #1c9c9c" : ""}
            />
          ))}
        </div>
      </div>
      <ProductDetails productId={productId}/>
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
    <div  className="preview_gallery">
      <img style={{ border: border }} src={image} alt="fa1" onMouseEnter={() => onChangeImage(i)}></img>
    </div>
  );
}

export function ProductDetails(productId:any) {
  return (
    <div className="product__details">
      <CategoryName id={productId}/>
      <PriceQuantity id={productId}/>
      <Paragraph />
    </div>
  );
}
export function CategoryName({productId }: any) {
  console.log(productId);
  return (
    <>
      {" "}
      <div>
        <span>Home/T-shirt</span>
      </div>
      <div>
        {/* <h2>{Products[productId].title}</h2> */}
      </div>
    </>
  );
}
export function PriceQuantity(productId:any) {
  console.log(productId.id.productId);
  return (
    <div className="select_op">
      {/* <h3>{Products[productId].price} Pkr</h3> */}
      <select>
        <option value="" disabled selected>
          Size
        </option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
      </select>
      <div className="qt__cart">
        <input type="number"></input>
        <button className="add__button">Add to Cart</button>
      </div>
    </div>
  );
}
export function Paragraph() {
  return (
    <div className="detail__para">
      <h2>Product Details</h2>
      <p>
        Elevate your casual wardrobe with the Gildran Ultra T-Shirt, a perfect
        blend of premium quality and contemporary design. Crafted to perfection,
        this iconic t-shirt promises an unmatched level of comfort, making it an
        essential addition to your everyday wear. The Gildran Ultra T-Shirt is
        expertly crafted from a luxurious blend of ultra-soft cotton and
        lightweight polyester. Experience a cloud-like feel against your skin,
        ensuring all-day comfort whether you're on the move or relaxing at home.
        Designed with a modern, tailored fit, the Gildran Ultra T-Shirt strikes
        the perfect balance between relaxed and stylish. Its flattering
        silhouette complements various body types, making it a versatile choice
        for any occasion.
      </p>
    </div>
  );
}
