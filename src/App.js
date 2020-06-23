import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { HashRouter as Router, Route}  from "react-router-dom";
import Main from './components/main';
import { Link } from 'react-router-dom';
import LandingPage from "./components/landingpage";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>

    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'teal'}} to="/">Asad Rauf</Link>} scroll>
            <Navigation>
              
            <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        
        <Content>
            <div className="page-content" />
            <Router>
            <Main/>
            </Router>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
