import { Item } from '../App';
import '../App.css'

export default function ListaComprasContainer({ listaCompras, setListaCompras }: 
  { 
    listaCompras: Item[]
    setListaCompras: React.Dispatch<React.SetStateAction<Item[]>>
  }) {

  function handleAtualizacaoStatusComprado(id: string) {
    const novaLista = listaCompras.map(item => {
      if (item.id !== id) {
        return item;
      } 

      item.comprado = !item.comprado;
      return item;
    });

    setListaCompras(novaLista);
  }

  function handleExcluirItem(id: string) {
    const novaLista = listaCompras.filter(item => item.id !== id);
    setListaCompras(novaLista);
  }

  return (
    <div className="lista-compras-container">
      <ul className="lista-items">
        {listaCompras.length > 0 ? listaCompras.map(({ id, nome, comprado }) => (
          <li className="item-lista" key={id}>
            <p style={comprado ? { textDecoration: "line-through", color: "#9e9e9e"} : {}} 
              onClick={() => handleAtualizacaoStatusComprado(id)}>
              {nome}
            </p>
            <button onClick={() => handleExcluirItem(id)}>excluir</button>
          </li>
        )) : null}
      </ul>
    </div>
  )
}
