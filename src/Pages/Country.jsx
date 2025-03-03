import { useEffect, useState, useTransition } from "react";
import { CountryCard } from "../components/Layout/CountryCard"
import { SearchFilter } from "../components/UI/SearchFilter"
import { Loader } from "../components/UI/Loader";
import { CountryData } from "../api/postApi";




export const Country = () => {

  const [isPending, startTransition] = useTransition(); // it runs without freezing the UI (allwoing the user to click button while the data is loading).
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [activeBtn, setActiveBtn] = useState(""); // for changing the color of the active btn

  
  useEffect(() => {
    startTransition(async () => {
      const response = await CountryData();
      setCountries(response.data);
      console.log(response.data);
    })
  }, [])

  if (isPending) return <Loader />

  // Logic of searching the country
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  // Logic of region or continentfiltering 
  const filterRegion = (country) => {
    if (filter === "All") {
      return country;
    }
    else {
      return country.region === filter
    }
  }


  // here is the main logic of search 
  const SearchCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  // Soring the countries in ascending and descneding order
  const sortCountries = (val) => {
    // Here I am making the countries into array and using spreading operator, basically duplicating
    // Because I don't want to disturb my orignial data
    const sortCountry = [...countries].sort((a, b) => {
      return val === "Asc"
        ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
    })
    setCountries(sortCountry);
    setActiveBtn(val)
  }





  return (
    <>
      <main className="w-full h-full" >
        <SearchFilter // sending the stateVaraible to searchFilter Component, SO That we can use it effectively. 
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        {/* Asc and Desc */}
        <div className="flex gap-8 lg:gap-4 justify-center lg:mt-[-85px] my-10" >

          <button onClick={() => sortCountries("Asc")} className={` text-lg rounded-[21px] border cursor-pointer py-2 px-4 ${activeBtn === "Asc" ? "bg-[#1c1223]" : "bg-[#202020]" }`} >Asc</button>
          <button onClick={() => sortCountries("Des")} className={` text-lg rounded-[21px] border cursor-pointer py-2 px-4 ${activeBtn === "Des" ? "bg-[#1c1223]" : "bg-[#202020]" }`} >Des</button>
        </div>



        {SearchCountries.length === 0 ? (
          <div className="flex justify-center items-center h-screen" >
            <h1 className="text-2xl " >Sorry, Country Not Found</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 overflow-x-hidden 2xl:grid-cols-4 mx-2 md:mx-15 lg:gap-8 lg:mx-16 my-8 gap-5  ">
            {SearchCountries.map((curCountry, index) => {
              return <CountryCard country={curCountry} key={index} /> // sent country value to CountryCard
            })}
          </div>
        )}



      </main>
    </>
  )
}
