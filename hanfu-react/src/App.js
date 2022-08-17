import Homepage from './homepage'
import AddSheet from "./addHanfu.js";
import SheetDetails from './hanfuDetails';
import { Container, Navbar, Button, ButtonGroup, Col } from 'react-bootstrap'
import React from 'react';
import { EditSheetPage } from './pages/editHanfuPage';
import LoginPage from './loginPage';
import UpdateSheet from './pages/UpdateHanfuPage';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'HomePage',
      user: {},
      sheetid: ''
    }
  }

  renderPage(pageName) {
    console.log('clicked')
    let pageList = {
      'HomePage': <Homepage setActive={this.setActive} />,
      'DetailPage': <SheetDetails sheetid={this.state.sheetid} setActive={this.setActive} />,
      'AddSheet': <AddSheet />,
      'EditSheetPage': <EditSheetPage setActive={this.setActive} />,
      'LoginPage': <LoginPage setUser={this.setUser} />,
      'UpdateSheet': <UpdateSheet sheetid={this.state.sheetid} />
    }
    return (pageList[pageName])
  }

  setActive = (pageName, _sheetid = null) => {
    this.setState({ active: pageName })
    if (_sheetid) {
      this.setState({ sheetid: _sheetid })
    }
  }

  setUser = (_user) => {
    this.setState({ user: _user })
  }



  render() {
    console.log('rendered')
    return (

      <React.Fragment>
        <Navbar bg="white" variant="transparent">
          <Container className="topNav">
            <div className='logo'>
              <img className="logoPicture" src="https://i.im.ge/2022/07/26/FhdeoD.png"></img>
              <h6 className='logoWord'>Anime Share.Sheet</h6>
            </div>
            <div className='topButton'>
              <div className='pageButton'>
                <ButtonGroup aria-label="Main page buttons">
                  <Button variant="dark" onClick={() => { this.setActive('HomePage') }} >Home</Button>
                  <Button variant="dark" onClick={() => { this.setActive('AddSheet') }} >Upload</Button>
                  <Button variant="dark" onClick={() => { this.setActive('EditSheetPage') }} >Search</Button>
                </ButtonGroup>
              </div>
                <div className='loginButton'>
                  <Button variant="dark" onClick={() => { this.setActive('LoginPage') }} >{this.state.user.username ? this.state.user.username : 'Login'}</Button>
                </div>
            </div>
          </Container>
        </Navbar>
        {this.renderPage(this.state.active)}
      </React.Fragment >


    );
  }
}
export default App;

















// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import homepage from './homepage'
// import contactUs from './contactUs';
// import AddHanfu from "./AddHanfu.js";
// import HanfuDetails from './HanfuDetails';
// import { Container, Navbar, Button, ButtonGroup, Col } from 'react-bootstrap'
// import React from 'react';
// import { EditHanfuPage } from './EditHanfuPage';
// import loginPage from './loginPage';
// import UpdateHanfu from './UpdateHanfuPage';
// import formSubmitted from './formSubmitted';
// import postPage from './postPage';


// function App() {
//   return (
//     <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>

        </ul>
      </nav> */}
    //   <Routes>
    //     {/* Home route */}
    //     <Route path="/" element={<homepage/>} />

    //     {/* About Us route */}
    //     <Route path="/about" element={<aboutUs/>} />


        {/* Contact Us route */}
        {/* <Route path="/contact" element={<ContactUs/>} />


        <Route path="/submittedForm" element={<FormSubmitted/>} />

        <Route path="/posts/:post_id" element={<PostPage/>} />
      </Routes>
    </Router>
  );
} */}


{/* 
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'HomePage',
      user: {},
      sheetid: ''
    }
  } */}

//   renderPage(pageName) {
//     console.log('clicked')
//     let pageList = {
//       'HomePage': <homepage setActive={this.setActive} />,
//       'DetailPage': <hanfuDetails sheetid={this.state.sheetid} setActive={this.setActive} />,
//       'AddSheet': <addSheet />,
//       'EditSheetPage': <editSheetPage setActive={this.setActive} />,
//       'LoginPage': <loginPage setUser={this.setUser} />,
//       'UpdateSheet': <updateSheet sheetid={this.state.sheetid} />
//     }
//     return (pageList[pageName])
//   }

//   setActive = (pageName, _sheetid = null) => {
//     this.setState({ active: pageName })
//     if (_sheetid) {
//       this.setState({ sheetid: _sheetid })
//     }
//   }

//   setUser = (_user) => {
//     this.setState({ user: _user })
//   }



//   render() {
//     console.log('rendered')
//     return (

//       <React.Fragment>
//         <Navbar bg="white" variant="transparent">
//           <Container className="topNav">
//             <div className='logo'>
//               <img className="logoPicture" src="https://i.im.ge/2022/07/26/FhdeoD.png"></img>
//               <h6 className='logoWord'>Anime Share.Sheet</h6>
//             </div>
//             <div className='topButton'>
//               <div className='pageButton'>
//                 <ButtonGroup aria-label="Main page buttons">
//                   <Button variant="dark" onClick={() => { this.setActive('homePage') }} >Home</Button>
//                   <Button variant="dark" onClick={() => { this.setActive('addHanfu') }} >Upload</Button>
//                   <Button variant="dark" onClick={() => { this.setActive('editHanfuPage') }} >Search</Button>
//                 </ButtonGroup>
//               </div>
//                 <div className='loginButton'>
//                   <Button variant="dark" onClick={() => { this.setActive('loginPage') }} >{this.state.user.username ? this.state.user.username : 'login'}</Button>
//                 </div>
//             </div>
//           </Container>
//         </Navbar>
//         {this.renderPage(this.state.active)}
//       </React.Fragment >


//     );
//   }
// }
// export default App;
