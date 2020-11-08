import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Posts from './Posts';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const getPosts = () => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="App">
      <h1>Pagination Practice </h1>
     <Posts />
    </div>
  );
}

export default App;
