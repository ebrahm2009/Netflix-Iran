import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const[rememberlogin, setRememberlogin]= useState (true);
  const[email, setEmail] = useState ('');
  const[password, setPassword] = useState ('');
  const handleformsubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (<>
    <div className='w-full h-screen'>
      <img className=' sm-block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/caa05038-1926-4db8-8c14-605f12350c4c/GB-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="///" />
      <div className=" bg-black/70 fixed top-0 left-0 w-full h-screen" />
      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-nsans-bold">Login</h1>
            <form 
            onSubmit={handleformsubmit}
            className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-300/50  rounded"
                type="email"
                placeholder="Email "
                autoComplete="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

              <input
                className="p-3 my-2 bg-slate-500 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <button className="py-3 my-6 bg-red-600 rounded">
                  Login
                </button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" checked={rememberlogin} onChange={(e)=> setRememberlogin(!rememberlogin)}></input>
                    Remember me
                  </p>
                  <p/>
                  <p>need help ?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">
                    New to Netflix ?
                  </span>
                  <Link to="/Signup">Sign up</Link>
                </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Login