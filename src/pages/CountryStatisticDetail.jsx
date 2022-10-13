import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../api/fetchFromAPI';
import { setData } from '../redux/reducers/covidReducer';
import { useSelector, useDispatch } from 'react-redux'

// Images
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

// Components
import Spinner from '../components/Spinner';
import Banner from '../components/Banner';
import CovidCard from '../components/CovidCard';


const CountryStatisticDetail = () => {

  const { countryName } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.covid);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`country=${countryName}`).then((response) => {
      console.log(response);
      dispatch(setData(response.data));
      setTimeout(() => {
        setLoading(false);
      }, 1700);
    });

  }, [countryName])


  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <React.Fragment>
      <Banner />

      <div className="container max-w-7xl mx-auto py-5">
        <div className='grid gap-7 py-8 laptop:grid-cols-3'>

          <CovidCard title="Onaylanmış Vaka Sayısı" data={data?.confirmed} image={avatar1} />

          <CovidCard title="Ölüm Sayısı" data={data?.deaths} image={avatar2} />

          <CovidCard title="İyileşen Sayısı" data={data?.recovered} image={avatar3} />

        </div>

      </div>
    </React.Fragment>
  )
}

export default CountryStatisticDetail