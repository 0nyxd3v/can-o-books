import React from 'react'
import { Component } from "react";


class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
      <section className='about-sect'>
        <div className='about-div'>
          <h1 className='about-h2'>About Page</h1>
        </div>
        <div className='about-div'>
          <h2>Nerissa Leynes</h2>
          <p>Hi, my name is Nerissa Leynes. I served eight years of Active Duty in the Navy and am currently in the reserves. I decided to pursue a career in the tech field because I found coding interesting, stressful, and challenging. Coding allows me to implement features and make the web page interactive. Also, I’d like to build an app and hope to work in a team with other software developers in the tech industry. Learn coding here with me in Norfolk, VA
          </p>
        </div>
        </section>
        <section className='about-sect'>
        <div className='about-div'>
          <h2>Monica Ramirez</h2>
          <p> U+1F44B Hello, hello, hello! U+1F44B I'm Monica Ramirez, I'm new to the tech field. Coding has been a rollercoaster of ups and downs, but I'm having the best time of my life. Slowly creeping up to wanting to work on backend. Coding challenges me and pushes me, I love it. If I'm not in front of the screen, you can find me at the gym lifting weights or doing mom things. Thanks for checking out our web app.
          </p>
        </div>
        </section>
      </>
    )
  }
};

export default About;
