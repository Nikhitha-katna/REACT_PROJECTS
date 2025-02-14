import React, { useEffect, useState } from 'react';
import service from '../appwrite/config'; 
import { Container, PostCard } from '../components';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const user = await service.getAccount(); 
        if (user) {
          setIsAuthenticated(true);
          fetchPosts(); 
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log("User not authenticated", error);
        setIsAuthenticated(false); 
      } finally {
        setLoading(false);
      }
    }

    async function fetchPosts() {
      try {
        const response = await service.getPosts();
        if (response) {
          setPosts(response.documents); 
        }
      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    }

    checkAuth(); 
  }, []); 

  if (loading) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-2xl font-bold">Loading posts...</h1>
        </Container>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
              <p>Please login to see the posts.</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap -mx-2">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <PostCard {...post} />
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;

    
 
