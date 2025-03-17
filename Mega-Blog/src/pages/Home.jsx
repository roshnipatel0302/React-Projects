import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap p-40">
                        <div className="p-2 w-full">
                            <h1 className="text-3xl font-bold mb-4">🚀 Unlock Exclusive Content!</h1>
                            <p className="text-gray-300 mb-4 text-lg">
                                Get access to premium posts, latest updates, and insightful content.
                                Join our community now! 💡
                            </p>
                            <ul className="text-gray-400 mb-6 text-sm">
                                <li>✅ Access to expert articles</li>
                                <li>✅ Early access to new posts</li>
                            </ul>
                            <Link
                                to="/login"
                                className="px-6 py-2 bg-pink-700 hover:bg-pink-800 text-white rounded-lg transition font-semibold"
                            >
                                Login Now
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-3.5'>
            <Container>
                <h2 className="text-3xl font-bold text-center my-6 pt-2">
                    📢 Stay Updated with the Latest Posts!
                </h2>
                <p className="text-center text-gray-300 mb-8">
                    Explore trending topics, insightful stories, and expert opinions. 🚀
                </p>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home