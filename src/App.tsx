import { useState } from 'react'
import './App.css'
import ListaComprasContainer from './components/ListaComprasContainer';
import Form from './components/Form';


export type Item = {
  id: string
  nome: string
  quantidade: number
  comprado: boolean
}

function App() {
  const [listaCompras, setListaCompras] = useState<Item[]>([]);

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <ListaComprasContainer listaCompras={listaCompras} setListaCompras={setListaCompras} />
      <Form listaCompras={listaCompras} setListaCompras={setListaCompras} />
    </div>
  )
}

export default App;


