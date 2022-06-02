import React from 'react'

const page = ({orders}) => {

  return (
    <div>
    {orders.map((order, index) => (
        <p key={order._id}>{index + 1} - {order.itemName}</p>
    ))}
    </div>
  )
}

export default page