import MainInner from "../components/MainInner";
import Top from "../layouts/Top";
import { c_24 } from "../utilities/Classes";
import Dropdown from "../components/Dropdown";
import TableFilter from "../components/TableFilter";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Modal from "../components/Modal";
import React, { useState } from "react";

export default function Billing() {
  const heading =
    "text-[#0A0D14] text-lg lg:text-xl font-bole !leading-normal font-inter";
  const des = "text-gray text-sm font-medium !leading-normal font-inter";

  const tabBtns = ["Usages & Plan", "Payment History "];

  const [activeTab, setActiveTab] = useState(tabBtns[0]);
  const plans = [
    {
      id: "help-desk",
      title: "Help desk",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M10.3545 1.60547H3.64616C2.51858 1.60547 1.60449 2.51955 1.60449 3.64714V8.33189C1.60449 9.45947 2.51858 10.3736 3.64616 10.3736H10.3545C11.4821 10.3736 12.3962 9.45947 12.3962 8.33189V3.64714C12.3962 2.51955 11.4821 1.60547 10.3545 1.60547Z"
            stroke="#7856FF"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.31471 10.375V12.3986M8.68638 10.375V12.3986M3.79688 12.3986H10.2042"
            stroke="#7856FF"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "automated",
      title: "Automated",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M5.75475 15.7636L8.784 10.4986L3 9.82062L11.4375 2.23438H12.2745L9.17325 7.51288L15 8.17663L6.5625 15.7629L5.75475 15.7636ZM7.884 13.5114L13.2682 8.73462L7.96425 8.14062L10.1407 4.46112L4.73175 9.25287L10.017 9.88587L7.884 13.5114Z"
            fill="#FE4333"
          />
        </svg>
      ),
    },
    {
      id: "sms",
      title: "SMS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <g clipPath="url(#clip0_11782_63562)">
            <path
              d="M6.34383 7C6.34383 7.17405 6.41297 7.34097 6.53604 7.46404C6.65911 7.58711 6.82603 7.65625 7.00008 7.65625C7.17413 7.65625 7.34105 7.58711 7.46412 7.46404C7.58719 7.34097 7.65633 7.17405 7.65633 7C7.65633 6.82595 7.58719 6.65903 7.46412 6.53596C7.34105 6.41289 7.17413 6.34375 7.00008 6.34375C6.82603 6.34375 6.65911 6.41289 6.53604 6.53596C6.41297 6.65903 6.34383 6.82595 6.34383 7ZM9.0782 7C9.0782 7.17405 9.14734 7.34097 9.27041 7.46404C9.39349 7.58711 9.5604 7.65625 9.73445 7.65625C9.9085 7.65625 10.0754 7.58711 10.1985 7.46404C10.3216 7.34097 10.3907 7.17405 10.3907 7C10.3907 6.82595 10.3216 6.65903 10.1985 6.53596C10.0754 6.41289 9.9085 6.34375 9.73445 6.34375C9.5604 6.34375 9.39349 6.41289 9.27041 6.53596C9.14734 6.65903 9.0782 6.82595 9.0782 7ZM3.60945 7C3.60945 7.17405 3.67859 7.34097 3.80166 7.46404C3.92473 7.58711 4.09165 7.65625 4.2657 7.65625C4.43975 7.65625 4.60667 7.58711 4.72974 7.46404C4.85281 7.34097 4.92195 7.17405 4.92195 7C4.92195 6.82595 4.85281 6.65903 4.72974 6.53596C4.60667 6.41289 4.43975 6.34375 4.2657 6.34375C4.09165 6.34375 3.92473 6.41289 3.80166 6.53596C3.67859 6.65903 3.60945 6.82595 3.60945 7ZM12.6493 4.62656C12.3403 3.89238 11.8973 3.2334 11.3327 2.66738C10.772 2.10466 10.1064 1.65735 9.37352 1.35078C8.62156 1.03496 7.82312 0.875 7.00008 0.875H6.97273C6.14422 0.879102 5.34168 1.04316 4.58699 1.36582C3.86042 1.67553 3.20104 2.12363 2.64559 2.68516C2.08641 3.2498 1.64754 3.90605 1.34402 4.6375C1.02957 5.39492 0.870976 6.20019 0.875078 7.02871C0.879717 7.97818 1.10434 8.91366 1.53133 9.76172V11.8398C1.53133 12.0066 1.59759 12.1666 1.71553 12.2845C1.83347 12.4025 1.99344 12.4688 2.16023 12.4688H4.23973C5.08778 12.8957 6.02326 13.1204 6.97273 13.125H7.00144C7.82039 13.125 8.61473 12.9664 9.36258 12.6561C10.0917 12.3531 10.7549 11.9111 11.3149 11.3545C11.8796 10.7953 12.3239 10.1418 12.6343 9.41309C12.9569 8.6584 13.121 7.85586 13.1251 7.02734C13.1292 6.19473 12.9679 5.38672 12.6493 4.62656ZM10.5835 10.6148C9.62508 11.5637 8.35359 12.0859 7.00008 12.0859H6.97684C6.15242 12.0818 5.33348 11.8768 4.61023 11.4912L4.49539 11.4297H2.57039V9.50469L2.50887 9.38984C2.12332 8.6666 1.91824 7.84766 1.91414 7.02324C1.90867 5.66016 2.42957 4.38047 3.38523 3.4166C4.33953 2.45273 5.61512 1.91953 6.9782 1.91406H7.00144C7.68504 1.91406 8.34812 2.04668 8.97293 2.30918C9.5827 2.56484 10.1296 2.93262 10.5999 3.40293C11.0688 3.87187 11.438 4.42012 11.6936 5.02988C11.9589 5.66152 12.0915 6.33145 12.0887 7.02324C12.0805 8.38496 11.546 9.66055 10.5835 10.6148Z"
              fill="#7856FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_11782_63562">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: "call",
      title: "Call",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M4.56717 9.43468C3.31266 8.17774 2.34789 6.6619 1.74034 4.99318C1.40609 4.08085 1.71234 3.07868 2.3995 2.39152L2.82475 1.96685C2.93908 1.85229 3.07488 1.76141 3.22437 1.6994C3.37386 1.63739 3.53412 1.60547 3.69596 1.60547C3.85781 1.60547 4.01806 1.63739 4.16756 1.6994C4.31705 1.76141 4.45284 1.85229 4.56717 1.96685L5.56292 2.9626C5.67748 3.07693 5.76836 3.21272 5.83037 3.36222C5.89238 3.51171 5.9243 3.67196 5.9243 3.83381C5.9243 3.99565 5.89238 4.15591 5.83037 4.3054C5.76836 4.4549 5.67748 4.59069 5.56292 4.70502L5.31792 4.95002C5.21985 5.04806 5.14206 5.16447 5.08899 5.29258C5.03591 5.4207 5.00859 5.55801 5.00859 5.69668C5.00859 5.83536 5.03591 5.97267 5.08899 6.10079C5.14206 6.2289 5.21985 6.3453 5.31792 6.44335L7.55792 8.68393C7.65597 8.782 7.77237 8.85979 7.90049 8.91287C8.0286 8.96594 8.16591 8.99326 8.30459 8.99326C8.44326 8.99326 8.58058 8.96594 8.70869 8.91287C8.8368 8.85979 8.95321 8.782 9.05125 8.68393L9.29684 8.43893C9.41116 8.32438 9.54696 8.23349 9.69645 8.17148C9.84595 8.10947 10.0062 8.07755 10.168 8.07755C10.3299 8.07755 10.4901 8.10947 10.6396 8.17148C10.7891 8.23349 10.9249 8.32438 11.0393 8.43893L12.035 9.43468C12.1496 9.54901 12.2404 9.68481 12.3025 9.8343C12.3645 9.98379 12.3964 10.144 12.3964 10.3059C12.3964 10.4677 12.3645 10.628 12.3025 10.7775C12.2404 10.927 12.1496 11.0628 12.035 11.1771L11.6103 11.6018C10.9232 12.2895 9.921 12.5958 9.00867 12.2615C7.33996 11.654 5.82412 10.6892 4.56717 9.43468Z"
            stroke="#7856FF"
            strokeWidth="1.15"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  // FIX 1: Use an object to track which plan is expanded, not a single boolean
  const [expandedPlans, setExpandedPlans] = useState({});

  const [showPayment, setShowPayment] = useState(true);
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'paid', 'not paid'
  const [dateFilter, setDateFilter] = useState({ from: '', to: '' });

  const rowsPerPage = 10;

  // FIX 2: Function to toggle individual plan expansion
  const togglePlan = (planId) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  // FIX 3: Function to go back to plan overview
  const goBackToPlans = () => {
    setShowPayment(true);
  };

  const tableData = [
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "not paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "not paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "not paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
    {
      date: "January 10, 2025",
      amount: "$90",
      status: "paid",
      des: "start for the period from 2025-01-10 to 2025-02-10",
      default: true,
    },
  ];

  // Filter function for table data
  const filteredTableData = tableData.filter(item => {
    const searchLower = searchQuery.toLowerCase();
    // Search filter
    const matchesSearch = (
      item.date.toLowerCase().includes(searchLower) ||
      item.amount.toLowerCase().includes(searchLower) ||
      item.des.toLowerCase().includes(searchLower) ||
      item.status.toLowerCase().includes(searchLower)
    );

    // Status filter
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;

    // Date filter (if you want to implement date range)
    const matchesDate = true; // You can implement date filtering logic here

    return matchesSearch && matchesStatus && matchesDate;
  });

  const handleApplyFilters = () => {
    setShowFilterModal(false);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Add this function to reset filters
  const handleResetFilters = () => {
    setStatusFilter('all');
    setDateFilter({ from: '', to: '' });
    setCurrentPage(1);
  };

  const generatePDFWithLibrary = (item) => {
    const printWindow = window.open('', '_blank');

    if (!printWindow) {
      alert('Please allow popups to download PDF');
      return;
    }

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice - ${item.date}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #7856FF;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .invoice-details {
          margin: 20px 0;
        }
        .invoice-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        .invoice-row strong {
          color: #333;
        }
        .status {
          display: inline-block;
          padding: 5px 15px;
          border-radius: 5px;
          font-weight: bold;
        }
        .status.paid {
          background: #d4edda;
          color: #176448;
        }
        .status.not-paid {
          background: #f8d7da;
          color: #FE4333;
        }
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #eee;
          text-align: center;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>PAYMENT INVOICE</h1>
        <p>Invoice for services rendered</p>
      </div>
      
      <div class="invoice-details">
        <div class="invoice-row">
          <strong>Date:</strong>
          <span>${item.date}</span>
        </div>
        
        <div class="invoice-row">
          <strong>Amount:</strong>
          <span style="font-size: 24px; color: #7856FF;">${item.amount}</span>
        </div>
        
        <div class="invoice-row">
          <strong>Status:</strong>
          <span class="status ${item.status === 'paid' ? 'paid' : 'not-paid'}">
            ${item.status ? item.status.toUpperCase() : 'PENDING'}
          </span>
        </div>
        
        <div class="invoice-row">
          <strong>Description:</strong>
          <span>${item.des}</span>
        </div>
      </div>
      
      <div class="footer">
        <p>Thank you for your business!</p>
        <p>For questions, contact support@company.com</p>
      </div>
      
      <script>
        window.onload = function() {
          window.print();
          setTimeout(function() {
            window.close();
          }, 500);
        };
      </script>
    </body>
    </html>
  `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <>
      <Top />
      <MainInner>
        <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
          {tabBtns.map((item, index) => (
            <button
              onClick={() => setActiveTab(item)}
              key={index}
              className={`min-w-[140px] font-inter font-medium text-xs md:text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${item === activeTab
                ? "border-btn text-btn"
                : "border-transparent text-heading"
                }`}
            >
              {item} Method
            </button>
          ))}
        </div>
        {activeTab === "Usages & Plan" && (
          <>
            {showPayment && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-6">
                <div className={`${c_24}`}>
                  <div className="flex items-center justify-between mb-4 md:mb-5">
                    <h4 className="text-base md:text-lg font-semibold">
                      Select Plans
                    </h4>
                    <button
                      onClick={() => setShowPayment(false)}
                      className="text-primary flex items-center gap-2 font-semibold text-sm"
                    >
                      See Plain Details
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.33333 2.5H14V7.16667M14 10.3247V13.5C14 13.7652 13.8946 14.0196 13.7071 14.2071C13.5196 14.3946 13.2652 14.5 13 14.5H3C2.73478 14.5 2.48043 14.3946 2.29289 14.2071C2.10536 14.0196 2 13.7652 2 13.5V3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H6M8.6 7.9L13.7 2.8"
                          stroke="#7856FF"
                          strokeWidth="1.15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col gap-3">
                    {plans.map((item, index) => (
                      <div
                        className="bg-[#F7F7F7]  border border-transparent hover:border-primary transition-all duration-500 cursor-pointer rounded-xl p-3 flex items-center justify-between"
                        key={index}
                      >
                        <div className="flex items-center gap-4">
                          <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <h5 className="text-sm font-semibold">
                            {item.title}
                          </h5>
                        </div>
                        <>
                          {/* FIX: Check if THIS specific plan is expanded */}
                          {expandedPlans[item.id] && (
                            <div className="flex items-center gap-3">
                              <Dropdown
                                className="!mb-0"
                                btnClass="max-h-[34px] max-w-[123px] text-heading font-medium"
                                placeholder="300"
                                isArrow={true}
                                items={[{ name: "300" }, { name: "400" }]}
                              />
                              <div className="flex items-center gap-2">
                                <p>Tickets/Month</p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_11782_63528)">
                                    <path
                                      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                                      stroke="#858585"
                                      strokeWidth="1.15"
                                    />
                                    <path
                                      d="M9 5.25H9.01"
                                      stroke="#858585"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                    />
                                    <path
                                      d="M7.5 8.25H9V12M7.5 12H10.5"
                                      stroke="#858585"
                                      strokeWidth="1.15"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_11782_63528">
                                      <rect
                                        width="18"
                                        height="18"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <h6>Basic</h6>
                              {/* FIX: Toggle THIS specific plan only */}
                              <button onClick={() => togglePlan(item.id)}>
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.6663 10.6654L1.33301 1.33203M10.6663 1.33203L1.33301 10.6654"
                                    stroke="#525866"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          )}
                          {/* FIX: Show Add Product button only if THIS plan is NOT expanded */}
                          {!expandedPlans[item.id] && (
                            <button
                              className="gap-1 text-primary text-sm font-semibold"
                              onClick={() => togglePlan(item.id)}
                            >
                              + Add Product
                            </button>
                          )}
                        </>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${c_24}`}>
                  <div className="mb-4 md:mb-5">
                    <h4 className="text-base md:text-lg font-semibold ">
                      Summary
                    </h4>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between p-3 border-b border-stroke">
                        <p>Product</p>
                        <p>Price</p>
                      </div>
                      <div className="flex items-center justify-between p-3 border-b border-stroke">
                        <div className="">
                          <h5>Automate</h5>
                          <p>150 automated interactions/month</p>
                        </div>
                        <h5 className="text-sm">
                          $143 <span className="text-gray text-xs">/month</span>
                        </h5>
                      </div>
                      <div className="flex items-center bg-[#FFC563]/15 justify-between p-3 border-b border-stroke">
                        <div className="">
                          <h5>Total</h5>
                        </div>
                        <div className=" text-end">
                          <h5>$203/month</h5>
                          <p>Prices exclusive of sales tax</p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-4 md:mt-5">
                        <button className="btn bg-prim inline-block ">
                          Subscribe now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showPayment != true && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-6">
                {/* FIX 3: Add back button */}
                <div className="xl:col-span-2">
                  <button
                    onClick={goBackToPlans}
                    className="flex items-center gap-2 text-primary font-semibold mb-4 hover:underline"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Back to Plans
                  </button>
                </div>

                <div className="flex flex-col gap-5 md:gap-6">
                  <div className={`${c_24}`}>
                    <h4 className="text-base md:text-lg font-semibold !leading-[111%] mb-4  md:mb-5">
                      Payment method
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5">
                      <Input className="md:col-span-2" label="Card Number" />
                      <Input className="" label="Exp. date" />
                      <Input className="" label="Security Code" />
                    </div>
                  </div>
                  <div className={`${c_24}`}>
                    <h4 className="text-base md:text-lg font-semibold !leading-[111%] mb-4  md:mb-5">
                      Billing Information
                    </h4>
                    <div className="grid grid-cols-1  gap-3 md:gap-4 xl:gap-5">
                      <Input className="" label="Email" />
                      <Input className="" label="Name" />
                      <Input className="" label="City" />
                      <Input className="" label="Address 1" />
                      <Input className="" label="Address 2" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className={`${c_24}`}>
                    <div className="mb-4 md:mb-5">
                      <h4 className="text-base md:text-lg font-semibold ">
                        Summary
                      </h4>
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between p-3 border-b border-stroke">
                          <p>Product</p>
                          <p>Price</p>
                        </div>
                        <div className="flex items-center justify-between p-3 border-b border-stroke">
                          <div className="">
                            <h5>Automate</h5>
                            <p>150 automated interactions/month</p>
                          </div>
                          <h5 className="text-sm">
                            $143{" "}
                            <span className="text-gray text-xs">/month</span>
                          </h5>
                        </div>
                        <div className="flex items-center bg-[#FFC563]/15 justify-between p-3">
                          <div className="">
                            <h5>Total</h5>
                          </div>
                          <div className=" text-end">
                            <h5>$203/month</h5>
                            <p>Prices exclusive of sales tax</p>
                          </div>
                        </div>
                        <div className="border border-[#FF9A61] bg-[#FFF3EF] rounded-2xl p-4 mt-3 md:mt-4 xl:mt-5">
                          <h4 className="text-base md:text-lg font-semibold !leading-normal mb-3 md:mb-4">
                            Start your subscription today
                          </h4>
                          <p className="mb-4 font-medium">
                            You will be charged for the products and plan you've
                            selected. Update your product and plan selection{" "}
                            <a href="#" className="text-primary">
                              here.
                            </a>
                          </p>
                          <div className="flex items-start gap-2">
                            <Checkbox checked id="agree" />
                            <label
                              htmlFor="agree"
                              className="cursor-pointer font-medium"
                            >
                              I agree to the{" "}
                              <a href="#" className="text-primary">
                                Jarvey Subscription Agreement
                              </a>{" "}
                              and{" "}
                              <a href="#" className="text-primary">
                                Terms
                              </a>
                              . Learn about how we use and protect your data in
                              our{" "}
                              <a href="#" className="text-primary">
                                Privacy Policy
                              </a>{" "}
                              .
                            </label>
                          </div>
                        </div>
                        <div className="flex justify-end mt-4 md:mt-5">
                          <button
                            className="btn bg-prim inline-block "
                            onClick={() => setModal(!modal)}
                          >
                            Subscribe now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {activeTab === "Payment History " && (
          <div>
            <h4 className={heading}>Payment history</h4>
            <p className={des}>
              The account owner will receive an invoice by email at the start of
              each billing period.
            </p>
            <div className={`${c_24} mt-5 md:mt-6`}>
              <TableFilter
                onSearch={setSearchQuery}
                searchValue={searchQuery}
                hideSortDrop={true}
              >
                <button
                  className="btn min-w-[79px] gap-1 text-gray"
                  onClick={() => setShowFilterModal(true)}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4H14M4 8H12M6 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Filter
                </button>
              </TableFilter>
              {/* <TableFilter /> */}
              <div className="mt-5 overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      {[
                        "Date",
                        "Amount",
                        "Description",
                        "Status",
                        "Actions",
                      ].map((item, index) => (
                        <th key={index}>{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* {tableData
                      .slice(
                        (currentPage - 1) * rowsPerPage,
                        currentPage * rowsPerPage
                      )
                      .map((item, index) => ( */}
                    {filteredTableData
                      .slice(
                        (currentPage - 1) * rowsPerPage,
                        currentPage * rowsPerPage
                      )
                      .map((item, index) => (
                        <tr key={index}>
                          <td>
                            <span className="text-heading font-inter font-medium text-sm">
                              {item.date}
                            </span>
                          </td>
                          <td>
                            <span className="text-heading font-inter font-medium text-sm">
                              {item.amount}
                            </span>
                          </td>
                          <td>
                            <span className="text-heading font-inter font-medium text-sm">
                              {item.des}
                            </span>
                          </td>
                          <td>
                            <div
                              className={`max-w-max border rounded-lg text-sm font-medium px-3 py-1 ${item.status === "paid"
                                ? "border-[#176448] text-[#176448]"
                                : "border-[#FE4333] text-[#FE4333]"
                                }`}
                            >
                              {item.status === "paid" ? "Paid" : "Not Paid"}
                            </div>
                          </td>
                          <td>
                            <button
                              className="text-primary underline font-medium !leading-[1.4] hover:opacity-70 transition-opacity"
                              onClick={() => generatePDFWithLibrary(item)}
                              title="Download invoice as PDF"
                            >
                              Download PDF
                            </button>
                            {/* <button className="text-primary underline font-medium !leading-[1.4]">
                              Download PDF
                            </button> */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {showFilterModal && (
                // <Modal onClick={() => setShowFilterModal(false)} closeOnClick>
                <Modal onClose={() => setShowFilterModal(false)}>
                  <h3 className="text-xl font-semibold mb-4">Filter Payment History</h3>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Status
                    </label>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="status"
                          value="all"
                          checked={statusFilter === 'all'}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>All</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="status"
                          value="paid"
                          checked={statusFilter === 'paid'}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Paid</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="status"
                          value="not paid"
                          checked={statusFilter === 'not paid'}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Not Paid</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-6">
                    <button
                      onClick={handleResetFilters}
                      className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
                    >
                      Reset
                    </button>
                    <button
                      onClick={handleApplyFilters}
                      className="px-4 py-2 rounded-md bg-blue-600 text-white"
                    >
                      Apply Filters
                    </button>
                  </div>
                </Modal>
              )}
              {/* Pagination controls */}
              <div className="flex justify-end items-center gap-2 mt-4">
                <button
                  className="btn px-3 py-1"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {/* {Array.from(
                  { length: Math.ceil(tableData.length / rowsPerPage) },
                  (_, i) => (
                    <button
                      key={i}
                      className={`btn px-3 py-1 ${currentPage === i + 1 ? "bg-primary text-white" : ""
                        }`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  )
                )} */}
                {Array.from(
                  { length: Math.ceil(filteredTableData.length / rowsPerPage) },
                  (_, i) => (
                    <button
                      key={i}
                      className={`btn px-3 py-1 ${currentPage === i + 1 ? "bg-primary text-white" : ""}`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  )
                )}
                <button
                  className="btn px-3 py-1"
                  onClick={() =>
                    setCurrentPage((p) =>
                      Math.min(p + 1, Math.ceil(filteredTableData.length / rowsPerPage))  // ✅ CORRECT
                    )
                  }
                  disabled={currentPage === Math.ceil(filteredTableData.length / rowsPerPage)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </MainInner>
      {modal && (
        <Modal closeIconHide={false}>
          <h3 className="text-lg md:text-xl xl:text-2xl font-semibold !leading-[1.3] mb-4 md:mb-5 xl:mb-5 2xl:mb-6">
            Update Subscriptions
          </h3>
          <p className="mb-4 md:mb-6">
            Your subscriptions changes will only be taken info account after you
            link "update subscriptions"
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <button className="btn bg-off">Back to Editing</button>
            <button className="btn bg-prim">Update Subscriptions</button>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              className="text-[#FE4333] font-medium mt-4 md:mt-6"
              onClick={() => setModal(!modal)}
            >
              Discard Changes
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

// import MainInner from "../components/MainInner";
// import Top from "../layouts/Top";
// import { c_24 } from "../utilities/Classes";
// import Dropdown from "../components/Dropdown";
// import TableFilter from "../components/TableFilter";
// import Input from "../components/Input";
// import Checkbox from "../components/Checkbox";
// import Modal from "../components/Modal";
// import React, { useState } from "react";

// export default function Billing() {
//   const heading =
//     "text-[#0A0D14] text-lg lg:text-xl font-bole !leading-normal font-inter";
//   const des = "text-gray text-sm font-medium !leading-normal font-inter";

//   const tabBtns = ["Usages & Plan", "Payment History "];

//   const [activeTab, setActiveTab] = useState(tabBtns[0]);
//   const plans = [
//     {
//       title: "Help desk",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="14"
//           height="14"
//           viewBox="0 0 14 14"
//           fill="none"
//         >
//           <path
//             d="M10.3545 1.60547H3.64616C2.51858 1.60547 1.60449 2.51955 1.60449 3.64714V8.33189C1.60449 9.45947 2.51858 10.3736 3.64616 10.3736H10.3545C11.4821 10.3736 12.3962 9.45947 12.3962 8.33189V3.64714C12.3962 2.51955 11.4821 1.60547 10.3545 1.60547Z"
//             stroke="#7856FF"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M5.31471 10.375V12.3986M8.68638 10.375V12.3986M3.79688 12.3986H10.2042"
//             stroke="#7856FF"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Automated",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="18"
//           height="18"
//           viewBox="0 0 18 18"
//           fill="none"
//         >
//           <path
//             d="M5.75475 15.7636L8.784 10.4986L3 9.82062L11.4375 2.23438H12.2745L9.17325 7.51288L15 8.17663L6.5625 15.7629L5.75475 15.7636ZM7.884 13.5114L13.2682 8.73462L7.96425 8.14062L10.1407 4.46112L4.73175 9.25287L10.017 9.88587L7.884 13.5114Z"
//             fill="#FE4333"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "SMS",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="14"
//           height="14"
//           viewBox="0 0 14 14"
//           fill="none"
//         >
//           <g clipPath="url(#clip0_11782_63562)">
//             <path
//               d="M6.34383 7C6.34383 7.17405 6.41297 7.34097 6.53604 7.46404C6.65911 7.58711 6.82603 7.65625 7.00008 7.65625C7.17413 7.65625 7.34105 7.58711 7.46412 7.46404C7.58719 7.34097 7.65633 7.17405 7.65633 7C7.65633 6.82595 7.58719 6.65903 7.46412 6.53596C7.34105 6.41289 7.17413 6.34375 7.00008 6.34375C6.82603 6.34375 6.65911 6.41289 6.53604 6.53596C6.41297 6.65903 6.34383 6.82595 6.34383 7ZM9.0782 7C9.0782 7.17405 9.14734 7.34097 9.27041 7.46404C9.39349 7.58711 9.5604 7.65625 9.73445 7.65625C9.9085 7.65625 10.0754 7.58711 10.1985 7.46404C10.3216 7.34097 10.3907 7.17405 10.3907 7C10.3907 6.82595 10.3216 6.65903 10.1985 6.53596C10.0754 6.41289 9.9085 6.34375 9.73445 6.34375C9.5604 6.34375 9.39349 6.41289 9.27041 6.53596C9.14734 6.65903 9.0782 6.82595 9.0782 7ZM3.60945 7C3.60945 7.17405 3.67859 7.34097 3.80166 7.46404C3.92473 7.58711 4.09165 7.65625 4.2657 7.65625C4.43975 7.65625 4.60667 7.58711 4.72974 7.46404C4.85281 7.34097 4.92195 7.17405 4.92195 7C4.92195 6.82595 4.85281 6.65903 4.72974 6.53596C4.60667 6.41289 4.43975 6.34375 4.2657 6.34375C4.09165 6.34375 3.92473 6.41289 3.80166 6.53596C3.67859 6.65903 3.60945 6.82595 3.60945 7ZM12.6493 4.62656C12.3403 3.89238 11.8973 3.2334 11.3327 2.66738C10.772 2.10466 10.1064 1.65735 9.37352 1.35078C8.62156 1.03496 7.82312 0.875 7.00008 0.875H6.97273C6.14422 0.879102 5.34168 1.04316 4.58699 1.36582C3.86042 1.67553 3.20104 2.12363 2.64559 2.68516C2.08641 3.2498 1.64754 3.90605 1.34402 4.6375C1.02957 5.39492 0.870976 6.20019 0.875078 7.02871C0.879717 7.97818 1.10434 8.91366 1.53133 9.76172V11.8398C1.53133 12.0066 1.59759 12.1666 1.71553 12.2845C1.83347 12.4025 1.99344 12.4688 2.16023 12.4688H4.23973C5.08778 12.8957 6.02326 13.1204 6.97273 13.125H7.00144C7.82039 13.125 8.61473 12.9664 9.36258 12.6561C10.0917 12.3531 10.7549 11.9111 11.3149 11.3545C11.8796 10.7953 12.3239 10.1418 12.6343 9.41309C12.9569 8.6584 13.121 7.85586 13.1251 7.02734C13.1292 6.19473 12.9679 5.38672 12.6493 4.62656ZM10.5835 10.6148C9.62508 11.5637 8.35359 12.0859 7.00008 12.0859H6.97684C6.15242 12.0818 5.33348 11.8768 4.61023 11.4912L4.49539 11.4297H2.57039V9.50469L2.50887 9.38984C2.12332 8.6666 1.91824 7.84766 1.91414 7.02324C1.90867 5.66016 2.42957 4.38047 3.38523 3.4166C4.33953 2.45273 5.61512 1.91953 6.9782 1.91406H7.00144C7.68504 1.91406 8.34812 2.04668 8.97293 2.30918C9.5827 2.56484 10.1296 2.93262 10.5999 3.40293C11.0688 3.87187 11.438 4.42012 11.6936 5.02988C11.9589 5.66152 12.0915 6.33145 12.0887 7.02324C12.0805 8.38496 11.546 9.66055 10.5835 10.6148Z"
//               fill="#7856FF"
//             />
//           </g>
//           <defs>
//             <clipPath id="clip0_11782_63562">
//               <rect width="14" height="14" fill="white" />
//             </clipPath>
//           </defs>
//         </svg>
//       ),
//     },
//     {
//       title: "Call",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="14"
//           height="14"
//           viewBox="0 0 14 14"
//           fill="none"
//         >
//           <path
//             d="M4.56717 9.43468C3.31266 8.17774 2.34789 6.6619 1.74034 4.99318C1.40609 4.08085 1.71234 3.07868 2.3995 2.39152L2.82475 1.96685C2.93908 1.85229 3.07488 1.76141 3.22437 1.6994C3.37386 1.63739 3.53412 1.60547 3.69596 1.60547C3.85781 1.60547 4.01806 1.63739 4.16756 1.6994C4.31705 1.76141 4.45284 1.85229 4.56717 1.96685L5.56292 2.9626C5.67748 3.07693 5.76836 3.21272 5.83037 3.36222C5.89238 3.51171 5.9243 3.67196 5.9243 3.83381C5.9243 3.99565 5.89238 4.15591 5.83037 4.3054C5.76836 4.4549 5.67748 4.59069 5.56292 4.70502L5.31792 4.95002C5.21985 5.04806 5.14206 5.16447 5.08899 5.29258C5.03591 5.4207 5.00859 5.55801 5.00859 5.69668C5.00859 5.83536 5.03591 5.97267 5.08899 6.10079C5.14206 6.2289 5.21985 6.3453 5.31792 6.44335L7.55792 8.68393C7.65597 8.782 7.77237 8.85979 7.90049 8.91287C8.0286 8.96594 8.16591 8.99326 8.30459 8.99326C8.44326 8.99326 8.58058 8.96594 8.70869 8.91287C8.8368 8.85979 8.95321 8.782 9.05125 8.68393L9.29684 8.43893C9.41116 8.32438 9.54696 8.23349 9.69645 8.17148C9.84595 8.10947 10.0062 8.07755 10.168 8.07755C10.3299 8.07755 10.4901 8.10947 10.6396 8.17148C10.7891 8.23349 10.9249 8.32438 11.0393 8.43893L12.035 9.43468C12.1496 9.54901 12.2404 9.68481 12.3025 9.8343C12.3645 9.98379 12.3964 10.144 12.3964 10.3059C12.3964 10.4677 12.3645 10.628 12.3025 10.7775C12.2404 10.927 12.1496 11.0628 12.035 11.1771L11.6103 11.6018C10.9232 12.2895 9.921 12.5958 9.00867 12.2615C7.33996 11.654 5.82412 10.6892 4.56717 9.43468Z"
//             stroke="#7856FF"
//             strokeWidth="1.15"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ),
//     },
//   ];

//   const [plane, setPlane] = useState(false);
//   const [showPayment, setShowPayment] = useState(true);
//   const [modal, setModal] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 10;

//   const tableData = [
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "not paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "not paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "not paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//     {
//       date: "January 10, 2025",
//       amount: "$90",
//       status: "paid",
//       des: "start for the period from 2025-01-10 to 2025-02-10",
//       default: true,
//     },
//   ];

//   return (
//     <>
//       <Top />
//       <MainInner>
//         <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
//           {tabBtns.map((item, index) => (
//             <button
//               onClick={() => setActiveTab(item)}
//               key={index}
//               className={`min-w-[140px] font-inter font-medium text-xs md:text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${
//                 item === activeTab
//                   ? "border-btn text-btn"
//                   : "border-transparent text-heading"
//               }`}
//             >
//               {item} Method
//             </button>
//           ))}
//         </div>
//         {activeTab === "Usages & Plan" && (
//           <>
//             {showPayment && (
//               <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-6">
//                 <div className={`${c_24}`}>
//                   <div className="flex items-center justify-between mb-4 md:mb-5">
//                     <h4 className="text-base md:text-lg font-semibold">
//                       Select Plans
//                     </h4>
//                     <button
//                       onClick={() => setShowPayment(false)}
//                       className="text-primary flex items-center gap-2 font-semibold text-sm"
//                     >
//                       See Plain Details
//                       <svg
//                         width="16"
//                         height="17"
//                         viewBox="0 0 16 17"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M9.33333 2.5H14V7.16667M14 10.3247V13.5C14 13.7652 13.8946 14.0196 13.7071 14.2071C13.5196 14.3946 13.2652 14.5 13 14.5H3C2.73478 14.5 2.48043 14.3946 2.29289 14.2071C2.10536 14.0196 2 13.7652 2 13.5V3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H6M8.6 7.9L13.7 2.8"
//                           stroke="#7856FF"
//                           strokeWidth="1.15"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="flex flex-col gap-3">
//                     {plans.map((item, index) => (
//                       <div
//                         className="bg-[#F7F7F7]  border border-transparent hover:border-primary transition-all duration-500 cursor-pointer rounded-xl p-3 flex items-center justify-between"
//                         key={index}
//                       >
//                         <div className="flex items-center gap-4">
//                           <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
//                             {item.icon}
//                           </div>
//                           <h5 className="text-sm font-semibold">
//                             {item.title}
//                           </h5>
//                         </div>
//                         <>
//                           {plane && (
//                             <div className="flex items-center gap-3">
//                               <Dropdown
//                                 className="!mb-0"
//                                 btnClass="max-h-[34px] max-w-[123px] text-heading font-medium"
//                                 placeholder="300"
//                                 isArrow={true}
//                                 items={[{ name: "300" }, { name: "400" }]}
//                               />
//                               <div className="flex items-center gap-2">
//                                 <p>Tickets/Month</p>
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="18"
//                                   height="18"
//                                   viewBox="0 0 18 18"
//                                   fill="none"
//                                 >
//                                   <g clipPath="url(#clip0_11782_63528)">
//                                     <path
//                                       d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
//                                       stroke="#858585"
//                                       strokeWidth="1.15"
//                                     />
//                                     <path
//                                       d="M9 5.25H9.01"
//                                       stroke="#858585"
//                                       strokeWidth="2"
//                                       strokeLinecap="round"
//                                     />
//                                     <path
//                                       d="M7.5 8.25H9V12M7.5 12H10.5"
//                                       stroke="#858585"
//                                       strokeWidth="1.15"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     />
//                                   </g>
//                                   <defs>
//                                     <clipPath id="clip0_11782_63528">
//                                       <rect
//                                         width="18"
//                                         height="18"
//                                         fill="white"
//                                       />
//                                     </clipPath>
//                                   </defs>
//                                 </svg>
//                               </div>
//                               <h6>Basic</h6>
//                               <button onClick={() => setPlane(false)}>
//                                 <svg
//                                   width="12"
//                                   height="12"
//                                   viewBox="0 0 12 12"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path
//                                     d="M10.6663 10.6654L1.33301 1.33203M10.6663 1.33203L1.33301 10.6654"
//                                     stroke="#525866"
//                                     strokeLinecap="round"
//                                   />
//                                 </svg>
//                               </button>
//                             </div>
//                           )}
//                           {plane != true && (
//                             <button
//                               className="gap-1 text-primary text-sm font-semibold"
//                               onClick={() => setPlane(true)}
//                             >
//                               + Add Product
//                             </button>
//                           )}
//                         </>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className={`${c_24}`}>
//                   <div className="mb-4 md:mb-5">
//                     <h4 className="text-base md:text-lg font-semibold ">
//                       Summary
//                     </h4>
//                     <div className="flex flex-col">
//                       <div className="flex items-center justify-between p-3 border-b border-stroke">
//                         <p>Product</p>
//                         <p>Price</p>
//                       </div>
//                       <div className="flex items-center justify-between p-3 border-b border-stroke">
//                         <div className="">
//                           <h5>Automate</h5>
//                           <p>150 automated interactions/month</p>
//                         </div>
//                         <h5 className="text-sm">
//                           $143 <span className="text-gray text-xs">/month</span>
//                         </h5>
//                       </div>
//                       <div className="flex items-center bg-[#FFC563]/15 justify-between p-3 border-b border-stroke">
//                         <div className="">
//                           <h5>Total</h5>
//                         </div>
//                         <div className=" text-end">
//                           <h5>$203/month</h5>
//                           <p>Prices exclusive of sales tax</p>
//                         </div>
//                       </div>
//                       <div className="flex justify-end mt-4 md:mt-5">
//                         <button className="btn bg-prim inline-block ">
//                           Subscribe now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {showPayment != true && (
//               <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-6">
//                 <div className="flex flex-col gap-5 md:gap-6">
//                   <div className={`${c_24}`}>
//                     <h4 className="text-base md:text-lg font-semibold !leading-[111%] mb-4  md:mb-5">
//                       {" "}
//                       Payment method
//                     </h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5">
//                       <Input className="md:col-span-2" label="Card Number" />
//                       <Input className="" label="Exp. date" />
//                       <Input className="" label="Security Code" />
//                     </div>
//                   </div>
//                   <div className={`${c_24}`}>
//                     <h4 className="text-base md:text-lg font-semibold !leading-[111%] mb-4  md:mb-5">
//                       {" "}
//                       Billing Information{" "}
//                     </h4>
//                     <div className="grid grid-cols-1  gap-3 md:gap-4 xl:gap-5">
//                       <Input className="" label="Email" />
//                       <Input className="" label="Name" />
//                       <Input className="" label="City" />
//                       <Input className="" label="Address 1" />
//                       <Input className="" label="Address 2" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="">
//                   <div className={`${c_24}`}>
//                     <div className="mb-4 md:mb-5">
//                       <h4 className="text-base md:text-lg font-semibold ">
//                         Summary
//                       </h4>
//                       <div className="flex flex-col">
//                         <div className="flex items-center justify-between p-3 border-b border-stroke">
//                           <p>Product</p>
//                           <p>Price</p>
//                         </div>
//                         <div className="flex items-center justify-between p-3 border-b border-stroke">
//                           <div className="">
//                             <h5>Automate</h5>
//                             <p>150 automated interactions/month</p>
//                           </div>
//                           <h5 className="text-sm">
//                             $143{" "}
//                             <span className="text-gray text-xs">/month</span>
//                           </h5>
//                         </div>
//                         <div className="flex items-center bg-[#FFC563]/15 justify-between p-3">
//                           <div className="">
//                             <h5>Total</h5>
//                           </div>
//                           <div className=" text-end">
//                             <h5>$203/month</h5>
//                             <p>Prices exclusive of sales tax</p>
//                           </div>
//                         </div>
//                         <div className="border border-[#FF9A61] bg-[#FFF3EF] rounded-2xl p-4 mt-3 md:mt-4 xl:mt-5">
//                           <h4 className="text-base md:text-lg font-semibold !leading-normal mb-3 md:mb-4">
//                             Start your subscription today
//                           </h4>
//                           <p className="mb-4 font-medium">
//                             You will be charged for the products and plan you've
//                             selected. Update your product and plan selection{" "}
//                             <a href="#" className="text-primary">
//                               here.
//                             </a>
//                           </p>
//                           <div className="flex items-start gap-2">
//                             <Checkbox checked id="agree" />
//                             <label
//                               htmlFor="agree"
//                               className="cursor-pointer font-medium"
//                             >
//                               I agree to the{" "}
//                               <a href="#" className="text-primary">
//                                 Jarvey Subscription Agreement
//                               </a>{" "}
//                               and{" "}
//                               <a href="#" className="text-primary">
//                                 Terms
//                               </a>
//                               . Learn about how we use and protect your data in
//                               our{" "}
//                               <a href="#" className="text-primary">
//                                 Privacy Policy
//                               </a>{" "}
//                               .
//                             </label>
//                           </div>
//                         </div>
//                         <div className="flex justify-end mt-4 md:mt-5">
//                           <button
//                             className="btn bg-prim inline-block "
//                             onClick={() => setModal(!modal)}
//                           >
//                             Subscribe now
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//         {activeTab === "Payment History " && (
//           <div>
//             <h4 className={heading}>Payment history</h4>
//             <p className={des}>
//               The account owner will receive an invoice by email at the start of
//               each billing period.
//             </p>
//             <div className={`${c_24} mt-5 md:mt-6`}>
//               <TableFilter />
//               <div className="mt-5 overflow-x-auto">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       {[
//                         "Date",
//                         "Amount",
//                         "Description",
//                         "Status",
//                         "Actions",
//                       ].map((item, index) => (
//                         <th key={index}>{item}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tableData
//                       .slice(
//                         (currentPage - 1) * rowsPerPage,
//                         currentPage * rowsPerPage
//                       )
//                       .map((item, index) => (
//                         <tr key={index}>
//                           <td>
//                             <span className="text-heading font-inter font-medium text-sm">
//                               {item.date}
//                             </span>
//                           </td>
//                           <td>
//                             <span className="text-heading font-inter font-medium text-sm">
//                               {item.amount}
//                             </span>
//                           </td>
//                           <td>
//                             <span className="text-heading font-inter font-medium text-sm">
//                               {item.des}
//                             </span>
//                           </td>
//                           <td>
//                             <div
//                               className={`max-w-max border rounded-lg text-sm font-medium px-3 py-1 ${
//                                 item.status === "paid"
//                                   ? "border-[#176448] text-[#176448]"
//                                   : "border-[#FE4333] text-[#FE4333]"
//                               }`}
//                             >
//                               {item.status === "paid" ? "Paid" : "Not Paid"}
//                             </div>
//                           </td>
//                           <td>
//                             <button className="text-primary underline font-medium !leading-[1.4]">
//                               Download PDF
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               </div>
//               {/* Pagination controls */}
//               <div className="flex justify-end items-center gap-2 mt-4">
//                 <button
//                   className="btn px-3 py-1"
//                   onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//                   disabled={currentPage === 1}
//                 >
//                   Previous
//                 </button>
//                 {Array.from(
//                   { length: Math.ceil(tableData.length / rowsPerPage) },
//                   (_, i) => (
//                     <button
//                       key={i}
//                       className={`btn px-3 py-1 ${
//                         currentPage === i + 1 ? "bg-primary text-white" : ""
//                       }`}
//                       onClick={() => setCurrentPage(i + 1)}
//                     >
//                       {i + 1}
//                     </button>
//                   )
//                 )}
//                 <button
//                   className="btn px-3 py-1"
//                   onClick={() =>
//                     setCurrentPage((p) =>
//                       Math.min(p + 1, Math.ceil(tableData.length / rowsPerPage))
//                     )
//                   }
//                   disabled={
//                     currentPage === Math.ceil(tableData.length / rowsPerPage)
//                   }
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </MainInner>
//       {modal && (
//         <Modal closeIconHide={false}>
//           <h3 className="text-lg md:text-xl xl:text-2xl font-semibold !leading-[1.3] mb-4 md:mb-5 xl:mb-5 2xl:mb-6">
//             Update Subscriptions
//           </h3>
//           <p className="mb-4 md:mb-6">
//             Your subscriptions changes will only be taken info account after you
//             link “update subscriptions”
//           </p>
//           <div className="flex flex-wrap justify-center md:justify-end gap-4">
//             <button className="btn bg-off">Back to Editing</button>
//             <button className="btn bg-prim">Update Subscriptions</button>
//           </div>
//           <div className="flex justify-center md:justify-start">
//             <button
//               className="text-[#FE4333] font-medium mt-4 md:mt-6"
//               onClick={() => setModal(!modal)}
//             >
//               Discard Changes
//             </button>
//           </div>
//         </Modal>
//       )}
//     </>
//   );
// }
