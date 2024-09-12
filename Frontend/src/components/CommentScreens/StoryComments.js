import React from 'react';
import CommentItem from './CommentItem';
import '../../Css/StoryComments.css'

const StoryComments = ({ commentlist, count, activeUser,getStoryComments }) => {

    return (
        <>
            {count !== 0 ?
                <div className='storyComments'>
                    <h5>MOST RELEVANT</h5>
                    <div className="comment-Wrapper">
                        {
                            commentlist.map((comment) => {
                                return (
                                    <CommentItem key={comment._id} comment={comment} activeUser={activeUser} getStoryComments={getStoryComments} count={count}/>
                                )
                            })
                        }
                    </div>

                </div> :
                <div className='no-response'>There are currently no responses for this story.
                    Be the first to respond. </div>
            }
        </>
    )
}

export default StoryComments;
