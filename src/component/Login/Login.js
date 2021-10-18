import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {getName,getEmail,getPass,getPosition,createUseremail,error,isLogin,googleLogin} =useFirebase()
    return (
        <div className='login-section'>
           <div className="container">
               <div className="login-form">
               <h1>{!isLogin ? 'Welcome Back' : 'Create Your Account'}!</h1>
               <p>{!isLogin && 'Please Sign In to your account.'}</p>
               <form onSubmit={createUseremail}>
        <div className="mb-3">
           {isLogin &&  <input onBlur={getName} type="text" className="form-control" id="" placeholder='Username'/>}
        </div>
        <div className="mb-3">
            <input onBlur={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
        </div>
        <div className="mb-3">
            <input onBlur={getPass} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
        </div>
        <p className='text-danger text-center'>{error}</p>
        <div className="mb-3 form-check">
            <input onChange={getPosition} type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">
                {isLogin ? 'Already registered?' : "Don't have account?"}</label>
        </div>
        <button type="submit" className="button-top">{isLogin ? 'Signup' : 'Login'}</button>
        </form>
        <p>Or {isLogin ? "Signup" : 'Login'} with</p>
        <div className="google-login">
        <button onClick={googleLogin} className=''><i className="fab fa-google-plus-square"></i> Google</button>
        </div>
               </div>
           </div>
        </div>
    );
};

export default Login;