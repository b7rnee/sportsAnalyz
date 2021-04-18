import React from 'react';
import { DataGrid } from '@material-ui/data-grid'
import Title from '../Header/title';


export default function PlayerList(props) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'first_name', headerName: 'First name', width: 400 },
        { field: 'last_name', headerName: 'Last name', width: 400 },
        {
            field: 'is_active',
            headerName: 'Is active',
            width: 200,
        },
        {
            field: 'full_name',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 300,
        },
    ];
    return (
        <React.Fragment>
            <Title>Тоглогчдын жагсаалт</Title>
            <div style={{ cursor: "pointer", height: 400, width: '100%' }}>
                <DataGrid onCellClick={(el) => {
                    props.getPlayerChart(el.row.full_name)
                }} className="players-list" rows={props.players} columns={columns} pageSize={5} />
            </div>
        </React.Fragment>
    );
}