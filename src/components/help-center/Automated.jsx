import React, { useState, useEffect, forwardRef } from 'react';
import Dropdown from '../Dropdown';
import Switch from '../Switch';

const Automated = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    store: null,
    orderManagement: true,
    shippingPolicy: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const contact = [
    { name: 'contact-1' },
    { name: 'contact-2' },
    { name: 'contact-3' },
    { name: 'contact-4' },
    { name: 'contact-5' },
  ];

  // Validate field
  const validateField = (name, value) => {
    if (name === 'store') {
      if (!value) return 'Please connect a store';
      return '';
    }
    return '';
  };

  // Validate form
  const validateForm = () => {
    setTouched({ store: true });

    const newErrors = {};
    const error = validateField('store', formData.store);
    if (error) newErrors.store = error;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    window.validateAutomatedForm = validateForm;

    return () => {
      delete window.validateAutomatedForm;
    };
  }, [formData]);

  const handleStoreChange = (value) => {
    setFormData(prev => ({ ...prev, store: value }));
    setTouched(prev => ({ ...prev, store: true }));

    const error = validateField('store', value);
    setErrors(prev => ({ ...prev, store: error }));
  };

  const handleSwitchChange = (name, checked) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div>
      <div className="text">
        <h2 className='text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1'>
          Automate
        </h2>
        <p className='text-sm text-[#858585] font-inter font-normal !leading-normal mb-5'>
          Start getting the most from Automate now.
        </p>
      </div>

      <div className="mb-4">
        <label className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>
          Connect a Store <span className="text-[#FE4234]">*</span>
        </label>
        <p className='text-xs text-[#858585] font-inter font-normal !leading-normal mb-2'>
          Connect a Store to use Automate features and to enable auto-embedding to your website.
        </p>
        <Dropdown
          className='mb-0'
          placeholder="Connect"
          items={contact}
          required={true}
          value={formData.store}
          onChange={handleStoreChange}
        />
        {touched.store && errors.store && (
          <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
            </svg>
            {errors.store}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <p className='font-inter font-semibold text-sm !leading-normal text-heading'>
          Order management
        </p>
        <span className='text-xs text-[#858585] font-inter font-normal !leading-normal mb-3'>
          Cards displayed are set globally for all channels from Automate settings.
        </span>
        <div className="flex items-center gap-2 mb-6">
          <Switch
            checked={formData.orderManagement}
            onChange={(e) => handleSwitchChange('orderManagement', e.target.checked)}
          />
          <p className='font-inter font-medium text-sm text-heading'>
            Allow customers to manage orders from my Help Center
          </p>
        </div>

        <p className='font-inter font-semibold text-sm !leading-normal text-heading'>
          Flows
        </p>
        <span className='text-xs text-[#858585] font-inter font-normal !leading-normal mb-3'>
          Enable up to 6 flows on your Help Center. Only flows matching the Help Center language are displayed.
        </span>
        <div className="flex items-center gap-2">
          <Switch
            id='policy'
            checked={formData.shippingPolicy}
            onChange={(e) => handleSwitchChange('shippingPolicy', e.target.checked)}
          />
          <label htmlFor='policy' className='font-inter font-medium text-sm text-heading cursor-pointer'>
            Shipping policy
          </label>
        </div>
      </div>
    </div>
  );
});

Automated.displayName = 'Automated';

export default Automated;

// import Dropdown from '../Dropdown';
// import Switch from '../Switch'

// export default function Automated() {
//   const contact = [
//     { name: 'contact-1' },
//     { name: 'contact-2' },
//     { name: 'contact-3' },
//     { name: 'contact-4' },
//     { name: 'contact-5' },
//   ]
//   return (
//     <div>
//       <div className="text">
//         <h2 className='text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1'>Automate</h2>
//         <p className='text-sm text-[#858585] font-inter font-normal !leading-normal mb-5'>Start getting the most from Automate now.</p>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="" className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>Connect a Store <span className="text-[#FE4234]">*</span></label>
//         <p className='text-xs text-[#858585] font-inter font-normal !leading-normal mb-2'>Connect a Store to use Automate features and to enable auto-embedding to your website.</p>
//         <Dropdown className='mb-0' placeholder="Connect" items={contact} required={true} />
//       </div>
//       <div className="flex flex-col">
//         <p className='font-inter font-semibold text-sm !leading-normal text-heading'>Order management</p>
//         <span className='text-xs text-[#858585] font-inter font-normal !leading-normal mb-3'>Cards displayed are set globally for all channels from Automate settings.</span>
//         <div className="flex items-center gap-2 mb-6">
//           <Switch checked />
//           <p className='font-inter font-medium text-sm text-heading'>Allow customers to manage orders from my Help Center</p>
//         </div>
//         <p className='font-inter font-semibold text-sm !leading-normal text-heading'>Flows</p>
//         <span className='text-xs text-[#858585] font-inter font-normal !leading-normal mb-3'>Enable up to 6 flows on your Help Center. Only flows matching the Help Center language are displayed.</span>
//         <div className="flex items-center gap-2">
//           <Switch id='policy' />
//           <p className='font-inter font-medium text-sm text-heading'>Shipping policy</p>
//         </div>
//       </div>
//     </div>
//   )
// }