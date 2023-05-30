import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const Reviews = () => {
    const [index, setIndex] = useState(0)

    const data = [
        {
            imageurl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            username: "Stephen Adeoti",
            role: "Business Developer",
            comments: "Comfort and convenience are things I look out for and this is why I love using TranSafe"
        },
        {
            imageurl: "https://images.unsplash.com/photo-1666867540898-aaa1993ffabc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMHdvbWFuJTIwaW4lMjBoaWphYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            username: "Aminat Dantata",
            role: "Enterpreneur",
            comments: "I am happy to have a platform where I can buy my train tickets without queuing up at the station. Thank you, TranSafe!"
        },
        {
            imageurl: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            username: "Taiwo Aina",
            role: "Travel Writer",
            comments: "A seamless and convenient way to book my tickets ensuring I travel in comfort and style "
        }
    ]

    const currentIndex = data[index]
    
    const dataElements = 
        <div className='w-full p-8 text-center flex flex-col items-center text-gray-700'>
            <img src={currentIndex.imageurl} alt="" className='lg:w-3/6 w-[100%] object-cover h-60 object-top rounded-full'/>
            <h3 className='mt-4 text-2xl font-bold'>{currentIndex.username}</h3>
            <p>{currentIndex.role}</p>
            <p className='mt-4 lg:-3/6 w-full text-sm'>‟{currentIndex.comments}”</p>
        </div>

    function handlePrevious() {
        setIndex(prev => {
            if(prev === 0) {
                return prev = 2
            } return prev - 1
        })
    }

    function handleNext() {
        setIndex(prev => {
            if(prev === 2) {
                return prev = 0
            } return prev + 1
        })
    }

  return (
    <div className='lg:w-3/6 w-full mx-auto'>
        {dataElements}
        <div className='lg:w-1/6 w-3/6 mx-auto flex'>
        <FaAngleLeft onClick={handlePrevious} className='bg-green-700 text-white rounded-full w-full text-2xl mr-2'/>
        <FaAngleRight onClick={handleNext} className='bg-green-700 text-white rounded-full w-full text-2xl'/>
        </div>
    </div>
  )
}

export default Reviews