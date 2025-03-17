import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className="w-full py-12 bg-gray-900 min-h-screen">
            <Container className>
                <h1 className="text-4xl font-bold text-white text-center mb-6">
                    📚 All Blog Posts
                </h1>
                <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
                    Explore a collection of insightful blogs covering various topics. Stay informed and inspired! ✨
                </p>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {posts.map((post) => (
                            <div key={post.$id} className="p-4 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                                <PostCard {...post} />
                                <p className="text-gray-400 text-sm mt-2">
                                    📝 {post.author} | 📅 {new Date(post.date).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400 text-center mt-10">No posts available. Check back later! 🚀</p>
                )}
            </Container>
        </div>
    )
}

export default AllPosts
