import { useEffect, useState, useTransition } from "react"
import { NavLink, useParams } from "react-router-dom"
import { getIndividualCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";

export const CountryDetails = () => {

  // useParams() extracts the dynamic route parameter from the url. in  this case it retrives the country ID from the Url and fetchs the data for that country
  const params = useParams();


  const [isPending, startTransition] = useTransition();
  const [individualCountry, setIndividualCountry] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      // Here is the params we have written Id beacuse in App.jsx we have written id. So use params checks that id in the url and snds that partiular id to post api and post api seraches for our individual country.
      const response = await getIndividualCountryData(params.id);
      setIndividualCountry(response.data);
      console.log(response.data);

    })
  }, [])


  if (isPending) return <Loader />

  console.log(params);


  return (
    <>
      <main className="w-full h-full" >
        {individualCountry.map((val, index) => {
          return (
            <div key={index} className="  p-9 md:px-16 lg:my-16 items-center justify-center  w-fit md:my-4 rounded-[45px]  border border-[#3d3c3c] container-card md:mx-auto mx-6 my-8 gap-5 2xl:gap-56 xl:gap-24 flex flex-col xl:flex-row" >
            <img src={`${val.flags.svg}`} className="w-full max-w-[30rem] h-[17rem]" alt="" />
            <div className="flex flex-col gap-4 lg:w-[-webkit-fill-available]" >
              <h1 className="text-2xl mt-3 font-semibold" >{val.name.official}</h1>
              <h4 className="text-gray-400 font-semibold" >Native Names: <span className="text-white" >{Object.keys(val.name.nativeName).map((elem)=>val.name.nativeName[elem].common).join(", ")}</span></h4>
              <h4 className="text-gray-400 font-semibold" >Population: <span className="text-white" >{val.population.toLocaleString()}</span></h4>
              <h4 className="text-gray-400 font-semibold" >Region: <span className="text-white" >{val.region}</span></h4>
              <h4 className="text-gray-400 font-semibold" >Sub Region: <span className="text-white" >{val.subregion}</span></h4>
              <h4 className="text-gray-400 font-semibold" >Capital: <span className="text-white" >{val.capital}</span></h4>
              <h4 className="text-gray-400 font-semibold" >Top Level Domain: <span className="text-white" >{val.tld}</span></h4>
              <h4 className="text-gray-400 font-semibold" >Currencies: <span className="text-white" >{Object.keys(val.currencies).map((elem)=>val.currencies[elem].name).join(", ")}</span></h4>
              <h4 className="text-gray-400 font-semibold" >Languages: <span className="text-white" >{Object.keys(val.languages).map((elem)=>val.languages[elem]).join(", ")}</span></h4>
              <NavLink to="/country" ><button className="bg-[#202020] px-3 py-2 rounded-[25px] border mt-3 cursor-pointer hover:bg-[#161616]" >Go Back</button></NavLink>
            </div>
          </div>
  
  )
        })}
       
      </main>
    </>
  )
}
