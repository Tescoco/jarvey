import Input from '../Input'
import Dropdown from '../Dropdown';
import React, { useState, useEffect } from "react";


export default function Basics({ onValidationChange }) {

  const [formData, setFormData] = useState({
    brandName: '',
    defaultLanguage: null,
    subdomain: '',
    store: null
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const langList = [
    { name: 'English', code: 'en' },
    { name: 'Mandarin Chinese', code: 'zh' },
    { name: 'Spanish', code: 'es' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Arabic', code: 'ar' },
    { name: 'Portuguese', code: 'pt' },
    { name: 'Russian', code: 'ru' },
    { name: 'Japanese', code: 'ja' },
    { name: 'Punjabi', code: 'pa' },
    { name: 'German', code: 'de' },
    { name: 'Javanese', code: 'jv' },
    { name: 'Korean', code: 'ko' },
    { name: 'French', code: 'fr' },
    { name: 'Turkish', code: 'tr' },
    { name: 'Vietnamese', code: 'vi' },
    { name: 'Telugu', code: 'te' },
    { name: 'Marathi', code: 'mr' },
    { name: 'Tamil', code: 'ta' },
    { name: 'Urdu', code: 'ur' },
    { name: 'Italian', code: 'it' },
    { name: 'Thai', code: 'th' },
    { name: 'Gujarati', code: 'gu' },
    { name: 'Polish', code: 'pl' },
    { name: 'Ukrainian', code: 'uk' },
    { name: 'Malay/Indonesian', code: 'ms' },
    { name: 'Kannada', code: 'kn' },
    { name: 'Persian (Farsi)', code: 'fa' },
    { name: 'Odia (Oriya)', code: 'or' },
    { name: 'Maithili', code: 'mai' },
    { name: 'Haitian Creole', code: 'ht' },
    { name: 'Hmong', code: 'hmn' },
    { name: 'Romanian', code: 'ro' },
    { name: 'Burmese', code: 'my' },
    { name: 'Cebuano', code: 'ceb' },
    { name: 'Somali', code: 'so' },
    { name: 'Nepali', code: 'ne' },
    { name: 'Kurdish', code: 'ku' },
    { name: 'Pashto', code: 'ps' },
    { name: 'Serbian', code: 'sr' },
    { name: 'Sinhalese', code: 'si' },
    { name: 'Khmer', code: 'km' },
    { name: 'Bhojpuri', code: 'bho' },
    { name: 'Malayalam', code: 'ml' },
    { name: 'Sunda', code: 'su' },
    { name: 'Tagalog', code: 'tl' },
    { name: 'Azerbaijani', code: 'az' },
    { name: 'Belarusian', code: 'be' },
    { name: 'Greek', code: 'el' },
    { name: 'Chichewa', code: 'ny' },
    { name: 'Chewa', code: 'ny' },
    { name: 'Chittagonian', code: 'ctg' },
    { name: 'Catalan', code: 'ca' },
    { name: 'Dutch', code: 'nl' },
    { name: 'Swahili', code: 'sw' },
    { name: 'Burmese', code: 'my' },
    { name: 'Tigrinya', code: 'ti' },
    { name: 'Xhosa', code: 'xh' },
    { name: 'Yoruba', code: 'yo' },
    { name: 'Zulu', code: 'zu' },
    { name: 'Igbo', code: 'ig' },
    { name: 'Hebrew', code: 'he' },
    { name: 'Swedish', code: 'sv' },
    { name: 'Norwegian', code: 'no' },
    { name: 'Finnish', code: 'fi' },
    { name: 'Danish', code: 'da' },
    { name: 'Hungarian', code: 'hu' },
    { name: 'Finnish', code: 'fi' },
    { name: 'Bengali', code: 'bn' },
    { name: 'Tamil', code: 'ta' }
  ];


  const contact = [
    { name: 'contact-1' },
    { name: 'contact-2' },
    { name: 'contact-3' },
    { name: 'contact-4' },
    { name: 'contact-5' },
  ]


  const validateField = (name, value) => {
    switch (name) {
      case 'brandName':
        if (!value?.trim()) return 'Brand Name is required';
        if (value.trim().length < 2) return 'Brand Name must be at least 2 characters';
        return '';

      case 'defaultLanguage':
        if (!value) return 'Default Language is required';
        return '';

      case 'subdomain':
        if (!value?.trim()) return 'Subdomain is required';
        if (!/^[a-zA-Z0-9-]+$/.test(value))
          return 'Subdomain can only contain letters, numbers, and hyphens';
        if (value.length < 3) return 'Subdomain must be at least 3 characters';
        return '';

      case 'store':
        if (!value) return 'Please connect a store';
        return '';

      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    const isValid = Object.keys(newErrors).length === 0;

    if (onValidationChange) {
      onValidationChange(isValid, formData);
    }

    return isValid;
  };

  useEffect(() => {
    // EXPOSE the validation function to parent properly
    window.validateBasicsForm = validateForm;
  }, [formData]);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // React.useEffect(() => {
  //   if (window.validateBasicsForm) {
  //     window.validateBasicsForm = validateForm;
  //   }
  // }, [formData]);



  return (
    <div>
      <h2 className='text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-[15px]'>Set up the basics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative z-[2]">
        <div>
          <Input
            className='mb-0'
            type="text"
            placeholder="Type here"
            label="Brand Name"
            required={true}
            value={formData.brandName}
            onChange={(e) => handleChange('brandName', e.target.value)}
            onBlur={() => handleBlur('brandName')}
          />
          {touched.brandName && errors.brandName && (
            <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
              </svg>
              {errors.brandName}
            </p>
          )}
        </div>

        <div>
          <Dropdown
            className='mb-0'
            label="Default Language"
            placeholder="Select language"
            items={langList}
            search={true}
            required={true}
            value={formData.defaultLanguage}
            onChange={(value) => {
              handleChange('defaultLanguage', value);
              handleBlur('defaultLanguage');
            }}
          />
          {touched.defaultLanguage && errors.defaultLanguage && (
            <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
              </svg>
              {errors.defaultLanguage}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4 relative z-[1]">
        <Input
          className='mb-0'
          type="text"
          placeholder="my-store"
          label="Subdomain"
          rightIcon={'.jarvey.help'}
          rightIconClass="text-[#111] font-inter font-normal text-sm"
          required={true}
          value={formData.subdomain}
          onChange={(e) => handleChange('subdomain', e.target.value)}
          onBlur={() => handleBlur('subdomain')}
        />
        {touched.subdomain && errors.subdomain && (
          <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
            </svg>
            {errors.subdomain}
          </p>
        )}
      </div>

      <div>
        <label className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>
          Connect a Store <span className="text-[#FE4234]">*</span>
        </label>
        <p className='mb-2'>Connect a Store to use Automate features and to enable auto-embedding to your website.</p>
        <Dropdown
          className='mb-0'
          placeholder="Connect"
          items={contact}
          required={true}
          value={formData.store}
          onChange={(value) => {
            handleChange('store', value);
            handleBlur('store');
          }}
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
    </div>
    // <div>
    //   <h2 className='text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-[15px]'>Set up the basics</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative z-[2]">
    //     <Input className='mb-0' type="text" placeholder="Type here" label="Brand Name" required={true} />
    //     <Dropdown className='mb-0' label="Default Language" placeholder="Type here" items={langList} search={true} required={true} />
    //   </div>
    //   <div className="mb-4 relative z-[1]">
    //     <Input className='mb-0' type="text" placeholder="Type here" label="Subdomain" rightIcon={'.jarvey.help'} rightIconClass="text-[#111] font-inter font-normal text-sm" required={true} />
    //   </div>
    //   <div className="">
    //     <label htmlFor="" className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>Connect a Store <span className="text-[#FE4234]">*</span></label>
    //     <p className='mb-2'>Connect a Store to use Automate features and to enable auto-embedding to your website.</p>
    //     <Dropdown className='mb-0' placeholder="Connect" items={contact} required={true} />
    //   </div>
    // </div>
  )
}
