import React from "react";
import "./VTcontent.css";
import ImgDis from "../components/imagedisplay/ImgDIs";
function VTcontent(props) {
  let data = props.data.expData;

  return (
    <div
      key={props.index}
      className="section__Jobs-styledContent"
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <div>{data.company} details here</div>
      {data.details.map((detail) => (
        <div className="section__Jobs-detail">{detail}</div>
      ))}
      {<ImgDis />}
    </div>
  );
}

export default VTcontent;
