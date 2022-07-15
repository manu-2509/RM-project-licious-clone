import {useLocation} from "react-router-dom"
import {useEffect,useState,useContext} from "react"
import axios from "axios"
import "../single.styles.css"
import "../styles.css"
import {CartContext} from "../context/cartcontext";
import { BackdropExample } from "./Modal"
import {useToast} from "@chakra-ui/react"
export const Single=()=>{
    const [item,setItem] = useState({})  
    const {cart,setCart}  = useContext(CartContext)
    const {pathname} = useLocation();
    let route=pathname.substring(pathname.indexOf("/")+1,pathname.lastIndexOf("/"))
    useEffect(()=>{
       axios.get(`https://licious-0.herokuapp.com${pathname}`).then((response)=>{
        setItem(response.data[`${route}`])
       })
    },[pathname])
   const toast = useToast()

    const addToCart=(id)=>{
        let exist=cart.filter((item)=>item._id===id)
        if(exist.length!==0){
            toast({
                title: route,
                description: `${exist[0]["item"]} is already added to cart`,
                status: 'info',
                duration: 6000,
                isClosable: true,
              })  
        }else{
        setCart([...cart,item])
        }
    }

    return(
        <div>
<div className="main-main">
    <div className="single-main">
        
        <div className="content">
            <div className="slideshow">
                <button className="slide-btn slide-btn-1"></button>
                <button className="slide-btn slide-btn-2"></button>
                <button className="slide-btn slide-btn-3"></button>
              
                <div className="slideshow-wrapper">
                    <div className="slide">
                        <img className="slide-img"
                            src={item.img1} alt=""/>
                    </div>
                    <div className="slide">
                        <img className="slide-img"
                            src={item.img2} alt=""/>
                    </div>
                    <div className="slide">
                        <img className="slide-img" src={item.img3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="item-main">
        <h2 className="item-h2">{item.item}</h2>
        <div className="align-left"><p>{item.cat1} | {item.cat2} | {item.cat3}</p></div>
        <hr className="item-hr"/>
        <p className="align-left">{item.des}</p>
        <div className="weight-flex">
            <div className="item-flex1">
                <div className="item-flex">
                    <img className="item-img" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Pieces.png" alt="" />
                    <p>No. of Pieces{" "}{item.pieces}</p>
                </div>
                <div  className="item-flex flex-ex">
                    <img className="item-img" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Serves.png" alt="" />
                    <p>Serves{" "}{item.servers}</p>
                </div>
            </div>
            <div className="item-hrhr">
                <hr />
            </div>
            <div className="item-flex1">
                <div  className="item-flex">
                    <img className="item-img" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Chicken.png" alt="" />
                    <p>Gross Wt.{" "}{item.Grosswt}gms</p>
                </div>
                <div  className="item-flex">
                    <img className="item-img" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Netwt.png" alt="" />
                    <p>Net Wt.{" "}{item.Netwt}gms</p>
                </div>
            </div>
        </div>
        <div className="item-flexdiv">
            <span className="item-span"><h3>MRP:</h3><h2>₹{item.price}</h2></span>
            <button className="item-button" onClick={()=>addToCart(item._id)}>Add to cart</button>
        </div>
        <div className="item-wrapper">  
            <BackdropExample route={route}></BackdropExample>  
        </div>
    </div>
     </div>
     <div>
        <div className="lici-last">
           <div className="lici-hr1"><hr/></div>
           <h2 className="lici-h11">The <b className="lici-b">Licious</b> Way</h2>
           <div className="lici-hr2"><hr/></div>
        </div>
        <div className="lici-div">
            <div className="lici-div2">
                <img className="lici-img" src="https://www.licious.in/img/rebranding/landing/USP1.png" alt="" />
                <p className="lici-p">Premium produce, sourced directly from the origin</p>
            </div>
            <div className="lici-div2">
                <img className="lici-img" src="https://www.licious.in/img/rebranding/landing/USP2.png" alt="" />
                <p className="lici-p">Scientifically designed central production Unit</p>
            </div>
            <div className="lici-div2">
                <img className="lici-img" src="https://www.licious.in/img/rebranding/landing/USP3.png" alt="" />
                <p className="lici-p">Compliance to stringent quality checks</p>
            </div>
            <div className="lici-div2">
                <img className="lici-img" src="https://www.licious.in/img/rebranding/landing/USP4.png" alt="" />
                <p className="lici-p">Delivered fresh everyday</p>
            </div>
            <div className="lici-div2">
                <img className="lici-img" src="https://www.licious.in/img/rebranding/landing/USP5.png" alt="" />
                <p className="lici-p">Experience extraordinary cooking</p>
            </div>
        </div>
    </div>
     </div>
)}