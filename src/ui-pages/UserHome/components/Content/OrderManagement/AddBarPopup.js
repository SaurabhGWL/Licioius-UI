import React,{ Component } from "react";
import { Grid }  from '@material-ui/core';
import CreatableSelect from 'react-select/creatable';
import './OrderManage.css';


class AddBarPopup extends Component {
    handleClick = () => {
        this.props.toggle();
    };
    handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
      };
  render() {
    return (
        <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={this.handleClick}>x</span>
          <b spacing={3}>Add Details</b>
          <div className="addperson">
          <form onSubmit={this.handleSubmit}>
          <Grid container spacing={3}>
        <Grid item xs={4}>
          <div ><label htmlFor="name">Name</label></div>
        </Grid>
        <Grid item xs={8}>
          <div >  <input className="wpcf7-text" type="text" id="name"  onChange={this.handleChange}/> </div>
        </Grid>
        <Grid item xs={4}>
          <div ><label htmlFor="name">Type</label></div>
        </Grid>
        <Grid item xs={8}>
          <div ><select className="wpcf7-text"><option>Static</option><option>Dynamic</option></select> </div>
        </Grid>
        <Grid item xs={4}>
          <div ><label htmlFor="name">Factors</label></div>
        </Grid>
        <Grid item xs={8}>
          <div >  <CreatableSelect
        isMulti
        onChange={this.handleChange}
      /></div>
        </Grid>       
        </Grid>
        </form>
       </div>
        </div>
      </div>
    );
   }
  }

export default AddBarPopup; 