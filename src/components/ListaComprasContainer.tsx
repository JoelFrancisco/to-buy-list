import { Item } from '../App';
import '../App.css'

export default function ListaComprasContainer({ listaCompras }: { listaCompras: Item[]; }) {
  return (
    <div className="lista-compras-container">
      <ul className="lista-items">
        {listaCompras.length > 0 ? listaCompras.map(({ nome }) => (
          <li>{nome}</li>
        )) : null}
      </ul>
    </div>
  )
}
