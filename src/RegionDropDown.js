import React from "react";

const RegionDropDown = ({ setRegion }) => {
  return (
    <div>
      <select onChange={(event) => setRegion(event.target.value)}>
        <option value=""> select region </option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
        <option>Polar</option>
      </select>
    </div>
  );
};
export default RegionDropDown;
