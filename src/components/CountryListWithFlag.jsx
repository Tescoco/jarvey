import React, { useEffect, useState } from 'react'
import axios from 'axios';
import api from '../utilities/LanguageWithFlag.json'

import flag from '../assets/img/flag.svg'

export default function CountryListWithFlag({ className = "", innerClass }) {
  const [country, setCountry] = useState([]);
  const [defaultItem, setDefaultItem] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const [showDrop, setShowDrop] = useState(false);
  const handleChange = (e) => {
    setDefaultItem(e)
    setShowDrop(false)
    setSearchValue('')
  }


  useEffect(() => {
    setCountry(api);
    setDefaultItem(api[0])
  }, [])

  // for country list
  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/all")
  //     .then((res) => {
  //       const countryNames = res.data.map((c) => ({
  //         name: c?.name?.common,
  //         flag: c?.flags?.svg
  //       }));
  //       const sortedCountries = countryNames.sort((a, b) => a.name.localeCompare(b.name));
  //       setCountry(sortedCountries);
  //       setDefaultItem(sortedCountries[0])

  //     })
  //     .catch((error) => {
  //       console.log(error.message);

  //     })
  // }, [])

  const filteredData = country.filter(data =>
    data.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className={`relative ${className}`}>

      <div className="relative">
        <button onClick={() => setShowDrop(!showDrop)} className={`flex items-center justify-between font-inter font-normal text-sm text-[#111111]/70 h-11 md:h-12 px-3 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px]`}>
          <div className="flex items-center gap-2">
            <span className='block size-4 rounded-full overflow-hidden bg-red-500'>
              <img src={defaultItem.flag || flag} className='size-full object-cover' alt="" />
            </span>
            <span>
              {defaultItem.name || 'Loading...'}
            </span>
          </div>
          <span className={`${showDrop ? '-scale-y-100' : 'scale-y-100'}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0001 10.879L13.7126 7.1665L14.7731 8.227L10.0001 13L5.22705 8.227L6.28755 7.1665L10.0001 10.879Z" fill="currentColor" fillOpacity="0.5" />
            </svg>
          </span>
        </button>
        {showDrop &&
          <div className={`p-2 absolute z-[1] top-full mt-1 left-0 w-full md:max-w-[300px] bg-white border border-solid border-stroke rounded-lg max-h-[250px] overflow-y-auto flex flex-col items-start ${innerClass}`}>
            <span className='block sticky -top-2 -mt-2 left-0 w-full bg-white pt-2'>
              <input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Type here..."
                className={`mb-2 h-9 px-3 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-lg font-inter font-normal text-xs text-[#111111]/80 placeholder:text-[#111111]/50`}
              />
            </span>
            {filteredData.map((item, index) => (
              <button className={`${item.name === defaultItem.name ? 'bg-gray-100 text-heading' : 'bg-white text-[#111]/80'} hover:text-primary flex items-center gap-2 text-sm font-inter px-3 py-2 rounded-md hover:bg-gray-100 w-full text-start`} onClick={() => handleChange(item)} key={index}>
                <span className='block size-4 rounded-full overflow-hidden bg-red-500'>
                  <img src={item.flag || flag} className='size-full object-cover' alt="" />
                </span>
                {item.name}
              </button>
            ))}
          </div>
        }
      </div>
    </div>
  )
}
