// import axios from "axios";

import axios from "axios";
const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})



// i want the data of all countries and going to export it as a function so that I can import that function and useit in another file where I WANT it to be appeared inm y UI

export const CountryData = () => {
   return api.get("/all?fields=name,population,region,capital,flags")
}



// getting the data for individual country data
export const getIndividualCountryData = (rasil) => {
    return api.get(`/name/${rasil}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}




















