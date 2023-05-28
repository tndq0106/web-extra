import React from 'react';
import Nav from "./nav";

function Header(){
    return(
        <div className="header">
        <div className="wrapper">
          <div className="nav">
            <i className="fa-brands fa-instagram"></i>
            <img src={Img1} alt="" style={{
                  cursor: "pointer", marginLeft:"280px", 
                }}/>
            {userInfo && Object.keys(userInfo)?.length > 0 ? (
              <p
                style={{
                  cursor: "pointer", paddingTop:"20px"
                }}
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  setTimeout(() => {
                    window.location.href = "/login";
                  }, 1000);
                }}
              >
                Logout
              </p>
            ) : (
              <p
                style={{
                  cursor: "pointer", paddingTop:"20px"
                }}
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </p>
            )}
            <i className="fa-solid fa-bars" onClick={() => openNav()}></i>
          </div>
        </div>
        <div className="image-container">
          <div className="couvee-text">
            <img src={Img2} alt="" />
          </div>
          <div className="image-hands-container">
            <img className="right-hand" src={Img3} alt="" />
            <img className="left-hand" src={Img4} alt="" />
          </div>
        </div>
      </div>
    )
}
export default Header;