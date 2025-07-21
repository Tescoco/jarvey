import TextEditor from "../../components/OrderMangemanget/TextEditor";

export default function Track() {
  return (
    <div>
      <div className="mb-4">
        <p className='mb-2 !leading-normal text-xs font-medium'>Allow customers to track the status of their order.</p>
        <a href="#" className='text-primary !underline !leading-normal text-xs font-medium'>Learn About order Statuses in Jarvey</a>
      </div>
      <div className="mb-3">
        <h6 className='text-sm font-semibold !leading-[1.42] mb-0.5'>Response for unfulfilled orders</h6>
        <p className='leading-normal text-xs font-medium'>Display a custom message when customers track orders that have not been packed and shipped. This is useful for reminding customers of expected shipping timelines or to inform them about possible delays.</p>
      </div>
      <TextEditor />
    </div>
  )
}
