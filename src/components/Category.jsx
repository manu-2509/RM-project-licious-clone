import {Link} from "react-router-dom"
export const Category=()=>{
    return(
        <div className="category-main">
            <div className="cat-category">
            <h2 id="shop-cat">Shop by categories</h2>
            <p id="freshest">Freshest meats just for you</p>
            </div>
            
            <div className="top-bar">
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/539819fa-f8f5-6148-d407-95522fa17a28/original/Todays-deal21.png" alt="Today's Deals" />
                    <p className="top-para"> Today's Deals</p>
                </div>
                <Link to="/chicken">
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/479a9750-d9a2-33ff-0693-3044a9dcae91/original/Chicken.png" alt="Chicken" />
                    <p className="top-para">Chicken</p>
                </Link>
                <Link to="/fish">
                    <img className="top-img extra-21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/46494180-ff34-2236-4240-da12222c4d23/original/Fish___Seafood.png" alt="Fish" />
                    <p className="top-para">Fish & Seafood</p>
                </Link>
                <Link to="/mutton">
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/952cc910-319c-0b5d-fa34-373f05f0917a/original/Mutton.png" alt="Mutton" />
                    <p className="top-para">Mutton</p>
                </Link>
                <Link to="/readytocook">
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0a8c4f08-15e7-12e5-a696-286cddadf373/original/RTC_(2).png" alt="ReadytoCook" />
                    <p className="top-para">Ready to Cook</p>
                </Link>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b528b5d9-aae1-8814-99d5-8642e2ee3676/original/Prawns.png" alt="Prawns" />
                    <p className="top-para">Prawns</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d08157a7-8828-4978-eb3f-3408cfe7d1f9/original/Venus_(1).png" alt="Coldcut" />
                    <p className="top-para">Cold Cut</p>
                </div>
                <div>
                    <img  className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/066b2145-5678-c1c6-5a05-5e5e53840101/original/Continental-egg-spread.png" alt="Spreads" />
                    <p className="top-para">Spreads</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/54771c04-5aae-094d-8739-b22d09ab284e/original/Eggs.png" alt="eggs" />
                    <p className="top-para">Eggs</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/8f6c3a69-7867-05d5-9367-ed091bdf3c61/original/hyd-chicken.png" alt="kebab&tandoor" />
                    <p className="top-para">Biriyani & Kebab</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b8169e6d-59ae-ba6f-f839-ec0883a9742e/original/Combo2.png" alt="bestsellers" />
                    <p className="top-para">Combos</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/804e2c47-aa87-e548-8d19-789b1fccb8bb/original/GFD.png" alt="snacks" />
                    <p className="top-para">Featured Collections</p>
                </div>
            </div>
        </div>
    )
}