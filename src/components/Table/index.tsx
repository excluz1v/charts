import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSort} from "@fortawesome/free-solid-svg-icons";

import styles from './Table.module.css'

type TProps = {
    data:Array<Record<string, string>>
    sortable ?: boolean
}

export function CustomTable({data, sortable}:TProps ) {
    const titles = Object.keys(data[0])
    return (
        <TableContainer component={Paper} className={styles.Table}>
            <Table>
                <TableHead >
                    <TableRow>
                        {titles.map(title =>{
                            return <TableCell className={styles.Table__header}key={title}>
                                <span className={styles.Table__header_data}>{title}</span>
                                <span className={styles.Table__header_data}>                            {sortable ? <FontAwesomeIcon icon={faSort} />: null}
                            </span>
                            </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => {
                        const values= Object.entries(row)
                        return <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {values.map(([key, value])=>{
                                return  <TableCell
                                    className={styles.Table__cell}
                                    key={row.id +value}>
                                    <span className={styles.Table__data}>{value}</span></TableCell>
                            })}
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
