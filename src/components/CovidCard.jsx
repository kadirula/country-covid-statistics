import React from 'react'

const CovidCard = ({ title, image, data }) => {
    return (
        <div className='border-2 border-gray-600 rounded-xl overflow-hidden bg-gray-300 mx-5'>
            <div className='overflow-hidden cursor-pointer'>
                <img src={image} className='mx-auto transitian duration-500 hover:scale-105 tablet:w-1/2 tablet:mx-auto' alt="" />
            </div>
            <h4 className='px-4 py-3 text-xl text-center font-bold border-b-2 border-gray-600 bg-orange-300'>{title}</h4>
            <div className='text-center font-bold py-5 text-xl'>
                {data != null ? data.toLocaleString("tr-TR") : 'Bir veri bulunamadı'}
            </div>
        </div>
    )
}

export default CovidCard