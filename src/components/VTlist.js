import React from "react";

import "./VTlist.css";

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left" }}>
      <button
        className="section__Jobs-buttonCompany"
        onClick={Clicked}
        style={{ color: "#000000" }}
      >
        <div>
          <div>{props.data.expData.company}</div>
          <div style={{ fontSize: "12px" }}>{props.data.expData.details}</div>
        </div>
      </button>
    </li>
  );
}

export default VTlist;
