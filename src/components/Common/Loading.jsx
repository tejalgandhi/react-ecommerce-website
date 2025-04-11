import React from "react";
import "./Loading.css";
import loading from "../../assets/loading.gif";

const Loading = () => {
  // return <img src={loading} className="loading align_center"></img>;
  return <div className="loaderDiv"><span className="loader"></span></div>;
};

export default Loading;
