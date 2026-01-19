import React from 'react'
import './login.css'

function Register() {
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
      <div className="register-back">
            <div className="register-icon"><img width="47" height="48" src="https://img.icons8.com/sf-regular/48/add-user-male.png" alt="add-user-male"/></div>
<p className="relative font-extrabold text-3xl left-[28%]">Create Account</p>
<p className=" relative font-extralight left-[26%]">Start your journey to organized tasks.</p>

  <form>

    <div className="w-full max-w-sm mx-auto">
  
    <input
      className="mb-4 w-full rounded-md border px-4 py-2 bg-white"
      id="exampleInputUsername"
      type="text"
      placeholder="Username"
      required
    />
   
  </div>

    <div className="w-full max-w-sm mx-auto">
  
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
    
      
  </div>

  <div className="mt-2 flex justify-center">
    <input type="checkbox"
    className='' 
    />
    <label htmlFor="checkbox" className='ml-2 text-sm font-medium text-gray-600'> I agree to terms and Conditions </label>
    </div>

  <div className="flex justify-center mt-3">
    <input type="submit" value="Sign Up" className="w-3xs mx-auto max-w-sm rounded-md bg-black px-4 py-2 text-white"/> 
  </div>

  <div className="mt-3 flex justify-center">
    <p className="text-sm text-gray-400 no-underline">---------------------- Or sign in with ----------------------</p>
    </div>
    

  <div className="flex justify-center gap-3 mt-2">
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

<div className="mt-3 flex justify-center">
    <p className="text-sm text-gray-400 no-underline">Already have an account? <a href="login">Log in</a></p>
    </div>

  </form>
      </div>
      </main>
    </div>  
  )
}

export default Register