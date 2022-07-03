import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"
import "../single.styles.css"
import { BackdropExample } from "./Modal"
export const Single=()=>{
    const [item,setItem] = useState({})  
    const {id}=useParams()
    useEffect(()=>{
       axios.get(`https://licious-0.herokuapp.com/chicken/${id}`).then((response)=>{
        setItem(response.data.chicken)
       })
    },[id])
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
            <button className="item-button"> <img className="item-bell" src="https://www.licious.in/img/rebranding/alarm.svg" alt="" /> Notify me</button>
        </div>
        <div className="item-wrapper">    
            <BackdropExample></BackdropExample>  
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