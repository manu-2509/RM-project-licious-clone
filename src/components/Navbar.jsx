import {AiFillApple} from "react-icons/ai"
import {BsDot} from "react-icons/bs"
import {IoIosArrowDown} from "react-icons/io"
import {AiOutlineSearch} from "react-icons/ai"
import {VscClose} from "react-icons/vsc"
import {CartContext} from "../context/cartcontext"
import {useContext,useRef,useState} from "react"
import { useNavigate } from "react-router-dom"
import "../styles.css"
import {Link} from "react-router-dom"
import {useToast,Input,Box,WrapItem,Center,Stack,Drawer,useDisclosure,DrawerContent,DrawerCloseButton,DrawerBody,DrawerOverlay,DrawerHeader,Button,DrawerFooter} from "@chakra-ui/react"
export const Navbar=()=>{
    const { isOpen:isLoginOpen, onOpen:onLoginOpen, onClose:onLoginClose } = useDisclosure()
    const { isOpen:isCartOpen, onOpen:onCartOpen, onClose:onCartClose } = useDisclosure()
    const btnRef = useRef()
    const {cart} =useContext(CartContext)
    const [count,setCount] = useState(1)
    const [log,setLog] = useState("")
    const [dis,setDis] = useState(false)
    const [otp,setOtp] = useState("")
    const [con,setCon] = useState("")
    const toast = useToast()
    const navigate = useNavigate();
    console.log(cart)
    const handleCount=()=>{
        if(count<=1){
            return
        }
        setCount(count-1)
    }
    const ref=useRef()
    let subtotal=0;
    for(let i=0;i<cart.length;i++){
        subtotal+=cart[i].price;
    }
    const onLoginChange=()=>{
        setLog(ref.current.value)
    }  
     
    const sendOTP=()=>{
    var x=Math.floor(Math.random()*10000)+90000
        setOtp(x)
        alert(x)
        setDis(true)
    }
    const handleOtp=()=>{
        console.log(otp,con)
        if(otp===Number(con)){
            toast({
                title: 'Account created.',
                description: "You have successfully logged in",
                status: 'success',
                duration: 6000,
                isClosable: true,
              })
              onLoginClose()
        }
        else{
            toast({
                title: 'Invalid',
                description: "Otp is incorrect.",
                status: 'error',
                duration: 6000,
                isClosable: true,
              })
              toast({
                title: 'Enter correct otp',
                description: `Otp is ${otp}`,
                status: 'info',
                duration: 6000,
                isClosable: true,
              })  

        }
        
    }
    const logOut = () => {
        setDis(false);
        setLog("")
        setOtp("")
        setCon("")
        toast({
            title: 'Logged out.',
            description: "You have successfully logged out of your account",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
    }
    const handleCheckOut=()=>{
        if(cart.length===0){
            toast({
                title: 'Cart Empty.',
                description: "Please add a product to proceed",
                status: 'error',
                duration: 6000,
                isClosable: true,
              })
        }
        else if(!dis){
            onCartClose();
            onLoginOpen();
        }
        else{
            onCartClose();
            navigate("/checkout")
        }
    }
    return (
        <div>
            <div className="navbar-0">
             <div className="navbar-1">
                <p className="nav-p">Why Licious?</p>
                <BsDot className="nav-i color"></BsDot>
                <p className="nav-p">Download App</p>
                <AiFillApple className="nav-i"></AiFillApple>
                <img className="nav-img" src="https://www.licious.in/img/rebranding/android_app_icon.svg" alt="playstore" />
            </div>
            <div className="navbar-2">
                <p className="nav-p">FSSC 22000 Certifications</p>
                <BsDot className="nav-i color"></BsDot>
                <p className="nav-p">About Us</p>
                <BsDot className="nav-i color"></BsDot>
                <p className="nav-p">Careers@Licious</p>
                <BsDot className="nav-i color"></BsDot>
                <p className="nav-p">Contact us</p>
                <IoIosArrowDown className="nav-i"></IoIosArrowDown>
            </div>
           
            </div>
            <div className="main-cont">
           <div className="container">
                <Link to="/"><img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="li-icon" /></Link>
                <div className="nav-loc">
                <img src="https://www.licious.in/img/rebranding/location_icon.svg" alt="location" />
                <select className="nav-select">
                    <option value="bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Agra">Agra</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                </select>
                </div>
                <div>
                <AiOutlineSearch className="search-icon"></AiOutlineSearch>
                       <input className="nav-inp" type="text" placeholder="Search for any delicious product" />
            
                </div>
                <div className="nav-log" ref={btnRef} colorscheme='teal' onClick={onLoginOpen}>
                    <img className="nav-icons profile" src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="profile" />
                    {!dis?<p className="nav-nav">Login</p>:<p onClick={()=>logOut()} className="nav-nav">Logout</p>}
        <Drawer
        isOpen={isLoginOpen}
        placement='right'
        onClose={onLoginClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody className="login-body">
          <DrawerBody className="login-body2">  
            <Input placeholder="Enter Mobile Number" ref={ref} type="number" className="login-mob" onChange={onLoginChange}></Input>
            {dis?<Input placeholder="Enter Otp" type="number" onChange={(e)=>setCon(e.target.value)}></Input>:null}
         {dis?<Button className="login-confirm" colorScheme="Red" onClick={() =>handleOtp()}>Confirm OTP</Button>:<Button disabled={log.length<10} colorScheme="Red" className="login-otpget" onClick={()=>sendOTP()}>Proceed Via OTP</Button>}
            <p className="login-pp">By signing in you agree to our <b className="bold">terms and conditions</b></p>
          </DrawerBody>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
                </div>
                <div className="nav-cart" onClick={onCartOpen}>
                    <img className="nav-icons" src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="cart" />
                    <p className="nav-nav">Cart</p>
                    <p className="nav-nav">{" "}:{" "}{cart.length}</p>
                    <Drawer
        isOpen={isCartOpen}
        placement='right'
        onClose={onCartClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Order Summary</DrawerHeader>

          <DrawerBody>
          <WrapItem>
    <Center w='400px' h='30px' bg='green.600' color='white'>
    Free delivery on all orders above ₹399
    </Center>
  </WrapItem>
  {cart.map((item,index)=>{
                console.log(item.item)
                return(
            <Stack className='cart-item' key={item._id}>
                <Box className='cart-box'>
                    <Box className='cart-boxx1'>
                   <p className='cart-p1'>{index+1}</p>
                   <p className="cart-p2">{item.item}</p>  
                    </Box>
                    <VscClose></VscClose>
                </Box>
                <Box className='cart-box2'>
                    <Box className='cart-box11'>
                   <p className='cart-p3'>{item.Netwt}gms</p>
                   <p className="cart-p4">₹{item.price}.00</p>
                   </Box>
                    <Box className='cart-box3'>
                   <Button onClick={()=>handleCount()}>-</Button>
                   <p className="cart-p5">{count}</p>
                   <Button onClick={()=>setCount(count+1)}>+</Button>
                    </Box>
                </Box>
            </Stack>
                )

            })}
              <p className="cart-para">Stop paying delivery charges. Join Meatopia today!</p>
                <Box className="join-join">
                    <img src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg" alt="" />
                    <p className="join-now">JOIN NOW {">"}</p>
                </Box>
                <Box className="bill-main">
                    <h1 className="bill-total">BILL DETAILS</h1>
                    <Box className="bill-flex">
                        <p>Subtotal</p>
                        <p>{subtotal}</p>
                    </Box>
                    <Box className="bill-flex">
                        <p>Delivery Charge</p>
                        <p>0</p>
                    </Box>
                    <Box className="bill-flex">
                        <p>Discount</p>
                        <p>0</p>
                    </Box>
                    <hr />
                    <Box className="bill-flex bill-total">
                        <h3>Total</h3>
                        <h3>₹{subtotal}</h3>
                    </Box>
                </Box>
          </DrawerBody>

          <DrawerFooter>
            <Box className="bill-last">
             <b className="bill-b">Total: ₹{subtotal} </b> 
            <Button colorScheme="red" mr={3} onClick={handleCheckOut}>
              Proceed to Checkout
            </Button>
            </Box>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
                </div>
                
              
            </div>
           
            </div>
             <div className="top-bar">
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/59724ce1-1f3d-f1f4-c688-c05a0005c8de/original/Circle@3x-16.png?format=webp" alt="Today's Deals" />
                    <p>Today's Deals</p>
                </div>
                <Link to="/chicken">
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c777a59e-f2f7-dd37-9ba0-7f385aed3eb3/original/Circle@3x.png?format=webp" alt="Chicken" />
                    <p>Chicken</p>
                </Link>
                <div>
                    <img className="top-img extra-21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e13f894d-d51e-beea-4ef5-aab1a193d373/original/Circle@3x-13.png?format=webp" alt="Fish" />
                    <p>Fish & Seafood</p>
                </div>
                <div>
                    <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4d9c0c72-c070-dd56-4a2e-9fbfe8230f42/original/Circle@3x-1.png?format=webp" alt="Mutton" />
                    <p>Mutton</p>
                </div>
                <div>
                    <img className="top-img extra-21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/450e3217-59ac-8145-3bee-296e729f03bf/original/Circle@3x-17.png?format=webp" alt="ReadytoCook" />
                    <p>Ready to Cook</p>
                </div>
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