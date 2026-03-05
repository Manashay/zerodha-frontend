import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1 className='fs-3 mb-4'>The Zerodha Universe</h1>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3'>
                    <img src='media/images/smallCaseLogo.png' className='mb-2'></img>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/streakLogo.png' className='mb-2' style={{width:"35%"}}></img>
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/sensibullLogo.svg' className='mb-2' style={{width:"50%"}}></img>
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src='media/images/zerodhaFundhouse.png' className='mb-2' style={{width:"50%"}}></img>
                    <p className='text-small text-muted'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src='media/images/goldenpiLogo.png' className='mb-2' style={{width:"45%"}}></img>
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src='media/images/dittoLogo.png' className='mb-2' style={{width:"30%"}}></img>
                    <p className='text-small text-muted'>insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-3 mt-3'  style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>

        </div>
     );
}

export default Universe;