import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  
return <div className="container mt-5">
        <div className="row">
            <div className="col-6 p-5" style={{marginTop:"150px", width:"600px"}}>
                <h1 className="mb-4 fs-2">
                    {productName}
                </h1>
                <p>{productDescription}</p>
                <div className="">
                    <a href={learnMore} style={{textDecoration:"none"}}>{learnMore}&nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="col-6 ">
                <img src={imageURL}></img>
            </div>
        </div>
    </div>
}

export default RightSection;
