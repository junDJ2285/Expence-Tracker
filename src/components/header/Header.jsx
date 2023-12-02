import { Button } from "antd"
import { Link } from "react-router-dom"
import "./header.css"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../../pages/store/reducer"

const Header = () =>{
    const user = useSelector((s)=>s.reducer.user)
    const dispatch= useDispatch()
    console.log("useriii", user);
    
    return(
        <div className="header">
            <div className="header-lift"><h1 >Expence Tracker</h1></div>
            
            <div className="header-right" style={{padding: "27px 34px",  }}>
                
                    {user ? (
                        <Link to="/">
                            <Button className="mn-btn" size="large"   onClick={()=>{
                                dispatch(logoutUser())
                            }}>Logout</Button>

                        </Link>                    
                        ):(
                      <>
                      <Link to="/Signup">
                      <Button  size="large"   className="mn-btn" >Signup</Button>
                      </Link>
                      <Link to="/Login "  >
                      <Button  size="large"    className="mn-btn" >Login</Button>
                      </Link>
                      </>
                    )
                }
            </div>
        </div>
    )
}

export default Header