import { useState } from "react";

const imageArray = [
  "/products/f1.jpg",
  "/products/f2.jpg",
  "/products/f3.jpg",
  "/products/f4.jpg",
  "/products/f5.jpg",
];

export default function SingleProduct() {
  const [imageNo, setImageNo] = useState(0);

  function handleSetImage(index: number) {
    setImageNo(index);
  }

  return (
    <main className="section_product">
      <div className="image_section">
        <div className="banner__image">
          <img src={imageArray[imageNo]} alt="fa1"></img>
        </div>
        <div className="gallery">
          {imageArray.map((image, i) => (
            <GalleryView
              image={image}
              i={i}
              key={i}
              onChangeImage={handleSetImage}
              border={imageNo === i ? "1px solid #1c9c9c" : ""}
            />
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
    <div style={{ border: border }} className="preview_gallery">
      <img src={image} alt="fa1" onMouseEnter={() => onChangeImage(i)}></img>
    </div>
  );
}

export function ProductDetails() {
  return (
    <div className="product__details">
      <CategoryName />
      <PriceQuantity />
      <Paragraph />
    </div>
  );
}
export function CategoryName() {
  return (
    <>
      {" "}
      <div>
        <span>Home/T-shirt</span>
      </div>
      <div>
        <h2>Men's Fashion T-Shirt</h2>
      </div>
    </>
  );
}
export function PriceQuantity() {
  return (
    <div className="select_op">
      <h3>$139.00</h3>
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
        <input type="text"></input>
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
