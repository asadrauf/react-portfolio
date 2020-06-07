import React, { useState } from "react";
import classes from "../sass/technologies.module.scss";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import reacticon from "../../img/reactIcon.png";
import mysql from "../images/MySql.png";
import heroku from "../images/heroku.png";
import materialui from "../images/materialui.png";
import materialize from "../images/materialize.png";
import bootstrap from "../images/bootstrap.png";
import redux from "../../img/redux.png";
import js from "../../img/jsicon.jpg";
import mongodb from "../../img/mongodb.png";
const imgs = [reacticon, heroku, bootstrap, mysql, redux , materialui, materialize, js, mongodb];

const Technologies = () => {
  return (
    <div className={classes.row}>
      <p>
        Specialized in JavaScript with over a year of experience in building the
        web and working with technologies like
        <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
          <div style={{ display: "flex" }}>
            {" "}
            <img src={imgs[0]} alt="pic" className={classes.img} />
            <span className={classes.title}>ReactJS</span>
          </div>
          <div style={{ display: "flex" }}>
            <img src={imgs[1]} alt="pic" className={classes.img} />
            <span className={classes.title}>Heroku</span>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <img src={imgs[2]} alt="pic" className={classes.img} />
            <span className={classes.title}>Bootstrap</span>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <img src={imgs[3]} alt="pic" className={classes.img} />
            <span className={classes.title}>MySql</span>
          </div>
          <div style={{ display: "flex" }}>
            <img
              src={imgs[4]}
              alt="pic"
              style={{ width: "70px" }}
              className={classes.img}
            />
            <span className={classes.title}>Redux</span>
          </div>
          <div style={{ display: "flex" }}>
            <img src={imgs[5]} alt="pic" className={classes.img} />
            <span className={classes.title}>Material UI</span>
          </div>
          <div style={{ display: "flex" }}>
            <img src={imgs[6]} alt="pic" className={classes.img} />
            <span className={classes.title}>Materialize</span>
          </div>
          <div style={{ display: "flex" }}>
            <img src={imgs[7]} alt="pic" className={classes.img} />
            <span className={classes.title}>JavaScript</span>
          </div>
          <div style={{ display: "flex" }}>
            <img src={imgs[8]} alt="pic" className={classes.img} />
            <span className={classes.title}>MongoDB</span>
          </div>
        </TextLoop>
      </p>
    </div>
  );
};

export default Technologies;
