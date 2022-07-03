import { CartContext } from "../context/cartcontext"
import {useContext} from "react"
import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
export const Payment=()=>{
    const toast = useToast()
    const navigate = useNavigate()
    const {cart}=useContext(CartContext)
    let total=0;
    for(let i=0;i<cart.length;i++){
        total+=cart[i].price;
    }
    const makePayment=()=>{
        
        toast({
            title: 'Payment successful',
            description: "Order placed successfully.",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
          setTimeout(function(){
            navigate("/")
          },3000)
    }
    return(
        <div className="payment-main">
            <div className="payment-div">
                <h2 className="payment-sdiv">Paytm</h2>
                <h2 className="payment-sdiv">LazyPay</h2>
                <h2 className="payment-sdiv">Amazon Pay</h2>
                <h2 className="payment-sdiv">Pay using UPI</h2>
                <h2 className="payment-sdiv">Credit/Debit Cards</h2>
                <h2 className="payment-sdiv">CRED pay</h2>
                <h2 className="payment-sdiv">Sodexo Food Cards</h2>
                <h2 className="payment-sdiv">Netbanking</h2>
                <h2 className="payment-sdiv">Other Wallets</h2>
                <h2 className="payment-sdiv">Cash on Delivery</h2>
                <h2 className="payment-sdiv">Pay Online on Delivery</h2>                
            </div>
            <div className="payment-sdiv2">
                <h1 className="card-head">New Card</h1>
                <div className="payment-box">
                    
                    <div className="payment-boxs">
                        <img src="https://www.licious.in/img/rebranding/offer.svg" alt="" />
                        <p>Paytm Wallet</p>
                    </div>
                    <p>Upto ₹500 cashback on minimum order value ₹399 on using Paytm Wallet. Minimum assured cashback ₹25. Valid twice per user per month. TnCs Apply.</p>
                </div>
                <hr />
                <div className="payment-box">
                    <div className="payment-boxs">
                        <img src="https://www.licious.in/img/rebranding/offer.svg" alt="" />
                        <p>25% off | Slice Cards</p>
                    </div>
                     <p>Get 25% instant discount on Slice Cards. Minimum purchase Rs.600. Maximum Discount Rs.200. Valid twice per user per month. Discount is shown on the bank page.</p>
                </div>
                <hr />
                <div className="payment-box">
                   
                    <div className="payment-boxs"> 
                        <img src="https://www.licious.in/img/rebranding/offer.svg" alt="" />
                        <p>15% off | ICICI bank Credit card</p>
                    </div>
                    <p>Get 15% instant discount on ICICI Bank Credit Cards. Minimum purchase: Rs. 800. Max Discount: Rs.200. Valid only on Saturdays and Sundays. Valid two times per card per month. Discounted amount is shown on the bank page</p>
                </div>
                <hr />
                <div className="payment-box">
                    <div className="payment-boxs">
                        <img src="https://www.licious.in/img/rebranding/offer.svg" alt="" />
                        <p>Simpl pay</p>
                    </div>
                    <p>Pay using SIMPL pay and get 10% cashback upto Rs.150. T&Cs apply.</p>
                </div>
                <hr />
                <div className="payment-box">
                    <div className="payment-boxs">
                        <img src="https://www.licious.in/img/rebranding/offer.svg" alt="" />
                        <p>CRED pay</p>
                    </div>
                    <p>Pay using CRED pay and get cashback upto Rs.100. T&Cs apply.</p>
                </div>
                 <hr />
                <input className="card-num" type="number" placeholder="Enter card no."/>
                <div className="card-flex22">
                    <input className="card-mm" type="number" placeholder="MM" />
                    <p className="card-p">/</p>
                    <input className="card-yy" type="number" placeholder="YYYY"/>
                    <input className="card-cvv" type="number" placeholder="CVV"/>
                </div>
                <input className="card-name" type="text" placeholder="Name on card." />
                <div className="card-check">
                    <input type="checkbox" />
                    <p>Securely save card for future use</p>
                </div>
                <button className="pay-button" onClick={()=>makePayment()}>Pay ₹{total}.00</button>

            </div>
        </div>
    )
}