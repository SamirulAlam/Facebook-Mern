import React, { useEffect, useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import axios from "../axios"
import Pusher from 'pusher-js'

const pusher = new Pusher('130aedb385bdf9737af2', {
    cluster: 'ap2'
  });

const Feed = () => {

    const [postData,setPostData] =useState([]);
    const syncFeed = () =>{
        axios.get('/retrieve/posts')
        .then((res)=>{
            console.log(res.data);
            setPostData(res.data);
        })
    }

    useEffect(()=>{
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
        syncFeed()
    });
    },[])

    useEffect(()=>{
        syncFeed();
    },[])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                postData.map(entry => (
                    <Post
                        profilePic="https://avatars.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4"
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username="Samirul"
            />
                ))
            }
        </div>
    )
}

export default Feed
