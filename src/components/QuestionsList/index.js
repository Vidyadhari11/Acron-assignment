
import "./index.css"
const QuestionsList =(props)=>{
    const {details}=props
    const {title,viewCount,tags,answerCount,displayName,profileImage,reputation}=details
   
   
    return(
        <li className="question-item-container">
            <div className="view-score-container">
                <p className="view">{answerCount} answer</p>
                <p className="view">{viewCount} views</p>
            </div>
            <div className="questions">
                 <p className="title">{title}</p>
                 <ul className="tags-container">
                    {tags.map(each=>(
                        <li>
                            <p className="tags">{each}</p>
                        </li>
                    )
                        
                    )}
                 </ul>
                 <div className="user-details">
                    <div className="profile">
                        <img src={profileImage} alt="profile" className="profile-image"/>
                        <p>{displayName}</p>
                    </div>
                    <p>{reputation}</p>
                    
                 </div>
                
            </div>
        </li>
    )
}

export default QuestionsList