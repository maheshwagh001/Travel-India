import React from 'react'

const ReadListStoryItem = ({ story, editDate }) => {

    const truncateContent = (content) => {
        const trimmedString = content.substr(0, 130);
        return trimmedString
    }

    return (

        <div className="readList-story-item">

            <section>
                <div className="story-top-block">
                    <div className="readList-story-author">

                        {story.author.username}

                    </div>
                    <span>-</span>
                    <div className="readList-story-createdAt">
                        {editDate(story.createdAt)}
                    </div>
                    <span>-</span>
                    <div className="readList-story-createdAt">
                        {story.location}
                    </div>

                </div>

                <div className="story-med-block">
                    <div className="readList-story-title">
                        <a href={`story/${story.slug}`}>
                            {story.title}
                        </a>
                    </div>
                    <div className="readList-story-content">

                        <span dangerouslySetInnerHTML={{ __html: truncateContent(story.content) + "..." }}></span>

                    </div>

                </div>

                <div className="story-bottom-block">
                    <a href={`story/${story.slug}`}>
                        <span>
                            Read More
                        </span>
                        <span>
                            -
                        </span>
                        <span>
                            {story.readtime} min read
                        </span>
                    </a>

                    
                </div>
            </section>

            <section>
                <div className="story-Image-Wrap">
                    <img src={`${story.image}`} alt={story.title} width="180px" />
                </div>

            </section>

        </div>
    )
}

export default ReadListStoryItem