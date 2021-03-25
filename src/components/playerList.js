import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
// import Title from './Title';


export default function PlayerList(props) {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [players, setPlayers] = React.useState(props.players.slice(1, 5))
    useEffect(() => {
        setPlayers(props.players.slice(1, 5))
    }, [props])
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setPlayers(props.players.slice(newPage * 5, newPage * 2 + 10))
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <React.Fragment>
            {/* <Title>Recent Orders</Title> */}
            <Table size="small" className="players-list">
                <TableHead>
                    <TableRow>
                        <TableCell>Full name</TableCell>
                        <TableCell>Is active</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell align="right">Id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.players.length > 0 &&
                        props.players
                            .map((row, index) => (
                                row.is_active &&
                                <TableRow key={row}>
                                    <TableCell onClick={() => {
                                        props.getPlayerChart(row.full_name)
                                    }}>{row.full_name}</TableCell>
                                    <TableCell>{String(row.is_active)}</TableCell>
                                    <TableCell>{row.first_name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                    <TableCell align="right">{row.id}</TableCell>
                                </TableRow>
                            ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={10}
                            rowsPerPage={10}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                        // onChangeRowsPerPage={handleChangeRowsPerPage}
                        // ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </React.Fragment>
    );
}