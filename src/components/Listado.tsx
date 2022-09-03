import React from 'react'
import Item from './Item';
import products from './data.json';
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

interface ListadoPropsI{
  setTotalProducts: React.Dispatch<React.SetStateAction<number>>
}

export default function Listado({ setTotalProducts }: ListadoPropsI) {

  return (
      <div className='container'>
        {products.map(data => <Item key={data.id} name={data.producto.nombre} description={data.producto.descripcion} setTotalProduct={setTotalProducts} stock={data.stock}/>)}
      </div>
  )
}
