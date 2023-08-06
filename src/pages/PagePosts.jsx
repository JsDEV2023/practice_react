import React, {useState, useEffect} from 'react';
import { PostList } from '../components/PostList';
import { PostForm } from '../components/PostForm';
import { Filter } from '../components/Filter';
import { MyModal } from '../components/UI/MyModal/MyModal';
import { MyButton } from '../components/UI/button/MyButton';
import { useSearchedPost } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching';
import { getPosts } from '../API/Posts';
import { Loader } from '../components/UI/loader/Loader';
import { arrayPage } from '../utils/PagingationUtil';

function PagePosts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({select: '', query: ''})
    const [visible, setVisible] = useState(false)
    const sortAndSearcPost = useSearchedPost(posts, filter.select, filter.query)
    const [totalCount, setTotalCount] = useState(0)
    const [limit, setLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const [fetch, loading, error] = useFetching(async () => {
      const fetchPosts = await getPosts(limit, currentPage)
      setPosts(() => fetchPosts.data)
      setTotalCount(fetchPosts.headers['x-total-count'])
    })
    const arrayPagination = arrayPage(totalCount, limit)
  
    useEffect(() => {
      fetch()
    }, [limit, currentPage])
  
    const createPost = (post) => {
      setPosts([...posts, post])
    }
  
    const deletePost = (id) => {
      setPosts(posts.filter(post => {
        return post.id !== id
      }))
    }
  
    return (
      <div className="App">
        <MyButton onClick={() => setVisible(true)}>
          Create post
        </MyButton>
        <MyModal visible={visible} setVisible={setVisible}>
          <PostForm create={createPost} setVisible={setVisible}/>
        </MyModal>
        <Filter filter={filter} setFilter={setFilter}/>
        {loading ? 
        <Loader /> :  
        error || <PostList posts={sortAndSearcPost} title='Список постов 1' del={deletePost}/> 
        }
        <div className="pagination">
          { arrayPagination.map(item => {
            return  <span 
                      key={item}
                      className={currentPage === item ? 'active' : ''}
                      onClick = {() => setCurrentPage(item)}
                    >{item}</span>
          })}
        </div>
      </div>
    );
  }
  
  export default PagePosts;
  