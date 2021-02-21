import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UserRoutes from "../../../../ui-routes/UserRoutes";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../ui-utils/commons";
import { withRouter } from "react-router-dom";


const styles = (theme) => ({
 
});
class MainPage extends React.Component {

  changeRoute = route => {
    this.props.history.push(route);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <UserRoutes />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  return { preparedFinalObject };
};
export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter((MainPage)))
);
