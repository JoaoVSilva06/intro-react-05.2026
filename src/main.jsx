import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import App from './App.jsx'
import Hello from './Hello.jsx'
import { Product } from './Product.jsx'

const DATA = [
  { title: "Iphone", price: 10000},
  { title: "xBox", price: 5000},
  { title: "Mesa", price: 200}
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello name="João"/>
    <Hello name="Fulano"/>
    <Hello name="Ciclano"/>
    <Hello name="Beltrano"/>
    <Hello />


    {DATA.map( (product) =>  <Product title={product.title} price={product.price} /> )}


  
   

  </StrictMode>,
)
