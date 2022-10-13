import { useSelector } from 'react-redux'
import bannerBg from '../assets/banner-bg.png'
import { Link } from 'react-router-dom';

const Banner = () => {

    const { data } = useSelector(state => state.covid);

    return (
        <div className="relative flex items-center justify-center overflow-hidden">
            <span className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-90 z-10'></span>
            <div className=''>
                <img src={bannerBg} alt="" />
            </div>
            <div className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-20 w-full'>
                <h4 data-testid='countryName' className='text-center font-bold uppercase text-gray-100  tablet:text-2xl laptop:text-5xl'>
                    {data?.location}
                </h4>

                <ul className='flex items-center justify-center py-3 phone:hidden'>
                    <li className='text-gray-400 font-medium transition duration-500 hover:text-orange-600'><Link to='/'>Home</Link></li>
                    <li className='text-gray-400 font-medium mx-3'>/</li>
                    <li className='font-medium text-orange-600'>{data?.location}</li>
                </ul>
                <p className='text-gray-200 text-center tablet:text-xs tablet:pt-2 laptop:text-xl'>
                    <span className='text-orange-600 font-bold border-b border-orange-600'>
                        {
                            new Date(data?.lastReported).toLocaleDateString('tr-TR')
                        }
                        &nbsp;
                        {
                            new Date(data?.lastReported).toLocaleTimeString('tr-TR')
                        }
                    </span>
                    &nbsp; tarihinde güncellenmiştir
                </p>
            </div>
        </div>
    )
}

export default Banner