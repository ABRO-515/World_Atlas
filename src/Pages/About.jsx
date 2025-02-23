import CountryData from "../api/countryData.json"

export const About = () => {
  return (
    <main className="w-full h-full" >
      <div className="mx-4 my-6" >
        <h1 className="text-xl mt-12 text-center font-semibold" >Here are the Interesting Facts we are proud of</h1>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 grid-cols-1  md:grid-cols-2 lg:gap-10 md:gap-6 my-8  md:mx-3 lg:mx-12 ">
          {/* Cards */}
          {CountryData.map((country) => {
            return (
              <div className="bg-[#171019] flex-col flex w-fit p-10  gap-1 my-4 rounded-[45px] container-card " key={country.id}>
                <h1 className="text-2xl font-semibold" >{country.countryName}</h1>
                <h4 className="text-gray-400 font-semibold" >Capital: <span className="text-white" >{country.capital}</span></h4>
                <h4 className="text-gray-400 font-semibold" >Population: <span className="text-white" >{country.population}</span></h4>
                <h4 className="text-gray-400 font-semibold" >Interesting Fact: <span className="text-white" >{country.interestingFact}</span></h4>
              </div>
            )
          })}





        </div>
      </div>
    </main>
  )
}
