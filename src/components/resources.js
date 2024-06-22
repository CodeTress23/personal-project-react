import React from 'react';
import { Link } from 'react-router-dom';

const Resources= () => {
    return (
        <main>
        <h3>Frequently seen illness</h3>
        <div className="resource-div">
            <h3>(Flu & Cold Season)</h3>
            <p>
                <cite><a href="https://medlineplus.gov/commoncold.html#:~:text=The%20common%20cold%20is%20a,get%20them%20at%20any%20time.">Rhinovirus</a></cite>: The common cold is a mild infection of your upper respiratory tract (which includes your nose and throat). Colds are probably the most common illness. Adults have an average of 2-3 colds per year, and children have even more. Colds are more common in the winter and spring, but you can get them at any time.
            </p>
            <p>
                <cite><a href="https://www.cdc.gov/rsv/index.html">RSV</a></cite> Respiratory syncytial (sin-SISH-uhl) virus, or RSV, is a common respiratory virus that usually causes mild, cold-like symptoms. Most people recover in a week or two, but RSV can be serious. Infants and older adults are more likely to develop severe RSV and need hospitalization. If you are age 60 or older, a vaccine is available to protect you from severe RSV. Talk to your healthcare provider to see if it is right for you. If you are pregnant, you can get an RSV vaccine between 32 to 36 weeks of pregnancy to protect your infant after birth, or a preventive antibody can be given to your baby after birth.
            </p>
            <p>
                <cite><a href="https://www.webmd.com/cold-and-flu/advanced-reading-types-of-flu-viruses">Flu A & Flu B</a></cite> Flu, or influenza, is a contagious respiratory infection caused by a variety of flu viruses. Symptoms of flu involve muscle aches and soreness, headache, and fever.
            </p>
            <p>
                <cite><a href="https://www.who.int/health-topics/coronavirus#tab=tab_1">COVID-19</a></cite> Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.

                Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.
            </p>
            <p>
                <cite><a href="https://medlineplus.gov/streptococcalinfections.html">Strep Throat</a></cite>: Strep is short for Streptococcus, a type of bacteria. There are several types. Two of them cause most of the strep infections in people: group A and group B.

                Group A strep causes:
                
                Strep throat - a sore, red throat. Your tonsils may be swollen and have white spots on them.
                Scarlet fever - an illness that follows strep throat. It causes a red rash on the body.
                Impetigo - a skin infection
                Toxic shock syndrome
                Cellulitis and necrotizing fasciitis (flesh-eating disease)
                
            </p>
            <p>
                <cite><a href="https://www.healthline.com/health/allergies/seasonal-allergies">Seasonal Allergies</a></cite>Seasonal Allergies: An allergy (allergic rhinitis) that occurs in a particular season is more commonly known as hay fever. About 8 percent of Americans experience it, reports the American Academy of Allergy, Asthma & Immunology.
            </p>
        </div>

    </main>
    )
}

export default Resources;