import { useSelector } from 'react-redux'
import bannerBg from '../assets/banner-bg.png'
import { Link } from 'react-router-dom';

const Banner = ({countryName}) => {

    const { totalStatistic } = useSelector(state => state.covid);

    return (
        <div className="relative flex items-center justify-center overflow-hidden">
            <span className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-90 z-10'></span>
            <div className=''>
                <img src={bannerBg} alt="" />
            </div>
            <div className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-20 w-full'>
                <h4 data-testid='countryName' className='text-center font-bold uppercase text-gray-100  tablet:text-2xl laptop:text-5xl'>
                    {countryName}
                </h4>
                <p className='text-gray-200 text-center py-4 tablet:text-xs tablet:pt-2 laptop:text-xl'>
                    <span data-testid='updatedDate' className='text-orange-600 font-bold border-b border-orange-600'>
                        {
                            new Date(totalStatistic?.lastReported).toLocaleDateString('tr-TR')
                        }
                        &nbsp;
                        {
                            new Date(totalStatistic?.lastReported).toLocaleTimeString('tr-TR')
                        }
                    </span>
                    &nbsp; tarihinde güncellenmiştir
                </p>
            </div>
        </div>
    )
}

export default Banner