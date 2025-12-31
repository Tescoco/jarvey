import Input from '../Input'
import Dropdown from '../Dropdown';
import React, { useState, useEffect, forwardRef } from 'react';

import viewStyle_1 from '../../assets/img/layout-img.png'
import viewStyle_2 from '../../assets/img/layout-img2.png'

const Branding = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    logo: null,
    brandName: '',
    mainFont: null,
    layout: null
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [logoPreview, setLogoPreview] = useState(null);

  const Font = [
    { name: 'Roboto' },
    { name: 'Open Sans' },
    { name: 'Noto Sans Japanese' },
    { name: 'Montserrat' },
    { name: 'Tektur' },
    { name: 'Oswald' },
    { name: 'Noto Sans' },
    { name: 'Raleway' },
    { name: 'Nunito Sans' },
    { name: 'Nunito' },
    { name: 'Rubik' },
  ];

  const headerFooter = [
    {
      view: '1 page layout',
      icon: viewStyle_1,
    },
    {
      view: 'Card Layout',
      icon: viewStyle_2,
    }
  ];

  // Validate field
  const validateField = (name, value) => {
    switch (name) {
      case 'logo':
        if (!value) return 'Logo is required';
        return '';
      case 'brandName':
        if (!value || !value.trim()) return 'Brand Name is required';
        return '';
      case 'mainFont':
        if (!value) return 'Main Font is required';
        return '';
      case 'layout':
        if (!value) return 'Layout is required';
        return '';
      default:
        return '';
    }
  };

  // Validate form
  const validateForm = () => {
    const allTouched = {
      logo: true,
      brandName: true,
      mainFont: true,
      layout: true
    };
    setTouched(allTouched);

    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Expose validation function globally
  useEffect(() => {
    window.validateBrandingForm = validateForm;

    return () => {
      delete window.validateBrandingForm;
    };
  }, [formData]);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, logo: 'Please upload an image file' }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, logo: 'Image size must be less than 5MB' }));
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        setFormData(prev => ({ ...prev, logo: file }));
        setErrors(prev => ({ ...prev, logo: '' }));
        setTouched(prev => ({ ...prev, logo: true }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const handleRemoveImage = () => {
    setLogoPreview(null);
    setFormData(prev => ({ ...prev, logo: null }));
    setTouched(prev => ({ ...prev, logo: true }));
    setErrors(prev => ({ ...prev, logo: 'Logo is required' }));
  };

  // Handle layout selection
  const handleLayoutSelect = (layout) => {
    setFormData(prev => ({ ...prev, layout }));
    setTouched(prev => ({ ...prev, layout: true }));
    const error = validateField('layout', layout);
    setErrors(prev => ({ ...prev, layout: error }));
  };

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

  return (
    <div>
      <div className="text mb-2">
        <h2 className='text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1'>Add your branding</h2>
        <p>Give the help center your brand's look and feel. Additional customization available later</p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h6 className='text-sm font-semibold !leading-[150%] text-[#0A0D14]'>Logo</h6>
          <p className='text-xs mb-0 font-normal !leading-[150%]'>Display header of your help center.</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className="w-full">
                {!logoPreview ? (
                  <label
                    htmlFor='drop'
                    className={`relative z-[1] rounded-2xl border cursor-pointer ${touched.logo && errors.logo
                      ? 'border-[#FE4234] bg-[#FE4234] bg-opacity-[8%]'
                      : 'border-primary bg-primary bg-opacity-[8%]'
                      } min-h-[201px] flex items-center flex-col justify-center`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                      <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className='mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs'>
                      Drop your image here or <span className='block text-primary underline'>browse</span>
                    </span>
                    <input
                      type="file"
                      id="drop"
                      className='hidden'
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                ) : (
                  <div className="relative rounded-2xl border border-primary overflow-hidden min-h-[201px]">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="w-full h-[201px] object-contain bg-white"
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 bg-[#FE4234] text-white rounded-full p-2 hover:bg-[#E03828] transition-colors"
                      type="button"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                )}
                {touched.logo && errors.logo && (
                  <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
                    </svg>
                    {errors.logo}
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="mb-4">
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
                <label className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>
                  Main Font<span className="text-[#FE4234]">*</span>
                </label>
                <Dropdown
                  className='mb-0'
                  placeholder="Select font"
                  items={Font}
                  required={true}
                  value={formData.mainFont}
                  onChange={(value) => {
                    handleChange('mainFont', value);
                    handleBlur('mainFont');
                  }}
                />
                {touched.mainFont && errors.mainFont && (
                  <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
                    </svg>
                    {errors.mainFont}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full md:col-span-6 lg:col-span-4">
          <h6 className='text-sm font-semibold !leading-[150%] text-[#0A0D14] -top-3 md:-top-6 lg:-top-9 relative'>Layout</h6>
          <div className="grid grid-cols-2 gap-4">
            {headerFooter.map((item, index) => (
              <div
                onClick={() => handleLayoutSelect(item)}
                className="cursor-pointer"
                key={index}
              >
                <div className="relative z-[1]">
                  {formData.layout?.view === item.view && (
                    <div className="absolute w-full h-full bg-primary/10 top-0 left-0 flex items-center justify-center rounded-xl">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <rect y="0.5" width="20" height="20" rx="10" fill="#7856FF" />
                        <path d="M5.875 11.8737L8.35245 13.8418C8.57476 14.0184 8.89934 13.9746 9.06699 13.7455L14.125 6.83203" stroke="white" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                  <img
                    src={item.icon}
                    alt={item.view}
                    className={`w-full mb-5 bg-[#7856FF] bg-opacity-10 border border-solid ${touched.layout && errors.layout && !formData.layout
                      ? 'border-[#FE4234]'
                      : 'border-[#E2E4E9]'
                      } rounded-xl`}
                  />
                </div>
                <p className='text-sm font-semibold !leading-[150%] text-[#0A0D14]'>{item.view}</p>
              </div>
            ))}
          </div>
          {touched.layout && errors.layout && (
            <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
              </svg>
              {errors.layout}
            </p>
          )}
        </div>
      </div>
    </div>
  );
});

Branding.displayName = 'Branding';

export default Branding;

// import Input from '../Input'
// import Dropdown from '../Dropdown';
// import React, { useState, useEffect } from 'react';

// import viewStyle_1 from '../../assets/img/layout-img.png'
// import viewStyle_2 from '../../assets/img/layout-img2.png'


// export default function Branding({ onValidationChange }) {

//   const [formData, setFormData] = useState({
//     logo: null,
//     brandName: '',
//     mainFont: null,
//     layout: null
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [logoPreview, setLogoPreview] = useState(null);

//   const Font = [
//     { name: 'Roboto' },
//     { name: 'Open Sans' },
//     { name: 'Noto Sans Japanese' },
//     { name: 'Montserrat' },
//     { name: 'Tektur' },
//     { name: 'Oswald' },
//     { name: 'Noto Sans' },
//     { name: 'Raleway' },
//     { name: 'Nunito Sans' },
//     { name: 'Nunito' },
//     { name: 'Rubik' },
//   ]

//   const headerFooter = [
//     {
//       view: '1 page layout',
//       icon: viewStyle_1,
//     },
//     {
//       view: 'Card Layout',
//       icon: viewStyle_2,
//     }
//   ]

//   // Validate field
//   const validateField = (name, value) => {
//     switch (name) {
//       case 'logo':
//         if (!value) return 'Logo is required';
//         return '';
//       case 'brandName':
//         if (!value || !value.trim()) return 'Brand Name is required';
//         return '';
//       case 'mainFont':
//         if (!value) return 'Main Font is required';
//         return '';
//       case 'layout':
//         if (!value) return 'Layout is required';
//         return '';
//       default:
//         return '';
//     }
//   };

//   // Validate form
//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(formData).forEach(key => {
//       const error = validateField(key, formData[key]);
//       if (error) newErrors[key] = error;
//     });
//     setErrors(newErrors);

//     const isValid = Object.keys(newErrors).length === 0;
//     if (onValidationChange) {
//       onValidationChange(isValid, formData);
//     }
//     return isValid;
//   };

//   // FIX: Expose validation function globally
//   useEffect(() => {
//     window.validateBrandingForm = validateForm;
//   }, [formData]);

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Validate file type
//       if (!file.type.startsWith('image/')) {
//         setErrors(prev => ({ ...prev, logo: 'Please upload an image file' }));
//         return;
//       }

//       // Validate file size (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         setErrors(prev => ({ ...prev, logo: 'Image size must be less than 5MB' }));
//         return;
//       }

//       // Create preview
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setLogoPreview(reader.result);
//         setFormData(prev => ({ ...prev, logo: file }));
//         setErrors(prev => ({ ...prev, logo: '' }));
//         setTouched(prev => ({ ...prev, logo: true }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Remove image
//   const handleRemoveImage = () => {
//     setLogoPreview(null);
//     setFormData(prev => ({ ...prev, logo: null }));
//   };

//   // Handle layout selection
//   const handleLayoutSelect = (layout) => {
//     setFormData(prev => ({ ...prev, layout }));
//     setTouched(prev => ({ ...prev, layout: true }));
//     const error = validateField('layout', layout);
//     setErrors(prev => ({ ...prev, layout: error }));
//   };

//   const handleChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (touched[name]) {
//       const error = validateField(name, value);
//       setErrors(prev => ({ ...prev, [name]: error }));
//     }
//   };

//   const handleBlur = (name) => {
//     setTouched(prev => ({ ...prev, [name]: true }));
//     const error = validateField(name, formData[name]);
//     setErrors(prev => ({ ...prev, [name]: error }));
//   };

//   return (
//     <div>
//       <div className="text mb-2">
//         <h2 className='text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1'>Add your branding</h2>
//         <p>Give the help center your brand's look and feel. Additional customization available later</p>
//       </div>

//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-12">
//           <h6 className='text-sm font-semibold !leading-[150%] text-[#0A0D14]'>Logo</h6>
//           <p className='text-xs mb-0 font-normal !leading-[150%]'>Display header of your help center.</p>
//         </div>

//         <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
//           <div className="grid grid-cols-12 gap-4">
//             <div className="col-span-12 md:col-span-6">
//               <div className="w-full">
//                 {!logoPreview ? (
//                   <label
//                     htmlFor='drop'
//                     className={`relative z-[1] rounded-2xl border cursor-pointer ${touched.logo && errors.logo
//                         ? 'border-[#FE4234] bg-[#FE4234] bg-opacity-[8%]'
//                         : 'border-primary bg-primary bg-opacity-[8%]'
//                       } min-h-[201px] flex items-center flex-col justify-center`}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
//                       <path d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337" stroke="#7856FF" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                     <span className='mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs'>
//                       Drop your image here or <span className='block text-primary underline'>browse</span>
//                     </span>
//                     <input
//                       type="file"
//                       id="drop"
//                       className='hidden'
//                       accept="image/*"
//                       onChange={handleImageUpload}
//                     />
//                   </label>
//                 ) : (
//                   <div className="relative rounded-2xl border border-primary overflow-hidden min-h-[201px]">
//                     <img
//                       src={logoPreview}
//                       alt="Logo preview"
//                       className="w-full h-[201px] object-contain bg-white"
//                     />
//                     <button
//                       onClick={handleRemoveImage}
//                       className="absolute top-2 right-2 bg-[#FE4234] text-white rounded-full p-2 hover:bg-[#E03828] transition-colors"
//                       type="button"
//                     >
//                       <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                         <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                       </svg>
//                     </button>
//                   </div>
//                 )}
//                 {touched.logo && errors.logo && (
//                   <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
//                     <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
//                       <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
//                     </svg>
//                     {errors.logo}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="col-span-12 md:col-span-6">
//               <div className="mb-4">
//                 <Input
//                   className='mb-0'
//                   type="text"
//                   placeholder="Type here"
//                   label="Brand Name"
//                   required={true}
//                   value={formData.brandName}
//                   onChange={(e) => handleChange('brandName', e.target.value)}
//                   onBlur={() => handleBlur('brandName')}
//                 />
//                 {touched.brandName && errors.brandName && (
//                   <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
//                     <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
//                       <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
//                     </svg>
//                     {errors.brandName}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>
//                   Main Font<span className="text-[#FE4234]">*</span>
//                 </label>
//                 <Dropdown
//                   className='mb-0'
//                   placeholder="Select font"
//                   items={Font}
//                   required={true}
//                   value={formData.mainFont}
//                   onChange={(value) => {
//                     handleChange('mainFont', value);
//                     handleBlur('mainFont');
//                   }}
//                 />
//                 {touched.mainFont && errors.mainFont && (
//                   <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
//                     <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
//                       <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
//                     </svg>
//                     {errors.mainFont}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-full md:col-span-6 lg:col-span-4">
//           <h6 className='text-sm font-semibold !leading-[150%] text-[#0A0D14] -top-3 md:-top-6 lg:-top-9 relative'>Layout</h6>
//           <div className="grid grid-cols-2 gap-4">
//             {headerFooter.map((item, index) => (
//               <div
//                 onClick={() => handleLayoutSelect(item)}
//                 className="cursor-pointer"
//                 key={index}
//               >
//                 <div className="relative z-[1]">
//                   {formData.layout?.view === item.view && (
//                     <div className="absolute w-full h-full bg-primary/10 top-0 left-0 flex items-center justify-center rounded-xl">
//                       <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
//                         <rect y="0.5" width="20" height="20" rx="10" fill="#7856FF" />
//                         <path d="M5.875 11.8737L8.35245 13.8418C8.57476 14.0184 8.89934 13.9746 9.06699 13.7455L14.125 6.83203" stroke="white" strokeLinecap="round" />
//                       </svg>
//                     </div>
//                   )}
//                   <img
//                     src={item.icon}
//                     alt={item.view}
//                     className={`w-full mb-5 bg-[#7856FF] bg-opacity-10 border border-solid ${touched.layout && errors.layout && !formData.layout
//                         ? 'border-[#FE4234]'
//                         : 'border-[#E2E4E9]'
//                       } rounded-xl`}
//                   />
//                 </div>
//                 <p className='text-sm font-semibold !leading-[150%] text-[#0A0D14]'>{item.view}</p>
//               </div>
//             ))}
//           </div>
//           {touched.layout && errors.layout && (
//             <p className="text-[#FE4234] text-xs mt-1 flex items-center gap-1">
//               <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
//                 <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 10a1 1 0 110-2 1 1 0 010 2zm1-3.5a.5.5 0 01-1 0v-3a.5.5 0 011 0v3z" />
//               </svg>
//               {errors.layout}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }