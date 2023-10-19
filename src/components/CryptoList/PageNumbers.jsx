import React from 'react'
import './PageNumbers.css'

function PageNumbers({ cryptoData, currentPage, setCurrentPage, totalPages }) {
    const handleClick = (pageNum) => {
        setCurrentPage(pageNum);
    }

    return (
        <div className="page-numbers">
            {Array.from({ length: totalPages }).map((_, index) => {
                const pageNum = index + 1;
                return (
                    <button 
                        key={pageNum}
                        onClick={() => handleClick(pageNum)}
                        className={currentPage === pageNum ? 'active' : ''}
                    >
                        {pageNum}
                    </button>
                );
            })}
        </div>
    )
}

export default PageNumbers