import React from 'react'
import Top from '../layouts/Top'
import MainInner from '../components/MainInner';
import { pen, deleteIcon, } from '../utilities/Classes'
import TableFilter from '../components/TableFilter';
import Switch from '../components/Switch'


export default function ManageGroup() {
    const tableHead = [
        `#`,
        `Name`,
        `Total Agents`,
        `Priority`,
        `Response Time`,
        `Status`,
        `Actions`,
    ]
    const tableData = [
        {
            name: 'Group 1',
            Agents: '1',
            Priority: 'Urgent',
            Time: 'N/A',
        },
    ]
    return (
        <>
            <Top title="Manager Group">
                <button className='btn flex items-center gap-1 !bg-primary !text-white' onClick={() => setEditArticle(true)}>
                    <svg className='flex-none' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white" />
                    </svg>
                    New Group</button>
            </Top>
            <MainInner>
                <div>
                    <TableFilter className="" />
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    {tableHead.map((item, index) => (
                                        <th key={index} className='last:text-right'>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!text-black'>{index + 1} </td>
                                        <td className='!text-black'>{item.name}</td>
                                        <td className='!font-medium !text-heading'>{item.Agents}</td>
                                        <td><p className='text-sm font-inter font-medium !text-[#FE4333] py-1 px-3 rounded-[41px] bg-[#FE43331A]/10 max-w-max'>{item.Priority}</p></td>
                                        <td className='!font-medium !text-heading'>{item.Time}</td>
                                        <td>
                                            <Switch id={`${item.name}_${index + 1}`} checked={item.default} />
                                        </td>
                                        <td>
                                            <div className="flex items-center justify-end gap-3">
                                                <button className='text-primary hover:text-primary p-2 -m-2'>{pen}</button>
                                                <button className='text-gray hover:text-primary p-2 -m-2'>{deleteIcon}</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainInner>
        </>
    )
}
