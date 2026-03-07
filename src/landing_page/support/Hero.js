import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4 className='fs-4' style={{fontWeight:"400"}}>Support Portal</h4>
                <a href='' className='link-offset-1'>Track Tickets</a>
            </div>
            <div className='row p-3' style={{marginLeft:"129px"}}>
                <div className='col-6 p-5'>
                    <h1 className='fs-3' style={{fontWeight:"400", marginTop:"-50px",lineHeight:"1.5" ,marginBottom:"50px"}}>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-3' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'/><br/>
                    <a href='' className='link-offset-1'>Track account opening</a>
                    <a href='' className='link-offset-1'>Track segment activation</a>
                    <a href='' className='link-offset-1'>Intraday margins</a> <br/>
                    <a href='' className='link-offset-1'>Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3 mb-3' style={{fontWeight:"400", marginTop:"-50px"}}>Featured</h1>
                    <ol style={{lineHeight:"2"}}>
                        <li><a href='' className='link-offset-2'>Current Takeovers and Delisting - June 2024</a></li>
                        <li><a href='' className='link-offset-2'>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;