import { React, useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import Host from '../Host'
import { Link, Navigate } from 'react-router-dom'

export const Search = () => {

  const [PostsData, setPostsData] = useState([]);
  const [setToggle, tog] = useState(false)


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${Host}/AllgetPosts`)
      setPostsData(res.data)
    }
    fetchPosts();
  }, [])


  console.log(PostsData)



  return (
    <div>
      <div className='flex flex-row '>
        <input type="text" placeholder='Search an article' className='bg-gray-700 w-64 rounded-s-md outline-none px-2 md:py-0 py-1 text-lg' />
        <span className='bg-gray-700 px-1 text-white  rounded-e-md text-center'>
          <FaSearch className='text-white pt-1' />
        </span>
        <div className={`bg-white hidden  fixed rounded-e-md md:top-10 top-28  w-72 text-black`}>
          <ul className='px-2 flex flex-col gap-2 py-1'>
            {
              PostsData.map((e) => (
                <Link > {e.title} </Link>
              ))
            }
          </ul>
        </div>

      </div>
    </div>
  )
}
