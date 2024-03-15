import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

export default function User() {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setUserData(res.data.results[0]))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <>
            {userData ? <>
                {userData.email}
             {/*    <img src={userData?.picture?.medium} /> */}
            </> : "Loading"}
        </>
    )
}