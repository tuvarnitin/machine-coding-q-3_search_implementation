import { useContext, useEffect, useState } from "react"
import SearchBars from "./components/SearchBars"
import Post from "./components/Post"
import { PostsContext } from "./context/PostContext"

const App = () => {

  const {fetchPosts,filterPosts,postInput,tagInput} = useContext(PostsContext)
 
  useEffect(() => {
    const timer1 = setTimeout(() => fetchPosts(), 300)
    return () => {
      clearTimeout(timer1)
    }
  }, [postInput])

  useEffect(() => {
    const timer2 = setTimeout(() => filterPosts(), 300)
    return () => {
      clearTimeout(timer2)
    }
  }, [tagInput])

  return (
    <main>
      <div className='search-bar-container'>
       <SearchBars />
      </div>
      <div className='post-container'>
         <Post/>
      </div>
    </main>
  )
}

export default App
