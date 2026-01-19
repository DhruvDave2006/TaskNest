import React from "react";
import './login.css'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="back-gradient">
      {/* <div className={`bg-blue-50`}>This is Login Page</div> */}


      <header>
        <nav className="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="./public/TaskNestFinal.png" alt="Logo" width={250} className="d-inline-block align-text-center"/>
      <></>
    </a>
  </div>
</nav>
      </header>

      <main className="parent">
      <div className="login-back">
            <div className="login-icon"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-box-arrow-in-rigth" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg></div>
<p className="relative font-extrabold text-3xl left-[25%]">Sign in with Email</p>
<p className=" relative font-extralight left-[32%]">One place for all your to-dos.</p>

  <form>

    <div className="w-full max-w-sm mx-auto">
    <label className="form-label" htmlFor="exampleInputEmail1">
      
    </label>
    <input
      className="mb-4 w-full rounded-md border px-4 py-2 bg-white"
      id="exampleInputEmail1"
      type="email"
      placeholder="Email"
      required
    />
   
  </div>
  <div className="w-full max-w-sm mx-auto">
    
    <input
      className="w-full rounded-md border px-4 py-2 bg-white"
      id="exampleInputPassword1"
      type="password"
      placeholder="Password"
      required
    />
    <div className="mt-1 flex justify-end">
    <a href="#" className="text-sm text-blue-500 no-underline hover:underline">Forgot Password?</a>
    </div>
      
  </div>
  <div className="flex justify-center mt-1.5">
    <input type="submit" onClick={()=> navigate('/Dashboard')} value="Get Started" className="w-full mx-auto max-w-sm rounded-md bg-black px-4 py-2 text-white"/> 
  </div>

  <div className="mt-1.5 flex justify-center">
    <p className="text-sm text-gray-400 no-underline">----------------- Or sign in with -----------------</p>
    </div>

  <div className="flex justify-center gap-3 mt-3">
  <button className=" button-extra" type="button">
  <img width="25" height="25" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
</button>

  <button className=" button-extra" type="button">
  
  <img width="25" height="25" src="https://img.icons8.com/fluency/48/facebook-circled.png" alt="facebook-circled"/>
</button>

 <button className=" button-extra" type="button">
  <img width="23" height="23" src="https://img.icons8.com/metro/26/mac-os.png" alt="mac-os"/>
</button>
</div>



  </form>
      </div>
      </main>
    </div>
  );
}

export default Login;
