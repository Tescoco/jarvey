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
            <div className="mt-4">
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
            </div>
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

// import React, { useState } from 'react'

// import Top from '../../layouts/Top'
// import Input from '../../components/Input';
// import Dropdown from '../../components/Dropdown';
// import TableFilter from '../../components/TableFilter'

// export default function NewTicket() {
//   const [activeTab2, setActiveTab2] = useState("Customer Details")
//   const stores = [
//     { name: 'stores-1' },
//     { name: 'stores-2' },
//     { name: 'stores-3' },
//     { name: 'stores-4' },
//     { name: 'stores-5' },
//   ]

//   const mailIcon = (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M14.0011 6.16675C12.3296 7.42257 10.2518 8.16675 8.00016 8.16675C5.74851 8.16675 3.67067 7.42257 1.99919 6.16675M3.16683 3.16675H12.8335C13.5699 3.16675 14.1668 3.7637 14.1668 4.50008V11.5001C14.1668 12.2365 13.5699 12.8334 12.8335 12.8334H3.16683C2.43045 12.8334 1.8335 12.2365 1.8335 11.5001V4.50008C1.8335 3.7637 2.43045 3.16675 3.16683 3.16675Z" stroke="#111111" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>)
//   const mail = []
//   const SearchCustomer = [
//     {
//       name: 'Search customer 1'
//     },
//     {
//       name: 'Search customer 2'
//     },
//     {
//       name: 'Search customer 3'
//     },
//   ]
//   const JarveySupport = [
//     {
//       name: 'Jarvey Support 1'
//     },
//     {
//       name: 'Jarvey Support 2'
//     },
//     {
//       name: 'Jarvey Support 3'
//     },
//   ]
//   const textEditor = [
//     {
//       icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M4.78369 10H11.0418C12.8828 10 14.3752 8.50762 14.3752 6.66667V6.45833C14.3752 4.61738 12.8828 3.125 11.0418 3.125H6.45036C5.52988 3.125 4.78369 3.87119 4.78369 4.79167V10ZM4.78369 10V15.2083C4.78369 16.1288 5.52988 16.875 6.45036 16.875H10.4168M10.8337 16.875H11.8754C13.7163 16.875 15.2087 15.3826 15.2087 13.5417V13.3333C15.2087 11.4924 13.7163 10 11.8754 10H10.8337" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
//       </svg>
//       ),
//     },
//     {
//       icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M8.12516 3.125L12.0835 3.125M16.0418 3.125L12.0835 3.125M12.0835 3.125L7.91683 16.875M7.91683 16.875H3.9585M7.91683 16.875H11.8836" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//       ),
//     },
//     {
//       icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M4.7915 17.2917H15.2082M4.7915 3.125V10C4.7915 12.8765 7.12335 15.2083 9.99984 15.2083C12.8763 15.2083 15.2082 12.8765 15.2082 10V3.125" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" />
//       </svg>
//       ),
//     },
//     {
//       icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//         <path d="M5.62516 9.375C5.27998 9.375 5.00016 9.65482 5.00016 10C5.00016 10.3452 5.27998 10.625 5.62516 10.625V9.375ZM14.3752 10.625C14.7203 10.625 15.0002 10.3452 15.0002 10C15.0002 9.65482 14.7203 9.375 14.3752 9.375V10.625ZM13.1252 13.75C12.78 13.75 12.5002 14.0298 12.5002 14.375C12.5002 14.7202 12.78 15 13.1252 15V13.75ZM13.1252 5C12.78 5 12.5002 5.27982 12.5002 5.625C12.5002 5.97018 12.78 6.25 13.1252 6.25V5ZM6.87516 15C7.22034 15 7.50016 14.7202 7.50016 14.375C7.50016 14.0298 7.22034 13.75 6.87516 13.75V15ZM6.87516 6.25C7.22034 6.25 7.50016 5.97018 7.50016 5.625C7.50016 5.27982 7.22034 5 6.87516 5V6.25ZM5.62516 10.625H14.3752V9.375H5.62516V10.625ZM17.9168 7.29167V12.7083H19.1668V7.29167H17.9168ZM16.8752 13.75H13.1252V15H16.8752V13.75ZM13.1252 6.25H16.8752V5H13.1252V6.25ZM0.833496 7.29167V12.7083H2.0835V7.29167H0.833496ZM3.12516 15H6.87516V13.75H3.12516V15ZM6.87516 5H3.12516V6.25H6.87516V5ZM2.0835 7.29167C2.0835 6.71637 2.54987 6.25 3.12516 6.25V5C1.85951 5 0.833496 6.02601 0.833496 7.29167H2.0835ZM17.9168 12.7083C17.9168 13.2836 17.4505 13.75 16.8752 13.75V15C18.1408 15 19.1668 13.974 19.1668 12.7083H17.9168ZM0.833496 12.7083C0.833496 13.974 1.85951 15 3.12516 15V13.75C2.54987 13.75 2.0835 13.2836 2.0835 12.7083H0.833496ZM19.1668 7.29167C19.1668 6.02601 18.1408 5 16.8752 5V6.25C17.4505 6.25 17.9168 6.71637 17.9168 7.29167H19.1668Z" fill="currentColor" fillOpacity="0.5" />
//       </svg>),
//     },
//     {
//       icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//         <path d="M5.48816 11.1785L5.9301 11.6205V11.6205L5.48816 11.1785ZM7.84518 11.1785L8.28712 10.7366L7.84518 11.1785ZM4.79167 3.75H15.2083V2.5H4.79167V3.75ZM16.25 4.79167V15.2083H17.5V4.79167H16.25ZM3.56694 13.9836L5.9301 11.6205L5.04621 10.7366L2.68306 13.0997L3.56694 13.9836ZM3.75 15.2083V13.5417H2.5V15.2083H3.75ZM3.75 13.5417V4.79167H2.5V13.5417H3.75ZM7.40324 11.6205L13.0997 17.3169L13.9836 16.4331L8.28712 10.7366L7.40324 11.6205ZM15.2083 16.25H13.5417V17.5H15.2083V16.25ZM13.5417 16.25H4.79167V17.5H13.5417V16.25ZM5.9301 11.6205C6.33689 11.2137 6.99644 11.2137 7.40324 11.6205L8.28712 10.7366C7.39217 9.84162 5.94116 9.84162 5.04621 10.7366L5.9301 11.6205ZM2.5 15.2083C2.5 16.474 3.52601 17.5 4.79167 17.5V16.25C4.21637 16.25 3.75 15.7836 3.75 15.2083H2.5ZM16.25 15.2083C16.25 15.7836 15.7836 16.25 15.2083 16.25V17.5C16.474 17.5 17.5 16.474 17.5 15.2083H16.25ZM15.2083 3.75C15.7836 3.75 16.25 4.21637 16.25 4.79167H17.5C17.5 3.52601 16.474 2.5 15.2083 2.5V3.75ZM4.79167 2.5C3.52601 2.5 2.5 3.52601 2.5 4.79167H3.75C3.75 4.21637 4.21637 3.75 4.79167 3.75V2.5ZM13.125 7.91667C13.125 8.49196 12.6586 8.95833 12.0833 8.95833V10.2083C13.349 10.2083 14.375 9.18232 14.375 7.91667H13.125ZM12.0833 8.95833C11.508 8.95833 11.0417 8.49196 11.0417 7.91667H9.79167C9.79167 9.18232 10.8177 10.2083 12.0833 10.2083V8.95833ZM11.0417 7.91667C11.0417 7.34137 11.508 6.875 12.0833 6.875V5.625C10.8177 5.625 9.79167 6.65101 9.79167 7.91667H11.0417ZM12.0833 6.875C12.6586 6.875 13.125 7.34137 13.125 7.91667H14.375C14.375 6.65101 13.349 5.625 12.0833 5.625V6.875Z" fill="currentColor" fillOpacity="0.5" />
//       </svg>),
//     },
//     {
//       icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//         <path d="M5.20817 6.25008C5.78347 6.25008 6.24984 5.78371 6.24984 5.20841C6.24984 4.63312 5.78347 4.16675 5.20817 4.16675C4.63287 4.16675 4.1665 4.63312 4.1665 5.20841C4.1665 5.78371 4.63287 6.25008 5.20817 6.25008Z" fill="currentColor" />
//         <path d="M10.8332 10.784V14.2166C10.8332 14.7222 11.4023 15.0185 11.8166 14.7286L14.2684 13.0123C14.6238 12.7635 14.6238 12.2371 14.2684 11.9883L11.8166 10.272C11.4023 9.98206 10.8332 10.2784 10.8332 10.784Z" fill="currentColor" />
//         <path fillRule="evenodd" clipRule="evenodd" d="M1.6665 3.95841C1.6665 2.69276 2.69252 1.66675 3.95817 1.66675H11.0415C12.3072 1.66675 13.3332 2.69276 13.3332 3.95841V6.66675H16.0415C17.3072 6.66675 18.3332 7.69276 18.3332 8.95841V16.0417C18.3332 17.3074 17.3072 18.3334 16.0415 18.3334H8.95817C7.69252 18.3334 6.6665 17.3074 6.6665 16.0417V13.3334H3.95817C2.69252 13.3334 1.6665 12.3074 1.6665 11.0417V3.95841ZM12.0832 3.95841V6.66675H8.95817C7.77869 6.66675 6.80733 7.55781 6.68052 8.70348L6.26941 8.4294C5.49964 7.91622 4.4968 7.91622 3.72703 8.4294L2.9165 8.96975V3.95841C2.9165 3.38312 3.38287 2.91675 3.95817 2.91675H11.0415C11.6168 2.91675 12.0832 3.38312 12.0832 3.95841ZM5.57603 9.46946L6.6665 10.1964V12.0834H3.95817C3.38287 12.0834 2.9165 11.617 2.9165 11.0417V10.4721L4.42041 9.46946C4.7703 9.2362 5.22614 9.2362 5.57603 9.46946ZM7.9165 16.0417V8.95841C7.9165 8.38312 8.38287 7.91675 8.95817 7.91675H16.0415C16.6168 7.91675 17.0832 8.38312 17.0832 8.95841V16.0417C17.0832 16.617 16.6168 17.0834 16.0415 17.0834H8.95817C8.38287 17.0834 7.9165 16.617 7.9165 16.0417Z" fill="currentColor" />
//       </svg>),
//     },
//     {
//       icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//         <path d="M8.74984 7.91675C8.74984 8.6071 8.28347 9.16675 7.70817 9.16675C7.13287 9.16675 6.6665 8.6071 6.6665 7.91675C6.6665 7.22639 7.13287 6.66675 7.70817 6.66675C8.28347 6.66675 8.74984 7.22639 8.74984 7.91675Z" fill="currentColor" />
//         <path d="M13.3332 7.91675C13.3332 8.6071 12.8668 9.16675 12.2915 9.16675C11.7162 9.16675 11.2498 8.6071 11.2498 7.91675C11.2498 7.22639 11.7162 6.66675 12.2915 6.66675C12.8668 6.66675 13.3332 7.22639 13.3332 7.91675Z" fill="currentColor" />
//         <path fillRule="evenodd" clipRule="evenodd" d="M15.0085 4.99141C12.2423 2.22519 7.75739 2.22519 4.99117 4.99141C2.22495 7.75761 2.22495 12.2425 4.99117 15.0088C7.75737 17.775 12.2423 17.775 15.0085 15.0087C17.7747 12.2425 17.7747 7.75763 15.0085 4.99141ZM4.10728 4.10753C7.36166 0.853155 12.638 0.853154 15.8924 4.10753C19.1468 7.3619 19.1468 12.6383 15.8924 15.8926C12.638 19.147 7.36164 19.147 4.10728 15.8926C0.852911 12.6383 0.85291 7.36189 4.10728 4.10753Z" fill="currentColor" />
//         <path fillRule="evenodd" clipRule="evenodd" d="M7.20113 11.9152C7.4452 11.6711 7.84093 11.6711 8.08501 11.9152C9.14267 12.9728 10.8575 12.9728 11.9152 11.9152C12.1592 11.6711 12.555 11.6711 12.7991 11.9152C13.0431 12.1592 13.0431 12.555 12.7991 12.799C11.2532 14.3449 8.74694 14.3449 7.20112 12.799C6.95705 12.555 6.95705 12.1592 7.20113 11.9152Z" fill="currentColor" />
//       </svg>),
//     },
//     {
//       icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//         <path d="M12.7085 6.45841V5.00008C12.7085 3.50431 11.496 2.29175 10.0002 2.29175C8.50443 2.29175 7.29187 3.50431 7.29187 5.00008V6.45841M5.47364 17.7084H14.5268C15.5445 17.7084 16.3246 16.8042 16.1754 15.7975L15.0026 7.88083C14.8815 7.06361 14.1801 6.45841 13.3539 6.45841H6.64648C5.82034 6.45841 5.11888 7.06361 4.99781 7.88083L3.82497 15.7975C3.67582 16.8042 4.45591 17.7084 5.47364 17.7084Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" />
//       </svg>),
//     },
//     {
//       icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//         <path d="M2.2915 9.30139V3.95841C2.2915 3.03794 3.0377 2.29175 3.95817 2.29175H9.30115C9.74317 2.29175 10.1671 2.46734 10.4797 2.7799L17.1547 9.4549C17.8055 10.1058 17.8055 11.1611 17.1547 11.8119L11.8117 17.1549C11.1608 17.8058 10.1055 17.8058 9.45466 17.1549L2.77966 10.4799C2.4671 10.1673 2.2915 9.74342 2.2915 9.30139Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinejoin="round" />
//         <path d="M6.87484 6.25008C6.87484 6.59526 6.59502 6.87508 6.24984 6.87508C5.90466 6.87508 5.62484 6.59526 5.62484 6.25008C5.62484 5.9049 5.90466 5.62508 6.24984 5.62508C6.59502 5.62508 6.87484 5.9049 6.87484 6.25008Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinejoin="round" />
//       </svg>),
//     },
//     {
//       icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//         <path d="M4.7915 8.95841V12.7084C4.7915 15.4698 7.03008 17.7084 9.7915 17.7084H10.2082C12.9696 17.7084 15.2082 15.4698 15.2082 12.7084V5.83341C15.2082 3.87741 13.6225 2.29175 11.6665 2.29175C9.7105 2.29175 8.12484 3.87741 8.12484 5.83341V12.3959C8.12484 13.3739 8.91767 14.1667 9.89567 14.1667C10.8737 14.1667 11.6665 13.3739 11.6665 12.3959V6.45841" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" />
//       </svg>),
//     },
//   ]

