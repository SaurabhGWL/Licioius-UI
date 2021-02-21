import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";


const SecuredRoute = (props) =>{
    console.log('logged in', localStorage.getItem('loggedIn'));
  return(
    <Route path={props.path} render={data=> localStorage.getItem('loggedIn') === 'true'?
      (<props.component {...data}> </props.component>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}
    >
    </Route>
  )
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { loggedIn } = preparedFinalObject;
  return { loggedIn };
};
export default  connect(mapStateToProps, null)(SecuredRoute);
