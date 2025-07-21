import Dropdown from '../components/Dropdown';
import MainInner from '../components/MainInner';
import { c_16 } from '../utilities/Classes';

export default function Notification() {

  const card = [
    {
      title: "Snooze expired",
      massage: 'Let’s send your first message!',
      des: 'Let us know if we can do anything else for you-we’re here to help.',
      status: "active"
    },
    {
      title: "Snooze expired",
      massage: 'Let’s send your first message!',
      des: 'Let us know if we can do anything else for you-we’re here to help.',
      status: "active"
    },
    {
      title: "Snooze expired",
      massage: 'Let’s send your first message!',
      des: 'Let us know if we can do anything else for you-we’re here to help.',
      status: "active"
    },
    {
      title: "Snooze expired",
      massage: 'Let’s send your first message!',
      des: 'Let us know if we can do anything else for you-we’re here to help.',
    },
    {
      title: "Snooze expired",
      massage: 'Let’s send your first message!',
      des: 'Let us know if we can do anything else for you-we’re here to help.',
    },
  ]

  return (
    <>
      <MainInner className='!p-0 mt-16 md:mt-20 lg:mt-[88px]'>
        <div className={`rounded-[20px] mx-4 md:mx-auto lg:mx-0 px-4 md:px-5 pb-4 max-w-[501px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.16)]`}>
          <div className="flex items-center justify-between mb-4 md:mb-7 border-b border-stroke py-5 md:py-7 -mx-4 md:-mx-5 px-4 md:px-6">
            <div className="flex items-center gap-[14px]">
              <h4 className='text-base md:text-lg'>Notifications</h4>
              <Dropdown info='' className='!mb-0 z-[2]' btnClass="text-primary max-h-[34px] min-w-[65px]" placeholder="All" isArrow={true} items={[
                { name: "All" },
                { name: "Read" },
                { name: "UnRead" },
              ]} />
            </div>
            <button className='text-base md:text-lg text-heading hover:text-primary'>Mark All as Read</button>
          </div>
          <div className="flex flex-col gap-4">
            {card.map((item, index) => (
              <div className={`flex gap-[11px] relative z-[1] ${c_16} ${item.status == "active" && "bg-[#F7F7F7]"} p-3`} key={index}>
                <div className="size-[30px] bg-primary rounded-full flex items-center justify-center flex-[0_0_auto]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1668 2.83203H3.8335C2.72893 2.83203 1.8335 3.72746 1.8335 4.83203V11.1654C1.8335 12.2699 2.72893 13.1654 3.8335 13.1654H12.1668C13.2714 13.1654 14.1668 12.2699 14.1668 11.1654V4.83203C14.1668 3.72746 13.2714 2.83203 12.1668 2.83203Z" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.8335 5.33203L7.4435 7.90936C7.61811 7.98959 7.808 8.03113 8.00016 8.03113C8.19232 8.03113 8.38222 7.98959 8.55683 7.90936L14.1668 5.33203" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="">
                  <h5 className='text-base leading-normal mb-0.5'>{item.title} </h5>
                  <h6 className='text'>{item.massage} </h6>
                  <p className='text-xs'>{item.des} </p>
                </div>
                {item.status === "active" &&
                  <div className='absolute top-6 right-3 size-2 rounded-full bg-[#FE4333]' />
                }
              </div>
            ))}
          </div>
        </div>
      </MainInner>
    </>
  )
}
