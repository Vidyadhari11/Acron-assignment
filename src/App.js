import {Component} from "react"
import { IoHomeSharp,IoPricetags,IoHelpBuoyOutline} from "react-icons/io5";
import { FaQuestion,FaUsers,FaPlus,FaSearch} from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";
import {RiDiscussFill} from "react-icons/ri"
import { BiSolidInfoCircle } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import './App.css';

class App extends Component {

  getQuestions=async()=>{
   const url="https://stackapps.com/questions/ask?tags=app"
   const response=await fetch(url)
   const data=response.json()
   if (response.ok){
   console.log(data)
  }else{
    console.log("fetch failed")
  }
}


  render(){
  return (
    <div>
    <div className="app">
      <img src="https://www.zdnet.com/a/img/resize/fc7b8d4b1f4b34862881ebf41dec855600480098/2022/08/01/71433421-11f6-4ee9-97d5-3249e8457842/stack-overflow-logo-crop-for-twitter.jpg?auto=webp&width=1280" className="logo" alt="stack logo" />
      <div className="lists">
        <p className="list">About</p>
        <p className="list">Products</p>
        <p className="list">For Teams</p>
      </div>
     </div>
     <div className="below-part">
      <ul className="items-container">
        <li className='item'>
            <IoHomeSharp />
            <p className="name">Home</p>
        </li>
        <li className="item">
          <FaQuestion/>
          <p className="name">Questions</p>
        </li>
        <li className="item">
          <IoPricetags/>
          <p className="name">Tags</p>
        </li>
        <li className="item">
          <FaUsers/>
          <p className="name">Users</p>
        </li>
        <li className="item">
          <PiSuitcaseSimpleFill/>
          <p className="name">Companies</p>
        </li>
        <li className="item">
          <p className="name name1">Collectives</p>
          <FaPlus/>

        </li>
        <li className="item">
          <LiaStarSolid/>
          <p className="name">Explore Collectives</p>
        </li>
        <li className="item">
          
          <p className="name name1">Labs</p>
            <BiSolidInfoCircle /> 
        </li>
        <li className="item">
          <RiDiscussFill/>
          <p className="name">Discussions</p>
        </li>
        <li className="team-item">
          <p className="name">TEAMS</p>
          <div className="team-box">
            <strong>Stack overflow for teams-</strong>
            start collaborating and sharing organizational knowledge.
            <img src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e" alt="sidebar"></img>
            <button className="button" type="button">Create a free Team</button>
            <p>Why Teams?</p>

          </div>

        </li>
      </ul>
    
      <div className="questions-container">
        <div className="side-header">
        <div className="search-container">
          <FaSearch className="search-icon"/>
          <input type="search" className="search"/>
        </div>
        <div className="right-part">
          <ul className="card-container">
            <li className="card-item">
              <IoHelpBuoyOutline/>
              <p>Help</p>
            </li>
            <li className="card-item">
              <HiMiniComputerDesktop/>
              <p>Tour</p>
            </li>
          </ul>
        </div>
        </div>
        <h1 className="heading">Questions</h1>
        <ul className="topics">
          <li className="topic">Intersting</li>
          <li className="topic">featured <span style={{border:"1px solid orange",borderRadius:"5px",padding:"2px"}}>432</span></li>
          <li className="topic">hot</li>
          <li className="topic">week</li>
          <li className="topic">month</li>
        
        </ul>
      </div>
     </div>
     </div>
  );
}
}

export default App;
     