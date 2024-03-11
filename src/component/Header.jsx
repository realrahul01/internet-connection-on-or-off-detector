import { useNavigate } from "react-router-dom";


const Header=()=>{

const navigate = useNavigate()

    return(
        <>
            <nav>
                <div className="left-nav"><h1>Splendornet</h1></div>
                <div className="right-nav">
                    <button onClick={()=>navigate('/login')}>Login</button>
                    <button onClick={()=>navigate('/newuser')}>New User</button>
                </div>
            </nav>
        </>
    )
}
export default Header;