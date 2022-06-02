import axios from 'axios'
import {useState, useEffect} from 'react'
import Page from './components/page'
import Paginator from './components/paginator'

function App() {

  const [orders, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(3)
  const [ordersPerPage] = useState(10)

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('https://shoppeefy.herokuapp.com/api/orders/')
      setOrders(response.data)
    }

    fetchOrders()
  },[])

  const indexOfLastOrder = currentPage * ordersPerPage
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder)

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className="App">
        <Page orders={currentOrders}/>
        <Paginator ordersPerPage={ordersPerPage} totalOrders={orders.length} paginate={paginate}/>
    </div>
  );
}

export default App;
