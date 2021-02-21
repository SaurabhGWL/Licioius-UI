import React from "react";
import { withRouter } from "react-router-dom";
import Snackbar from "./ui-containers/SnackBar";
//import CircularProgress from "@material-ui/core/CircularProgress";
import {mapDispatchToProps} from "./ui-utils/commons";
import MainRoutes from "./ui-routes/MainRoutes";
import { connect } from "react-redux";
import Hidden from "@material-ui/core/Hidden";
import LoadingOverlay from "react-loading-overlay";
import "./App.css";


class App extends React.Component {


  render() {
    const { spinner } = this.props;
    return (
      <div>
        <Hidden only={["md", "lg", "xl"]}>
          <div className='mobile' />
        </Hidden>
        <Hidden only={["xs", "sm"]}>
          <LoadingOverlay active={spinner}>
            <div>      
                <MainRoutes/>
                <Snackbar />
            </div>
          </LoadingOverlay>
        </Hidden>
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { spinner=false ,selectedLanguage="en"} = preparedFinalObject;
  return { spinner,selectedLanguage };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter((App)));
