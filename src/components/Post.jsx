import React from 'react'
import { Link } from 'react-router-dom';
import Host from '../Host'

export const Post = ({ image, title, Desc, createdAt, category, postId }) => {
    

    return (
        <div>

            <div className='text-white  w-full flex-col  flex gap-2'>
            
                <div className='  rounded-xl flex flex-col justify-center items-center border-gray-400 p-4'>
                <Link to={`/post/${postId}`}>
                    <div className=' h-52'>
                        <img src={ image} className='rounded-xl object-cover h-full w-full' alt="" />
                    </div>

                    <div className='text-center font-bold text-2xl'>
                     <p>{title}</p>    
                    </div>

                    <div className=''>
                        <p className='text-yellow-600 text-center'>{new Date(createdAt).toDateString()}</p>
                    </div>

                    <div>
                        <p className='px-1 text-left'>
                            {Desc}
                        </p>
                    </div>
                    </Link>  
                </div>
            </div>

        </div>
    )
}
