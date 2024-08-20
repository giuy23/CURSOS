import React, { useState } from 'react';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: 'Seiya',
        constellation: 'Pegaso'
    },
    {
        id: 2,
        name: 'Shiryu',
        constellation: 'Dragón'
    },
    {
        id: 3,
        name: 'Hyoga',
        constellation: 'Cisne'
    },
    {
        id: 4,
        name: 'Shun',
        constellation: 'Andrómeda'
    },
    {
        id: 5,
        name: 'Ikki',
        constellation: 'Fénix'
    },
];

const CrudApp = () => {

    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        // console.log(...db);
        data.id = Date.now();
        setDb([...db, data]);
    };
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData);
    };
    const deleteData = (id) => {
        let isDelete = confirm('Estas seguro de eliminar el registro?');

        if (isDelete) {
            let newData = db.filter(el => el.id !== id);
            setDb(newData)
        }else {
            return;
        }
    };

  return (
    <div>
        <article className='grid-1-2'>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}></CrudForm>
        <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}></CrudTable>
        </article>
        <h2>CRUD App</h2>
        
    </div>
  )
}

export default CrudApp