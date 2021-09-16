import React from "react";

function About() {
    return (
        <section id="about">
            <div className="about-us">
                <h2>What is JEY’s NY Brewery Locator?</h2>
                <p>Our vision for an effortless, convenient app locating all breweries in New York has come to fruition as Software Engineers in progress. So no matter the place or time, you can look up breweries across New York State to enjoy delicious locally crafted beer and food! </p>
            </div>
            <div className="about-JEY">
                <h2>What does JEY stand for?</h2>
                <p>The creators of JEY’s Brewery Locator are three Flatiron students who needed to create a project for phase 2 solely using React JavaScript. We combined the first initial of our names to form another name. The J comes from John Sangalang, the E comes from Eva Tu, and the Y comes from Yaneizy Castillo!</p>
            </div>
            <div className="about-closing">
                <h3>Thank you for using our app!</h3>
                <h3>Cheers! - John, Eva, Yaneizy</h3>
                <img src="images/clinking_beer_mugs.gif" alt="gif"/>
            </div>
        </section>
    );
}

export default About;