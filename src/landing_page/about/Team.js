import React from "react";

function Team() {
  return (
    <div className="conatiner">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>
      <div
        className="row text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em", marginLeft: "150px" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%", marginTop:"-50px" }}
          ></img>
          <h4 className="mt-4 fs-5" style={{color:"black", fontWeight:"400"}}>Nithin Kamath</h4>
          <h5 className="fs-6">Founder, CEO</h5>
        </div>
        <div className="col-6 p-4" style={{ marginLeft: "-150px" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br/>
            hurdles he faced during his decade long stint as a trader. Today, <br/>
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee <br/>
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
