import React, { useState } from 'react'

import Top from '../../layouts/Top'
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import TableFilter from '../../components/TableFilter'

export default function NewTicket() {
  const [activeTab2, setActiveTab2] = useState("Customer Details")
  const [chat, setChat] = useState(false)
  const [editorContent, setEditorContent] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [subject, setSubject] = useState("")
  const [tags, setTags] = useState([])
  const [showTagInput, setShowTagInput] = useState(false)
  const [newTag, setNewTag] = useState("")
  const [assignedTo, setAssignedTo] = useState("Unassigned")
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [contactReason, setContactReason] = useState("")
  const [product, setProduct] = useState("")
  const [resolution, setResolution] = useState("")

  const stores = [
    { name: 'stores-1' },
    { name: 'stores-2' },
    { name: 'stores-3' },
    { name: 'stores-4' },
    { name: 'stores-5' },
  ]

  const mailIcon = (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0011 6.16675C12.3296 7.42257 10.2518 8.16675 8.00016 8.16675C5.74851 8.16675 3.67067 7.42257 1.99919 6.16675M3.16683 3.16675H12.8335C13.5699 3.16675 14.1668 3.7637 14.1668 4.50008V11.5001C14.1668 12.2365 13.5699 12.8334 12.8335 12.8334H3.16683C2.43045 12.8334 1.8335 12.2365 1.8335 11.5001V4.50008C1.8335 3.7637 2.43045 3.16675 3.16683 3.16675Z" stroke="#111111" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>)

  const mail = []
  const SearchCustomer = [
    { name: 'Search customer 1' },
    { name: 'Search customer 2' },
    { name: 'Search customer 3' },
  ]

  const JarveySupport = [
    { name: 'Jarvey Support 1' },
    { name: 'Jarvey Support 2' },
    { name: 'Jarvey Support 3' },
  ]

  const textEditor = [
    { icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78369 10H11.0418C12.8828 10 14.3752 8.50762 14.3752 6.66667V6.45833C14.3752 4.61738 12.8828 3.125 11.0418 3.125H6.45036C5.52988 3.125 4.78369 3.87119 4.78369 4.79167V10ZM4.78369 10V15.2083C4.78369 16.1288 5.52988 16.875 6.45036 16.875H10.4168M10.8337 16.875H11.8754C13.7163 16.875 15.2087 15.3826 15.2087 13.5417V13.3333C15.2087 11.4924 13.7163 10 11.8754 10H10.8337" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" /></svg>), label: 'Bold' },
    { icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.12516 3.125L12.0835 3.125M16.0418 3.125L12.0835 3.125M12.0835 3.125L7.91683 16.875M7.91683 16.875H3.9585M7.91683 16.875H11.8836" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>), label: 'Italic' },
    { icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.7915 17.2917H15.2082M4.7915 3.125V10C4.7915 12.8765 7.12335 15.2083 9.99984 15.2083C12.8763 15.2083 15.2082 12.8765 15.2082 10V3.125" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" /></svg>), label: 'Underline' },
  ]

  // FIX 2: Search handler function
  const handleSearch = (query) => {
    setSearchQuery(query)
    console.log("Searching for:", query)
  }

  // Text formatting handlers
  const formatText = (format) => {
    // This is a basic implementation - for rich text you'd need a proper editor library
    const textarea = document.querySelector('textarea');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = editorContent.substring(start, end);

    let formattedText = selectedText;
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'underline':
        formattedText = `__${selectedText}__`;
        break;
    }

    const newContent = editorContent.substring(0, start) + formattedText + editorContent.substring(end);
    setEditorContent(newContent);
  };

  // Tag management
  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
      setShowTagInput(false);
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  // Assignment handler
  const handleAssign = (person) => {
    setAssignedTo(person);
    setShowAssignModal(false);
  };

  // Predefined response handler
  const insertPredefinedResponse = (response) => {
    setEditorContent(prev => prev + (prev ? '\n\n' : '') + response);
    setChat(true);
  };

  // Send handlers
  const handleSend = () => {
    if (!subject.trim() || !editorContent.trim()) {
      alert('Please fill in subject and message');
      return;
    }

    const ticketData = {
      subject,
      content: editorContent,
      tags,
      assignedTo,
      contactReason,
      product,
      resolution,
      timestamp: new Date().toISOString()
    };

    console.log('Sending ticket:', ticketData);
    alert('Ticket sent successfully!');

    // Reset form
    setSubject("");
    setEditorContent("");
    setTags([]);
    setChat(false);
  };

  const handleSendAndClose = () => {
    handleSend();
    // Navigate back or close window
    window.history.back();
  };

  // Sample data for tabs
  const customerData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    orders: 15,
    totalSpent: "$2,450.00",
    joinDate: "Jan 15, 2024"
  }

  const filteredCustomerData = searchQuery.trim()
    ? Object.entries(customerData).filter(([key, value]) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
    : null;

  return (
    <div>
      <Top title="Create Tickets">
        <Dropdown className='mb-0 relative z-10' btnClass="!min-w-[105px] !h-[34px] !text-primary !text-xs font-medium" placeholder="All Stores" items={stores} />
      </Top>
      <div className="flex flex-wrap md:h-[calc(100vh-90px)]">
        <div className="h-full p-4 md:p-5 xl:p-6 mid w-full md:w-[calc(100%-260px)] xl:w-[calc(100%-290px)] 2xl:w-[calc(100%-335px)]">
          <div className="mb-4 md:mb-5 xl:mb-6">
            <div className="mb-3">
              <h4 className='text-lg md:text-xl xl:text-2xl mb-4 md:mb-5 xl:mb-6'>Create ticket</h4>
              {/* <Input className='mb-0' label="Subject" required /> */}
              <Input
                className='mb-0'
                label="Subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-2 md:gap-0">
              <button className='text-primary font-medium flex items-center gap-1 underline'>Add tags</button>
              <button className='text-primary font-medium flex items-center gap-1 underline'>Unassigned</button>
              <button className='font-medium text-xs flex items-center gap-1'>Contact Reason <span className='bg-primary size-5 rounded-[5px] flex items-center justify-center'><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg></span></button>
              <button className='font-medium text-xs flex items-center gap-1'>Product <span className='bg-primary size-5 rounded-[5px] flex items-center justify-center'><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg></span></button>
              <button className='font-medium text-xs flex items-center gap-1'>Resolution <span className='bg-primary size-5 rounded-[5px] flex items-center justify-center'><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg></span></button>
            </div> */}

            <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-2 md:gap-0">
              <button
                onClick={() => setShowTagInput(!showTagInput)}
                className='text-primary font-medium flex items-center gap-1 underline'
              >
                Add tags
              </button>

              <button
                onClick={() => setShowAssignModal(true)}
                className='text-primary font-medium flex items-center gap-1 underline'
              >
                {assignedTo}
              </button>

              <button
                onClick={() => setContactReason(prompt('Enter contact reason:') || contactReason)}
                className='font-medium text-xs flex items-center gap-1'
              >
                Contact Reason
                <span className='bg-primary size-5 rounded-[5px] flex items-center justify-center'>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => setProduct(prompt('Enter product:') || product)}
                className='font-medium text-xs flex items-center gap-1'
              >
                Product
                <span className='bg-primary size-5 rounded-[5px] flex items-center justify-center'>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => setResolution(prompt('Enter resolution:') || resolution)}
                className='font-medium text-xs flex items-center gap-1'
              >
                Resolution
                <span className='bg-primary size-5 rounded-[5px] flex items-center justify-center'>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Tag display and input */}
            {tags.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap mt-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs flex items-center gap-2">
                    {tag}
                    <button onClick={() => removeTag(index)} className="hover:text-red-500">×</button>
                  </span>
                ))}
              </div>
            )}

            {showTagInput && (
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                  placeholder="Enter tag name"
                  className="px-3 py-1 border border-stroke rounded text-sm"
                  autoFocus
                />
                <button onClick={handleAddTag} className="btn !min-w-[unset] !px-3 !py-1 !h-auto text-xs">Add</button>
                <button onClick={() => setShowTagInput(false)} className="text-gray hover:text-red-500">Cancel</button>
              </div>
            )}

          </div>
          <div className="flex flex-col justify-between max-h-[calc(100%-100px)] overflow-y-auto">
            <div className="p-4 pt-3 bg-primary/5 border border-stroke rounded-xl">
              <div className="flex items-end justify-center flex-wrap md:flex-nowrap gap-4 mb-2">
                <Dropdown className='mb-0' btnClass="!min-w-[75px] !rounded-md" placeholder="" leftIcon={mailIcon} items={mail} />
                <Dropdown className='mb-0 grow' btnClass="!min-w-[75px] !rounded-md text-[#111111]/50" label="To" placeholder="Search Customer" items={SearchCustomer} />
                <Dropdown className='mb-0 grow' btnClass="!min-w-[75px] !rounded-md text-[#111111]/50" label="From" placeholder="Jarvey Support" items={JarveySupport} />
              </div>
              <div className="flex items-center gap-2 py-2.5 border-y border-stroke">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.1663 9.24528C13.1663 15.8035 2.83301 15.8107 2.83301 9.24528C2.83301 4.31646 7.99967 1.5 7.99967 1.5C7.99967 1.5 13.1663 4.31646 13.1663 9.24528Z" stroke="#111111" strokeOpacity="0.5" strokeWidth="1.25" strokeLinejoin="round" /><path d="M10.4997 11.6412C10.4997 15.0066 5.49967 15.0103 5.49967 11.6412C5.49967 9.11196 7.99967 7.66667 7.99967 7.66667C7.99967 7.66667 10.4997 9.11196 10.4997 11.6412Z" stroke="#111111" strokeOpacity="0.5" strokeWidth="1.25" strokeLinejoin="round" /></svg>
                <p className='max-w-[228px] text-xs !leading-[1.66] text-gray'>Search Predefined Responses by name, tag body</p>
              </div>

              {/* FIX 1: Text Editor - Now functional with textarea */}
              {!chat ? (
                <button onClick={() => setChat(true)} className='max-w-[228px] text-xs !leading-[1.66] text-gray mt-3 pb-8 md:pb-12 xl:pb-[167px] hover:text-primary'>
                  Click here to reply
                </button>
              ) : (
                <div className="mt-3 pb-4">
                  <textarea
                    value={editorContent}
                    onChange={(e) => setEditorContent(e.target.value)}
                    className="w-full min-h-[120px] p-3 border border-stroke rounded-lg focus:outline-none focus:border-primary resize-none"
                    placeholder="Type your message here..."
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <p>Suggest Predefined Responses</p>

                {/* <div className="flex items-center gap-2">
                  <button className='btn !text-gray !rounded !bg-white !h-9 text-xs md:!text-sm'>Generic: How can i help?</button>
                  <button className='btn !text-gray !rounded !bg-white !h-9 text-xs md:!text-sm'>Generic:Sign off</button>
                </div> */}

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => insertPredefinedResponse('How can I help you today?')}
                    className='btn !text-gray !rounded !bg-white !h-9 text-xs md:!text-sm'
                  >
                    Generic: How can i help?
                  </button>
                  <button
                    onClick={() => insertPredefinedResponse('Thank you for contacting us. Have a great day!')}
                    className='btn !text-gray !rounded !bg-white !h-9 text-xs md:!text-sm'
                  >
                    Generic:Sign off
                  </button>
                </div>

                {/* <ul className="flex items-center gap-2 py-2 flex-wrap">
                  {textEditor.map((item, index) => (
                    <li key={index} title={item.label}>
                      <button className='text-[#111111]/50 hover:text-primary'>{item.icon}</button>
                    </li>
                  ))}
                </ul> */}

                <ul className="flex items-center gap-2 py-2 flex-wrap">
                  <li title="Bold">
                    <button onClick={() => formatText('bold')} className='text-[#111111]/50 hover:text-primary'>
                      {textEditor[0].icon}
                    </button>
                  </li>
                  <li title="Italic">
                    <button onClick={() => formatText('italic')} className='text-[#111111]/50 hover:text-primary'>
                      {textEditor[1].icon}
                    </button>
                  </li>
                  <li title="Underline">
                    <button onClick={() => formatText('underline')} className='text-[#111111]/50 hover:text-primary'>
                      {textEditor[2].icon}
                    </button>
                  </li>
                </ul>

              </div>

              {/* <div className="flex items-center justify-end gap-2 mt-4 lg:mt-5 xl:mt-6">
                <button className="btn !border-primary !text-primary hover:!text-white !min-w-[unset] !px-4">Send & Close</button>
                <button className="btn !min-w-[63px] !px-0 !bg-primary !text-white">Send</button>
              </div> */}

              <div className="flex items-center justify-end gap-2 mt-4 lg:mt-5 xl:mt-6">
                <button
                  onClick={handleSendAndClose}
                  className="btn !border-primary !text-primary hover:!text-white !min-w-[unset] !px-4"
                >
                  Send & Close
                </button>
                <button
                  onClick={handleSend}
                  className="btn !min-w-[63px] !px-0 !bg-primary !text-white"
                >
                  Send
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* FIX 3: Right-side tabs with content */}
        <div className="md:hidden xl:block right w-full md:w-[290px] 2xl:w-[335px] border-l border-stroke">
          <div className="pt-3 px-4">
            <div className="border-b border-solid border-stroke flex items-center">
              {["Customer Details", "AI Feedback"].map((item, index) => (
                <button onClick={() => setActiveTab2(item)} key={index} className={`grow font-inter font-medium text-xs 2xl:text-sm px-4 md:px-5 pb-3 border-b border-solid ${item === activeTab2 ? 'border-btn text-btn' : 'border-transparent text-heading'}`}>{item}</button>
              ))}
            </div>

            <TableFilter
              textHidden
              BtnClass="!p-2"
              className='mt-3 md:mt-4 !mb-0 !p-0 !flex-nowrap md:!justify-end relative z-[2]'
              searchClass='!mr-0'
              onSearch={handleSearch}
              searchValue={searchQuery}
            />

            {/* FIX 3: Tab Content */}
            {/* <div className="mt-4">
              {activeTab2 === "Customer Details" && (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-stroke">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                        {customerData.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">{customerData.name}</h5>
                        <p className="text-xs text-gray">Customer</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray mb-1">Email</p>
                        <p className="text-sm font-medium">{customerData.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray mb-1">Phone</p>
                        <p className="text-sm font-medium">{customerData.phone}</p>
                      </div>
                      <div className="flex gap-4">
                        <div>
                          <p className="text-xs text-gray mb-1">Orders</p>
                          <p className="text-sm font-semibold">{customerData.orders}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray mb-1">Total Spent</p>
                          <p className="text-sm font-semibold">{customerData.totalSpent}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray mb-1">Member Since</p>
                        <p className="text-sm font-medium">{customerData.joinDate}</p>
                      </div>
                    </div>
                  </div>

                  {searchQuery && (
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-xs text-blue-800">
                        Search results for: <strong>{searchQuery}</strong>
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab2 === "AI Feedback" && (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-stroke">
                    <h5 className="font-semibold text-sm mb-3">AI Suggestions</h5>
                    <div className="space-y-3">
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="text-xs text-gray mb-1">Suggested Response</p>
                        <p className="text-sm">Based on this inquiry, consider using the "Product Information" template.</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-xs text-gray mb-1">Sentiment Analysis</p>
                        <p className="text-sm">Customer sentiment: <span className="font-semibold text-green-600">Positive</span></p>
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <p className="text-xs text-gray mb-1">Priority</p>
                        <p className="text-sm">Suggested priority: <span className="font-semibold text-amber-600">Medium</span></p>
                      </div>
                    </div>
                  </div>

                  {searchQuery && (
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-xs text-blue-800">
                        Search results for: <strong>{searchQuery}</strong>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div> */}

            {activeTab2 === "Customer Details" && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-stroke">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                      {customerData.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">{customerData.name}</h5>
                      <p className="text-xs text-gray">Customer</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray mb-1">Email</p>
                      <p className="text-sm font-medium">{customerData.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray mb-1">Phone</p>
                      <p className="text-sm font-medium">{customerData.phone}</p>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <p className="text-xs text-gray mb-1">Orders</p>
                        <p className="text-sm font-semibold">{customerData.orders}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray mb-1">Total Spent</p>
                        <p className="text-sm font-semibold">{customerData.totalSpent}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray mb-1">Member Since</p>
                      <p className="text-sm font-medium">{customerData.joinDate}</p>
                    </div>
                  </div>
                </div>

                {/* UPDATED: Show filtered results when searching */}
                {searchQuery && (
                  <div className="bg-white p-4 rounded-lg border border-stroke">
                    <h6 className="font-semibold text-sm mb-3">
                      Search Results for: <span className="text-primary">"{searchQuery}"</span>
                    </h6>
                    {filteredCustomerData && filteredCustomerData.length > 0 ? (
                      <div className="space-y-2">
                        {filteredCustomerData.map(([key, value]) => (
                          <div key={key} className="p-2 bg-primary/5 rounded">
                            <p className="text-xs text-gray capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                            <p className="text-sm font-medium">{value}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray">No matching results found</p>
                    )}
                  </div>
                )}

                {activeTab2 === "AI Feedback" && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-stroke">
                      <h5 className="font-semibold text-sm mb-3">AI Suggestions</h5>
                      <div className="space-y-3">
                        <div className="p-3 bg-primary/5 rounded-lg">
                          <p className="text-xs text-gray mb-1">Suggested Response</p>
                          <p className="text-sm">Based on this inquiry, consider using the "Product Information" template.</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="text-xs text-gray mb-1">Sentiment Analysis</p>
                          <p className="text-sm">Customer sentiment: <span className="font-semibold text-green-600">Positive</span></p>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-lg">
                          <p className="text-xs text-gray mb-1">Priority</p>
                          <p className="text-sm">Suggested priority: <span className="font-semibold text-amber-600">Medium</span></p>
                        </div>
                      </div>
                    </div>

                    {/* UPDATED: Show search in AI Feedback too */}
                    {searchQuery && (
                      <div className="bg-white p-4 rounded-lg border border-stroke">
                        <h6 className="font-semibold text-sm mb-2">
                          Searching AI insights for: <span className="text-primary">"{searchQuery}"</span>
                        </h6>
                        <p className="text-sm text-gray">AI analysis updated based on your search</p>
                      </div>
                    )}
                  </div>
                )}
                
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Assignment Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Assign Ticket</h3>
            <div className="space-y-2">
              {['Unassigned', 'John Doe', 'Jane Smith', 'Support Team'].map((person) => (
                <button
                  key={person}
                  onClick={() => handleAssign(person)}
                  className={`w-full text-left px-4 py-2 rounded-lg border transition-colors ${assignedTo === person
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-stroke hover:bg-gray-50'
                    }`}
                >
                  {person}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowAssignModal(false)}
              className="w-full mt-4 btn !border-stroke"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  )
}