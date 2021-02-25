import React from "react";
import { Grid, withStyles, Button, NativeSelect, GridListTile  }  from '@material-ui/core';
import { connect } from "react-redux";
import { mapDispatchToProps } from '../../../../../ui-utils/commons';
import Divider from '@material-ui/core/Divider';
import { ExpandMore, AccountCircleOutlined, Edit } from '@material-ui/icons';


const styles = theme => ({
  container: {
      padding: '0 32px 30px 32px',
      boxSizing: 'border-box',
      background: '#f7f7f7'
  },
  header: {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: 0,
      color: '#333333',
      margin: '32px 0 30px 0',
      fontFamily: 'PoppinsBold'
  },
  subheader: {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: 0,
      color: '#333333',
      fontFamily: 'PoppinsBold',
      marginBottom: '16px'
  },
  blockFilter:{
    float:'left',
    width: '50%',
  },
  cards: {
      width: '96%',
      height: '152px',
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '16px',
      background: '#ffffff',
      marginBottom: '8px',
      padding: '30px',
      boxShadow: '0 2px 20px 0 rgba(36, 36, 36, 0.16)'
  },
  number: {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: 0,
      color: '#333333',
      fontFamily: 'PoppinsBold',
  },
  details: {
      fontSize: '15px',
      lineHeight: '24px',
      letterSpacing: 0,
      color: '#333333',
      fontFamily: 'OpenSansRegular',
      width: '105px'
  },
  tableContainer: {
      width: '413px',
      borderRadius: '16px',
      background: '#ffffff',
      paddingTop: '16px',
      overflow: 'hidden',
      boxShadow: '0 2px 20px 0 rgba(36, 36, 36, 0.16)'
  },
  rowContainer: {
      padding: '12px 24px',
      background: '#f9fafb',
      boxShadow: 'inset 0 -1px 0 0 #eeeeee',
      cursor: 'pointer'
  },
  row: {
      fontFamily: 'OpenSansSemi',
      fontSize: '15px',
      fontWeight: 600,
      lineHeight: '24px',
      color: '#3a3a3a',
      display: 'flex'
  },
  date: {
      fontFamily: 'OpenSansRegular',
      fontSize: '15px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: 0,
      color: '#a2a0a0',
      textTransform:"uppercase"
  },
  rowContent: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '4px'
  },
  row2: {
      fontFamily: 'OpenSansRegular',
      fontSize: '12px',
      overflow: 'hidden',
      lineHeight: '16px',
      letterSpacing: 0,
      color: '#a2a0a0'
  },
  bubble: {
      width: '14px',
      height: '14px',
      fontFamily: 'OpenSansSemi',
      fontSize: '10px',
      fontWeight: 600,
      textAlign: 'center',
      color: '#089bab',
      background: '#ceebef',
      borderRadius: ' 6.5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

  },
  subTable: {
      background: '#ffffff',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 2px 20px 0 rgba(36, 36, 36, 0.16)'
  },
  thead: {
      fontFamily: 'OpenSansSemi',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: 0,
      color: '#333333',
      marginBottom: '10px'
  },
  trow: {
      fontFamily: 'OpenSansRegular',
      lineHeight: '24px',
      fontSize: '15px',
      color: '#333333',
      letterSpacing: 0,
      display: 'flex',
      alignItems: 'center'
  },
  cursor: {
      cursor: "pointer"
  },
  notificationContainer: {
      height: '703px',
      overflow: 'auto'
  },
  smallBox:{
    float:'left',
    margin: '5px 12px',
    width:'100px'
  },
  profileEdit: {
    display:'inline-block',
    margin: '5px 12px',
    width:'70px'
  }
});
// eslint-disable-next-line
let regex = /<br\s*[\/]?>/gi;