//   return (
//     <div>
//       <Top title="Create Tickets">
//         <Dropdown className='mb-0 relative z-10' btnClass="!min-w-[105px] !h-[34px] !text-primary !text-xs font-medium" placeholder="All Stores" items={stores} />
//       </Top>
//       <div className="flex flex-wrap md:h-[calc(100vh-90px)]">
//         <div className="h-full p-4 md:p-5  xl:p-6 mid w-full md:w-[calc(100%-260px)] xl:w-[calc(100%-290px)] 2xl:w-[calc(100%-335px)]">
//           <div className="mb-4 md:mb-5 xl:mb-6">
//             <div className="mb-3">
//               <h4 className='text-lg md:text-xl xl:text-2xl mb-4 md:mb-5 xl:mb-6'>Create ticket</h4>
//               <Input className='mb-0' label="Subject" required />
//             </div>
//             <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-2 md:gap-0">
//               <button className='text-primary font-medium flex items-center gap-1 underline'>Add tags</button>
//               <button className='text-primary font-medium flex items-center gap-1 underline'>Unassigned</button>
//               <button className='font-medium text-xs flex items-center gap-1'>
//                 Contact Reason
//                 <span className='bg-primary size-5 rounded-[5px] flex items-center justify-center'>
//                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </span>
//               </button>
//               <button className='font-medium text-xs flex items-center gap-1'>
//                 Product
//                 <span className='bg-primary size-5 rounded-[5px] flex items-center justify-center'>
//                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </span>
//               </button>
//               <button className='font-medium text-xs flex items-center gap-1'>
//                 Resolution
//                 <span className='bg-primary size-5 rounded-[5px] flex items-center justify-center'>
//                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5 1.5625V5M5 5V8.4375M5 5H1.5625M5 5H8.4375" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </span>
//               </button>
//             </div>
//           </div>
//           <div className="flex flex-col justify-between max-h-[calc(100%-100px)] overflow-y-auto">
//             <div className="p-4 pt-3 bg-primary/5 border border-stroke rounded-xl">
//               <div className="flex items-end justify-center flex-wrap md:flex-nowrap gap-4 mb-2">
//                 <Dropdown className='mb-0 ' btnClass="!min-w-[75px] !rounded-md" placeholder="" leftIcon={mailIcon} items={mail} />
//                 <Dropdown className='mb-0 grow' btnClass="!min-w-[75px] !rounded-md text-[#111111]/50" label="To" placeholder="Search Customer " items={SearchCustomer} />
//                 <Dropdown className='mb-0 grow' btnClass="!min-w-[75px] !rounded-md text-[#111111]/50" label="From" placeholder="Jarvey Support " items={JarveySupport} />
//               </div>
//               <div className="flex items-center gap-2 py-2.5 border-y border-stroke">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M13.1663 9.24528C13.1663 15.8035 2.83301 15.8107 2.83301 9.24528C2.83301 4.31646 7.99967 1.5 7.99967 1.5C7.99967 1.5 13.1663 4.31646 13.1663 9.24528Z" stroke="#111111" strokeOpacity="0.5" strokeWidth="1.25" strokeLinejoin="round" />
//                   <path d="M10.4997 11.6412C10.4997 15.0066 5.49967 15.0103 5.49967 11.6412C5.49967 9.11196 7.99967 7.66667 7.99967 7.66667C7.99967 7.66667 10.4997 9.11196 10.4997 11.6412Z" stroke="#111111" strokeOpacity="0.5" strokeWidth="1.25" strokeLinejoin="round" />
//                 </svg>
//                 <p className='max-w-[228px] text-xs !leading-[1.66] text-gray'>Search Predefined Responses by name, tag body</p>
//               </div>
//               <button onClick={() => setChat(true)} className='max-w-[228px] text-xs !leading-[1.66] text-gray mt-3 pb-8 md:pb-12  xl:pb-[167px] hover:text-primary'>Click here to reply</button>
//               <div className="flex flex-col gap-2">
//                 <p>Suggest Predefined Responses</p>
//                 <div className="flex items-center gap-2">
//                   <button className='btn !text-gray !rounded !bg-white !h-9 text-xs md:!text-sm'>Generic: How can i help?</button>
//                   <button className='btn !text-gray !rounded !bg-white !h-9 text-xs md:!text-sm'>Generic:Sign off</button>
//                 </div>
//                 <ul className="flex items-center gap-2 py-2">
//                   {textEditor.map((item, index) => (
//                     <li key={index}>
//                       <button className='text-[#111111]/50 hover:text-primary'>{item.icon} </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="flex items-center justify-end gap-2 mt-4 lg:mt-5 xl:mt-6">
//                 <button className="btn !border-primary !text-primary hover:!text-white !min-w-[unset] !px-4">Send $ Close</button>
//                 <button className="btn !min-w-[63px] !px-0 !bg-primary !text-white">Send</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="md:hidden xl:block right w-full md:w-[290px] 2xl:w-[335px] border-l border-stroke">
//           <div className="">
//             <div className="pt-3 px-4">
//               <div className="border-b border-solid border-stroke flex items-center">
//                 {["Customer Details", "AI Feedback"].map((item, index) => (
//                   <button onClick={() => setActiveTab2(item)} key={index} className={`grow font-inter font-medium text-xs 2xl:text-sm px-4 md:px-5 pb-3 border-b border-solid ${item === activeTab2 ? 'border-btn text-btn' : 'border-transparent text-heading'}`}>{item}</button>
//                 ))}
//               </div>
//               <TableFilter
//                 textHidden
//                 BtnClass="!p-2" className='mt-3 md:mt-4 !mb-0 !p-0 !flex-nowrap md:!justify-end relative z-[2]'
//                 searchClass='!mr-0'
//                 onSearch={handleSearch}
//                 searchValue={searchQuery}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }