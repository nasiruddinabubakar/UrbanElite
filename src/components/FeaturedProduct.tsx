import { useEffect, useState } from "react";
import StarRating from "./StarRating";
const imageArray = [
  "/products/f1.jpg",
  "/products/f2.jpg",
  "/products/f3.jpg",
  "/products/f4.jpg",
  "/products/f5.jpg",
  "/products/f6.jpg",
  "/products/f7.jpg",
  "/products/f8.jpg",
  "/products/n1.jpg"
];

export default function FeaturedProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=10"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    getProducts();
  }, []);
  return (
    <>
      <Heading />
      <div className="featured__products">
        {data.map((item, i) => (
          <FeaturedView key={i} item={item} i={i+1} />
        ))}
      </div>
    </>
  );
}
interface FeaturedViewProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: any[];
  title: string;
}
// let i:number = 1;
export function FeaturedView({ item,i }: { item: FeaturedViewProps, i:number }) {
 
  return (
    <div className="single__product">
      <div className="banners__image">
        <img src={item.image} alt="fa1"></img>
      </div>
      <div className="details__feature__product">
        <h3>{item.title}</h3>
        <h4>${item.price}</h4>
        {/* <StarRating maxRating={5} /> */}
      </div>
    </div>
  );
}
export function Heading() {
  return (
    <div className="featured__heading">
      <h1>Featured Products</h1>
    </div>
  );
}
