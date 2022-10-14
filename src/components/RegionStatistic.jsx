import React from 'react'
import { useSelector } from 'react-redux'
const RegionStatistic = () => {
    const { regionStatistic } = useSelector(state => state.covid);

    return (
        <div className='tablet:overflow-x-scroll tablet:px-6'>
            <table className="bg-gray-300 rounded-lg my-7 table-auto overflow-scroll w-full border-collapse ">
                <thead className='bg-orange-300'>
                    <tr>
                        <th className='py-3 rounded-l-lg border border-slate-900'>Bölge</th>
                        <th className='py-3 border border-slate-900'>Vaka</th>
                        <th className='py-3 border border-slate-900'>Ölüm</th>
                        <th className='py-3 border border-slate-900'>İyileşen</th>
                        <th className='py-3 rounded-r-lg border border-slate-900'>Güncelleme</th>
                    </tr>
                </thead>
                <tbody>
                    {regionStatistic.map((item, index) => (
                        <tr key={index}>
                            <td align="center" className='py-2 px-4 whitespace-nowrap font-bold border border-slate-900'>
                                {item.province != null ? item.province : item.country}
                            </td>
                            <td align="center" className='py-2 px-4 whitespace-nowrap border border-slate-900'>
                                {item.confirmed != null ? item.confirmed.toLocaleString("tr-TR") : 'Bir Veri Bulunamadı'}
                            </td>
                            <td align="center" className='py-2 px-4 whitespace-nowrap border border-slate-900'>
                                {item.deaths != null ? item.deaths.toLocaleString("tr-TR") : 'Bir Veri Bulunamadı'}
                            </td>
                            <td align="center" className='py-2 px-4 whitespace-nowrap border border-slate-900'>
                                {item.recovered != null ? item.recovered.toLocaleString("tr-TR") : 'Bir Veri Bulunamadı'}
                            </td>
                            <td align="center" className='py-2 px-4 whitespace-nowrap border border-slate-900'>
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