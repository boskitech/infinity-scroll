import React from 'react'

const paginator = ({ordersPerPage, totalOrders, paginate}) => {
    const pageNumbers = []

    for(let i=1; i<= Math.ceil(totalOrders/ordersPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <div>
        {pageNumbers.map(number => (
            <button onClick={() => paginate(number)} key={number}>
                {number}
            </button>
        ))}
    </div>
  )
}

export default paginator