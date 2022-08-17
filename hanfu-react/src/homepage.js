import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import allHanfu from '../component/allHanfu.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import addHanfu from './addHanfu';
import hanfuDetails from './hanfuDetails.js'
import React ,{createRef} from 'react';
// import axios from 'axios';
import { Button, Row } from 'react-bootstrap';
import { FaAngleDown } from "react-icons/fa";



export default class homepage extends React.Component {


  url = ""


  constructor(props){
    super(props)

  }


  render() {
    return (
  
      <React.Fragment>
        <div className="background">
           <div className="allHanfuContainer">
            <Row>
              <div className="col-lg-4 offset-sm-2 ">
                {/* <img src="https://i.im.ge/2022/07/26/FhdeoD.png"></img> */}
                <h1 className='bgText'>Welcome to Hanfu xxx</h1>
              </div>
            </Row>

            <Row lg={12} >
              <div className='scroll_area'>
                    <div style={{textAlign: "center",color:'white'}} onClick={()=>{document.getElementById('allHanfu').scrollIntoView({behavior: "smooth"})}}>View all hanfus</div>
                    <span className="box-animate" style={{marginTop:"40px",textAlign: "center",backgroundColor:'rgba(255, 255, 255, 0)',color:'white'}} onClick={()=>{document.getElementById('allHanfu').scrollIntoView({behavior: "smooth"})}}><FaAngleDown/></span>
              </div>
            </Row>


          </div>
        </div>

        <div id="allHanfu">


          {/* <allHanfu setActive={this.props.setActive}/> */}



        </div>
  
        <div className='contactUs'>
           <br />
                <h1>Questions or feedback?</h1>
                <h1>Contact us at:</h1>
                <span>
                < a href="mailto:hanfu233@gmail.com">
                  <img className="emailLink" src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/64205/simplemail.png"></img>
                </a>
                
              <a href="tel:82375829">
              <img className="phoneLink" src="https://c.tenor.com/ju4PztDv8WcAAAAj/firstrequestrecords-first-request.gif"></img>
              </a>
              </span>
              <h2>hanfu233@gmail.com   /   +65 82375829</h2>
              
              </div>
                <div className="hanfuGirl" style={{ position:"absolute", "right":'100px', bottom: '55px'}}>
                    <Popup trigger={<img style={{"height": "100px","width":"auto"}} src='https://i.im.ge/2022/08/17/OSLzPK.a3d5c5f9e9ecf9399f44afed50da772a-removebg-preview.png'></img>} position="top center">
                      <div>Let us know your feedbacks!</div>
                      
                            <textarea name="review" rows="5" cols="18"> </textarea>
                            <Button className="btn-outline-dark" onClick={()=>{
                              alert('feedback received')     //to add sweet alert here
                            }}>Submit</Button> 

                    </Popup>
                  </div>


        </React.Fragment>)
  }
}
