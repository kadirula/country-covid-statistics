import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../api/fetchFromAPI';
import { setCountryTotalStatistic, setRegionStatistic } from '../redux/reducers/covidReducer';
import { useSelector, useDispatch } from 'react-redux'

// Images
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

// Components
import Spinner from '../components/Spinner';
import Banner from '../components/Banner';
import CovidCard from '../components/CovidCard';
import RegionStatistic from '../components/RegionStatistic';


const CountryStatisticDetail = () => {

  const { countryName } = useParams();

  const dispatch = useDispatch();

  const { totalStatistic, regionStatistic } = useSelector(state => state.covid);

  const [loading, setLoading] = useState(false);

  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {

    setLoading(true);

    fetchFromAPI(`country=${countryName}`, 'total').then((response) => {

      setResponseMessage(response.message);
      dispatch(setCountryTotalStatistic(response.data));

      setTimeout(() => {
        setLoading(false);
      }, 1700);

    });

    if (responseMessage === 'OK') {
      fetchFromAPI(`country=${countryName}`, 'stats').then((response) => {
        console.log(response.data);
        dispatch(setRegionStatistic(response.data.covid19Stats));

        setTimeout(() => {
          setLoading(false);
        }, 1700);

      });
    }

  }, [countryName, responseMessage])

  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <React.Fragment>
      <Banner countryName={countryName} />
      <div className="container max-w-7xl mx-auto py-5">
        {
          countryName == totalStatistic?.location ?
            <>
              <h3 className='text-center text-orange-600 font-bold text-4xl'>Toplam İstatistik</h3>

              <div className='grid gap-7 py-8 laptop:grid-cols-3'>

                <CovidCard title="Onaylanmış Vaka Sayısı" data={totalStatistic?.confirmed} image={avatar1} />

                <CovidCard title="Ölüm Sayısı" data={totalStatistic?.deaths} image={avatar2} />

                <CovidCard title="İyileşen Sayısı" data={totalStatistic?.recovered} image={avatar3} />

              </div>

              {
                (totalStatistic.location !== 'Global' && regionStatistic?.length) > 0 &&
                <>
                  <h3 className='text-center text-orange-600 font-bold text-4xl'>Ülkeye ait Bölgelerdeki Toplam Covid19 İstatistik</h3>
                  <RegionStatistic />
                </>
              }

            </>
            :

            <h3 className='text-gray-200 font-bold text-3xl text-center'>
              Ülkeye Ait Bir Veri Bulunamadı
            </h3>
        }
      </div>

    </React.Fragment>
  )
}

export default CountryStatisticDetail