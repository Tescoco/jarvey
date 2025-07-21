import Dropdown from '../Dropdown';
import Switch from '../Switch'
export default function Automated() {
  const contact = [
    { name: 'contact-1' },
    { name: 'contact-2' },
    { name: 'contact-3' },
    { name: 'contact-4' },
    { name: 'contact-5' },
  ]
  return (
    <div>
      <div className="text">
        <h2 className='text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1'>Automate</h2>
        <p className='text-sm text-[#858585] font-inter font-normal !leading-normal mb-5'>Start getting the most from Automate now.</p>
      </div>
      <div className="mb-4">
        <label htmlFor="" className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>Connect a Store <span className="text-[#FE4234]">*</span></label>
        <p className='text-xs text-[#858585] font-inter font-normal !leading-normal mb-2'>Connect a Store to use Automate features and to enable auto-embedding to your website.</p>
        <Dropdown className='mb-0' placeholder="Connect" items={contact} required={true} />
      </div>
      <div className="flex flex-col">
        <p className='font-inter font-semibold text-sm !leading-normal text-heading'>Order management</p>
        <span className='text-xs text-[#858585] font-inter font-normal !leading-normal mb-3'>Cards displayed are set globally for all channels from Automate settings.</span>
        <div className="flex items-center gap-2 mb-6">
          <Switch checked />
          <p className='font-inter font-medium text-sm text-heading'>Allow customers to manage orders from my Help Center</p>
        </div>
        <p className='font-inter font-semibold text-sm !leading-normal text-heading'>Flows</p>
        <span className='text-xs text-[#858585] font-inter font-normal !leading-normal mb-3'>Enable up to 6 flows on your Help Center. Only flows matching the Help Center language are displayed.</span>
        <div className="flex items-center gap-2">
          <Switch id='policy' />
          <p className='font-inter font-medium text-sm text-heading'>Shipping policy</p>
        </div>
      </div>
    </div>
  )
}
