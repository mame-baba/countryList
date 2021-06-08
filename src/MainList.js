import React, { useEffect, useState } from "react";
import CountryData from "./CountryData.json";
import RegionDropDown from "./RegionDropDown";
import SearchBox from "./SearchBox";

const MainList = () => {
  const [selectedCountries, setSelectedCountries] = useState(CountryData);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let filteredCountries = CountryData.filter((country) => {
      return (
        (country.name.toLowerCase().includes(search.toLowerCase()) ||
          country.capital.toLowerCase().includes(search.toLowerCase())) &&
        country.region.includes(region)
      );
    });
    setSelectedCountries(filteredCountries);
  }, [search, region]);

  return (
    <div>
      <SearchBox setSearch={setSearch} />
      <RegionDropDown setRegion={setRegion} />
      <div className="mainList">
        {selectedCountries.map((list, index) => (
          <div key={index} className="countryList">
            <img
              className="countryFlag"
              src={list.flag}
              alt={list.name + "country-flag"}
            />

            <h1> country name: {list.name}</h1>
            <h2> population: {list.population} </h2>
            <h3>capital:{list.capital}</h3>
            <h4>region: {list.region}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MainList;
