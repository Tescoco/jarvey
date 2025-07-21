import { Link } from "react-router-dom";
import Alert from "../../components/Alert";

export default function InstallTriggers() {
    const CardItems = [
        {
            title: "Tag tickets by business hours",
            tag: [
                {
                    text: "Auto Tag",
                    variant: 'primary',
                },
                {
                    text: "Completed",
                    variant: 'success',
                }
            ],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'warning',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
        {
            title: "Tag tickets by business hours",
            tag: [{
                text: "Auto Tag",
                variant: 'primary',
            }],
            des: "Tags tickets created during and outside business hours to track support performance and coverage",
            target: "7"
        },
    ]
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
                {CardItems.map((item, idx) => (
                    <Link to="/trigger-setting" className="group border border-[#E2E4E9] rounded-lg lg:rounded-xl xl:rounded-2xl p-3 lg:p-4 cursor-pointer" key={idx}>
                        <h4 className="text-[#0A0D14] text-sm lg:text-base font-semibold !leading-[1.5] mb-2 transition-all duration-300 group-hover:text-primary">{item.title}</h4>
                        <div className="flex items-center gap-2 lg:gap-[10px] mb-2">
                            {item.tag.map((tag, i) => (
                                <Alert key={i} text={tag.text} variant={`${tag.variant}`} className="!min-h-6 !font-semibold" />
                            ))}
                        </div>
                        <p className="text-[#858585] text-xs font-medium !leading-[1.4] mb-4 lg:mb-5 xl:mb-6">{item.des}</p>
                        <p className="text-[#858585] text-xs font-medium !leading-[1.5]">Target up to <span className="text-[#7856FF]">{item.target} tickets/month</span></p>
                    </Link>
                ))}
            </div>
        </>
    )
}
