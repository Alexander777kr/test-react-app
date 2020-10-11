import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData = {props.state.postData} addPost = {props.addPost}/>
        </div>
    )
}

export default Profile;