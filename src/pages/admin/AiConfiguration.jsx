import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import { c_16 } from '../../utilities/Classes'
import Input from '../../components/Input'
import Dropdown from '../../components/Dropdown'

export default function AiConfiguration() {
  return (
    <>
      <Top />
      <MainInner>
        <div className={`${c_16} p-5`}>
          <h4 className='text-base md:text-lg font-semibold mb-4 md:mb-5 xl:mb-6'>Chat GPT Settings</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 xl:gap-6">
            <Input className='' label="Open AI Api Key" required />
            <Dropdown className='' label="Status" placeholder="Active" required items={[{ name: "Active" }, { name: "Inactive" }]} />
          </div>
          <div className="flex items-center justify-center md:justify-end mt-4 md:mt-5 xl:mt-6">
            <button className="btn bg-prim min-w-[122px]">Submit</button>
          </div>
        </div>
      </MainInner>
    </>
  )
}
