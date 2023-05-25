import { ChangeEvent, FormEvent, useState } from 'react';
import { Item } from '../App';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

export default function Form({ listaCompras, setListaCompras }: {
  listaCompras: Item[];
  setListaCompras: React.Dispatch<React.SetStateAction<Item[]>>;
}) {
  const [nome, setNome] = useState<string>();
  const [quantidade, setQuantidade] = useState<number>(0);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nome || quantidade === 0)
      return;

    setListaCompras([
      ...listaCompras,
      { 
        id: uuidv4(), 
        comprado: false, 
        nome, 
        quantidade 
      }
    ]);
  }

  return (
    <form className="form-add-item" action="#" method="post" onSubmit={handleSubmit}>
      <fieldset>
        <div className="form-container form-group mb-3">
          <label htmlFor="item">Adicionar Novo Item na Lista:</label>
          <input value={nome} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setNome(e.target.value)
          }} type="text" className="form-control" id="item" />

          <input value={quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = Number(e.target.value);

            if (!isNaN(value)) {
              setQuantidade(value);
            }
          }} type="number" className="form-control" id="item" />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </fieldset>
    </form>
  );
}
