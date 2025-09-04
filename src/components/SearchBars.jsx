import { useContext } from "react"
import { PostsContext } from "../context/PostContext"

const SearchBars = () => {

    const { postInput, setPostInput, setTagInput, tagInput } = useContext(PostsContext)
    return (
        <>
            <input type="text" placeholder='Search for posts...' value={postInput} onChange={(e) => setPostInput(e.target.value)} />

            <input type="text" placeholder='Search post by tags...' value={tagInput} onChange={(e) => setTagInput(e.target.value)} />
        </>
    )
}

export default SearchBars
