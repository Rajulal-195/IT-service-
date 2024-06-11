import React from 'react'

function About() {
    return (
        <>
            <div className="about d-flex align-items-center text-light py-5" id="about">
                <div className="container" >
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-7" data-aos="fade-right">
                            <p>ABOUT US</p>
                            <h1>We are top tech solution<br /> service company</h1>
                            <p className="py-2 para-light">Againsoft is software development and web development Company based in Jaipur (Rajasthan) INDIA. Ever since our establishment, we are growing every day to meet the growing demands of our clients and surpass their expectations. Our expertise in providing industry-specific services and custom solutions has enabled us to deliver absolute business solutions to our worldwide clients. We are providing our services to small as well as big corporate houses including individual entrepreneurs using our unmatched expertise and cutting edge technology.</p>
                            <p className="py-2 para-light">Againsoft puts together a bunch of passionate minds to transform your visions into
                                reality imparting an awesome digital experience for your users.</p>

                            <div className="my-3">
                                <a className="btn" href="#your-link">Learn More</a>
                            </div>
                        </div>
                        <div className="col-lg-5 text-center py-4 py-sm-0" data-aos="fade-down">
                            <img className="img-fluid" src="images/about.jpg" alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About