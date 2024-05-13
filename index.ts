import axios from 'axios'
import { ListaProducto } from './interface/producto.interface'
export type Lista = ListaProducto[]

async function obtenerPosts() {
  const respuesta = await axios.get<Lista>(
    'https://fakestoreapi.com/products'
  )

  const valores = respuesta.data

  const ordenarProductos = valores.sort((a, b) => b.price - a.price);

  const filtrarMayorA = ordenarProductos.filter(product => product.rating.rate > 2.9);

  console.log("Filtrar datos",filtrarMayorA);
}

obtenerPosts()
