import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle('Home')

  useEffect(() => {
    fetch("https://cloud-kitchen-server-pi.vercel.app/home-services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <section className="bg-gray-900 w-full">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:p-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl text-white font-bold leading-none sm:text-6xl">
              Welcome to
              <span className="text-secondary"> Cloud Kitchen</span>
            </h1>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"></div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      <section>
        <div className=" text-center mt-8 mb-8">
          <h1 className="text-black text-4xl font-bold">Our Services</h1>
          <p className="text-xl">Find all the best food at our Cloud Kitchen</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto">
          {services.map((service) => (
            <ServiceCard key={services._id} service={service} />
          ))}
        </div>
        <div className=" flex justify-center mt-10">
          <Link to="/services">
            <button
              type="button"
              className="flex items-center justify-center p-3 text-white font-semibold tracking-wide rounded-md bg-gray-900"
            >
              See All Services
            </button>
          </Link>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
                className="object-cover w-full lg:absolute h-80 lg:h-full"
              />
              <svg
                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
              </svg>
            </div>
            <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Add Services
                </p>
              </div>
              <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                You can add your service 
              </h5>
              <p className="mb-5 text-gray-800">
                You can add your service by clicking the add button. feel free to use it
              </p>
              <div className="flex items-center">
                <Link to='/addService'><button
                  type="submit"
                  className="btn btn-outline bg-secondary text-white"
                >
                  Add Services
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <section className="py-6 bg-gray-900">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
            <h1 className="text-5xl font-bold leading-none text-center text-white">
              Something totally different
            </h1>
            <p className="pt-2 pb-8 text-xl font-medium text-center text-white">
            we are cloud based kitchen to serve yoy fresh and healthy food almost every day
            </p>
          
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
