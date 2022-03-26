import { Login } from "../../components/Login";
export const LoginPage = (props) => {
    console.log(props.logginOut)
    if (props.logginOut){
        props.updLog(false)
        props.updNam('')
    }
    return(
        <Login
                isLog={props.isLog}
                updLog={props.updLog}
                updNam={props.updNam}
        />
    );
}