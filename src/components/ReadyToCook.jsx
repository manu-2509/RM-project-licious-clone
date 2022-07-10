import {useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import { CartContext } from "../context/cartcontext"
import {useContext} from "react"
import "../styles.css"
export const ReadyToCook=()=>{
    const navigate=useNavigate()
    const [data,setData] = useState([])
    const {cart,setCart}  = useContext(CartContext)
    useEffect(()=>{
        axios.get("https://licious-0.herokuapp.com/readytocook")
        .then((response)=>{
          setData(response.data.readytocook)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
    const  handleClick=(id)=>{
        navigate(`/readytocook/${id}`)
    }
    const addToCart=(id)=>{
        let exist=cart.filter((item)=>item._id===id)
        if(exist.length!==0){
            alert("Item is already in cart")
        }else{
        const add=data.find((item)=>item._id===id)
        setCart([...cart,add])
        }
    }

return (
     <div className="chick-div">
        {data.map((e)=>{
            return(
                <div className="chick-box" key={e._id}>
                     <img className="chick-img" onClick={()=>handleClick(e._id)} src={e.img1} alt=""/>
                      <h3 onClick={()=>handleClick(e._id)} className="chick-head">{e.item}</h3>
                      <p className="chick-head extra-chick">Lorem ipsum dolor sit amet, consectetur</p>
                       <div className="chick-wt" onClick={()=>handleClick(e._id)}>
                        <h4>Net wt:{e.Netwt}gms</h4>
                        <h4>Gross:{e.Grosswt}gms</h4>
                       </div>
                       <div className="chick-pr">
                        <h3 className="chick-mrp">MRP:₹{e.price}</h3>
                        <button className="chick-btn" onClick={()=>{addToCart(e._id)}}>ADD TO CART</button>
                       </div>
                       <div className="chick-dl" onClick={()=>handleClick(e._id)}>
                        <img  src="https://www.licious.in/img/rebranding/express_delivery.svg" alt="" />
                        <p>Today in <b>120 min</b></p>
                       </div>
                </div>
               
            )
        })}

     </div>
)
} 