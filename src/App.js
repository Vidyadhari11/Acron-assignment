import {Component} from "react"
import QuestionsList from "./components/QuestionsList"
import { IoHomeSharp,IoPricetags,IoHelpBuoyOutline} from "react-icons/io5";
import { FaQuestion,FaUsers,FaPlus,FaSearch} from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";
import {RiDiscussFill} from "react-icons/ri"
import { BiSolidInfoCircle } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";

import './App.css';

class App extends Component {
    state={questionsList:[]}

    componentDidMount(){
      this.getQuestions()
    }

      getQuestions=async()=>{
      const url="https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
      const response=await fetch(url)
      
      if (response.ok){
        const data=await response.json()
       
        const updatedData=data.items.map(each=>({
          viewCount:each.view_count,
          answerCount:each.answer_count,
          title:each.title,
          score:each.score,
          profileImage:each.owner.profile_image,
          displayName:each.owner.display_name,
          reputation:each.owner.reputation,
          tags:each.tags,
          questionId:each.question_id,
          
        }))
          this.setState({questionsList:updatedData})
      }else{
        console.log("fetch failed")
      }
    }


  render(){
    const {questionsList}=this.state
  return (
    <div>
    <div className="app">
      <img src="https://www.ranklogos.com/wp-content/uploads/2015/06/Stack-Overflow-Logo.png" className="logo" alt="stack logo" />
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
        <ul className="questions-list-container">
          {questionsList.map(each=>(
            <QuestionsList key={each.questionId} details={each}/>
          ))}
        </ul>
      </div>
     </div>
     <div className="bottom-part">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" className="image" alt="stackflow"/>
        <ul className="features-container">
          <li className="features">
            <h1 className="side-heading">STACK OVERFLOW</h1>
              <div className="topics">
                <p className="topic">questions</p>
                <p className="topic">Help</p>
              </div>
          </li>
          <li className="features">
            <h1 className="side-heading">PRODUCTS</h1>
              <div className="topics">
                <p className="topic">Teams</p>
                <p className="topic">Advertising</p>
                <p className="topic">Collectives</p>
                <p className="topic">Talent</p>
              
              </div>
          </li>
          <li className="features">
            <h1 className="side-heading">COMPANY</h1>
              <div className="topics">
                <p className="topic">About</p>
                <p className="topic">Press</p>
                <p className="topic">Work Here</p>
                <p className="topic">Legal</p>
                <p className="topic">Privacy Policy</p>
                <p className="topic">Terms of Service</p>
                <p className="topic">Contact Us</p>
                <p className="topic">Cookie Settings</p>
              </div>
          </li>
          <li className="features">
            <h1 className="side-heading">STACK EXCHANGENETWORK</h1>
              <div className="topics">
                <p className="topic">Technology</p>
                <p className="topic">Culture & recreation</p>
                <p className="topic">Life & arts</p>
                <p className="topic">Science</p>
                <p className="topic">Professional</p>
                <p className="topic">Business</p>
                <p className="topic">API</p>
                <p className="topic">Data</p>
              </div>
          </li>
        </ul>
     </div>
     
     </div>
  );
}
}

export default App;
     