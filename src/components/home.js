import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Emergency from '../assets/ER.jpg'
import Urgent from '../assets/urgentcare.jpeg'
import Doc from '../assets/doctor-office.jpeg'


const Home = () => {
    
   return (
        <div>
          
          <main>
            <div className="intro">
                <h1>Simplified Health</h1>

                <p>
                 Welcome to Simplified Health, where finding the necessary healthcare option has never been easier. Whether it be common cold/ flu or long term chronic diseases, we are here to steer you in the right direction. Our Health quiz asks the right questions to help you make an improved decision. We also provide verifiable resources to help you with your healthcare needs.
                </p>
            
            </div>
        <div className="intro-images">
            <div className="intro-images1">
                <p>
                In many cases when people are sick and they need help outside the home they aren't sure where they can turn and get help. Making the choice to go to one facility over the other sometimes is a daunting task especially when thinking about other factor like the amount of time it will take or even familiarity with provider or medical facility. 
                </p>
            </div>
            <div className="intro-images2">
               <div className="intro-images-sec"> 
                    
                        <img src={Emergency} alt="emergency room signage"/>   
                        <cite><a href="https://www.lawinsider.com/dictionary/emergency-care#:~:text=Emergency%20Care%20means%20management%20for,the%20insured%20person's%20health.">Emergency Care</a></cite>
                    
                    <p> Management for an illness or injury which results in symptoms which occur suddenly and unexpectedly, and requires immediate care by a medical practitioner to prevent death or serious long term impairment of the insured person's health.</p>
                </div>
                <div className="intro-images-sec">
                    <img src={Urgent} alt="urgentcare signage"/> 
                    <cite><a href="https://www.health.ny.gov/facilities/public_health_and_health_planning_council/meetings/2013-07-17/docs/2013-07-03_urgent_care_policy_options_final.pdf">Urgent Care</a></cite>  A source for outpatient diagnosis and treatment for ambulatory patients with acute illness or minor traumas that are not life threatening or permanently disabling.
                </div>
                <div className="intro-images-sec">
                    <img src={Doc} alt="doctors office image"/> 
                    <cite><a href="https://www.ncbi.nlm.nih.gov/books/NBK232631/#:~:text=Primary%20care%20is%20the%20provision,context%20of%20family%20and%20community.">Primary Care</a></cite> Provision of integrated, accessible health care services by clinicians who are accountable for addressing a large majority of personal health care needs, developing a sustained partnership with patients, and practicing in the context of family and community.
                </div>
            </div>
        </div>
        <div className="preview">
            <a href="/login"><h2>Take our Quiz here!</h2></a>
        </div>
    </main>
    </div>
    )
}

export default Home;