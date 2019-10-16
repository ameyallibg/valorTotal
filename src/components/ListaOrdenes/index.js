import React from 'react';
import { Table, Input } from 'reactstrap';


const ListaOrdenes = (props) => {
  return (
      <div>
          <Table>
              <thead>
                  <tr>
                  <th>Filtrar por:</th>
                  </tr>
                </thead>
          <tr>
          <th>
            <Input type="text" placeholder="Clave">
            </Input>
          </th>
          <th>
            <Input type="select">
                <option >Vendedor</option>
                <option >.</option>
                <option >.</option>
            </Input>
          </th>
          <th>
             <Input type="select">
                <option >Proyecto</option>
                <option >.</option>
            </Input>
          </th>
          <th>
          <Input type="date">Fecha</Input>
          </th>
          <th>
             <Input type="select">
                <option >Estatus</option>
                <option >Vendido</option>
                <option >En proceso</option>
            </Input>
          </th>
        </tr>


          </Table>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Clave</th>
          <th>Vendedor</th>
          <th>Proyecto</th>
          <th>Fecha</th>
          <th>Estatus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default ListaOrdenes;