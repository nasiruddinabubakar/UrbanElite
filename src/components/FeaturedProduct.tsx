import StarRating from "./StarRating";

export default function FeaturedProducts() {
  return <div className="featured__products">
    <FeaturedView />
    <FeaturedView />
    <FeaturedView />
    <FeaturedView />
    <FeaturedView />
    <FeaturedView />
    <FeaturedView />
    <FeaturedView />
  </div>;
}
export function FeaturedView() {
  return (
    <div className="single__product" >
      <div className="banner__image">
        <img src="/products/f1.jpg" alt="fa1"></img>
      </div>
     <div className="details__feature__product">
        <h2>Shilva T-shirt</h2>
        <h3> 132$</h3>
        {/* <StarRating maxRating={5} /> */}
      </div> 
    </div>
  );
}
  