import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData()
    // const [followers, setFollowers] = useState(0);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/roshnipatel0302') // ✅ GitHub API ka sahi URL use karein
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setFollowers(data); // ✅ Followers ko state me set karein
    //         })
    //         .catch((error) => console.error("Error fetching data:", error)); // ✅ Error handling
    // }, []);

    return (
        <div className='text-center bg-orange-500 text-white text-2xl p-4'>
            Github Followers: {data.followers}
            {/* <h1 className='text-black'>Github Followers: {followers.followers}</h1> */}
            {/* <h1 className='text-black'>Github View Type: {followers.user_view_type}</h1>
            <h1 className='text-black'>Github Public Repo: {followers.public_repos}</h1>
            <h1 className='text-black font-size-sm'>Github Login: {followers.login}</h1> */}
            <img src="https://plus.unsplash.com/premium_photo-1732098508796-3a92d57e0b60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMHByb2ZpaWV8ZW58MHx8MHx8fDA%3D" alt="" srcset="" />
        </div>
    );
};

export default Github;

export const githubUserInfo = async () => {
    try {
        const response = await fetch('https://api.github.com/users/roshnipatel0302');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
        return null;
    }
};
