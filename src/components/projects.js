import React, { Component } from 'react';
import { Tabs, Tab, Grid, Dialog, DialogTitle, DialogActions, DialogContent, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import eventHub from "../img/event.png";
import teamGeneretaor from "../img/teamGenerator.png";
import quizz from "../img/quizz.png";
import healthcare from "../img/healthcare.png";
import noteTaker from "../img/notetaker.png";
import secondProject from "../img/project2pic.svg";
import fitnessTracker from "../img/fitnessTracker.png";
import budgetApp from "../img/budgetApp.png";
import employeeDirectory from "../img/employeeDirectory.png";




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleOpenDialog1 = this.handleOpenDialog1.bind(this);
    this.handleCloseDialog1 = this.handleCloseDialog1.bind(this);
    this.handleOpenDialog2 = this.handleOpenDialog2.bind(this);
    this.handleCloseDialog2 = this.handleCloseDialog2.bind(this);
    this.handleOpenDialog3 = this.handleOpenDialog3.bind(this);
    this.handleCloseDialog3 = this.handleCloseDialog3.bind(this);
    this.handleOpenDialog4 = this.handleOpenDialog4.bind(this);
    this.handleCloseDialog4 = this.handleCloseDialog4.bind(this);
    this.handleOpenDialog5 = this.handleOpenDialog5.bind(this);
    this.handleCloseDialog5 = this.handleCloseDialog5.bind(this);
    this.handleOpenDialog6 = this.handleOpenDialog6.bind(this);
    this.handleCloseDialog6 = this.handleCloseDialog6.bind(this);
    this.handleOpenDialog7 = this.handleOpenDialog7.bind(this);
    this.handleCloseDialog7 = this.handleCloseDialog7.bind(this);
    this.handleOpenDialog8 = this.handleOpenDialog8.bind(this);
    this.handleCloseDialog8 = this.handleCloseDialog8.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  
  handleOpenDialog1() {
    this.setState({
      openDialog1: true
    });
  }

  handleCloseDialog1() {
    this.setState({
      openDialog1: false
    });
  }
  handleOpenDialog2() {
    this.setState({
      openDialog2: true
    });
  }

  handleCloseDialog2() {
    this.setState({
      openDialog2: false
    });
  }
  handleOpenDialog3() {
    this.setState({
      openDialog3: true
    });
  }

  handleCloseDialog3() {
    this.setState({
      openDialog3: false
    });
  }
  handleOpenDialog4() {
    this.setState({
      openDialog4: true
    });
  }

  handleCloseDialog4() {
    this.setState({
      openDialog4: false
    });
  }
  handleOpenDialog5() {
    this.setState({
      openDialog5: true
    });
  }

  handleCloseDialog5() {
    this.setState({
      openDialog5: false
    });
  }
  handleOpenDialog6() {
    this.setState({
      openDialog6: true
    });
  }

  handleCloseDialog6() {
    this.setState({
      openDialog6: false
    });
  }
  handleOpenDialog7() {
    this.setState({
      openDialog7: true
    });
  }

  handleCloseDialog7() {
    this.setState({
      openDialog7: false
    });
  }
  handleOpenDialog8() {
    this.setState({
      openDialog8: true
    });
  }

  handleCloseDialog8() {
    this.setState({
      openDialog8: false
    });
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        
        <div style={{width: '90%', margin: 'auto'}}>
        <div>
          
        <Grid className="demo-grid-1">
          {/* Project 1 */}
          <Cell col={4} >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={secondProject}/>
           <h4 className={"heading"}>Quest for the Net</h4>
            </CardText>
            <CardActions border>
              <a href = "https://github.com/asadrauf/project2"><Button colored>GitHub</Button></a>
              <a href = "https://vast-headland-47194.herokuapp.com/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog} raised ripple>Technologies</Button>
              </div>
              <Dialog  open={this.state.openDialog} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'} >
          <p>MySql|NodeJs|Express|Handlebars|Bootstrap|Sequelize ORM|SASS|MVC Pattern</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button  align='center' type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          {/* Project 2 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={eventHub}/>
            <h4 className={"heading"}>EventHubb</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/Team3"><Button colored>GitHub</Button></a>
              <a href = "https://karna1014.github.io/Team3/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog1} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog1} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>HTML|JavaScript|JQuery|Materialize|Bootstrap|TicketMaster API|LoDash API|MapQuest API|CSS</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog1}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          {/* Project 3 */}
         
        

        
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={noteTaker}/>
            <h4 className={"heading"}>Note Taker</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/note-taker"><Button colored>GitHub</Button></a>
              <a href = "https://ar-note-taker.herokuapp.com/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog2} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog2} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>MySql|NodeJs|Express|Handlebars|Bootstrap|Sequelize ORM|CSS|MVC Pattern</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog2}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          </Grid>
          <Grid className="demo-grid-1">
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={teamGeneretaor}/>
            <h4 className={"heading"}>Team Generator</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/random-team-generator"><Button colored>GitHub</Button></a>
              <a href = "https://github.com/asadrauf/random-team-generator"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog3} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog3} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>NodeJs|JavaScript|OOP|Express|OOP Classes|Inquirer</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog3}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>

          {/* Project 2 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={fitnessTracker}/>
            <h4 className={"heading"}>Fitness Tracker</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/workout-tracker"><Button colored>GitHub</Button></a>
              <a href = "https://fitness-tracker-app-hw.herokuapp.com/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog4} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog4} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>MongoDB|NodeJs|Express|CSS|Bootstrap|Postman API|MVC Pattern</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog4}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          {/* Project 3 */}
         
        

        
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={budgetApp}/>
            <h4 className={"heading"}>Budget App</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/indexdb-swbudgetApp"><Button colored>GitHub</Button></a>
              <a href = "https://service-worker-appbudget.herokuapp.com/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog5} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog5} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>MongpDB|NodeJs|Express|IndexDB|Service Worker</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog5}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          </Grid>
          {/* Project 3 */}

          <Grid className="demo-grid-1">
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={employeeDirectory}/>
            <h4 className={"heading"}>Employee Directory</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/employee-directory"><Button colored>GitHub</Button></a>
              <a href = "https://asadrauf.github.io/employee-directory/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog6} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog6} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>Random User API|ReactJS|HashRouter|Hooks|Function based components|Bootstrap</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog6}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>

          {/* Project 2 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={quizz}/>
            <h4 className={"heading"}>Quizz App</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/quizz-app"><Button colored>GitHub</Button></a>
              <a href = " https://asadrauf.github.io/quizz-app/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog7} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog7} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>JavaScript|LocalStorage API|Express|HTML5|CSS3|Objects|Arrays</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog7}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          {/* Project 3 */}
         
        

        
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={healthcare}/>
            <h4 className={"heading"}>Healthcare Pro+</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/project3"><Button colored>GitHub</Button></a>
            <a href = " https://project3-healthcarepro.herokuapp.com/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog8} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog8} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>MongoDB|ReactJS|Redux|Material UI|NodeJS|Express|SASS|MVC Pattern|JWT|RBAC</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog8}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          </Grid>
          {/* Project 3 */}
         
       
        </div>
        
        </div>
        


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div style={{width: '90%', margin: 'auto'}}>
        <div>
           <Grid className="demo-grid-1">
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={secondProject}/>
            <h4 className={"heading"}>Quest for the Net</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/project2"><Button colored>GitHub</Button></a>
            <a href = " https://vast-headland-47194.herokuapp.com/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>MySql|NodeJs|Express|Handlebars|Bootstrap|Sequelize ORM|SASS|MVC Pattern</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          {/* Project 2 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={eventHub}/>
            <h4 className={"heading"}>EventHubb</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/Team3"><Button colored>GitHub</Button></a>
            <a href = " https://karna1014.github.io/Team3/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog1} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog2} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>HTML|JavaScript|JQuery|Materialize|Bootstrap|TicketMaster API|LoDash API|MapQuest API|CSS</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog1}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          {/* Project 3 */}
         
        

        
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={healthcare}/>
            <h4 className={"heading"}>Healthcare Pro+</h4>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/asadrauf/project3"><Button colored>GitHub</Button></a>
            <a href = " https://project3-healthcarepro.herokuapp.com/"><Button colored>Live Demo</Button></a>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog8} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog8} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>MongoDB|ReactJS|Redux|Material UI|NodeJS|Express|SASS|MVC Pattern|JWT|RBAC</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog8}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          </Grid>
        
        </div>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          <Grid className="demo-grid-1">
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={quizz}/>
            <h4 className={"heading"}>Quizz App</h4>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog7} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog7} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>JavaScript|LocalStorage API|Express|HTML5|CSS3|Objects|Arrays</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog7}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          {/* Project 2 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={teamGeneretaor}/>
            <h4 className={"heading"}>Team Generator</h4>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog3} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog3} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>NodeJs|JavaScript|OOP|Express|OOP Classes|Inquirer</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog3}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          {/* Project 3 */}
         
        

        
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={employeeDirectory}/>
            <h4 className={"heading"}>Employee Directory</h4>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog6} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog6} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>Random User API|ReactJS|HashRouter|Hooks|Function based components|Bootstrap</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog6}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          </Grid>
          <Grid className="demo-grid-1">
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={noteTaker}/>
            <h4 className={"heading"}>Note Taker</h4>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog2} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog2} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>MySql|NodeJs|Express|Handlebars|Bootstrap|Sequelize ORM|CSS|MVC Pattern</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog2}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>

          {/* Project 2 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={fitnessTracker}/>
            <h4 className={"heading"}>Fitness Tracker</h4>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog4} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog4} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>MongoDB|NodeJs|Express|CSS|Bootstrap|Postman API|MVC Pattern</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog4}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          {/* Project 3 */}
         
        

        
          {/* Project 1 */}
          <Cell col={4}  >
          <Card  className={"card"}>
            <CardText>
            <img className= {"image"} src ={budgetApp}/>
            <h4 className={"heading"}>Budget App</h4>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
              <div className={"btn"} >
              <Button onClick={this.handleOpenDialog5} raised ripple>Technologies</Button>
              </div>
              <Dialog open={this.state.openDialog5} style={{width:"390px"}}>
          <DialogTitle className={"show"}><h5>Technologies Used</h5>
          </DialogTitle>
          <DialogContent className={'dialogContent'}>
          <p>MongpDB|NodeJs|Express|IndexDB|Service Worker</p>
          </DialogContent>
          <DialogActions  className={'closeBtn'}>
           
            <Button type='button' onClick={this.handleCloseDialog5}>Close</Button>
          </DialogActions>
        </Dialog>
        
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          
          </Cell>
          </Grid>
          {/* Project 3 */}
    
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All</Tab>
          <Tab>Projects</Tab>
          <Tab>Challenges</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
