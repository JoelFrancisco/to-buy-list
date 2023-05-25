import { ChangeEvent, FormEvent, useState } from 'react';
import { Item } from '../App';

export default function Form({ listaCompras, setListaCompras }: {
  listaCompras: Item[];
  setListaCompras: React.Dispatch<React.SetStateAction<Item[]>>;
}) {
  const [item, setItem] = useState<Item>();

  function addItem(item: Item) {
    setListaCompras([
      ...listaCompras,
      item
    ]);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!item)
      return;

    addItem(item);
  }

  return (
    <form className="form-add-item" action="#" method="post" onSubmit={handleSubmit}>
      <fieldset>
        <div className="form-group mb-3">
          <label htmlFor="item">Adicionar Novo Item na Lista:</label>
          <input value={item?.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setItem({ nome: e.target.value })
          }} type="text" className="form-control" id="item" />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </fieldset>
    </form>
  );
}
