import React from 'react'

function Nav(){
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    console.log("userInfo", userInfo);

    function openNav() {
        document.getElementById("overlay-menu").style.height = "100%";
    }
    function closeNav() {
        document.getElementById("overlay-menu").style.height = "0%";
    }
    return(
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
    )
}

export default Nav;