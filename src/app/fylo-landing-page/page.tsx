"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/components/fylo-landing-page/img/logo.svg";
import IconPhone from "@/components/fylo-landing-page/img/icon-phone.svg";
import IconEmail from "@/components/fylo-landing-page/img/icon-email.svg";
import IconFb from "@/components/icons-social-netwoks/icon-fb.svg";
import IconTw from "@/components/icons-social-netwoks/icon-tw.svg";
import IconInsta from "@/components/icons-social-netwoks/icon-instagram.svg";


const socialIconStyles = `
  w-10 h-10 fill-white text-white hover:fill-[hsl(224,93%,58%)]
  cursor-pointer transition-all duration-300
  rounded-full border border-white hover:border-[hsl(224,93%,58%)] p-2
`;


export default function FyloLandingPage() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [footeremail, setFooterEmail] = useState("");
  const [footerror, setFooterError] = useState("");


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
    } else if (!emailRegex.test(email)) {
      setError("Please check your email");
    } else {
      setError("");
      // Aquí puedes continuar con el submit real
      console.log("Email submitted:", email);
    }
  };

  const footerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footeremail) {
      setFooterError("Please enter your email address.");
    } else if (!emailRegex.test(footeremail)) {
      setFooterError("Please check your email");
    } else {
      setFooterError("");
      // Aquí puedes continuar con el submit real
      console.log("Email submitted:", footeremail);
    }
  };


  return (
    <div className="relative bg-gray-50 min-w-full max-w-[1024px] pt-2">
      <header className="flex flex-row items-center justify-between py-0 px-2 md:px-26 md:pt-20 md:pt-0">
        <Image
          src="/fylo-landing-page/img/logo.svg"
          alt="Fylo Logo"
          width={100}
          height={49}
          className="md:h-[60px] md:w-auto"
          priority
        />
        <nav className="">
          <ul className="flex space-x-2 text-gray-500 text-lg md:text-2xl md:space-x-20">
            <li><a href="#features" className="hover:text-blue-600">Features</a></li>
            <li><a href="#team" className="hover:text-blue-600">Team</a></li>
            <li><a href="#signin" className="hover:text-blue-600">Sign In</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col">
        {/* Section One */}
        <section className="flex flex-col items-center justify-center py-0 px-0 md:flex-row md:px-26">
          <div className="order-2 md:order-1 md:max-w-[850px]">
            <h1 className="text-2xl font-bold my-12 text-gray-900 text-center px-4 md:mb-6 md:text-left md:text-5xl md:leading-relaxed">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="mb-8 text-lg text-gray-700 px-4 text-center mb:text-left md:max-w-[900px] md:text-start md:text-2xl">
              Fylo stores your most important files in one secure location. 
              Access them wherever you need, share and collaborate with friends, 
              family, and co-workers.
            </p>
            <form 
              className="flex flex-col gap-4 px-4 md:flex-row md:max-w-[800px]"
              onSubmit={handleSubmit}
              noValidate
              >
                <div className="flex flex-col md:w-[300px]">

                  <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                className={`border ${error ? 'border-red-500' : 'border-black-300'} px-5 py-3 rounded-lg flex-1 focus:outline-blue-600 md:py-3`}
              />
              {error && (
                <span className="text-red-500 text-sm mt-2">{error}</span>
              )}

                </div>
              

              <button type="submit" className="bg-blue-600 h-15 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:cursor-pointer transition md:px-20 md:py-5">
                Get Started
              </button>
            </form>
          </div>

          <div className="order-1 mt-30 px-4 md:order-2">
            <Image
              src="/fylo-landing-page/img/illustration-1.svg"
              alt="Illustration 1"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </section>


{/* Curve Background */}
        


        {/* Section Two */}
        <section className="flex flex-col items-center justify-center py-20 px-6 bg-white md:flex-row md:justify-between md:px-26 md:gap-8 md:pb-60 md:pt-30">
          <div className="order-2 md:order-1">
            <h2 className="text-lg font-bold mb-6 text-gray-900 md:min-w-[900px] md:text-5xl">
              Stay productive, wherever you are
            </h2>
            <p className="text-lg text-gray-700 md:max-w-[600px]">
              Never let location be an issue when accessing your files. Fylo has you 
              covered for all of your file storage needs.
            </p>
            <p className="mt-4 text-lg text-gray-700 md:max-w-[600px]">
              Securely share files and folders with friends, family and colleagues for 
              live collaboration. No email attachments required!
            </p>
            <div className="flex flex-col items-center md:max-w-[400px] md:items-start">
              <div className="flex items-center gap-2 text-[#3DA08F] mt-6 cursor-pointer font-semibold hover:text-[hsl(170, 71.40%, 60.20%)">
                See how Fylo works
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#3DA08F" />
                  <path d="M8.582 8l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 11.65l.363.35 2.074-2z" fill="#FFF"/>
                </svg>
              
              </div>
              <div className="h-px bg-[#3DA08F] w-full mb-8 mt-1 max-w-45 block" />
            </div>
            <div className="testimonial bg-white p-6 rounded-lg shadow mt-10 md:max-w-[500px]">
              <Image
              src={"/fylo-landing-page/img/icon-quotes.svg"}
              alt="Quote Icon"
              width={24}
              height={24}
              />
              <p className="text-gray-700 mt-4">
                Fylo has improved our team productivity by an order of magnitude. Since 
                making the switch our team has become a well-oiled collaboration machine.
              </p>
              <div className="uno flex items-center mt-6">
                <Image
                  src="/fylo-landing-page/img/avatar-testimonial.jpg"
                  alt="Testimonial"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="info-profile ml-4">
                  <span className="name font-bold block text-gray-900">Kyle Burton</span>
                  <span className="text-sm text-gray-600">Founder & CEO, Huddle</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 md:max-w-[700px]">
            <Image
              src="/fylo-landing-page/img/illustration-2.svg"
              alt="Illustration 2"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </section>
      </main>

      <footer className="bg-[hsl(243,87%,12%)] text-white pb-16 mt-0 ">
        <div className="pre-footer flex flex-col items-center justify-between px-6 py-20 text-center bg-[hsl(238,22%,44%)] md:flex-row md:px-26 md:py-30 md:grid md:grid-cols-2 md:gap-8">
          <div className="info mb-8 md:mb-0 md:text-left md:max-w-[600px]">
            <h2 className="text-2xl font-bold mb-4 md:text-4xl">Get early access today</h2>
            <p className="text-gray-200 md:text-xl">
              It only takes a minute to sign up and our free starter tier is extremely generous. 
              If you have any questions, our support team would be happy to help you.
            </p>
          </div>
          <form 
            className="mail flex flex-col gap-3 w-full px-6 "
            onSubmit={footerSubmit}
            noValidate
            >
            <input
              type="email"
              placeholder="email@example.com"
              value={footeremail}
              onChange={(e) => setFooterEmail(e.target.value)}
              className={`border ${footerror ? 'border-red-500' : 'border-gray-300'} px-5 py-2 rounded-lg text-black bg-white md:max-w-[900px] md:py-6`}
            />
            {footerror && (
        <span className="text-white text-sm mt-0 md:text-left">{footerror}</span>
      )}
            <button type="submit" 
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold transition hover:bg-blue-400 hover:cursor-pointer md:max-w-[300px] md:py-6">
              Get Started For Free
            </button>
            
          </form>
        </div>



        <div className="main-footer mx-auto mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-26 md:py-15">
          <div  className="flex flex-col items-start">
            <Logo className="w-44 h-12 fill-white my-8" />

            <span className="block mb-6 flex flex-row gap-2 hover:text-[hsl(224,93%,58%)]  cursor-pointer">
              <IconPhone className="w-6 h-4 fill-white hover:fill-[hsl(224,93%,58%)]" /> Phone: +1-543-123-4567
            </span>
            <span className="block flex flex-row gap-2 hover:text-[hsl(224,93%,58%)] cursor-pointer">
              <IconEmail className="w-6 h-4 fill-white hover:fill-[hsl(224,93%,58%)]" />
              example@fylo.com
            </span>
          </div>

          <div className="flex flex-col gap-y-6 items-start md:mt-28">
            <span className="hover:text-[hsl(224,93%,58%)] cursor-pointer">About Us</span>
            <span className="hover:text-[hsl(224,93%,58%)] cursor-pointer">Jobs</span>
            <span className="hover:text-[hsl(224,93%,58%)] cursor-pointer">Press</span>
            <span className="block hover:text-[hsl(224,93%,58%)] cursor-pointer">Blog</span>
          </div>

          <div className="flex flex-col gap-y-6 items-start md:mt-28">
            <span className="hover:text-[hsl(224,93%,58%)] cursor-pointer">Contact Us</span>
            <span className="hover:text-[hsl(224,93%,58%)] cursor-pointer">Terms</span>
            <span className="hover:text-[hsl(224,93%,58%)] cursor-pointer">Privacy</span>
          </div>
          

          <div className="flex justify-center space-x-4 md:mt-28 md:justify-start">

            <IconFb 
              className={socialIconStyles} 
            />

            <IconTw 
              className={socialIconStyles} 
            />

            <IconInsta 
              className={socialIconStyles} 
            />

          </div>

        </div>

      </footer>
    </div>
  );
}