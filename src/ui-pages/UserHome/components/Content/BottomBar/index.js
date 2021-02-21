import React from "react";
import { Grid, withStyles }  from '@material-ui/core';
import { connect } from "react-redux";
import { mapDispatchToProps } from '../../../../../ui-utils/commons';

const styles = theme => ({
  
  });


class BottomBar extends React.Component{
      
        render(){
         
            return(
            <Grid container >
            <Grid item xs={12}>
            BottomBar
            </Grid>
          
               
            </Grid>
           
            )
        }
}
const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    
    return {...preparedFinalObject};
  };
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BottomBar));
