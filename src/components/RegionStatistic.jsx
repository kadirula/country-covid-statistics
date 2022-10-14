import React from 'react'
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { } from '@mui/material/tablerow'
const RegionStatistic = () => {
    const { regionStatistic } = useSelector(state => state.covid);

    return (
        <>
            <TableContainer className='my-6 !bg-gray-300 rounded-xl'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-orange-300'>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Bölge</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Vaka</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Ölüm</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Kurtarılan</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Güncelleme</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {regionStatistic.map((item, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': {} }} >
                                <TableCell align="center" component="th" scope="row">{item.province != null ? item.province : item.country}</TableCell>
                                <TableCell align="center">
                                    {item.confirmed != null ? item.confirmed.toLocaleString("tr-TR") : 'Bir Veri Bulunamadı'}
                                </TableCell>
                                <TableCell align="center">
                                    {item.deaths != null ? item.deaths.toLocaleString("tr-TR") : 'Bir Veri Bulunamadı'}
                                </TableCell>
                                <TableCell align="center">
                                    {item.recovered != null ? item.recovered.toLocaleString("tr-TR") : 'Bir Veri Bulunamadı'}
                                </TableCell>
                                <TableCell align="center">{new Date(item.lastUpdate).toLocaleDateString('tr-TR')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default RegionStatistic