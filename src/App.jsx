import React from 'react'
import useFetchData from './useFetchData'

const App = () => {

 const data= useFetchData('https://jsonplaceholder.typicode.com/users')
 console.log(data)
  return (
    <div>App</div>
  )
}

export default App