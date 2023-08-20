export default function HeroSection(){
 
        const scrollToDiv = () => {
          const targetDiv = document.getElementById("featured");
          if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: "smooth" });
          }
        }
    

    return <div className="hero">
            <h4>Trade-in-Offer</h4>
            <h2>Super Value Deals </h2> 
            <h1>On All Products</h1>
            <p>Save more with coupons upto 75% off</p>
            <button  style ={{margin:'0'}} className="add__button" onClick={scrollToDiv}>Shop Now</button>      
    </div>
}