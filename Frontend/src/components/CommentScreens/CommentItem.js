import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Urls';

const CommentItem = ({ comment, activeUser,getStoryComments, count  }) => {
    const navigate = useNavigate()
    const [likeCount, setLikeCount] = useState(comment.likeCount)
    const [likeStatus, setLikeStatus] = useState(false)

    useEffect(() => {

        const getCommentLikeStatus = async () => {

            const comment_id = comment._id
            try {
                const { data } = await axios.post(`${baseUrl}/comment/${comment_id}/getCommentLikeStatus`, { activeUser }, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("authToken")}`,
                    },
                })
                setLikeStatus(data.likeStatus)
            }
            catch (error) {

                localStorage.removeItem("authToken")
                navigate("/")
            }
        }

        getCommentLikeStatus()

    }, [])
    const editDate = (createdAt) => {
        const d = new Date(createdAt);
        var datestring = d.toLocaleString('eng', { month: 'long' }).substring(0, 3) + " " + d.getDate()
        return datestring
    }


    const handleCommentLike = async () => {

        const comment_id = comment._id

        try {
            if(activeUser._id == null){
                navigate("/login");
              }
            const { data } = await axios.post(`${baseUrl}/comment/${comment_id}/like`, { activeUser }, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            })

            setLikeCount(data.data.likeCount)
            setLikeStatus(data.likeStatus)

        }
        catch (error) {
            localStorage.removeItem("authToken")
        }
    }

    const handleDelete = async () => {

        if (window.confirm("Do you want to delete this comment")) {
            
            const comment_id = comment._id
            // console.log(activeUser)
          try {
    
            await axios.delete(`${baseUrl}/comment/${comment_id}/delete`, {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            })
            getStoryComments();
            setTimeout(() => {
                document.querySelector(".commentCount").textContent = count - 1;
            }, 650);
    
          }
          catch (error) {
            navigate("/blog")
            console.log(error)
          }
    
        }
    
      }

    return (

        <div className='comment-item'>
            <div className="comment-top-block">

                <section>
                    <img src={`${comment.author.photo}`} alt={comment.author.username} width="35" />

                    <div>
                        <span className='comment-author-username' >{comment.author.username}</span>
                        <span className='comment-createdAt'>{editDate(comment.createdAt)}</span>
                    </div>
                </section>

                <section>
                {activeUser && comment.author &&
                    (comment.author._id === activeUser._id || activeUser.role === "admin")?
                        <span onClick={handleDelete}>
                            <RiDeleteBin6Line />
                        </span>
                      :
                      null
                      }
                </section>
            </div>


            <div className="comment-content">

                <span dangerouslySetInnerHTML={{ __html: comment.content }}></span>

            </div>


            <div className="comment-bottom-block">

                <div className="commentLike-wrapper">


                    <i className='biLike' onClick={() => handleCommentLike()}>
                    {likeStatus ? <FaHeart color="#0063a5" /> :
                          <FaRegHeart />
                        }
                    </i>
                    <span className='commentlikeCount'>
                        {likeCount}

                    </span>
                </div>

            </div>

        </div>

    )
}

export default CommentItem;
