import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import VTlist from "./VTlist";
import VTcontent from "./VTcontent";

import "./VerticalTab.css";

function VerticalTab(props) {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }
  return (
    <Container className="section__Jobs-container">
      <div style={{ display: "flex" }}>
        <div style={{ width: "33.3%", float: "left" }}>
          <div
            className="section__Jobs-styledTab"
            style={{ height: "100vh", overflow: "auto" }}
          >
            <ul className="section__Jobs-styledTabList">
              {props.data.jobs.map((job, index) => (
                <VTlist
                  key={index}
                  onClick={btnClick}
                  data={job}
                  index={index}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
          </div>
        </div>
        <div style={{ width: "66.6%", float: "right" }}>
          {props.data.jobs.map((job, index) => (
            <VTcontent
              data={job}
              key={index}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
        </div>
      </div>
      <span
        className={
          activeTabId === 0
            ? "index1-chosen"
            : activeTabId === 1
            ? "index2-chosen"
            : "index3-chosen"
        }
      >
        &nbsp;
      </span>
    </Container>
  );
}

export default VerticalTab;
