import { NavLink } from "react-router-dom"





export const CountryCard = ({ country }) => {





    return (
        <>
            <main className="w-full h-full" >

                <div className="  p-9  w-fit my-4 rounded-[45px] container-card sm:mx-auto mx-6 border border-[#3d3c3c] items-center" >
                    <img src={`${country.flags.svg}`} className="w-full max-w-[30rem] h-[12rem]" alt="" />
                    <h1 className="text-2xl mt-3 font-semibold" >{country.name.common.length > 10 ? country.name.common.slice(0, 13) + "..." : country.name.common}</h1>
                    <h4 className="text-gray-400 font-semibold" >Population: <span className="text-white" >{country.population}</span></h4>
                    <h4 className="text-gray-400 font-semibold" >Region: <span className="text-white" >{country.region}</span></h4>
                    <h4 className="text-gray-400 font-semibold" >Capital: <span className="text-white" >{country.capital}</span></h4>
                    <NavLink to={`${country.name.common}`} ><button className="bg-[#202020] px-3 py-2 rounded-[25px] border mt-3 cursor-pointer hover:bg-[#161616]" >Read More</button></NavLink>
                </div>



            </main>
        </>
    )
}
