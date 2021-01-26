import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  iFrame: {
      width: '100%',
      height:'900px',
      border: 'none',
      padding: 20
  },
  link: {
    color: theme.typography.headingColor,
    marginTop: '0',
    display: 'block',
    fontSize: 10,
    paddingLeft: 26,
    marginBottom: '-21px',
    textDecoration: 'none',
    textAlign: 'left',
    position: 'relative',
    letterSpacing: '1px',
    '& span':{
      fontSize: 11,
    },
    "@media (max-width: 900px)": {
      marginBottom: '12px',
      position: 'relative',
      marginTop: 0,
    },
  },
  reportHeading: {
    textAlign: 'center',
    fontSize: 22,
    letterSpacing: 2,
    marginTop: 19,
    position: 'relative'
  },


}));

export const ReportSingle = ({ match }) => {

    const classes = useStyles();
    const { reportId } = match.params

    const report = useSelector((state) =>
        state.reports.find((report) => report.id === parseInt(reportId))
    )
  
    if (!report) {
        return (
          <section>
            <h2>Report not found!</h2>
          </section>
        )
      }
  
    return (
      <section>
        <article className="post">
          
          <h2 className={classes.reportHeading} >
            <Link to="/reports" className={classes.link}><span>&#8249;&#8249;</span> Reports</Link>
            {/*{report.title} {report.subtitle}*/}
          </h2>
          <iframe className={classes.iFrame} src={`${report.iFrameLink}`}></iframe>  
                
        </article>
      </section>
    )
  }

