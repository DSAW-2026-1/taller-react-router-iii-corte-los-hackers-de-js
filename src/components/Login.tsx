import './../App.css'
import {useNavigate} from "react-router-dom";
function LoginComponent() {
    const navigate = useNavigate();
    function setToken(token: string) {
        localStorage.setItem('token', token);
    }
    function handleLogin(){
        setToken("ThisIsAVeryLegitLoginToken")
        navigate("/")
    }
    return (
        <>
            <p>Something something login</p>
            <button
                type="button"
                onClick={() => handleLogin()}
            >Login</button>
        </>
    )
}
export default LoginComponent