import Dropdown from '../../components/Dropdown'
import TextEditor from '../../components/OrderMangemanget/TextEditor'

export default function Cancel() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="">
          <p className='mb-2 !leading-normal text-xs font-medium'>Allow customers to request a cancellation if an order hasn't been processed or shipped.</p>
          <a href="#" className='text-primary !underline !leading-normal text-xs font-medium'>Learn About order Statuses in Jarvey</a>
        </div>
        <div className="">
          <h3 className='text-sm text-heading font-inter font-semibold !leading-[150%]'>Eligibility window</h3>
          <p>Customers can request a cancellation when an order meets the following criteria:</p>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 ">
          <h3>Order status is</h3>
          <Dropdown className='!mb-0' btnClass="max-h-[48px] min-w-[192px] text-heading font-medium" placeholder="Processing Fulfilment" isArrow={true} items={[{ name: 'Processing Fulfilment' }, { name: 'Unfulfilled ' }, { name: 'Pending delivery' }]} />
          <button className='cursor-pointer'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6663 11.6654L2.33301 2.33203M11.6663 2.33203L2.33301 11.6654" stroke="#525866" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="">
          <h3 className='text-sm text-heading font-inter font-semibold !leading-[150%]'>Response text</h3>
          <p className=''>After customers request a cancellation, reply with an automated message.</p>
        </div>
        <TextEditor value='We are unable to cancel the order, because it has almost been delivered to your address. Check our refund policy for furter information.' />
      </div>
    </>
  )
}