const flaggingMapped  = {
  "redflag": "flag-red.svg",
  "blueflag": "flag-blue.svg",
  "orangeflag": "flag-orange.svg",
  "yellowflag": "flag-yellow.svg",
  "pinkflag": "flag-pink.svg",
  "greenflag": "flag-green.svg",
  "grayflag": "flag-gray.svg"       
}
class OrderManagement extends React.Component{
        render(){
          const { classes, history, notificationArray, patient_groups = {}, setAppData, communication, dateTimeFormat, flaggingSystem } = this.props;
          return(
            <Grid container className={classes.container}>
               
              <Grid item xs={12} className={classes.header}>
                  Order Management
              </Grid>
              <Grid container>
              <Grid item xs={12} className={classes.subheader} style={{ textAlign: 'right' }} >
              <Button variant="outlined">Add</Button>
              </Grid>
              </Grid>
              <Grid container>
                 
                      
                      <Grid item xs={12}>
                        
                          <div className={`${classes.cursor} ${classes.cards}`}>
                              <Grid item xs={12}>
                              <Grid item xs={6} className={classes.blockFilter}><span>City: Banglore,Mumbia,Delhi..</span></Grid>
                              <Grid item xs={6} className={classes.blockFilter} style={{ textAlign: 'right' }}>
                                <NativeSelect id="select">
                                  <option value="Banglore_brt">Banglore_brt</option>
                                  <option value="Delhi_test">Delhi_test</option>
                                </NativeSelect>
                              </Grid>
                            </Grid>
                            <Grid container>
                            <Grid item xs={12}>
                            <Grid item xs={2} className={classes.smallBox}>                     
                        <div className={classes.smallBox} style={{ background: '#f0f0f0',  textAlign: 'center', padding: '5px' }}>
                           Hub1</div>
                           </Grid>  
                           <Grid item xs={2} className={classes.smallBox}>                     
                        <div className={classes.smallBox} style={{ background: '#f0f0f0',  textAlign: 'center', padding: '5px' }}>
                           Hub2</div>
                           </Grid> 
                           <Grid item xs={2} className={classes.smallBox}>                     
                        <div className={classes.smallBox} style={{ background: '#f0f0f0',  textAlign: 'center', padding: '5px' }}>
                           Hub3 </div>
                           </Grid> 
                           <Grid item xs={2} className={classes.smallBox}>                     
                        <div className={classes.smallBox} style={{ background: '#f0f0f0',  textAlign: 'center', padding: '5px' }}>
                           Hub4</div>
                           </Grid> 
                           <Grid item xs={2} className={classes.smallBox}>                     
                        <div className={classes.smallBox} style={{ background: '#f0f0f0',  textAlign: 'center', padding: '5px' }}>
                           Hub5</div>
                           </Grid> 
                           <Grid item xs={2} className={classes.smallBox}>                     
                        <div className={classes.smallBox} style={{ background: '#f0f0f0',  textAlign: 'center', padding: '5px' }}>
                           Hub6</div>
                           </Grid> 
                           <Grid item xs={2} className={classes.smallBox}>                     
                        <div className={classes.smallBox} style={{ background: '#f0f0f0',  textAlign: 'center', padding: '5px' }}>
                           Hub7</div>
                           </Grid> 
                           <Grid item xs={2} className={classes.smallBox}>                     
                        <div className={classes.smallBox} style={{ background: '#f0f0f0',  textAlign: 'center', padding: '5px' }}>
                           Hub8</div>
                           </Grid> 
                           <Grid item xs={2} className={classes.smallBox}>                     
                        <div className={classes.smallBox} style={{ background: '#f0f0f0',  textAlign: 'center', padding: '5px' }}>
                           Hub9</div>
                           </Grid> 
                           
                          </Grid>
                          <Grid item xs={12}>
                            <div style={{textAlign: 'center', padding: '5px' }}> <ExpandMore/>View More</div>
                            <Divider variant="middle" />
                            </Grid>
                            <Grid item xs={12}>
                              <Grid item xs={10} style={{float: 'left',textAlign: 'center', padding: '5px', display: 'table', margin:'0 auto', width:'100%' }}>
                              <div className={classes.profileEdit} >
                                  <div><AccountCircleOutlined fontSize="large"/></div>
                                  Home
                              </div>
                              <div className={classes.profileEdit}>
                                <div><AccountCircleOutlined fontSize="large" /></div>
                                Profile
                              </div>
                              <div className={classes.profileEdit}>
                                <div><AccountCircleOutlined fontSize="large" /></div>
                                Reward
                              </div>
                              <div className={classes.profileEdit}>
                              <div><AccountCircleOutlined fontSize="large" /></div>
                              Refer
                              </div>
                              </Grid>
                              <Grid item xs={2} style={{float: 'right',textAlign: 'right'}}><span>Edit <Edit/></span></Grid>
                            </Grid>
                    </Grid>
                  </div>
                      </Grid>
              </Grid>

              <Grid item style={{ display: 'none' }}>
              </Grid>
          </Grid>
           
            )
        }
}
const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    
    return {...preparedFinalObject};
  };
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(OrderManagement));
