import React from "react";

import "./realtor.scss";

const RealtorList = ({ realtors, onChange }) => {
  const onRealtorChange = e => {
    onChange(e.target.value);
  };

  const realtorList = realtors.map(realtor => {
    return (
      <option key={realtor.id} value={realtor.id}>
        {realtor.name}
      </option>
    );
  });
  return (
    <div>
      <label className="sr-only" htmlFor="realtor-select">
        select realtor
      </label>
      <select
        id="realtor-select"
        className="custom-select"
        onChange={onRealtorChange}
      >
        {realtorList}
      </select>
    </div>
  );
};

export default RealtorList;
