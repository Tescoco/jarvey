import { Link } from "react-router-dom";
import MainInner from "../../components/MainInner";
import { c_16 } from "../../utilities/Classes";

export default function Center() {
  const CardList = [
    {
      status: "Product Question",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#F1EEFF",
      color: "#7856FF",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Product Question",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#F1EEFF",
      color: "#7856FF",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Product Question",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#F1EEFF",
      color: "#7856FF",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Product Question",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#F1EEFF",
      color: "#7856FF",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Policy",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#FFF8EC",
      color: "#E48F00",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Product Question",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#F1EEFF",
      color: "#7856FF",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Product Question",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#F1EEFF",
      color: "#7856FF",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Policy",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#FFF8EC",
      color: "#E48F00",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Product Question",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#F1EEFF",
      color: "#7856FF",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Policy",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#FFF8EC",
      color: "#E48F00",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Product Question",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#F1EEFF",
      color: "#7856FF",
      bg2: "#E8EFED",
      color2: "#176448",
    },
    {
      status: "Product Question",
      name: "Preview",
      title: "Shelf life Information",
      des: "Provide guidance around the shelg life of your products.",
      bg: "#F1EEFF",
      color: "#7856FF",
      bg2: "#E8EFED",
      color2: "#176448",
    },
  ];
  const tabBtns = ["Delete Article", "Discard changes"];
  return (
    <>
      <MainInner className="!p-0 md:!p-4">
        <div className="md:flex items-center justify-between mb-4 md:mb-5 lg:mb-6">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-0">
            {tabBtns.map((item, index) => (
              <button
                key={index}
                className={`btn !min-w-[140px] text-nowrap font-inter font-medium !text-[#858585] hover:!text-white text-sm ${
                  index === 0 && "!min-w-[118px] px-0"
                } `}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            <p className="text-xs font-medium">Characters: 1022</p>
            <button className="btn !min-w-[140px] font-inter font-medium !text-white !bg-primary text-sm">
              Publish Article
            </button>
          </div>
        </div>
        <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
          {CardList.map((item, idx) => (
            <Link
              to={`/flows-details/${idx + 1}`}
              key={idx}
              className={`${c_16}`}
            >
              <div className="flex items-center justify-between mb-6">
                <p
                  className={` text-xs font-semibold !leading-[1.5] max-w-max py-1 px-2 rounded-md mb-2 lg:mb-3 `}
                  style={{ color: item.color, backgroundColor: item.bg }}
                >
                  {item.status}
                </p>
                <p
                  className={` text-xs font-semibold !leading-[1.5] max-w-max py-1 px-2 rounded-md mb-2 lg:mb-3 `}
                  style={{ color: item.color2, backgroundColor: item.bg2 }}
                >
                  {item.name}
                </p>
              </div>
              <p className="text-[#0A0D14] text-sm lg:text-base font-semibold !leading-[1.4] mb-2">
                {item.title}
              </p>
              <p className="text-sm text-[#858585] font-normal font-inter !leading-normal">
                {item.des}
              </p>
            </Link>
          ))}
        </div>
      </MainInner>
    </>
  );
}
