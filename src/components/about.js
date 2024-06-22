import React from 'react';
import Team from '../assets/health-team.jpeg'

const About = () => {
    return (
        <main className='About'>
            <h3>About Us</h3>
            <div className="about-page">
                <img src={Team} alt="healthcare workers"/>
            
                <p className="about-us">
                    Healthcare as whole can be very confusing and intimidating for many. After years of working in the healthcare industry in different settings and working with diverse patient populations, I have come to realize that not everyone has the knowledge to get the help they might so desperately need and where to get it. Having patient with life threatening injuries show up at your urgent care or pcp provider office is unfortunate for all parties involved, for patient who might be wasting valuable time that might be essential to their survival. So, thats why this site was created to help people make a more informed decision and help make the process of finding the best care a smoother process. Resources also updated regularly for helping your own research purposes. 
                </p>
            </div>    
        </main>
    )
}

export default About;