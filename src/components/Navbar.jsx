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
    const {cart,setCart} =useContext(CartContext)
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
    const handleRemove=(id)=>{
        let update=cart.filter((item)=>item._id!==id)
       setCart(update)
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
    Free delivery on all orders above ???399
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
                    <VscClose onClick={()=>handleRemove(item._id)}></VscClose>
                </Box>
                <Box className='cart-box2'>
                    <Box className='cart-box11'>
                   <p className='cart-p3'>{item.Netwt}gms</p>
                   <p className="cart-p4">???{item.price}.00</p>
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
                        <h3>???{subtotal}</h3>
                    </Box>
                </Box>
          </DrawerBody>

          <DrawerFooter>
            <Box className="bill-last">
             <b className="bill-b">Total: ???{subtotal} </b> 
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
             
        </div>
    )
}