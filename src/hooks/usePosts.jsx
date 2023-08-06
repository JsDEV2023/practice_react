import {useMemo} from 'react'

export const useSortedPost = (posts, select) => {
    const sortedPost = useMemo(() => {
        if (select) {
          return [...posts].sort((a, b) => a[select].localeCompare(b[select]))
        }
        return posts
      }, [posts, select])
    return sortedPost
}

export const useSearchedPost = (posts, select, query) => {
    const sorts = useSortedPost(posts, select)
    const searchedPost = useMemo(() => {
        return sorts.filter((item) => item.title.toLowerCase().includes(query))
      }, [posts, query, select])
    return searchedPost
}