import {Link} from "react-router-dom"
export const Category=()=>{
    return(
        <div>
            <div className="top-bar">
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/539819fa-f8f5-6148-d407-95522fa17a28/original/Todays-deal21.png" alt="Today's Deals" />
                    <p>Today's Deals</p>
                </div>
                <Link to="/chicken">
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/479a9750-d9a2-33ff-0693-3044a9dcae91/original/Chicken.png" alt="Chicken" />
                    <p>Chicken</p>
                </Link>
                <Link to="/fish">
                    <img className="top-img extra-21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e13f894d-d51e-beea-4ef5-aab1a193d373/original/Circle@3x-13.png?format=webp" alt="Fish" />
                    <p>Fish & Seafood</p>
                </Link>
                <Link to="/mutton">
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4d9c0c72-c070-dd56-4a2e-9fbfe8230f42/original/Circle@3x-1.png?format=webp" alt="Mutton" />
                    <p>Mutton</p>
                </Link>
                <Link to="/readytocook">
                    <img className="top-img extra-21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/450e3217-59ac-8145-3bee-296e729f03bf/original/Circle@3x-17.png?format=webp" alt="ReadytoCook" />
                    <p>Ready to Cook</p>
                </Link>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f7ef9035-9baa-b9b5-d56d-97059ffe6c39/original/Circle@3x-18.png?format=webp" alt="Prawns" />
                    <p>Prawns</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2569efa2-90ca-533c-e7c2-48330c4b3a59/original/Circle@3x-21.png?format=webp" alt="Coldcut" />
                    <p>Cold Cut</p>
                </div>
                <div>
                    <img  className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7b500ec8-8001-436b-74ca-430fd4e2ff0b/original/Circle@3x-14.png?format=webp" alt="Breads" />
                    <p>Spreads</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/27cf80b9-2a8f-d70d-7695-8142c85e5bcb/original/Circle@3x-2.png?format=webp" alt="eggs" />
                    <p>Eggs</p>
                </div>
                <div>
                    <img className="top-img pad" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c7cde9d8-4e31-8ea5-79a4-cce48c7ed109/original/Circle@3x-15.png?format=webp" alt="kebab&tandoor" />
                    <p>Kebabs & Tandoor</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3130cc9b-71e5-ff33-d413-9fcda531afac/original/Circle@3x-20.png?format=webp" alt="combos" />
                    <p>Combos</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/90882875-962a-8e96-6c45-f7d6492abd3b/original/Circle@3x-16.png?format=webp" alt="bestsellers" />
                    <p>Bestsellers</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/6455adfa-c60e-6c6a-9a60-a9a291bf6121/original/Circle@3x-17.png?format=webp" alt="snacks" />
                    <p>Snacks</p>
                </div>
            </div>
        </div>
    )
}