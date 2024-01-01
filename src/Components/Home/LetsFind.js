import React from "react";
import "./LetsFind.css";
import { useNavigate } from "react-router-dom";

const LetsFind = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };    

  return (
    <div className="helpYouWinBody">
      {/* <div class="d-flex verticleLine">
        <div class="vr"></div>
      </div> */}
      <div className="helpYouWinContent">
        <h1>Let's find success together</h1>
        <div className="helpYouWinContent-btns">
          <button onClick={()=> {navigate('/contact'); scrollToTop();}}>
            FIND RIGHT SUCCESS FOR YOUR BUSINESS
          </button>
          <button onClick={()=> {navigate('/careers'); scrollToTop();}}>
            FIND RIGHT SUCCESS FOR YOUR CAREER
          </button>
        </div>
      </div>
    </div>
  );
};

export default LetsFind;
