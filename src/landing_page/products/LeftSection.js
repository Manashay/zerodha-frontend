import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container mt-5" style={{marginLeft:"100px"}}>
    <div className="row">
        <div className="col-6 ">
            <img src={imageURL}></img>
        </div>
        <div className="col-6 p-5 mt-5" style={{width:"500px", lineHeight:"1.8", marginLeft:"50px"}}>
            <h1 className="mb-4 fs-2" style={{marginTop:"-50px"}}>{productName}</h1>
            <p>{productDescription}</p>
            <div className="">
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="mt-3">
            <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"></img></a>
            <a href={appStore}><img src="media/images/appStoreBadge.svg" style={{marginLeft:"20px"}}></img></a>
            </div>
        </div>
    </div>
  </div>;
}

export default LeftSection;
