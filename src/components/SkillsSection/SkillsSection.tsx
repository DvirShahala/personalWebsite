import React from "react";
import "./SkillsSection.css";
import { Grid, Button } from "@material-ui/core";
import { Icon } from "@iconify/react";
import fileTypeHtml from "@iconify-icons/vscode-icons/file-type-html";
import fileTypeCss from "@iconify-icons/vscode-icons/file-type-css";
import fileTypeAngular from "@iconify-icons/vscode-icons/file-type-angular";
import fileTypeReactjs from "@iconify-icons/vscode-icons/file-type-reactjs";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import nestjsIcon from "@iconify-icons/logos/nestjs";
import typescriptIcon from "@iconify-icons/logos/typescript-icon";
import javascriptIcon from "@iconify-icons/logos/javascript";
import mysqlIcon from "@iconify-icons/logos/mysql";
import postgresqlIcon from "@iconify-icons/logos/postgresql";
import javaIcon from "@iconify-icons/logos/java";
import dockerIcon from "@iconify-icons/logos/docker-icon";
import sequelizeIcon from "@iconify-icons/logos/sequelize";
import es6Icon from "@iconify-icons/logos/es6";
import bootstrapIcon from "@iconify-icons/logos/bootstrap";
import Download from "@axetroy/react-download";
import pdf from '../../img/pdfIcon.svg';
import { makeStyles, Theme } from '@material-ui/core/styles';
import materialUi from '@iconify-icons/logos/material-ui';

const useStyles = makeStyles((theme:Theme) => 
({
    buttonStyle:
    {
        fontSize: '14px',
        width: 220,
        textTransform: 'capitalize',
        color: 'white',
        border: '1px solid rgb(29, 45, 80)',
        backgroundColor: 'rgb(29, 45, 80)',
        borderRadius: '25px',
        textAlign: 'center'
    },
}));

const SkillsSection: React.FC = () => {
    const classes = useStyles();
    const pdfIcon = (<img src={pdf} height="25px" width="25px" alt="pdf"/>);
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="skillGrid"
    >
      <h1 data-aos="zoom-in">My Skills</h1>
      <Grid container direction="row" justify="space-around">
        <Grid className="iconGrid" data-aos="zoom-in">
          <Icon icon={fileTypeHtml} height="5em" />
          <div className="iconTitle">HTML</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={fileTypeCss} height="5em" />
          <div className="iconTitle">CSS</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={fileTypeReactjs} height="5em" />
          <div className="iconTitle">React.js</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={fileTypeAngular} height="5em" />
          <div className="iconTitle">Angular 10</div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-around">
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={mysqlIcon} height="5em" />
          <div className="iconTitle">MySQL</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={nestjsIcon} height="5em" />
          <div className="iconTitle">Nest.js</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={typescriptIcon} height="5em" />
          <div className="iconTitle">Typescript</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={javascriptIcon} height="5em" />
          <div className="iconTitle">Javascript</div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-around">
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={sequelizeIcon} height="5em" />
          <div className="iconTitle">Sequelize</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={nodejsIcon} height="5em" />
          <div className="iconTitle">Node.js</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={postgresqlIcon} height="5em" />
          <div className="iconTitle">PostgreSQL</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={dockerIcon} height="5em" />
          <div className="iconTitle">Docker</div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-around">
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={bootstrapIcon} height="5em" />
          <div className="iconTitle">Bootstrap</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={javaIcon} height="5em" />
          <div className="iconTitle">Java</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={es6Icon} height="5em" />
          <div className="iconTitle">ES6</div>
        </Grid>
        <Grid item className="iconGrid" data-aos="zoom-in">
          <Icon icon={materialUi} height="5em" />
          <div className="iconTitle">Material Ui</div>
        </Grid>
      </Grid>

      <div className="cv" data-aos="zoom-in">You can see my full cv here</div>
      <a href="/Files/Dvir_Shahala_cv.pdf" download>
        <Button
          className={classes.buttonStyle}
          startIcon={pdfIcon}
          variant="outlined"
          data-aos="zoom-in"
        >
          Click here to download
        </Button>
      </a>
    </Grid>
  );
};

export default SkillsSection;
