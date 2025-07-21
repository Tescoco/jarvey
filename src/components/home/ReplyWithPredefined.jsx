import { Link } from 'react-router-dom'

export default function ReplyWithPredefined() {

    const CardItems = [
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },
        {
            title: "Predefined Response 1",
            tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
            value: "2",
        },

    ]
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
                {CardItems.map((item, idx) => (
                    <div className="border border-[#E2E4E9] rounded-lg lg:rounded-xl  p-3 lg:p-4 cursor-pointer" key={idx}>
                        <p className="text-[#0A0D14] text-sm lg:text-base font-semibold !leading-[1.5] mb-3 lg:mb-4">{item.title}</p>
                        <p className='text-xs text-[#858585] font-normal !leading-[1.4] mb-2'>Action tag</p>
                        <div className="flex items-center gap-1 flex-wrap lg:gap-2 mb-3 lg:mb-4">
                            {item.tags.map((itm, id) => <p key={id} className={`text-[#0A0D14] bg-[#F6F8FA] text-xs font-semibold !leading-[1.5] rounded-md lg:rounded-lg uppercase py-1 px-[10px]`}>{itm}</p>)}
                            {item.value && <p className='text-[#0A0D14] text-xs font-semibold !leading-[1.5] uppercase'>+{item.value}</p>}
                        </div>
                        <Link to="/predefined-install" className='btn  !shadow-[0px_1px_2px_0px_rgba(90,54,191,0.48),_0px_0px_0px_1px_#6E3FF3] !border-[#7856FF] !text-[#7856FF] !text-xs !font-semibold !leading-[1.66] hover:!text-white !w-full'>View</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
