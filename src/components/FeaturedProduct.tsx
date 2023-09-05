import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading } from "./Heading";
import HeroSection from "./HeroSection";
import { useDispatch ,useSelector} from "react-redux";
import { setProducts } from "../actions/actionsProducts";
import { addItem } from "../actions/actionsCart";
const Productsarr: FeaturedViewProps[] = [
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
    title: "Gshock Watch",
  },
  // {
  //   category: "FootWear",
  //   description: "",
  //   id: 6,
  //   image: [
  //     "/products/ltshoe1.jpg",
  //     "/products/ltshoe2.jpg",
  //     "/products/ltshoe3.jpg",
  //     "/products/ltshoe4.jpg",
  //     "/products/ltshoe5.jpg",
  //   ],

  //   price: 999,
  //   rating: [],
  //   title: "Groove Boots",
  // },
];
export default function FeaturedProducts() {
  
const dispatch = useDispatch();
  
      try {
        dispatch(setProducts(Productsarr));

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    

    const Products = useSelector((store:any)=>store.products.Products);
  // console.log(Products);
  const [data,setData]= useState(Products);

  
  return (
    <>
    <HeroSection />
    <div id="featured" className="featured__container">
      <Heading heading={'Featured Products'}/>
      <div className="featured__products">
        {data.map((item:any, i:number) => (
          <FeaturedView key={i} item={item} i={i + 1} />
        ))}
      </div>
    </div>
    </>
  );
}
interface FeaturedViewProps {
  category: string;
  description: string;
  id: number;
  image: string[];
  price: number;
  rating: any[];
  title: string;
}

// let i:number = 1;
export function FeaturedView({
  item,
  i,
}: {
  item: FeaturedViewProps;
  i: number;
}) {
  const dispatch=useDispatch();
  function handleAddCart(){
    const cartPro = {...item,quantity:1,size:'XS'};
dispatch(addItem(cartPro))
    // navigate('/cart');

  }
  return (
    <div className="single__product">
      <Link to={`product/${item.id}`} className="Links">
        <div className="banners__image">
          <img src={item.image[0]}alt="fa1"></img>
        </div>
      </Link>
      <div className="pip">
        <div className="details__feature__product">
          <div>
            <h3>{item.title}</h3>

            <h4>{item.price} Rs</h4>
          </div>
          {/* <StarRating maxRating={5} /> */}
        </div>
       
        <button className="cart_btn" onClick={handleAddCart}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        
      </div>
    </div>
  );
}

