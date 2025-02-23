import { MdOutlineArrowRightAlt } from "react-icons/md";
import { About } from "./About";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="w-full h-full" >
        <div className="md:h-full  h-screen lg:mx-24 justify-between md:py-16 py-28 flex flex-col items-center  xl:flex-row" >
          {/* Text Box */}
          <div className="mx-6 md:mx-16  flex flex-col gap-5" >
            <h1 className="text-3xl font-semibold " >Explore the World, One Country at a Time.</h1>
            <p className="text-xl" >Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details for you.</p>
    <NavLink to="/country" ><button className="flex items-center cursor-pointer gap-2 bg-[#202020] w-fit px-4 py-2 rounded-[21px] border" >
              Start Exploring  <MdOutlineArrowRightAlt className="text-2xl" />
            </button></NavLink>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center" >

            <img src="/world.png" alt="World Image" className="md:w-[40rem] " />
          </div>

        </div>
      </section>

      <About/>

    </>


  )
}
