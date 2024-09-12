import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Loader from "./Loader";
import "../../Css/Blog.css"

import { useNavigate } from "react-router-dom"
import { baseUrl } from "../../Urls";
const Home = () => {
  const search = useLocation().search
  const searchKey = new URLSearchParams(search).get('search')
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


  useEffect(() => {
    const getStories = async () => {

      setLoading(true)
      try {
        const { data } = await axios.get(`${baseUrl}/story/getAllStories?search=${searchKey || ""}`)

        setStories(data.data)

        setLoading(false)
      }
      catch (error) {
        setLoading(true)
      }
    }
    getStories()
  }, [setLoading, search, navigate])



  return (
    <div className="Inclusive-home-page">
      {loading ?
        <Loader/>
        :
        <div>
          <div className="story-card-wrapper">
            {stories.length !== 0 ?
              stories.map((story) => {
                return (
                  <CardStory key={uuidv4()} story={story} />
                )
              }) 
              : 
               <NoStories/>
            }
          </div>

        </div>

       } 
      <br />
    </div>

  )

};

export default Home;