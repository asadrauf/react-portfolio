import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Technologies from "./Technologies";
import Typing from 'react-typing-animation';
import classes from "../style/Technologies.scss";


class Landing extends Component {
  render() {
    return(
    
      <div style={{width: '100%', margin: 'auto'}}>
          
        <Grid className="landing-grid">
       
          <Cell col={12}>
          

            <div className="banner-text">
            
            <div className={classes.description}>
					<Typing loop speed={100}>
					<h3>	<span className={classes.title}>
							Fullstack Developer
						</span>
            </h3>
						<Typing.Backspace count={20} />
					</Typing>
          <Technologies/>
				</div>
            <hr/>
           <h3> <span className="services">Services</span></h3>
          <p>FrontEnd: HTML|CSS|SASS|Bootstrap|Materialize|Material UI|JavaScript| React|Redux|</p>
          <p>BackEnd: NodeJs|Express|MongoDB|SQL Server|MySql|Postman API|Rest API</p>
        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
