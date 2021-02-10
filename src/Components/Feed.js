import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://avatars.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4"
                message="Hello"
                timestamp="time"
                imgName="https://cdn.motor1.com/images/mgl/Yp07j/s1/tesla-pricing-lead.jpg"
                username="Samirul"
            />
        </div>
    )
}

export default Feed
