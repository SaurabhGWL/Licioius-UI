import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";

const styles = {
 
};

class Login extends React.Component {
 
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
       login
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  //const { preparedFinalObject = {} } = screenConfiguration;
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Login)));
