import React from "react"
import './Login.css'
const LoginForm = () => {
    const [loginDetails, setLoginDetails] = React.useState({
        email: "",
        password: "",
        terms: false
    })
    // const [email, setEmail] = React.useState("")
    // const [password, setPassword] = React.useState("")
    // const [terms, setTerms] = React.useState(false)
    const handleEmail = (event) => {
        // setEmail(event.target.value)
        setLoginDetails({
            ...loginDetails,email: event.target.value
        })
    }
    const handlePassword = (event) => {
        //setPassword(event.target.value)
        setLoginDetails({
            ...loginDetails,password: event.target.value
        })
    }
    const handleTerms = (event) => {
        //setTerms(event.target.checked)
        setLoginDetails({
            ...loginDetails,terms: event.target.checked
        })
    }
    const handleLogin = (event) => {
        event.preventDefault()
        // const userDetails = {
        //     email: loginDetails.email,
        //     password: loginDetails.password,
        //     terms: loginDetails.terms
        // }
        console.log("userDetails", loginDetails);
    }
    return (
        <div className="loginPage">

            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="useremail">Email</label>
                    <input type="text" onChange={handleEmail} value={loginDetails.email} placeholder="Enter your Email Address"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="userPassword">Password</label>
                    <input type="password" onChange={handlePassword} value={loginDetails.password} placeholder="Enter your password"></input>
                </div>
                <div className="form-control">
                    <input type="checkbox" onClick={handleTerms} value={loginDetails.terms} checked={loginDetails.terms}></input>
                    <label htmlFor="terms">I have read the terms and conditions</label>
                </div>
                <div className="form-control">
                    <button type="submit" >Login</button>
                </div>

            </form>
        </div>
    )
}
export default LoginForm