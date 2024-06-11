import React from 'react'

function Home() {
  return (
    <>
     <div className="home py-5 d-flex align-items-center" id="header">
        <div className="container text-light py-5"  data-aos="fade-right"> 
            <h1 className="headline">Best <span className="home_text">TECH-SOLUTION </span>
            <br/>Plans For You</h1>
            <p className="para para-light py-3">Whatever may be your requirement – be it a simple and user friendly website design, a complex data driven web application development, an ecommerce website, a native or cross platform mobile app development, a logo and brand identity design, a video production or a full fledged digital marketing campaign – we have a solution for you.</p>
            {/* <div className="d-flex align-items-center">
                <p className="p-2"><i className="fas fa-laptop-house fa-lg"></i></p>
                <p>Lorem ipsum dolor sit amet.</p>  
            </div>
            <div className="d-flex align-items-center">
                <p className="p-2"><i className="fas fa-wifi fa-lg"></i></p>
                <p>Lorem ipsum dolor sit amet.</p>  
            </div> */}
            <div className="my-3">
                <a className="btn" href="#plans">View Plans</a>
            </div>
        </div> 
    </div> 


    
    </>
  )
}

export default Home