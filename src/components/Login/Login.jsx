import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Login = () => {

    const provider = new GoogleAuthProvider();


    const clickHandle = () =>{
        signInWithPopup(auth, provider)
        .then((result) =>{
            console.log(result);
        }) 
        .catch(error => {
            console.log(error)
        })       
    };

    return (
        <div>
            <button onClick={clickHandle} >Login With Google</button>
        </div>
    );
};

export default Login;