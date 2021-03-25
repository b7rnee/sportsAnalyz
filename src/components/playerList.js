import React from 'react';
import { DataGrid } from '@material-ui/data-grid'
// import Title from './Title';


export default function PlayerList(props) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'first_name', headerName: 'First name', width: 130 },
        { field: 'last_name', headerName: 'Last name', width: 130 },
        {
          field: 'is_active',
          headerName: 'Is active',
          type: 'number',
          width: 90,
        },
        {
          field: 'full_name',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
      ];
    return (
        <React.Fragment>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid onCellClick={(el)=>{
                     props.getPlayerChart(el.row.full_name)
                }} className="players-list" rows={props.players} columns={columns} pageSize={5}  />
            </div>  
        </React.Fragment>
    );
}