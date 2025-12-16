import './App.css'
import ProductTab from "./ProductTab.jsx"

function App() {
  let color= {
    color : "green"
  }
  return (
   <div>
    <h1 style= {color} >BLOCKBASTERS DEALS SHOP NOW!!?</h1>
      <ProductTab />
    </div>
  )
}

export default App
