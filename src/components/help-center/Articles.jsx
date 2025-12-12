import React, { useRef, useState, useEffect } from "react";
import shopify from "../../assets/img/flag.svg";
import {
  copyIcon2,
  deleteIcon,
  search,
  copyIcon,
  langList,
  setting,
  share,
} from "../../utilities/Classes";

import Input from "../../components/Input";
import Modal from "../Modal";
import Checkbox from "../Checkbox";
import TextEditor2 from "../TextEditor2";
import TextEditor from "../TextEditor";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";

export default function Articles() {
  const dragItem = useRef(null);
  const fileInputRef = useRef(null);

  // Contact/category options
  const contact = [
    { name: "Category 1" },
    { name: "Category 2" },
    { name: "Category 3" },
    { name: "Category 4" },
    { name: "Category 5" },
  ];

  const tableHead = [``, `Articles`, `👍`, ``, `Actions`];

  const initialTableData = [
    {
      name: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134ZM11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134ZM6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208ZM11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208ZM6.66667 9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634ZM11.25 9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634Z"
            fill="#858585"
            stroke="#858585"
            strokeWidth="0.833333"
          />
        </svg>
      ),
      store: {
        name: "Do you offer refunds or exchanges?",
      },
      language: {
        parsent: "0%",
        des: "Draft",
        img: shopify,
      },
      date: "Oct 18, 2024",
    },
    {
      name: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134ZM11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134ZM6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208ZM11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208ZM6.66667 9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634ZM11.25 9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634Z"
            fill="#858585"
            stroke="#858585"
            strokeWidth="0.833333"
          />
        </svg>
      ),
      store: {
        name: "Do you offer refunds or exchanges 2?",
      },
      language: {
        parsent: "0%",
        des: "Draft",
        img: shopify,
      },
      date: "Oct 18, 2024",
    },
    {
      name: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134ZM11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134ZM6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208ZM11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208ZM6.66667 9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634ZM11.25 9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634Z"
            fill="#858585"
            stroke="#858585"
            strokeWidth="0.833333"
          />
        </svg>
      ),
      store: {
        name: "Shipping and delivery information",
      },
      language: {
        parsent: "0%",
        des: "Draft",
        img: shopify,
      },
      date: "Oct 18, 2024",
    },
  ];

  // State management
  const [items, setItems] = useState(initialTableData);
  const [filteredItems, setFilteredItems] = useState(initialTableData);
  const [searchQuery, setSearchQuery] = useState("");
  const [editArticle, setEditArticle] = useState(false);
  const [showCreateArticle, setShowCreateArticle] = useState(false);
  const [showEditArticle, setShowEditArticle] = useState(false);
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  // Article form states
  const [articleTitle, setArticleTitle] = useState("");
  const [articleCategory, setArticleCategory] = useState("");
  const [articleSlug, setArticleSlug] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [metaTitle, setMetaTitle] = useState("");
  const [useSameTitleAsMeta, setUseSameTitleAsMeta] = useState(false);

  // Category form states
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [categoryLanguage, setCategoryLanguage] = useState("en-US");

  // Editable textarea states for Article Settings modal
  const [excerptText, setExcerptText] = useState("");
  const [searchPreviewText, setSearchPreviewText] = useState("");

  // Filter articles based on search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) =>
        item.store.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchQuery, items]);

  // Auto-generate slug from title
  useEffect(() => {
    if (articleTitle && !showEditArticle) {
      const slug = articleTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setArticleSlug(slug);
    }
  }, [articleTitle, showEditArticle]);

  useEffect(() => {
    if (categoryTitle) {
      const slug = categoryTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setCategorySlug(slug);
    }
  }, [categoryTitle]);

  // Drag and drop handlers
  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (dragItem.current !== null && dragItem.current !== dropIndex) {
      const copyItems = [...items];
      [copyItems[dragItem.current], copyItems[dropIndex]] = [
        copyItems[dropIndex],
        copyItems[dragItem.current],
      ];
      setItems(copyItems);
    }
    dragItem.current = null;
  };

  // File upload handler
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("File uploaded:", file.name);
      alert(`File "${file.name}" uploaded successfully!`);
    }
  };

  // Copy URL/Slug handler
  const handleCopySlug = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("URL copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
          alert("Failed to copy URL");
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        alert("URL copied to clipboard!");
      } catch (err) {
        alert("Failed to copy URL");
      }
      document.body.removeChild(textArea);
    }
  };

  // Add after handleCopySlug function (around line 340)
  const handleCopyUrl = (url) => {
    handleCopySlug(url); // Reuse existing copy function
  };

  // Share handlers
  const handleShare = (platform) => {
    const articleUrl = `https://jarvey.jarveyai.help/en-US/${articleSlug}`;
    let shareUrl = "";

    switch (platform) {
      case "copy":
        handleCopySlug(articleUrl);
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          articleUrl
        )}`;
        window.open(shareUrl, "_blank");
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          articleUrl
        )}`;
        window.open(shareUrl, "_blank");
        break;
      default:
        break;
    }
  };

  // Duplicate article
  const handleDuplicateArticle = (articleIndex) => {
    const articleToDuplicate = items[articleIndex];
    const duplicatedArticle = {
      ...articleToDuplicate,
      store: {
        ...articleToDuplicate.store,
        name: `${articleToDuplicate.store.name} (Copy)`,
      },
    };
    const newItems = [...items];
    newItems.splice(articleIndex + 1, 0, duplicatedArticle);
    setItems(newItems);
  };

  // Create category handler
  const handleCreateCategory = () => {
    if (!categoryTitle.trim()) {
      alert("Please enter a category title");
      return;
    }

    console.log("Creating category:", {
      title: categoryTitle,
      slug: categorySlug,
      language: categoryLanguage,
    });

    alert("Category created successfully!");
    setCategoryTitle("");
    setCategorySlug("");
    setShowCreateCategory(false);
  };

  // Publish article handler with validation
  const handlePublishArticle = (isUpdate = false) => {
    const errors = [];

    if (!articleTitle.trim()) {
      errors.push("Title is required");
    }

    if (!articleCategory && !isUpdate) {
      errors.push("Category is required");
    }

    if (!articleContent.trim()) {
      errors.push("Article content is required");
    }

    if (errors.length > 0) {
      alert("Please fix the following errors:\n" + errors.join("\n"));
      return;
    }

    console.log(isUpdate ? "Updating article:" : "Publishing article:", {
      title: articleTitle,
      category: articleCategory,
      slug: articleSlug,
      content: articleContent,
      language: selectedLanguage,
      excerpt: excerptText,
      metaTitle: useSameTitleAsMeta ? articleTitle : metaTitle,
    });

    alert(
      isUpdate
        ? "Article updated successfully!"
        : "Article published successfully!"
    );

    // Reset form
    setArticleTitle("");
    setArticleCategory("");
    setArticleSlug("");
    setArticleContent("");
    setExcerptText("");
    setMetaTitle("");
    setShowCreateArticle(false);
    setShowEditArticle(false);
  };

  const icon = [
    <svg
      key="eye-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.72949 12.7463C2.02116 11.8263 1.66699 11.3655 1.66699 9.99967C1.66699 8.63301 2.02116 8.17384 2.72949 7.25301C4.14366 5.41634 6.51532 3.33301 10.0003 3.33301C13.4853 3.33301 15.857 5.41634 17.2712 7.25301C17.9795 8.17467 18.3337 8.63384 18.3337 9.99967C18.3337 11.3663 17.9795 11.8255 17.2712 12.7463C15.857 14.583 13.4853 16.6663 10.0003 16.6663C6.51532 16.6663 4.14366 14.583 2.72949 12.7463Z"
        stroke="#858585"
        strokeWidth="1.5"
      />
      <path
        d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z"
        stroke="#858585"
        strokeWidth="1.5"
      />
    </svg>,
  ];

  const Icons = [
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.33333 2H14V6.66667M14 9.82467V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H6M8.6 7.4L13.7 2.3"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      action: "share",
    },
    {
      icon: (
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99935 6.66667C3.99935 7.10869 3.82375 7.53262 3.51119 7.84518C3.19863 8.15774 2.77471 8.33333 2.33268 8.33333C1.89065 8.33333 1.46673 8.15774 1.15417 7.84518C0.84161 7.53262 0.666016 7.10869 0.666016 6.66667C0.666016 6.22464 0.84161 5.80072 1.15417 5.48816C1.46673 5.17559 1.89065 5 2.33268 5C2.77471 5 3.19863 5.17559 3.51119 5.48816C3.82375 5.80072 3.99935 6.22464 3.99935 6.66667Z"
            stroke="#858585"
            strokeWidth="1.2"
          />
          <path
            d="M7.54667 10.1999L4 7.85859M7.61333 3.55859L4.06667 5.89993"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M10.6654 11.3333C10.6654 11.7754 10.4898 12.1993 10.1772 12.5118C9.86465 12.8244 9.44073 13 8.9987 13C8.55667 13 8.13275 12.8244 7.82019 12.5118C7.50763 12.1993 7.33203 11.7754 7.33203 11.3333C7.33203 10.8913 7.50763 10.4674 7.82019 10.1548C8.13275 9.84226 8.55667 9.66667 8.9987 9.66667C9.44073 9.66667 9.86465 9.84226 10.1772 10.1548C10.4898 10.4674 10.6654 10.8913 10.6654 11.3333ZM10.6654 2.66667C10.6654 3.10869 10.4898 3.53262 10.1772 3.84518C9.86465 4.15774 9.44073 4.33333 8.9987 4.33333C8.55667 4.33333 8.13275 4.15774 7.82019 3.84518C7.50763 3.53262 7.33203 3.10869 7.33203 2.66667C7.33203 2.22464 7.50763 1.80072 7.82019 1.48816C8.13275 1.17559 8.55667 1 8.9987 1C9.44073 1 9.86465 1.17559 10.1772 1.48816C10.4898 1.80072 10.6654 2.22464 10.6654 2.66667Z"
            stroke="#858585"
            strokeWidth="1.2"
          />
        </svg>
      ),
      action: "view",
    },
    {
      icon: (
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.666016 13.0002H11.3327M1.77668 7.79156C1.49243 8.07645 1.33275 8.46244 1.33268 8.86489V11.0002H3.48135C3.88402 11.0002 4.27002 10.8402 4.55468 10.5549L10.888 4.21822C11.1722 3.93329 11.3317 3.5473 11.3317 3.14489C11.3317 2.74248 11.1722 2.35649 10.888 2.07156L10.2627 1.44489C10.1217 1.30379 9.9542 1.19187 9.76989 1.11554C9.58559 1.0392 9.38804 0.999938 9.18854 1C8.98905 1.00006 8.79153 1.03944 8.60727 1.1159C8.42301 1.19235 8.25562 1.30437 8.11468 1.44556L1.77668 7.79156Z"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      action: "edit",
    },
    {
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.666016 7.0013C0.666016 4.01597 0.666016 2.52264 1.59335 1.5953C2.52068 0.667969 4.01335 0.667969 6.99935 0.667969C9.98468 0.667969 11.478 0.667969 12.4053 1.5953C13.3327 2.52264 13.3327 4.0153 13.3327 7.0013C13.3327 9.98664 13.3327 11.48 12.4053 12.4073C11.478 13.3346 9.98535 13.3346 6.99935 13.3346C4.01402 13.3346 2.52068 13.3346 1.59335 12.4073C0.666016 11.48 0.666016 9.9873 0.666016 7.0013Z"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.69141 7.0207H8.34207M8.34207 7.0207C8.34207 7.4007 6.90541 8.6787 6.90541 8.6787M8.34207 7.0207C8.34207 6.63003 6.90541 5.37736 6.90541 5.37736M10.3587 4.33203V9.66536"
            stroke="#858585"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      action: "close",
    },
  ];

  const IconsLIst = [
    {
      icon: (
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.83874 2.15597C5.57782 0.830635 5.94707 0.167969 6.49949 0.167969C7.0519 0.167969 7.42115 0.830635 8.16024 2.15597L8.35157 2.49897C8.56157 2.8758 8.66657 3.06422 8.8299 3.18847C8.99324 3.31272 9.1974 3.3588 9.60574 3.45097L9.97674 3.53497C11.4117 3.85989 12.1287 4.02205 12.2996 4.57097C12.4699 5.1193 11.9811 5.69155 11.0028 6.83547L10.7497 7.13122C10.472 7.45614 10.3326 7.61889 10.2702 7.81955C10.2077 8.0208 10.2287 8.2378 10.2707 8.67122L10.3092 9.06614C10.4568 10.5927 10.5309 11.3557 10.0841 11.6946C9.63724 12.0336 8.96524 11.7244 7.6224 11.1061L7.27415 10.9462C6.89265 10.7701 6.7019 10.6826 6.49949 10.6826C6.29707 10.6826 6.10632 10.7701 5.72482 10.9462L5.37715 11.1061C4.03374 11.7244 3.36174 12.0336 2.91549 11.6952C2.46807 11.3557 2.54215 10.5927 2.68974 9.06614L2.72824 8.6718C2.77024 8.2378 2.79124 8.0208 2.72824 7.82014C2.6664 7.61889 2.52699 7.45613 2.24932 7.1318L1.99615 6.83547C1.0179 5.69214 0.529069 5.11989 0.699403 4.57097C0.869736 4.02205 1.58782 3.8593 3.02282 3.53497L3.39382 3.45097C3.80157 3.3588 4.00515 3.31272 4.16907 3.18847C4.33299 3.06422 4.4374 2.8758 4.6474 2.49897L4.83874 2.15597Z"
            fill="#858585"
          />
        </svg>
      ),
      value: "0%",
    },
    {
      icon: (
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.83268 12.2513H3.41602V4.66797H2.83268C2.52326 4.66797 2.22652 4.79089 2.00772 5.00968C1.78893 5.22847 1.66602 5.52522 1.66602 5.83464V11.0846C1.66602 11.3941 1.78893 11.6908 2.00772 11.9096C2.22652 12.1284 2.52326 12.2513 2.83268 12.2513ZM12.166 4.66797H8.08268L8.73718 2.7033C8.79558 2.52796 8.81149 2.34125 8.7836 2.15856C8.75571 1.97586 8.68481 1.80241 8.57675 1.65248C8.46869 1.50255 8.32656 1.38044 8.16206 1.29621C7.99757 1.21197 7.81541 1.16802 7.6306 1.16797H7.49935L4.58268 4.34014V12.2513H10.9993L13.2814 7.23697L13.3327 7.0013V5.83464C13.3327 5.52522 13.2098 5.22847 12.991 5.00968C12.7722 4.79089 12.4754 4.66797 12.166 4.66797Z"
            fill="#858585"
          />
        </svg>
      ),
      value: "34",
    },
    {
      icon: (
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1673 1.7487H11.584V9.33203H12.1673C12.4767 9.33203 12.7735 9.20911 12.9923 8.99032C13.2111 8.77153 13.334 8.47478 13.334 8.16536V2.91537C13.334 2.60595 13.2111 2.3092 12.9923 2.09041C12.7735 1.87161 12.4767 1.7487 12.1673 1.7487ZM2.83398 9.33203H6.91732L6.26282 11.2967C6.20442 11.472 6.18851 11.6587 6.2164 11.8414C6.24429 12.0241 6.31519 12.1976 6.42325 12.3475C6.53131 12.4974 6.67344 12.6196 6.83794 12.7038C7.00243 12.788 7.18459 12.832 7.3694 12.832H7.50065L10.4173 9.65986V1.7487H4.00065L1.71865 6.76303L1.66732 6.9987V8.16536C1.66732 8.47478 1.79023 8.77153 2.00903 8.99032C2.22782 9.20911 2.52456 9.33203 2.83398 9.33203Z"
            fill="#858585"
          />
        </svg>
      ),
      value: "34",
    },
  ];

  return (
    <>
      <div className="md:flex items-center justify-between">
        <div className="mb-[22px] !max-w-[396px] w-full">
          <Input
            className="mb-0"
            type="text"
            placeholder="Search..."
            leftIcon={search}
            inputClass="!h-[38px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <label
            htmlFor="input"
            className="btn !bg-black !p-2 !min-w-max cursor-pointer transition-all duration-300 hover:bg-gray-800"
          >
            <input
              type="file"
              id="input"
              className="hidden"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.txt"
            />
            <svg
              className="flex-none"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0003 15.8337V10.0003M10.0003 10.0003L12.0837 12.0837M10.0003 10.0003L7.91699 12.0837M6.66699 15.8337H5.83366C3.53247 15.8337 1.66699 13.9682 1.66699 11.667C1.66699 9.55637 3.23629 7.81229 5.27173 7.5379C5.9474 5.57631 7.80928 4.16699 10.0003 4.16699C12.7617 4.16699 15.0003 6.40557 15.0003 9.16699C16.8413 9.16699 18.3337 10.6594 18.3337 12.5003C18.3337 14.3413 16.8413 15.8337 15.0003 15.8337H13.3337"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
          <button
            onClick={() => setShowCreateCategory(true)}
            className="btn !text-primary !border-primary main-w-max hover:!text-white"
          >
            Create Category
          </button>
          <button
            onClick={() => setShowCreateArticle(true)}
            className="btn shadow !text-white !main-w-max flex items-center gap-2"
          >
            Create Articles
            <span className="inline-block">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99956 10.8785L13.7121 7.16602L14.7726 8.22652L9.99956 12.9995L5.22656 8.22652L6.28706 7.16602L9.99956 10.8785Z"
                  fill="#111111"
                  fillOpacity="0.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2.5 mb-5">
        <span>
          <svg
            className="flex-none"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99956 10.8785L13.7121 7.16602L14.7726 8.22652L9.99956 12.9995L5.22656 8.22652L6.28706 7.16602L9.99956 10.8785Z"
              fill="#111111"
              fillOpacity="0.5"
            />
          </svg>
        </span>
        <h3 className="text-base text-[#858585]">Uncategorised Articles </h3>
        <p className="text-primary text-base underline">{filteredItems.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {tableHead.map((item, index) => (
                <th
                  key={index}
                  className={`${index === 2 ? "!pl-[6%] !text-center" : ""} ${index === tableHead.length - 1 ? "!text-center" : ""
                    }`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={() => handleDrop(index)}
                key={index}
                className="cursor-move hover:bg-gray-50"
              >
                <td>
                  <span className="!text-black cursor-move">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66667 4.79134C6.66667 4.21604 7.13304 3.74967 7.70833 3.74967C8.28363 3.74967 8.75 4.21604 8.75 4.79134C8.75 5.36664 8.28363 5.83301 7.70833 5.83301C7.13304 5.83301 6.66667 5.36664 6.66667 4.79134ZM11.25 4.79134C11.25 4.21604 11.7164 3.74967 12.2917 3.74967C12.867 3.74967 13.3333 4.21604 13.3333 4.79134C13.3333 5.36664 12.867 5.83301 12.2917 5.83301C11.7164 5.83301 11.25 5.36664 11.25 4.79134ZM6.66667 15.208C6.66667 14.6327 7.13304 14.1663 7.70833 14.1663C8.28363 14.1663 8.75 14.6327 8.75 15.208C8.75 15.7833 8.28363 16.2497 7.70833 16.2497C7.13304 16.2497 6.66667 15.7833 6.66667 15.208ZM11.25 15.208C11.25 14.6327 11.7164 14.1663 12.2917 14.1663C12.867 14.1663 13.3333 14.6327 13.3333 15.208C13.3333 15.7833 12.867 16.2497 12.2917 16.2497C11.7164 16.2497 11.25 15.7833 11.25 15.208ZM6.66667 9.91634C6.66667 9.34104 7.13304 8.87467 7.70833 8.87467C8.28363 8.87467 8.75 9.34104 8.75 9.91634V9.99967C8.75 10.575 8.28363 11.0413 7.70833 11.0413C7.13304 11.0413 6.66667 10.575 6.66667 9.99967V9.91634ZM11.25 9.91634C11.25 9.34104 11.7164 8.87467 12.2917 8.87467C12.867 8.87467 13.3333 9.34104 13.3333 9.91634V9.99967C13.3333 10.575 12.867 11.0413 12.2917 11.0413C11.7164 11.0413 11.25 10.575 11.25 9.99967V9.91634Z"
                        fill="#858585"
                        stroke="#858585"
                        strokeWidth="0.833333"
                      />
                    </svg>
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="flex-none h-4"></div>
                    <span
                      className="hover:text-primary cursor-pointer"
                      onClick={() => setShowEditArticle(true)}
                    >
                      {item.store.name}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-end gap-3 md:gap-5 lg:gap-6 xl:gap-9">
                    <p>{item.language.parsent}</p>
                    <p>{item.language.des}</p>
                    <img
                      className="h-full rounded-full"
                      src={item.language.img}
                      alt=""
                    />
                  </div>
                </td>
                <td>{item.date}</td>
                <td>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      className="text-gray hover:text-primary p-2 -m-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditArticle(true);
                      }}
                      title="Article Settings"
                    >
                      {setting}
                    </button>
                    <button
                      className="text-gray hover:text-primary p-2 -m-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDuplicateArticle(index);
                      }}
                      title="Duplicate Article"
                    >
                      {copyIcon}
                    </button>
                    <button
                      className="text-gray hover:text-primary p-2 -m-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowShareOptions(true);
                      }}
                      title="Share Article"
                    >
                      {share}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editArticle && (
        <Modal
          closeIconHide={false}
          innerClass="max-w-[698px] !m-0 !ml-auto !mr-4 lg:!mr-6"
        >
          <div className="md:flex items-center justify-between mb-4 lg:mb-5">
            <h5 className="text-[#0A0D14] mb-3 md:mb-0 text-xl lg:text-2xl !leading-[1.5]">
              Article Settings
            </h5>
            <div className="flex items-center gap-3 lg:gap-4 ">
              <div className="flex items-center gap-3 lg:gap-4">
                <button className="btn bg-[#1764481A]/10 rounded-lg text-[#176448] !text-xs !font-semibold !leading-[1.5] min-w-max h-9 !px-2.5">
                  Published
                </button>
                <Dropdown
                  className="mb-0"
                  btnClass="!h-9 !px-2.5"
                  dropDownClass="w-max !left-auto right-0"
                  items={langList}
                />
              </div>
              <div className="flex items-center gap-2 lg:gap-3">
                {Icons.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (idx === 0) {
                        // Share icon
                        setShowShareOptions(true);
                      } else if (idx === 1) {
                        // View icon
                        setShowViewModal(true);
                      } else if (idx === 2) {
                        // Edit icon
                        setShowEditArticle(true);
                      } else if (idx === 3) {
                        // Close icon
                        setEditArticle(false);
                      }
                    }}
                    className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-md transition-colors"
                    title={
                      idx === 0
                        ? "Share article"
                        : idx === 1
                          ? "View article"
                          : idx === 2
                            ? "Edit article"
                            : "Close"
                    }
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Input
            label="Title"
            className="mb-3 lg:mb-4"
            required
            placeholder="Do you offer refunds or exchanges"
          />
          <Input
            label="Category"
            className="mb-3 lg:mb-4"
            placeholder="Do you offer refunds or exchanges"
          />
          <div className="mb-3 lg:mb-4">
            <div className="flex items-center justify-between mb-1">
              <h6 className="text-[#0A0D14] text-sm font-semibold !leading-[1.42]">
                Slug <span className="text-[#FE4333]">*</span>
              </h6>
              <button className="text-[#7856FF] flex items-center gap-2 text-sm font-semibold !leading-[1.42]">
                {copyIcon2} Copy
              </button>
            </div>
            <div className="md:flex items-center justify-between rounded-[10px] border border-[#E2E4E9] py-[14px] px-3 mb-1">
              <p className="text-xs font-medium !leading-[1.66] text-[#7856FF] mb-1 md:flex items-center gap-3">
                https://jarvey.jarveyai.help/en-US/{" "}
                <span className="text-[#888888] border-l border-l-[#E2E4E9] md:pl-3">
                  do-you-offer-refunds-or-exchanges
                </span>
              </p>
              <p className="text-[#888888] text-xs font-medium !leading-[1.66]">
                #E2E4E9
              </p>
            </div>
            <p className="text-[#11111180]/50 text-sm !leading-[1.42]">
              A short summary displayed below the title of your article.
            </p>
          </div>
          <div className="mb-3 lg:mb-4">
            <label className="text-[#0A0D14] text-sm font-semibold !leading-[1.42] flex items-center gap-2 mb-1">
              Excerpt
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_12219_98731)">
                    <path
                      d="M8.00065 14.6693C11.6825 14.6693 14.6673 11.6845 14.6673 8.0026C14.6673 4.32071 11.6825 1.33594 8.00065 1.33594C4.31875 1.33594 1.33398 4.32071 1.33398 8.0026C1.33398 11.6845 4.31875 14.6693 8.00065 14.6693Z"
                      stroke="#858585"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10.6693V8.0026M8 5.33594H8.00667"
                      stroke="#858585"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12219_98731">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </label>
            <textarea
              className="border border-[#E2E4E9] rounded-[10px] py-[10px] px-3 w-full resize-none"
              rows={3}
              value={excerptText}
              onChange={(e) => setExcerptText(e.target.value)}
            />
            <p className="text-[#858585] text-xs font-medium !leading-[1.66]">
              ex. when order status is delivered{" "}
            </p>
          </div>
          <Input
            label="Meta Title"
            required
            className="mb-3 lg:mb-4"
            placeholder="Do you offer refunds or exchanges"
          />
          <div className="flex items-center gap-2 lg:gap-[10px] mb-3 lg:mb-4">
            <Checkbox id="check" />
            <label
              htmlFor="check"
              className="text-[#0A0D14] cursor-pointer text-sm font-semibold !leading-[1.42]"
            >
              Use the same as Title
            </label>
          </div>
          <div className="mb-3 lg:mb-4">
            <label className="text-[#0A0D14] text-sm font-semibold !leading-[1.42] mb-1">
              Search Engine Preview
            </label>
            <textarea
              className="border border-[#E2E4E9] rounded-[10px] py-[10px] px-3 w-full resize-none"
              rows={4}
              value={searchPreviewText}
              onChange={(e) => setSearchPreviewText(e.target.value)}
            />
            <p className="text-[#858585] text-xs font-medium !leading-[1.66]">
              This is a preview of how your article is going to look like in
              search engines (e.g. Google, Duckduckgo, Bing...){" "}
            </p>
          </div>
          <p className="text-[#858585] text-xs font-medium !leading-[1.66] mb-3 lg:mb-4">
            Article id: 1224851
          </p>
          <div className="md:flex items-center justify-between">
            <div className="flex items-center gap-10 lg:gap-14 xl:gap-[60px] mb-3 md:mb-0">
              <button className="text-[#FE4333] text-sm font-medium !leading-[1.42] flex items-center gap-2">
                {deleteIcon} Delete Article
              </button>
              <div className="flex items-center gap-4 lg:gap-5">
                {IconsLIst.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[#0A0D14] text-xs font-medium !leading-[1.66] flex items-center gap-[3px]"
                  >
                    {item.icon} {item.value}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={() => setEditArticle(false)}
                className="btn !border-[#7856FF] !text-[#7856FF] !py-[10px] !px-3 hover:!text-white"
              >
                Discard Changes
              </button>
              <button
                onClick={() => setEditArticle(false)}
                className="btn !bg-[#7856FF] !text-white !py-[10px] !px-[14px] !min-w-[94px]"
              >
                Published
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showCreateArticle && (
        <Modal closeIconHide={false} innerClass="max-w-[860px]">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-[#0A0D14] text-xl lg:text-2xl font-semibold">
              Create Article
            </h5>
            <div className="flex items-center gap-3">
              <Link
                to="#"
                className="flex items-center flex-wrap gap-2 font-inter font-normal text-sm text-[#111111]/70 h-9 px-3 bg-white border border-stroke rounded-[10px]"
              >
                {icon} Public
              </Link>
              <Dropdown
                className="mb-0"
                btnClass="!h-9"
                dropDownClass="w-max !left-auto right-0"
                items={langList}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 relative z-0">
            <Dropdown
              className="mb-0"
              label=""
              placeholder="Category"
              items={contact}
              dropDownClass="z-20"
            />
            <Input label="Title" required placeholder="Article title" />
          </div>
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1">
              <h6 className="text-[#0A0D14] text-sm font-semibold !leading-[1.42]">
                Slug
              </h6>
              <button className="text-[#7856FF] flex items-center gap-2 text-sm font-semibold !leading-[1.42]">
                {copyIcon2} Copy
              </button>
            </div>
            <div className="rounded-[10px] border border-[#E2E4E9] py-[10px] px-3 text-xs text-[#888]">
              https://jarvey.jarveyai.help/en-US/articles/
              <span className="text-[#888]">category-slug</span>
            </div>
          </div>
          <div className="mb-5">
            <TextEditor2 />
          </div>
          <TextEditor className="mb-5" />
          <div className="flex items-center justify-end gap-3">
            <button className="btn" onClick={() => setShowCreateArticle(false)}>
              Discard changes
            </button>
            <button
              className="btn bg-primary !text-white"
              onClick={() => setShowCreateArticle(false)}
            >
              Publish Article
            </button>
          </div>
        </Modal>
      )}

      {showEditArticle && (
        <Modal closeIconHide={false} innerClass="max-w-[860px]">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-[#0A0D14] text-xl lg:text-2xl font-semibold">
              Edit Article
            </h5>
            <div className="flex items-center gap-3">
              <Link
                to="#"
                className="flex items-center flex-wrap gap-2 font-inter font-normal text-sm text-[#111111]/70 h-9 px-3 bg-white border border-stroke rounded-[10px]"
              >
                {icon} Public
              </Link>
              <Dropdown
                className="mb-0"
                btnClass="!h-9"
                dropDownClass="w-max !left-auto right-0"
                items={langList}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 relative z-0">
            <Dropdown
              className="mb-0"
              label=""
              placeholder="Category"
              items={contact}
              dropDownClass="z-20"
            />
            <Input label="Title" required placeholder="Article title" />
          </div>
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1">
              <h6 className="text-[#0A0D14] text-sm font-semibold !leading-[1.42]">
                Slug
              </h6>
              <button className="text-[#7856FF] flex items-center gap-2 text-sm font-semibold !leading-[1.42]">
                {copyIcon2} Copy
              </button>
            </div>
            <div className="rounded-[10px] border border-[#E2E4E9] py-[10px] px-3 text-xs text-[#888]">
              https://jarvey.jarveyai.help/en-US/articles/
              <span className="text-[#888]">category-slug</span>
            </div>
          </div>
          <div className="mb-5">
            <TextEditor2 />
          </div>
          <TextEditor className="mb-5" />
          <div className="flex items-center justify-end gap-3">
            <button className="btn" onClick={() => setShowEditArticle(false)}>
              Discard changes
            </button>
            <button
              className="btn bg-primary !text-white"
              onClick={() => setShowEditArticle(false)}
            >
              Update Article
            </button>
          </div>
        </Modal>
      )}

      {showShareOptions && (
        <Modal closeIconHide={false} innerClass="max-w-[400px]">
          <div className="mb-4">
            <h5 className="text-[#0A0D14] text-xl lg:text-2xl font-semibold mb-4">
              Share Article
            </h5>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 border border-[#E2E4E9] rounded-[10px] hover:bg-gray-50 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 8.33333H10.8333C10.3731 8.33333 10 7.96024 10 7.5V4.16667C10 3.70643 10.3731 3.33333 10.8333 3.33333H13.3333L16.6667 0V6.66667H15.8333C15.3731 6.66667 15 7.03976 15 7.5V8.33333Z"
                    fill="#858585"
                  />
                  <path
                    d="M13.3333 11.6667H9.16667C8.70643 11.6667 8.33333 12.0398 8.33333 12.5V15.8333C8.33333 16.2936 7.96024 16.6667 7.5 16.6667H4.16667L0.833333 20V13.3333H1.66667C2.1269 13.3333 2.5 12.9602 2.5 12.5V11.6667H5C5.46024 11.6667 5.83333 11.2936 5.83333 10.8333V9.16667C5.83333 8.70643 6.20643 8.33333 6.66667 8.33333H8.33333L13.3333 11.6667Z"
                    fill="#858585"
                  />
                </svg>
                <span className="text-sm font-medium">Copy Link</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 border border-[#E2E4E9] rounded-[10px] hover:bg-gray-50 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM13.5 10.5H11V13.5C11 13.776 10.776 14 10.5 14C10.224 14 10 13.776 10 13.5V10.5H7.5C7.224 10.5 7 10.276 7 10C7 9.724 7.224 9.5 7.5 9.5H10V6.5C10 6.224 10.224 6 10.5 6C10.776 6 11 6.224 11 6.5V9.5H13.5C13.776 9.5 14 9.724 14 10C14 10.276 13.776 10.5 13.5 10.5Z"
                    fill="#858585"
                  />
                </svg>
                <span className="text-sm font-medium">Share on Facebook</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 border border-[#E2E4E9] rounded-[10px] hover:bg-gray-50 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.924C19.264 4.25 18.473 4.47 17.643 4.573C18.491 4.061 19.141 3.258 19.467 2.295C18.684 2.76 17.821 3.088 16.902 3.261C16.157 2.461 15.127 1.963 13.991 1.963C11.93 1.963 10.253 3.64 10.253 5.701C10.253 5.989 10.285 6.269 10.349 6.539C6.704 6.355 3.407 4.612 1.336 1.793C1.022 2.331 0.846 2.948 0.846 3.601C0.846 5.819 1.974 7.674 3.681 8.779C2.991 8.757 2.335 8.567 1.732 8.235V8.287C1.732 10.109 3.029 11.619 4.735 11.957C4.431 12.04 4.109 12.085 3.778 12.085C3.535 12.085 3.299 12.061 3.071 12.016C3.545 13.503 4.906 14.537 6.516 14.566C5.221 15.583 3.584 16.188 1.825 16.188C1.515 16.188 1.209 16.17 0.909 16.135C2.537 17.181 4.474 17.806 6.517 17.806C13.984 17.806 18.087 12.129 18.087 6.129L18.081 5.688C18.862 5.126 19.543 4.407 20 3.924Z"
                    fill="#858585"
                  />
                </svg>
                <span className="text-sm font-medium">Share on Twitter</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button className="btn" onClick={() => setShowShareOptions(false)}>
              Cancel
            </button>
          </div>
        </Modal>
      )}

      {showViewModal && (
        <Modal closeIconHide={false} innerClass="max-w-[800px]">
          <div className="mb-4">
            <h5 className="text-[#0A0D14] text-xl lg:text-2xl font-semibold mb-4">
              View Article
            </h5>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#0A0D14] mb-2">
                  Do you offer refunds or exchanges?
                </h3>
                <div className="text-sm text-[#858585] mb-4">
                  <p>
                    Yes, we offer refunds and exchanges within 30 days of
                    purchase. To be eligible for a refund or exchange, items
                    must be returned in their original condition, with all tags
                    and packaging intact.
                  </p>
                  <p>
                    Please note that certain items may not be eligible for
                    return, such as personalized or custom-made products.
                  </p>
                </div>
              </div>
              <div className="border-t border-[#E2E4E9] pt-4">
                <div className="flex items-center gap-4 text-xs text-[#858585]">
                  <span>Published: Oct 18, 2024</span>
                  <span>Status: Published</span>
                  <span>Language: English (US)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button className="btn" onClick={() => setShowViewModal(false)}>
              Close
            </button>
          </div>
        </Modal>
      )}

      {showCreateCategory && (
        <Modal closeIconHide={false} innerClass="max-w-[700px]">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-[#0A0D14] text-xl lg:text-2xl font-semibold">
              Create Category
            </h5>
            <div className="flex items-center gap-3">
              <Link
                to="#"
                className="flex items-center flex-wrap gap-2 font-inter font-normal text-sm text-[#111111]/70 h-9 px-3 bg-white border border-stroke rounded-[10px]"
              >
                {icon} Public
              </Link>
              <Dropdown
                className="mb-0"
                btnClass="!h-9"
                dropDownClass="w-max !left-auto right-0"
                items={langList}
              />
            </div>
          </div>
          <Input label="Title" required placeholder="Category title" />
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <h6 className="text-[#0A0D14] text-sm font-semibold !leading-[1.42]">
                Slug <span className="text-[#FE4333]">*</span>
              </h6>
              <button className="text-[#7856FF] flex items-center gap-2 text-sm font-semibold !leading-[1.42]">
                {copyIcon2} Copy URL
              </button>
            </div>
            <div className="rounded-[10px] border border-[#E2E4E9] py-[14px] px-3">
              <p className="text-xs font-medium !leading-[1.66] text-[#7856FF] mb-1 md:flex items-center gap-3">
                https://jarvey.jarveyai.help/en-US/articles/{" "}
                <span className="text-[#888888] border-l border-l-[#E2E4E9] md:pl-3">
                  category-slug
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button
              className="btn"
              onClick={() => setShowCreateCategory(false)}
            >
              Cancel
            </button>
            <button
              className="btn bg-primary !text-white"
              onClick={() => setShowCreateCategory(false)}
            >
              Create Category
            </button>
          </div>
        </Modal>
      )}

    </>
  );
}
