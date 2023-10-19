import React, { useState } from 'react'
import './PrevNextButtons.css'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'


function PrevNextButtons({ cryptoData, currentPage, setCurrentPage, totalPages }) {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    }

    const handlePrevPage =() => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    }

  return (
    <>
        <div className="prev-next-buttons">
            <button onClick={handlePrevPage} className='prev-next-button'><AiOutlineArrowLeft/></button>
            <button onClick={handleNextPage} className='prev-next-button'><AiOutlineArrowRight/></button>
        </div>
    </>
  )
}

export default PrevNextButtons