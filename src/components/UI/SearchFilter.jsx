

export const SearchFilter = ({ setFilter, filter, setSearch, search }) => {

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleSelectChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value)
    }


    return (
        <>
            <main className="w-full h-full" >


                {/*Search Input  */}
                <div className="flex md:gap-3 md:flex-row flex-col gap-8 items-center my-10 justify-center lg:justify-between lg:mx-16 " >
                    <input
                        type="search"
                        placeholder="Search"
                        name="search"
                        value={search}
                        onChange={handleInputChange}
                        className="border rounded-md pl-4 py-2 cursor-pointer" />

                    <select name="All" className="py-2 border   px-3 rounded-md bg-black text-white " value={filter} onChange={handleSelectChange} >
                        <option value="All">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>


                </div>

            </main>
        </>
    )
}
