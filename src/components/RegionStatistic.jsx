import React from 'react'
import { useSelector } from 'react-redux'
const RegionStatistic = () => {
    const { regionStatistic } = useSelector(state => state.covid);

    return (
        <div className='overflow-x-auto relative'>
            <table className="table-auto bg-gray-300 w-full rounded-lg my-6">
                <thead className='bg-orange-300'>
                    <tr>
                        <th className='py-3 rounded-l-lg'>Bölge</th>
                        <th className='py-3'>Vaka</th>
                        <th className='py-3'>Ölüm</th>
                        <th className='py-3'>İyileşen</th>
                        <th className='py-3 rounded-r-lg'>Güncelleme</th>
                    </tr>
                </thead>
                <tbody>
                    {regionStatistic.map((item, index) => (
                        <tr key={index}>
                            <td align="center" className='py-2 font-bold'>
                                {item.province != null ? item.province : item.country}
                            </td>
                            <td align="center" className='py-2'>
                                {item.confirmed != null ? item.confirmed.toLocaleString("tr-TR") : 'Bir Veri Bulunamadı'}
                            </td>
                            <td align="center" className='py-2'>
                                {item.deaths != null ? item.deaths.toLocaleString("tr-TR") : 'Bir Veri Bulunamadı'}
                            </td>
                            <td align="center" className='py-2'>
                                {item.recovered != null ? item.recovered.toLocaleString("tr-TR") : 'Bir Veri Bulunamadı'}
                            </td>
                            <td align="center" className='py-2'>
                                {new Date(item.lastUpdate).toLocaleDateString('tr-TR')}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RegionStatistic