import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

function ClassTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function ClasesDnD() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://www.dnd5eapi.co/api/classes')
      .then(response => {
        setClasses(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  const columns = [
    {
      Header: 'Index',
      accessor: 'index',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>D&D 5e Clases</h1>
      <ClassTable columns={columns} data={classes} />
    </div>
  );
}

export default ClasesDnD;
