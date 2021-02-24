import React from "react";
import { Grid, withStyles, Paper }  from '@material-ui/core';
import { connect } from "react-redux";
import { mapDispatchToProps } from '../../../../../ui-utils/commons';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  });

class OrderManagement extends React.Component{
        render(){
         
            return(
              <div className={styles.root}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={styles.paper}>Order Management</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={styles.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={styles.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={styles.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={styles.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={styles.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={styles.paper}>xs=6 sm=3</Paper>
                </Grid>
              </Grid>
            </div> 
           
            )
        }
}
const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    
    return {...preparedFinalObject};
  };
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(OrderManagement));
