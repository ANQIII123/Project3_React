import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage'
import ContactUs from './pages/ContactUs';
// import AddHanfu from "./pages/AddHanfu.js";
// import HanfuDetails from './pages/HanfuDetails';
import { Container, Navbar, Button, ButtonGroup, Col } from 'react-bootstrap'
import React from 'react';
// import { EditHanfuPage } from './pages/EditHanfuPage';
import LoginPage from './pages/LoginPage';
// import UpdateHanfu from './pages/UpdateHanfuPage';
import FormSubmitted from './pages/FormSubmitted';
import PostPage from './pages/PostPage';


function App() {
  return (
    <Router>
      <nav>
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
      </nav>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home/>} />

        {/* About Us route */}
        <Route path="/about" element={<About/>} />


        {/* Contact Us route */}
        <Route path="/contact" element={<ContactUs/>} />


        <Route path="/submittedForm" element={<FormSubmitted/>} />

        <Route path="/posts/:post_id" element={<PostPage/>} />
      </Routes>
    </Router>
  );
}



// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       active: 'HomePage',
//       user: {},
//       sheetid: ''
//     }
//   }

//   renderPage(pageName) {
//     console.log('clicked')
//     let pageList = {
//       'HomePage': <Homepage setActive={this.setActive} />,
//       'DetailPage': <SheetDetails sheetid={this.state.sheetid} setActive={this.setActive} />,
//       'AddSheet': <AddSheet />,
//       'EditSheetPage': <EditSheetPage setActive={this.setActive} />,
//       'LoginPage': <LoginPage setUser={this.setUser} />,
//       'UpdateSheet': <UpdateSheet sheetid={this.state.sheetid} />
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
//                   <Button variant="dark" onClick={() => { this.setActive('HomePage') }} >Home</Button>
//                   <Button variant="dark" onClick={() => { this.setActive('AddSheet') }} >Upload</Button>
//                   <Button variant="dark" onClick={() => { this.setActive('EditSheetPage') }} >Search</Button>
//                 </ButtonGroup>
//               </div>
//                 <div className='loginButton'>
//                   <Button variant="dark" onClick={() => { this.setActive('LoginPage') }} >{this.state.user.username ? this.state.user.username : 'Login'}</Button>
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
