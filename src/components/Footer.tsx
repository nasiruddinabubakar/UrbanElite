export default function Footer(){

    return <footer>
            <div className="col">

                <h1>UrbanElite</h1>
                <h4>Contact</h4>
                <p><strong>Address:</strong>London Werlock</p>
                <p><strong>Phone:</strong>42820212130</p>
                <p><strong>Contact Hours:</strong>9-5 </p>
                <div className="follow">
                    <h4>Follow Us </h4>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Shipping Cose</a>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <a href="#">SignIn</a>
                <a href="#">View Cart</a>
                <a href="#">Tract My Order</a>
                <a href="#">Help</a>
            </div>
            <div className="col install">
                <h4>Install App</h4>
                <p>From Appstore or GooglePlay Store</p>
                <div className="row">
                    <img src="/app.jpg"></img>
                    <img src="/play.jpg"></img>
                </div>
                <p>Secured Payment Gateways</p>
                <img src="pay.png"></img>
            </div>
    </footer>
}