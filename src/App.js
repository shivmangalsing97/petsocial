import './App.css';
import Container from './Components/Container';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Reset from './Reset';
import Post from './Components/Post';
import PostCard from './Components/PostCard';
import Index from './Components/Index';
import LoggedInHome from './Components/LoggedInHome';
import Timeline from './Components/TimeLine';
import About from './Components/About';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Index childComponent={<Login />}/>} />
          <Route exact path="/home" element={<Index childComponent={<Login />}/>} />
          <Route exact path="/e-coupons" element={<Index childComponent={<Login />}/>} />
          <Route exact path="/e-brands" element={<Index childComponent={<Login />}/>} />
          <Route exact path="/reuse" element={<Index childComponent={<Login />}/>} />
          <Route exact path="/faf" element={<Index childComponent={<Login />}/>} />
          <Route exact path="/loggedInHome" element={<LoggedInHome childComponent={<PostCard />} />} />
          <Route exact path="/feed" element={<Container />} />
          <Route exact path="/login" element={<Index childComponent={<Login />}/>} />
          <Route exact path="/register" element={<Index childComponent={<Register />} />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/timeline" element={<LoggedInHome childComponent={<Timeline />} />} />
          <Route exact path="/about" element={<LoggedInHome childComponent={<About />} />} />
          <Route exact path="/album" element={<LoggedInHome childComponent={<PostCard />} />} />
          <Route exact path="/pets" element={<LoggedInHome childComponent={<PostCard />} />} />
          <Route exact path="/myuploads" element={<LoggedInHome childComponent={<PostCard />} />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
