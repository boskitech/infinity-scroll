import axios from 'axios'
import {useState, useEffect} from 'react'
import Page from './components/page'

function App() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('https://shoppeefy.herokuapp.com/api/orders/')
      setOrders(response.data)
    }

    fetchOrders()
  },[])


  return (
    <div className="App">
        <Page orders={orders}/>
    </div>
  );
}

export default App;
