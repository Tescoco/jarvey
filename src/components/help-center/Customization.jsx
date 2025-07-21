import React from 'react'
import Input from '../Input'
import Switch from '../Switch'
export default function Customization() {
  const input = [
    {
      icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_10326_74101)">
          <path d="M16 8C16 3.58175 12.4183 0 8 0C3.58175 0 0 3.58175 0 8C0 11.993 2.9255 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77175 3.125C10.647 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.55994 5.25 9.25 5.86669 9.25 6.49937V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.9931 16 8Z" fill="#1877F2" />
          <path d="M11.1141 10.3125L11.4688 8H9.25V6.49937C9.25 5.86662 9.55994 5.25 10.5538 5.25H11.5625V3.28125C11.5625 3.28125 10.647 3.125 9.77169 3.125C7.94438 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C7.16351 15.9676 7.58144 16.0001 8 16C8.41856 16.0001 8.83649 15.9676 9.25 15.9028V10.3125H11.1141Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_10326_74101">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      ),
      name: 'Facebook',
    },
    {
      icon: (<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_10326_74112)">
          <path d="M16 2.08267C15.4009 2.34685 14.7654 2.52024 14.1146 2.59707C14.7924 2.19276 15.3129 1.55253 15.5579 0.789695C14.9136 1.17021 14.2086 1.43832 13.4735 1.58245C12.8747 0.947561 12.0216 0.550781 11.0774 0.550781C9.26456 0.550781 7.79475 2.0135 7.79475 3.81758C7.79475 4.07366 7.82381 4.32296 7.87975 4.56212C5.15162 4.42584 2.73287 3.12528 1.11381 1.14878C0.831312 1.63127 0.669438 2.19251 0.669438 2.79114C0.669438 3.92456 1.249 4.92444 2.12975 5.51031C1.60846 5.49409 1.09864 5.35397 0.642875 5.10165C0.642708 5.11534 0.642646 5.12904 0.642687 5.14277C0.642687 6.72559 1.77419 8.046 3.27581 8.34612C2.79243 8.47693 2.28539 8.49608 1.79344 8.4021C2.21112 9.69998 3.42344 10.6444 4.85981 10.6709C3.73638 11.547 2.32094 12.0693 0.783063 12.0693C0.518063 12.0693 0.256813 12.0539 0 12.0237C1.45269 12.9506 3.17813 13.4914 5.03188 13.4914C11.0698 13.4914 14.3715 8.51344 14.3715 4.19644C14.3715 4.05475 14.3683 3.91386 14.362 3.77379C15.0046 3.31138 15.5593 2.73873 16 2.08267Z" fill="#55ACEE" />
        </g>
        <defs>
          <clipPath id="clip0_10326_74112">
            <rect width="16" height="13" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>

      ),
      name: 'Facebook',
    },
    {
      icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_10326_74122)">
          <path d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="url(#paint0_radial_10326_74122)" />
          <path d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="url(#paint1_radial_10326_74122)" />
          <path d="M8.00056 1.75C6.30319 1.75 6.09013 1.75744 5.4235 1.78775C4.75813 1.81825 4.30394 1.92356 3.90656 2.07812C3.49544 2.23775 3.14675 2.45131 2.79938 2.79881C2.45169 3.14625 2.23813 3.49494 2.078 3.90587C1.923 4.30338 1.81756 4.75775 1.78762 5.42281C1.75781 6.0895 1.75 6.30263 1.75 8.00006C1.75 9.6975 1.7575 9.90987 1.78775 10.5765C1.81838 11.2419 1.92369 11.6961 2.07812 12.0934C2.23787 12.5046 2.45144 12.8533 2.79894 13.2006C3.14625 13.5483 3.49494 13.7624 3.90575 13.922C4.30344 14.0766 4.75769 14.1819 5.42294 14.2124C6.08962 14.2427 6.3025 14.2501 7.99981 14.2501C9.69738 14.2501 9.90975 14.2427 10.5764 14.2124C11.2417 14.1819 11.6964 14.0766 12.0941 13.922C12.5051 13.7624 12.8532 13.5483 13.2005 13.2006C13.5482 12.8533 13.7617 12.5046 13.9219 12.0936C14.0755 11.6961 14.181 11.2417 14.2122 10.5766C14.2422 9.91 14.25 9.6975 14.25 8.00006C14.25 6.30263 14.2422 6.08962 14.2122 5.42294C14.181 4.75756 14.0755 4.30344 13.9219 3.90606C13.7617 3.49494 13.5482 3.14625 13.2005 2.79881C12.8529 2.45119 12.5052 2.23762 12.0938 2.07819C11.6953 1.92356 11.2409 1.81819 10.5755 1.78775C9.90881 1.75744 9.69656 1.75 7.99862 1.75H8.00056ZM7.43988 2.87631C7.60631 2.87606 7.792 2.87631 8.00056 2.87631C9.66938 2.87631 9.86712 2.88231 10.5261 2.91225C11.1355 2.94012 11.4663 3.04194 11.6866 3.1275C11.9783 3.24075 12.1862 3.37619 12.4048 3.595C12.6236 3.81375 12.7589 4.02206 12.8725 4.31375C12.9581 4.53375 13.06 4.8645 13.0878 5.47388C13.1177 6.13275 13.1242 6.33062 13.1242 7.99862C13.1242 9.66663 13.1177 9.86456 13.0878 10.5234C13.0599 11.1327 12.9581 11.4635 12.8725 11.6836C12.7593 11.9753 12.6236 12.1829 12.4048 12.4016C12.1861 12.6203 11.9784 12.7557 11.6866 12.869C11.4665 12.9549 11.1355 13.0565 10.5261 13.0844C9.86725 13.1143 9.66938 13.1208 8.00056 13.1208C6.33169 13.1208 6.13387 13.1143 5.47506 13.0844C4.86569 13.0563 4.53494 12.9544 4.31444 12.8689C4.02281 12.7556 3.81444 12.6202 3.59569 12.4014C3.37694 12.1827 3.24156 11.9749 3.128 11.6831C3.04244 11.463 2.9405 11.1322 2.91275 10.5229C2.88281 9.864 2.87681 9.66613 2.87681 7.99706C2.87681 6.328 2.88281 6.13119 2.91275 5.47231C2.94062 4.86294 3.04244 4.53219 3.128 4.31187C3.24131 4.02019 3.37694 3.81188 3.59575 3.59313C3.81456 3.37438 4.02281 3.23894 4.3145 3.12544C4.53481 3.0395 4.86569 2.93794 5.47506 2.90994C6.05162 2.88387 6.27506 2.87606 7.43988 2.87475V2.87631ZM11.3368 3.91406C10.9228 3.91406 10.5868 4.24969 10.5868 4.66381C10.5868 5.07788 10.9228 5.41381 11.3368 5.41381C11.7509 5.41381 12.0868 5.07788 12.0868 4.66381C12.0868 4.24975 11.7509 3.91381 11.3368 3.91381V3.91406ZM8.00056 4.79038C6.22806 4.79038 4.79094 6.2275 4.79094 8.00006C4.79094 9.77262 6.22806 11.2091 8.00056 11.2091C9.77312 11.2091 11.2098 9.77262 11.2098 8.00006C11.2098 6.22756 9.773 4.79038 8.00044 4.79038H8.00056ZM8.00056 5.91669C9.15112 5.91669 10.0839 6.84938 10.0839 8.00006C10.0839 9.15063 9.15112 10.0834 8.00056 10.0834C6.85 10.0834 5.91725 9.15063 5.91725 8.00006C5.91725 6.84938 6.84994 5.91669 8.00056 5.91669Z" fill="white" />
        </g>
        <defs>
          <radialGradient id="paint0_radial_10326_74122" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.25 17.2323) rotate(-90) scale(15.8572 14.7484)">
            <stop stopColor="#FFDD55" />
            <stop offset="0.1" stopColor="#FFDD55" />
            <stop offset="0.5" stopColor="#FF543E" />
            <stop offset="1" stopColor="#C837AB" />
          </radialGradient>
          <radialGradient id="paint1_radial_10326_74122" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.68006 1.15256) rotate(78.681) scale(7.08825 29.218)">
            <stop stopColor="#3771C8" />
            <stop offset="0.128" stopColor="#3771C8" />
            <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip0_10326_74122">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>

      ),
      name: 'Instagram',
    },
  ]
  return (
    <div className="">
      <div className='Customization grid grid-cols-12 gap-5 w-full mb-5'>
        <div className="col-span-12 md:col-span-6 lg:col-span-7 p-4 border border-solid border-[#E2E4E9] rounded-2xl">
          <div className="text">
            <div className="text mb-5">
              <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-1'>Header settings</h2>
              <p className='text-xs text-[#858585] font-inter font-medium !leading-[120%]'>Change navigation elements at the top of the help center.</p>
            </div>
            <div className="mb-4 relative z-[1]">
              <Input className='mb-0' type="text" placeholder="Type here" label="Logo hyperlink" required />
              <p className='text-xs text-[#858585] font-inter font-medium !leading-[120%] mt-1'>Redirect your logo to a custom URL.</p>
            </div>
            <label htmlFor='policy' className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6">
              <Switch id='policy' />
              <p className='font-inter font-medium text-sm text-heading'>Use custom header</p>
            </label>
            <div className="">
              <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-2'>Navigation Links</h2>
              <div className="flex items-center gap-2.5">
                <button className='px-2.5 py-2 border flex items-center gap-2 border-solid border-[#E2E4E9] rounded-lg max-w-max text-xs text-black font-inter font-medium !leading-[130%] cursor-pointer'>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.50065 2.83398V8.50065M8.50065 8.50065V14.1673M8.50065 8.50065H2.83398M8.50065 8.50065H14.1673" stroke="#111111" strokeOpacity="0.7" strokeWidth="1.66667" strokeLinecap="round" />
                  </svg>
                  Add links
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 p-4 border border-solid border-[#E2E4E9] rounded-2xl max-h-max">
          <div className="text">
            <div className="text mb-5">
              <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-1'>Footer settings</h2>
              <p className='text-xs text-[#858585] font-inter font-medium !leading-[120%]'>Change navigation elements at the top of the help center.</p>
            </div>
            <label htmlFor='policy1' className="flex items-center gap-2 mb-4 ">
              <Switch id='policy1' />
              <p className='font-inter font-medium text-sm text-heading'>Use custom footer</p>
            </label>
            <div className="mb-4">
              <label htmlFor='policy3' className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6">
                <Switch id='policy3' />
                <p className='font-inter font-medium text-sm text-heading'>Powered by Jarvey AI</p>
              </label>
              <p className='text-xs text-[#858585] font-inter font-medium !leading-[120%] -mt-4 pl-0 md:pl-6 lg:pl-8 xl:pl-12'>Use this toggle to display or hide the Gorgias branding on the footer in Help Center.</p>
            </div>
            <div className="">
              <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-2'>Navigation Links</h2>
              <div className="flex items-center gap-2.5">
                <button className='px-2.5 py-2 border flex items-center gap-2 border-solid border-[#E2E4E9] rounded-lg max-w-max text-xs text-black font-inter font-medium !leading-[130%] cursor-pointer'>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.50065 2.83398V8.50065M8.50065 8.50065V14.1673M8.50065 8.50065H2.83398M8.50065 8.50065H14.1673" stroke="#111111" strokeOpacity="0.7" strokeWidth="1.66667" strokeLinecap="round" />
                  </svg>
                  Add links
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 p-4 border border-solid border-[#E2E4E9] rounded-2xl">
          <div className="relative z-[1]">


            {input.map((item, index) => (
              <div className="flex items-center gap-3 gap-y-2.5" key={index}>
                <div className="flex items-center w-full gap-6 mb-3">
                  <div className="flex items-center gap-2">
                    <span className=''>{item.icon}</span>
                    <p className='text-xs text-[#858585] font-inter font-medium !leading-[120%]'>{item.name}</p>
                  </div>
                  <Input className='mb-0 w-full' type="text" placeholder="Type here" inputClass='!h-10'/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 p-4 border border-solid border-[#E2E4E9] rounded-2xl max-h-max">
          <div className="text mb-5">
            <h2 className='text-lg text-black font-inter font-semibold !leading-[130%] mb-1'>Header settings</h2>
            <p className='text-xs text-[#858585] font-inter font-medium !leading-[120%]'>Add extra HTML in the <a href="#" className='text-xs text-[#7856FF] !underline'>head section.</a></p>
          </div>
          <label htmlFor='policy4' className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6">
            <Switch id='policy4' />
            <p className='font-inter font-medium text-sm text-heading'>Add extra HTML</p>
          </label>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 mt-3">
        <button className='btn !text-primary !border-primary main-w-max hover:!text-white'>Cancel</button>
        <button className='btn shadow !text-white main-w-max flex items-center gap-2'>Save Changes</button>
      </div>
    </div>
  )
}
