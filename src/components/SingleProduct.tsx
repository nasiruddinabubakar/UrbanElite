import { useState } from "react";
import { useParams } from "react-router-dom";

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
    category: "Men's Wear",
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
    category: "Mens'Wear",
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
    description: "Men's Wear",
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
  {
    category: "FootWear",
    description: "",
    id: 4,
    image: [
      "/products/shoe1.jpg",
      "/products/shoe2.jpg",
      "/products/shoe3.jpg",
      "/products/shoe4.jpg",
      "/products/shoe5.jpg",
    ],

    price: 500.2,
    rating: [],
    title: "Hooka Sports",
  },
  {
    category: "Accessories",
    description: "",
    id: 5,
    image: [
      "/products/gshock1.jpg",
      "/products/gshock2.jpg",
      "/products/gshock3.jpg",
      "/products/gshock4.jpg",
      "/products/gshock5.jpg",
    ],

    price: 750.2,
    rating: [],
    title: "Gshcok Watch",
  },
  {
    category: "FootWear",
    description: "",
    id: 6,
    image: [
      "/products/ltshoe1.jpg",
      "/products/ltshoe2.jpg",
      "/products/ltshoe3.jpg",
      "/products/ltshoe4.jpg",
      "/products/ltshoe5.jpg",
    ],

    price: 999,
    rating: [],
    title: "Groove Chukka Boots",
  },
];

export default function SingleProduct() {
  const [imageNo, setImageNo] = useState<number>(0);
  const { id } = useParams();
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
          <img
            src={Products[productId - 1].image[imageNo]}
            alt="productpic"
          ></img>
        </div>
        <div className="gallery">
          {Products[productId - 1].image.map((ee, i) => (
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
      <ProductDetails productId={productId} />
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

export function ProductDetails({ productId }: any) {
  return (
    <div className="product__details">
      <CategoryName id={productId} />
      <PriceQuantity id={productId} />
      <Paragraph />
    </div>
  );
}
export function CategoryName({ id }: any) {
  return (
    <>
      {" "}
      <div>
        <span>Home/{Products[id-1].category}</span>
      </div>
      <div>
        <h2>{Products[id - 1].title}</h2>
      </div>
    </>
  );
}
export function PriceQuantity({ id }: any) {
  const [inputValue, setInputValue] = useState(1);

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
  return (
    <div className="select_op">
      <h3>{Products[id - 1].price} Pkr</h3>
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
        <input type="number" value = {inputValue}min={1} max={5} onChange={handleInputChange}></input>
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
