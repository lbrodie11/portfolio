import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Liberty Mutual Insurance</h3>
          <p className="info">
            Software Developer
            <span>&bull;</span>
            <em className="date">February 2017 - Present</em>
          </p>
          I was accepted into a Software Development program at Liberty Mutual. 
          I attended the Software Guild Java Boot Camp in Louisville, KY for 
          12 weeks as part of my training. I currently work on the Pivotal Cloud 
          Foundry Platform at Liberty Mutual as a Software Developer/DevOps Engineer. 
          <p>

          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <p className="info">
            Network Analyst
            <span>&bull;</span>
            <em className="date">March 2012 - February 2017</em>
          </p>

          <p>
          I previously was a Network Analyst in Hosting and Network Communications 
          at Liberty Mutual. I specialized in Telephony and Voice Administration, 
          Microsoft Lync/Unified Messaging, Avaya Telephony Products, Network Engineering, 
          and Aruba Access Points.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
