import { useNavigate } from "react-router-dom"
export const Checkout=()=>{
    const navigate = useNavigate()
    const proceedToPayment=()=>{
      navigate("/payment")
    }
    return(
        <div className="checkout-main">
            <button className="check-btn">+Add New Address</button>
            <h1 className="check-h">Saved Addresses</h1>
            <p className="check-p">1 Saved Addresses</p>
            <div className="check-flex">
                <input type="radio" defaultChecked={true}/>
                <div className="check-box">
                    <h2 className="check-h1">Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                    <p className="check-p1">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor</p>
                    <p>Bengaluru 568365</p>
                    <p>Mobile Number: 9362829464</p>
                    <hr className="check-hr"/>
                    <div className="check-flex1">
                        <button className="check-btn1">Edit</button>
                        <button className="check-btn2">Delete</button>
                    </div>
                </div>
            </div>
            <button className="proceed" onClick={()=>{proceedToPayment()}}>Proceed to Payment</button>
        </div>
    )
}