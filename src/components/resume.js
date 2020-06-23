import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import picture from "../img/pp.jpg"


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={picture}
                alt="avatar"
                style={{height: '250px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Asad Rauf</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid teal', width: '50%'}}/>
            <p>Talented Computer Technologist with BS degree and I am currently obtaining a Full Stack Developer Certificate from one of the popular University UNC coding bootcamp productive in Team and Self manage projects

                I am currently a Level 2 Engineering Technician in the Power and RF Department at Cree INC. I supervise power and RF EPI manufacturing and ensure that the reactors are setup with the desired recicipies. I help minimize downtime and aid senior engineers with problem solving, testing, and data analysis. I train new employees on probes FTIR, CV, and scrubber, as well as create documentation for training guides for probes and robotics software. I record jmp queries to collect data on tool yields and performance.</p>
            <hr style={{borderTop: '3px solid teal', width: '50%'}}/>
            <h4 style={{color: 'grey'}}>Skills Areas</h4>
            <h5>UX/UI Design</h5>
            <p>
            Professional working experience in popular CSS framework Bootstrap and Materialize. Also professioal working experience in one of the most popular CSS pre-processor SASS. By having these skills i am comfortable to design user friendly, attractive and resposive web applications
            </p>
            <h5>Test/Debugging</h5>
            <p>
            I write and test code to ensure compatibility and stability in a way that is easy to understand.
            </p>
            <h5>Backend</h5>
            <p>
            Experience creating and maintaining databases, retrieving data from APIs, and other back end processes.
            </p>
            <h5>Agile</h5>
            <p>
            I have experience taking an iterative approach to software development and working in sprints.
            </p>
            <hr style={{borderTop: '3px solid teal', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2014}
              schoolName="Mohammad Ali Jinnah University BS(CS)"
               />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="UNC Coding Bootcamp, Chapel Hill (Full Stack Developer)"
                  />
                <hr style={{borderTop: '3px solid teal'}} />

              <h2>Experience</h2>

            <Experience
               startYear={"2017-02"}
               endYear={"2017-07"}
              jobName="Associate Engineer (Transenterix INC)"
              jobDescription="Testing of Surgical Robotic Devices for reliability and stability Test Documentation of Surgical Robotic Devices using Good Documentation Practices Documentation to evaluate device design regarding design issues in testing phase Documentaion of Technical and Instruction Manuals Perform manual and auto testing of code (selenium)."
              />

              <Experience
               startYear={"2017-07"}
               endYear={"present"}
                jobName="Level II Process Engineer Tech (Cree INC)"
                jobDescription="Power and RF epi manufacturing supervision and to make sure the reactors are setup with the desire recicipies.
                Minimize the downtime and facilitate seniors engineers in problems solving and analyzing.
                Developed and provided support to fabrication processes and improved all existing processes.
                Analyzed all processes and identified all fundamental issues and assisted in appropriate resolutions.
                Performed routine equipment maintenance on nights and weekends to prevent downtime.
                Analyzed all process data with various statistical tools.
                "
                />

              <Experience
               startYear={"2015-01"}
               endYear={"2016-01"}
                jobName="IT Administrator (Three Star Enterprises, Dubai)"
                jobDescription="As a part of Software Development Team i was responsible for development Report Writing ( Software Requirement Specification) Analyzing of Functional and Non Functional Requirements Creating a Database using Sql server 2008 Creating and Modifying ERD and Sequence Diagrams in updating phase of database.
                "
                />

               <Experience
               startYear={"2014-02"}
               endYear={"2014-11"}
                jobName="Inter Assistant Software Engineer (Fincon)"
                jobDescription="Was responsible for Analysis and Design activities and has work on all aspect of product life cycle I was assigned on projects and implementation of process flows, using Microsoft .Net Framework 2.0, 3.0, 3.5 and 4.0, MS SQL Server 2005 and 2008, and MS project Report writing using standards of software requirement document that were based on Agile Methadology and Scrum Model 
                "
                />
              <hr style={{borderTop: '3px solid teal'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />
                      <Skills
                      skill="Redux"
                      progress={70}
                      />
                      <Skills
                      skill="Postman API"
                      progress={90}
                      />
                      <Skills
                      skill="MySql"
                      progress={80}
                      />
                      <Skills
                      skill="MongoDB"
                      progress={90}
                      />
                      <Skills
                      skill="Bootstrap"
                      progress={90}
                      />
                      <Skills
                      skill="Materiual UI"
                      progress={70}
                      />
                      <Skills
                      skill="React-mdl"
                      progress={60}
                      />
                      <Skills
                      skill="SASS"
                      progress={80}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
