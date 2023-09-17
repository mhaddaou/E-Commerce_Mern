import React, { FormEvent } from "react";

function page() {




  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="register" className="bg-black w-screen h-screen">
      <div className="w-full h-full container  py-4">
        <header className="h-[5%] w-full bg--500 flex items-center">
          <img className=" h-16" src="/images/logo.png" alt="" />
        </header>
        <div className="w-full h-[95%]   text-white">
          <div className="w-full h-full pt-32 flex">
            <div className=" w-[60%] h-full  ">
              <div>
                <div className="flex items-center gap-4 w-full">
                  <p className=" opacity-70 tracking-wider">
                    Be part of this movement.{" "}
                  </p>
                  <hr className="w-64 h-px my-8 bg-purple-300 border-0 dark:bg-gray-700" />
                </div>
                <div>
                  <p className="text-4xl uppercase font-bold tracking-wider leading-relaxed opacity-90">
                    create your account
                  </p>
                </div>
                <div>
                  <p className="  text-slate-400 text-sm tracking-wider pt-3  leading-relaxed">
                    Already a member?{" "}
                    <span className=" text-purple-300 ">Log in</span>
                  </p>
                </div>
                <div className="py-14">
                  <form className=" space-y-10" >
                  <div className=" space-x-4 flex text-white">
                    <input required placeholder="First name" id="firstName" className=" inpname    " type="text" />
                    <input required placeholder="Last name" className=" inpname" type="text" />
                     
                  </div>
                  <div>
                    <input required placeholder="Email" className="inpmail" type="email" />
                  </div>
                  <div className="space-y-2">
                    <input placeholder="Password" className="inpmail" required type="password" />
                    <p className=" opacity-60 text-xs font-semibold tracking-wider ">Password must be contain 8 or more characters</p>
                  </div>
                  <div>
                      <p className=" opacity-80  text-xs font-semibold ">By clicking on sign up you are aggreeing with <span className="text-purple-300">term and conditions</span> </p>
                      <input type="text" />

                    
                  </div>

                  </form>
                </div>
              </div>
              <div></div>
            </div>
            <div className="w-[40%] h-full bg-blue-500 "></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
