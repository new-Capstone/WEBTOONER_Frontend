import React, {useEffect, useState} from "react";
import axios from "axios";

const Users = () => {
    const [posts, setPosts] = useState("");

    useEffect(() => {
        axios({
            method: 'GET',
            url:'http://capstone-webtooner.com/user?userId=17'
        }).then(response => setPosts(response.data))
    })

    const [img, setImg] = useState("");

    useEffect(() => {
        axios({
            method: 'GET',
            url: "http://capstone-webtooner.com/portfolio?tutorId=2"
        }).then(response => setImg(response.data))
    })

    return (
        <div>
            <li>{posts.username}</li>
            <li>{posts.userEmail}</li>
            <li>{posts.description}</li>
            <li>{posts.profileImage}</li>
            

        
        </div>
    );
};

export default Users;