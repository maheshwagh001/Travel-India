import React from 'react';
import { Link } from 'react-router-dom';

const Story = ({ story }) => {

    const editDate = (createdAt) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(createdAt);
        var datestring = d.getDate() + " " +monthNames[d.getMonth()] + ", " + d.getFullYear()
        return datestring
    }


    const truncateContent = (content) => {
        const trimmedString = content.substr(0, 73);
        return trimmedString
    }
    const truncateTitle= (title) => {
        const trimmedString = title.substr(0, 25);
        return trimmedString
    }
    const truncateLocation= (location) => {
        const trimmedString = location.substr(0, 25);
        return trimmedString
    }
    
    return (

        <div className="story-card">
            <Link to={`/story/${story.slug}`} className="story-link">

                <img className=" story-image" src={`${story.image}`} alt={truncateTitle(story.title)} />
                <div className="story-content-wrapper">

                    <h5 className="story-title">
                        
                    {story.title.length > 25 ? truncateTitle(story.title)+"..." : story.title
                    
                    }
                    </h5>


                    <p className="story-text"dangerouslySetInnerHTML={{__html : truncateContent( story.content) +"..."}}>
                        </p>

                    <div className="story-createdAt">
                    <div>
                    {editDate(story.createdAt)} 
                    </div>
                    <span className="story-createdAt-location">-</span>
                    <div className="story-createdAt-location">
                        {truncateLocation(story.location)}
                    </div>
                        
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Story;
