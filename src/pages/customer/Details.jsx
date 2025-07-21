import React, { useState } from "react";
import MainInner from "../../components/MainInner";
import Dropdown from "../../components/Dropdown";
import { c_16 } from "../../utilities/Classes";
import { search } from "../../utilities/Classes";
import Input from "../../components/Input";
import TableFilter from "../../components/TableFilter";

import addIcon1 from "../../assets/img/tickets/add/1.png";
import addIcon2 from "../../assets/img/tickets/add/2.png";
import addIcon3 from "../../assets/img/tickets/add/3.png";
import addIcon4 from "../../assets/img/tickets/add/4.png";
import addIcon5 from "../../assets/img/tickets/add/5.png";
import img from "../../assets/img/logo.svg";
import Top from "../../layouts/Top";

export default function Details() {
  const card = [
    {
      title: "Extend vour Goraiss trial before it ends",
      opne: "Open",
      date: "05/10/25",
      des: "Al Intent:",
      text: "Other",
      button: [
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
                d="M7.0013 5.83464C8.28997 5.83464 9.33464 4.78997 9.33464 3.5013C9.33464 2.21264 8.28997 1.16797 7.0013 1.16797C5.71264 1.16797 4.66797 2.21264 4.66797 3.5013C4.66797 4.78997 5.71264 5.83464 7.0013 5.83464Z"
                stroke="#FE4333"
                strokeWidth="0.8"
              />
              <path
                d="M11.6673 10.2109C11.6673 11.6605 11.6673 12.8359 7.00065 12.8359C2.33398 12.8359 2.33398 11.6605 2.33398 10.2109C2.33398 8.76135 4.42348 7.58594 7.00065 7.58594C9.57782 7.58594 11.6673 8.76135 11.6673 10.2109Z"
                stroke="#FE4333"
                strokeWidth="0.8"
              />
            </svg>
          ),
          text: "Unseegned",
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
                d="M4.48438 6.01474H3.9375C3.85048 6.01474 3.76702 5.98017 3.70548 5.91864C3.64395 5.8571 3.60938 5.77364 3.60938 5.68662C3.60938 5.59959 3.64395 5.51613 3.70548 5.4546C3.76702 5.39306 3.85048 5.35849 3.9375 5.35849H5.6875C5.77452 5.35849 5.85798 5.39306 5.91952 5.4546C5.98105 5.51613 6.01562 5.59959 6.01562 5.68662C6.01562 5.77364 5.98105 5.8571 5.91952 5.91864C5.85798 5.98017 5.77452 6.01474 5.6875 6.01474H5.14062V8.31162C5.14062 8.39864 5.10605 8.4821 5.04452 8.54364C4.98298 8.60517 4.89952 8.63974 4.8125 8.63974C4.72548 8.63974 4.64202 8.60517 4.58048 8.54364C4.51895 8.4821 4.48438 8.39864 4.48438 8.31162V6.01474ZM12.5781 5.07084V8.31162C12.5782 8.84414 12.3741 9.35642 12.0079 9.743C11.6416 10.1296 11.1411 10.3611 10.6094 10.3897C10.366 11.0341 9.93207 11.5891 9.36544 11.9808C8.79881 12.3724 8.12632 12.5822 7.4375 12.5822C6.74868 12.5822 6.07619 12.3724 5.50956 11.9808C4.94293 11.5891 4.50903 11.0341 4.26562 10.3897H2.1875C1.98444 10.3897 1.7897 10.3091 1.64612 10.1655C1.50254 10.0219 1.42188 9.82717 1.42188 9.62412V4.37412C1.42188 4.17106 1.50254 3.97632 1.64612 3.83274C1.7897 3.68916 1.98444 3.60849 2.1875 3.60849H5.43266C5.30002 3.11764 5.35195 2.5952 5.57859 2.14006C5.80524 1.68492 6.19089 1.32866 6.66253 1.13873C7.13417 0.948788 7.65908 0.938352 8.1379 1.10939C8.61672 1.28043 9.01622 1.62108 9.26078 2.06685C9.58908 1.88263 9.97075 1.81692 10.3418 1.88074C10.7128 1.94456 11.0505 2.13403 11.2984 2.41736C11.5463 2.70069 11.6892 3.06065 11.7031 3.43684C11.7171 3.81304 11.6012 4.18259 11.375 4.48349H11.9919C12.1474 4.48393 12.2964 4.54598 12.4063 4.65607C12.5162 4.76615 12.578 4.9153 12.5781 5.07084ZM9.48391 2.70341C9.505 2.82165 9.51562 2.94152 9.51562 3.06162C9.51573 3.5898 9.31472 4.0982 8.95344 4.48349H10.0625C10.2179 4.48364 10.3712 4.44698 10.5097 4.37651C10.6483 4.30604 10.7682 4.20376 10.8596 4.07805C10.951 3.95234 11.0113 3.80677 11.0357 3.65326C11.06 3.49975 11.0476 3.34265 10.9996 3.19483C10.9515 3.04701 10.8692 2.91267 10.7592 2.8028C10.6493 2.69294 10.5149 2.61067 10.367 2.56273C10.2192 2.51479 10.0621 2.50255 9.90857 2.527C9.75507 2.55145 9.60955 2.61191 9.48391 2.70341ZM6.125 3.60849H7.4375C7.62145 3.60871 7.79918 3.67515 7.93816 3.79565C8.07715 3.91616 8.1681 4.08268 8.19438 4.26474C8.4239 4.12037 8.60736 3.91337 8.72311 3.66817C8.83887 3.42296 8.8821 3.14977 8.8477 2.8808C8.81331 2.61184 8.70272 2.35832 8.52898 2.15013C8.35524 1.94195 8.1256 1.78778 7.86713 1.70582C7.60866 1.62385 7.33214 1.6175 7.07018 1.68751C6.80822 1.75752 6.57174 1.90098 6.38863 2.10097C6.20551 2.30096 6.0834 2.54914 6.03669 2.81624C5.98998 3.08334 6.02062 3.35823 6.125 3.60849ZM2.1875 9.73349H7.4375C7.46651 9.73349 7.49433 9.72197 7.51484 9.70146C7.53535 9.68095 7.54688 9.65313 7.54688 9.62412V4.37412C7.54688 4.34511 7.53535 4.31729 7.51484 4.29678C7.49433 4.27627 7.46651 4.26474 7.4375 4.26474H2.1875C2.15849 4.26474 2.13067 4.27627 2.11016 4.29678C2.08965 4.31729 2.07812 4.34511 2.07812 4.37412V9.62412C2.07812 9.65313 2.08965 9.68095 2.11016 9.70146C2.13067 9.72197 2.15849 9.73349 2.1875 9.73349ZM10.1719 9.18662V5.24912C10.1719 5.22011 10.1604 5.19229 10.1398 5.17178C10.1193 5.15127 10.0915 5.13974 10.0625 5.13974H8.20312V9.62412C8.20312 9.82717 8.12246 10.0219 7.97888 10.1655C7.8353 10.3091 7.64056 10.3897 7.4375 10.3897H4.98203C5.25389 10.9446 5.70564 11.391 6.26367 11.6562C6.8217 11.9215 7.45312 11.9899 8.05502 11.8504C8.65691 11.7108 9.19381 11.3716 9.57822 10.8878C9.96263 10.4041 10.1719 9.80448 10.1719 9.18662ZM11.9219 5.13974H10.8194C10.8247 5.17596 10.8277 5.2125 10.8281 5.24912V9.18662C10.828 9.35981 10.8149 9.53275 10.7887 9.70396C11.1089 9.63756 11.3964 9.46283 11.6028 9.20922C11.8092 8.9556 11.9219 8.6386 11.9219 8.31162V5.13974Z"
                fill="#FE4333"
              />
            </svg>
          ),
          text: "No team assigrad",
        },
        {
          text: "ID: 4399045",
        },
        {
          text: "1 message",
        },
      ],
    },
    {
      title: "Extend vour Goraiss trial before it ends",
      opne: "Open",
      date: "05/10/25",
      des: "Al Intent:",
      text: "Other",
      button: [
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
                d="M7.0013 5.83464C8.28997 5.83464 9.33464 4.78997 9.33464 3.5013C9.33464 2.21264 8.28997 1.16797 7.0013 1.16797C5.71264 1.16797 4.66797 2.21264 4.66797 3.5013C4.66797 4.78997 5.71264 5.83464 7.0013 5.83464Z"
                stroke="#FE4333"
                strokeWidth="0.8"
              />
              <path
                d="M11.6673 10.2109C11.6673 11.6605 11.6673 12.8359 7.00065 12.8359C2.33398 12.8359 2.33398 11.6605 2.33398 10.2109C2.33398 8.76135 4.42348 7.58594 7.00065 7.58594C9.57782 7.58594 11.6673 8.76135 11.6673 10.2109Z"
                stroke="#FE4333"
                strokeWidth="0.8"
              />
            </svg>
          ),
          text: "Unseegned",
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
                d="M4.48438 6.01474H3.9375C3.85048 6.01474 3.76702 5.98017 3.70548 5.91864C3.64395 5.8571 3.60938 5.77364 3.60938 5.68662C3.60938 5.59959 3.64395 5.51613 3.70548 5.4546C3.76702 5.39306 3.85048 5.35849 3.9375 5.35849H5.6875C5.77452 5.35849 5.85798 5.39306 5.91952 5.4546C5.98105 5.51613 6.01562 5.59959 6.01562 5.68662C6.01562 5.77364 5.98105 5.8571 5.91952 5.91864C5.85798 5.98017 5.77452 6.01474 5.6875 6.01474H5.14062V8.31162C5.14062 8.39864 5.10605 8.4821 5.04452 8.54364C4.98298 8.60517 4.89952 8.63974 4.8125 8.63974C4.72548 8.63974 4.64202 8.60517 4.58048 8.54364C4.51895 8.4821 4.48438 8.39864 4.48438 8.31162V6.01474ZM12.5781 5.07084V8.31162C12.5782 8.84414 12.3741 9.35642 12.0079 9.743C11.6416 10.1296 11.1411 10.3611 10.6094 10.3897C10.366 11.0341 9.93207 11.5891 9.36544 11.9808C8.79881 12.3724 8.12632 12.5822 7.4375 12.5822C6.74868 12.5822 6.07619 12.3724 5.50956 11.9808C4.94293 11.5891 4.50903 11.0341 4.26562 10.3897H2.1875C1.98444 10.3897 1.7897 10.3091 1.64612 10.1655C1.50254 10.0219 1.42188 9.82717 1.42188 9.62412V4.37412C1.42188 4.17106 1.50254 3.97632 1.64612 3.83274C1.7897 3.68916 1.98444 3.60849 2.1875 3.60849H5.43266C5.30002 3.11764 5.35195 2.5952 5.57859 2.14006C5.80524 1.68492 6.19089 1.32866 6.66253 1.13873C7.13417 0.948788 7.65908 0.938352 8.1379 1.10939C8.61672 1.28043 9.01622 1.62108 9.26078 2.06685C9.58908 1.88263 9.97075 1.81692 10.3418 1.88074C10.7128 1.94456 11.0505 2.13403 11.2984 2.41736C11.5463 2.70069 11.6892 3.06065 11.7031 3.43684C11.7171 3.81304 11.6012 4.18259 11.375 4.48349H11.9919C12.1474 4.48393 12.2964 4.54598 12.4063 4.65607C12.5162 4.76615 12.578 4.9153 12.5781 5.07084ZM9.48391 2.70341C9.505 2.82165 9.51562 2.94152 9.51562 3.06162C9.51573 3.5898 9.31472 4.0982 8.95344 4.48349H10.0625C10.2179 4.48364 10.3712 4.44698 10.5097 4.37651C10.6483 4.30604 10.7682 4.20376 10.8596 4.07805C10.951 3.95234 11.0113 3.80677 11.0357 3.65326C11.06 3.49975 11.0476 3.34265 10.9996 3.19483C10.9515 3.04701 10.8692 2.91267 10.7592 2.8028C10.6493 2.69294 10.5149 2.61067 10.367 2.56273C10.2192 2.51479 10.0621 2.50255 9.90857 2.527C9.75507 2.55145 9.60955 2.61191 9.48391 2.70341ZM6.125 3.60849H7.4375C7.62145 3.60871 7.79918 3.67515 7.93816 3.79565C8.07715 3.91616 8.1681 4.08268 8.19438 4.26474C8.4239 4.12037 8.60736 3.91337 8.72311 3.66817C8.83887 3.42296 8.8821 3.14977 8.8477 2.8808C8.81331 2.61184 8.70272 2.35832 8.52898 2.15013C8.35524 1.94195 8.1256 1.78778 7.86713 1.70582C7.60866 1.62385 7.33214 1.6175 7.07018 1.68751C6.80822 1.75752 6.57174 1.90098 6.38863 2.10097C6.20551 2.30096 6.0834 2.54914 6.03669 2.81624C5.98998 3.08334 6.02062 3.35823 6.125 3.60849ZM2.1875 9.73349H7.4375C7.46651 9.73349 7.49433 9.72197 7.51484 9.70146C7.53535 9.68095 7.54688 9.65313 7.54688 9.62412V4.37412C7.54688 4.34511 7.53535 4.31729 7.51484 4.29678C7.49433 4.27627 7.46651 4.26474 7.4375 4.26474H2.1875C2.15849 4.26474 2.13067 4.27627 2.11016 4.29678C2.08965 4.31729 2.07812 4.34511 2.07812 4.37412V9.62412C2.07812 9.65313 2.08965 9.68095 2.11016 9.70146C2.13067 9.72197 2.15849 9.73349 2.1875 9.73349ZM10.1719 9.18662V5.24912C10.1719 5.22011 10.1604 5.19229 10.1398 5.17178C10.1193 5.15127 10.0915 5.13974 10.0625 5.13974H8.20312V9.62412C8.20312 9.82717 8.12246 10.0219 7.97888 10.1655C7.8353 10.3091 7.64056 10.3897 7.4375 10.3897H4.98203C5.25389 10.9446 5.70564 11.391 6.26367 11.6562C6.8217 11.9215 7.45312 11.9899 8.05502 11.8504C8.65691 11.7108 9.19381 11.3716 9.57822 10.8878C9.96263 10.4041 10.1719 9.80448 10.1719 9.18662ZM11.9219 5.13974H10.8194C10.8247 5.17596 10.8277 5.2125 10.8281 5.24912V9.18662C10.828 9.35981 10.8149 9.53275 10.7887 9.70396C11.1089 9.63756 11.3964 9.46283 11.6028 9.20922C11.8092 8.9556 11.9219 8.6386 11.9219 8.31162V5.13974Z"
                fill="#FE4333"
              />
            </svg>
          ),
          text: "No team assigrad",
        },
        {
          text: "ID: 4399045",
        },
        {
          text: "1 message",
        },
      ],
    },
    {
      title: "Extend vour Goraiss trial before it ends",
      opne: "Open",
      date: "05/10/25",
      des: "Al Intent:",
      text: "Other",
      button: [
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
                d="M7.0013 5.83464C8.28997 5.83464 9.33464 4.78997 9.33464 3.5013C9.33464 2.21264 8.28997 1.16797 7.0013 1.16797C5.71264 1.16797 4.66797 2.21264 4.66797 3.5013C4.66797 4.78997 5.71264 5.83464 7.0013 5.83464Z"
                stroke="#FE4333"
                strokeWidth="0.8"
              />
              <path
                d="M11.6673 10.2109C11.6673 11.6605 11.6673 12.8359 7.00065 12.8359C2.33398 12.8359 2.33398 11.6605 2.33398 10.2109C2.33398 8.76135 4.42348 7.58594 7.00065 7.58594C9.57782 7.58594 11.6673 8.76135 11.6673 10.2109Z"
                stroke="#FE4333"
                strokeWidth="0.8"
              />
            </svg>
          ),
          text: "Unseegned",
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
                d="M4.48438 6.01474H3.9375C3.85048 6.01474 3.76702 5.98017 3.70548 5.91864C3.64395 5.8571 3.60938 5.77364 3.60938 5.68662C3.60938 5.59959 3.64395 5.51613 3.70548 5.4546C3.76702 5.39306 3.85048 5.35849 3.9375 5.35849H5.6875C5.77452 5.35849 5.85798 5.39306 5.91952 5.4546C5.98105 5.51613 6.01562 5.59959 6.01562 5.68662C6.01562 5.77364 5.98105 5.8571 5.91952 5.91864C5.85798 5.98017 5.77452 6.01474 5.6875 6.01474H5.14062V8.31162C5.14062 8.39864 5.10605 8.4821 5.04452 8.54364C4.98298 8.60517 4.89952 8.63974 4.8125 8.63974C4.72548 8.63974 4.64202 8.60517 4.58048 8.54364C4.51895 8.4821 4.48438 8.39864 4.48438 8.31162V6.01474ZM12.5781 5.07084V8.31162C12.5782 8.84414 12.3741 9.35642 12.0079 9.743C11.6416 10.1296 11.1411 10.3611 10.6094 10.3897C10.366 11.0341 9.93207 11.5891 9.36544 11.9808C8.79881 12.3724 8.12632 12.5822 7.4375 12.5822C6.74868 12.5822 6.07619 12.3724 5.50956 11.9808C4.94293 11.5891 4.50903 11.0341 4.26562 10.3897H2.1875C1.98444 10.3897 1.7897 10.3091 1.64612 10.1655C1.50254 10.0219 1.42188 9.82717 1.42188 9.62412V4.37412C1.42188 4.17106 1.50254 3.97632 1.64612 3.83274C1.7897 3.68916 1.98444 3.60849 2.1875 3.60849H5.43266C5.30002 3.11764 5.35195 2.5952 5.57859 2.14006C5.80524 1.68492 6.19089 1.32866 6.66253 1.13873C7.13417 0.948788 7.65908 0.938352 8.1379 1.10939C8.61672 1.28043 9.01622 1.62108 9.26078 2.06685C9.58908 1.88263 9.97075 1.81692 10.3418 1.88074C10.7128 1.94456 11.0505 2.13403 11.2984 2.41736C11.5463 2.70069 11.6892 3.06065 11.7031 3.43684C11.7171 3.81304 11.6012 4.18259 11.375 4.48349H11.9919C12.1474 4.48393 12.2964 4.54598 12.4063 4.65607C12.5162 4.76615 12.578 4.9153 12.5781 5.07084ZM9.48391 2.70341C9.505 2.82165 9.51562 2.94152 9.51562 3.06162C9.51573 3.5898 9.31472 4.0982 8.95344 4.48349H10.0625C10.2179 4.48364 10.3712 4.44698 10.5097 4.37651C10.6483 4.30604 10.7682 4.20376 10.8596 4.07805C10.951 3.95234 11.0113 3.80677 11.0357 3.65326C11.06 3.49975 11.0476 3.34265 10.9996 3.19483C10.9515 3.04701 10.8692 2.91267 10.7592 2.8028C10.6493 2.69294 10.5149 2.61067 10.367 2.56273C10.2192 2.51479 10.0621 2.50255 9.90857 2.527C9.75507 2.55145 9.60955 2.61191 9.48391 2.70341ZM6.125 3.60849H7.4375C7.62145 3.60871 7.79918 3.67515 7.93816 3.79565C8.07715 3.91616 8.1681 4.08268 8.19438 4.26474C8.4239 4.12037 8.60736 3.91337 8.72311 3.66817C8.83887 3.42296 8.8821 3.14977 8.8477 2.8808C8.81331 2.61184 8.70272 2.35832 8.52898 2.15013C8.35524 1.94195 8.1256 1.78778 7.86713 1.70582C7.60866 1.62385 7.33214 1.6175 7.07018 1.68751C6.80822 1.75752 6.57174 1.90098 6.38863 2.10097C6.20551 2.30096 6.0834 2.54914 6.03669 2.81624C5.98998 3.08334 6.02062 3.35823 6.125 3.60849ZM2.1875 9.73349H7.4375C7.46651 9.73349 7.49433 9.72197 7.51484 9.70146C7.53535 9.68095 7.54688 9.65313 7.54688 9.62412V4.37412C7.54688 4.34511 7.53535 4.31729 7.51484 4.29678C7.49433 4.27627 7.46651 4.26474 7.4375 4.26474H2.1875C2.15849 4.26474 2.13067 4.27627 2.11016 4.29678C2.08965 4.31729 2.07812 4.34511 2.07812 4.37412V9.62412C2.07812 9.65313 2.08965 9.68095 2.11016 9.70146C2.13067 9.72197 2.15849 9.73349 2.1875 9.73349ZM10.1719 9.18662V5.24912C10.1719 5.22011 10.1604 5.19229 10.1398 5.17178C10.1193 5.15127 10.0915 5.13974 10.0625 5.13974H8.20312V9.62412C8.20312 9.82717 8.12246 10.0219 7.97888 10.1655C7.8353 10.3091 7.64056 10.3897 7.4375 10.3897H4.98203C5.25389 10.9446 5.70564 11.391 6.26367 11.6562C6.8217 11.9215 7.45312 11.9899 8.05502 11.8504C8.65691 11.7108 9.19381 11.3716 9.57822 10.8878C9.96263 10.4041 10.1719 9.80448 10.1719 9.18662ZM11.9219 5.13974H10.8194C10.8247 5.17596 10.8277 5.2125 10.8281 5.24912V9.18662C10.828 9.35981 10.8149 9.53275 10.7887 9.70396C11.1089 9.63756 11.3964 9.46283 11.6028 9.20922C11.8092 8.9556 11.9219 8.6386 11.9219 8.31162V5.13974Z"
                fill="#FE4333"
              />
            </svg>
          ),
          text: "No team assigrad",
        },
        {
          text: "ID: 4399045",
        },
        {
          text: "1 message",
        },
      ],
    },
  ];

  const customerType = [
    {
      icon: addIcon1,
      text: "Collaborator",
    },
    {
      icon: addIcon2,
      text: "VIP",
    },
    {
      icon: addIcon3,
      text: "Problematic",
    },
    {
      icon: addIcon4,
      text: "High Returns",
    },
    {
      icon: addIcon5,
      text: "Fraud",
    },
  ];

  const snipping = [
    {
      li: "Name: Julien C",
    },
    {
      li: "Address1: Heuvelring 40",
    },
    {
      li: "Address2: -",
    },
    {
      li: "City: Tilburg",
    },
    {
      li: "Country: Netherlands",
    },
    {
      li: "Province: -",
    },
    {
      li: "Province code: -",
    },
    {
      li: "Zip: 5038 CL",
    },
  ];
  const order = [
    {
      name: "Total spent:",
      value: " € 1.035,00 ",
    },
    {
      name: "Orders:",
      value: "1",
    },
    {
      name: "Created at:",
      value: " 01/05/2025",
    },
  ];
  const order2 = [
    {
      name: "Created: ",
      value: " 01/05/2025",
    },
    {
      name: "Total spent:",
      value: "€ 1.035,00",
    },
    {
      name: "Created at:",
      value: "01/05/2025",
    },
  ];
  const shopify = [
    {
      name: "Execution ID:",
      value: "47d650a2-288d-47c0-811 9- 9fe a10 5a56d0",
    },
    {
      name: "Message:",
      value: "Rejected input, not process ing the message.",
    },
    {
      name: "Reason:",
      value: "store_configuration_not_found",
    },
  ];
  const customer = [
    {
      icon: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83333 9.83333H8.83333M5.83333 7.16667H10.1667M3.83333 14H12.1667C12.903 14 13.5 13.403 13.5 12.6667V4.33333C13.5 3.59695 12.903 3 12.1667 3H3.83333C3.09695 3 2.5 3.59695 2.5 4.33333V12.6667C2.5 13.403 3.09695 14 3.83333 14Z"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
      text: "This customer has no note.",
    },
    {
      icon: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0011 6.66675C12.3296 7.92257 10.2518 8.66675 8.00016 8.66675C5.74851 8.66675 3.67067 7.92257 1.99919 6.66675M3.16683 3.66675H12.8335C13.5699 3.66675 14.1668 4.2637 14.1668 5.00008V12.0001C14.1668 12.7365 13.5699 13.3334 12.8335 13.3334H3.16683C2.43045 13.3334 1.8335 12.7365 1.8335 12.0001V5.00008C1.8335 4.2637 2.43045 3.66675 3.16683 3.66675Z"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "examples@gmail.com",
    },
    {
      icon: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.16971 6.64524C5.66448 7.6245 6.3209 8.54302 7.13898 9.3611C7.95706 10.1792 8.87558 10.8356 9.85485 11.3304L10.8651 10.3201C11.0809 10.1043 11.4159 10.0626 11.678 10.219L13.4315 11.2651C13.8046 11.4876 13.8685 12.0018 13.5614 12.309L11.7475 14.1229C11.4109 14.4595 10.9187 14.5961 10.4668 14.4468C9.58201 14.1544 8.72192 13.7664 7.9027 13.2825C6.96126 12.7265 6.07382 12.044 5.26493 11.2352C4.45604 10.4263 3.77358 9.53882 3.21756 8.59738C2.73373 7.77817 2.34563 6.91807 2.05327 6.03327C1.90394 5.58134 2.04062 5.08918 2.37717 4.75263L4.19107 2.93873C4.49825 2.63155 5.01245 2.69551 5.235 3.06858L6.28106 4.82205C6.43746 5.08423 6.3958 5.41914 6.17994 5.63501L5.16971 6.64524Z"
            stroke="#111111"
            strokeOpacity="0.5"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      number: "Add Phone Numnber",
    },
  ];
  const [addCustomer, setAddCustomer] = useState(false);
  // Add sidebar width and resizing state
  const [sidebarWidth, setSidebarWidth] = useState(325); // default width in px
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = () => setIsResizing(true);
  const stopResizing = () => setIsResizing(false);
  const resize = (e) => {
    if (!isResizing) return;
    const minWidth = 200;
    const maxWidth = 600;
    const newWidth = Math.min(
      Math.max(window.innerWidth - e.clientX, minWidth),
      maxWidth
    );
    setSidebarWidth(newWidth);
  };

  React.useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
      return () => {
        window.removeEventListener("mousemove", resize);
        window.removeEventListener("mouseup", stopResizing);
      };
    }
  }, [isResizing]);

  return (
    <>
      <Top title="All Customer">
        <button className="btn flex items-center gap-1 !bg-primary !text-white text-nowrap p-2.5 !w-[151px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
              fill="white"
            />
          </svg>
          Create Ticket
        </button>
      </Top>
      {/* Change flex container and add draggable divider */}
      <div className="flex flex-row gap-0">
        <MainInner className="flex-1">
          <div className="">
            <div className="flex items-center justify-between mb-4 md:mb-5 lg:mb-6">
              <h3 className="text-xl">Romain Lapeyere</h3>
              <div className="flex items-center gap-3">
                <Dropdown
                  className="mb-0 !hidden md:!flex"
                  dropDownClass="!left-auto right-0 w-max"
                  btnClass="text-primary !text-xs !max-h-[34px]"
                  placeholder="Date : All Time"
                  items={[
                    { name: "Date : Off Time" },
                    { name: "Date : One Time" },
                    { name: "Date : Good Time" },
                  ]}
                />
                <Dropdown
                  className="mb-0 !hidden md:!flex"
                  dropDownClass="!left-auto right-0 w-max"
                  btnClass="text-primary !text-xs !max-h-[34px]"
                  placeholder="Status : All"
                  items={[
                    { name: "Status : All" },
                    { name: "Status : Off" },
                    { name: "Status : One" },
                  ]}
                />
              </div>
            </div>

            {card.map((items, index) => (
              <div className={`${c_16} mb-3`} key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm md:text-base lg:text-lg text-heading font-semibold">
                      {items.title}
                    </h3>
                    <button className="btn bg-primary text-xs text-white !max-h-6 !min-w-[56px]">
                      {items.opne}
                    </button>
                  </div>
                  <p className="text-xs">{items.date}</p>
                </div>
                <div className="flex items-center mb-4 md:mb-5 lg:mb-[22px]">
                  <p className="text-sm !leading-[150%]">{items.des}</p>
                  <p className="text-sm text-heading font-semibold leading-[150%]">
                    {items.text}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {items.button.map((items, index) => (
                    <div key={index}>
                      <button className="btn text-xs md:text-sm text-nowrap flex items-center gap-2">
                        {items.icon} {items.text}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MainInner>
        {/* Draggable divider */}
        <div
          style={{
            cursor: "col-resize",
            width: "6px",
            background: "#f0f0f0",
            zIndex: 10,
            userSelect: "none",
          }}
          onMouseDown={startResizing}
        />
        {/* Sidebar with dynamic width */}
        <div
          className="right hidden md:block border border-stroke"
          style={{ width: sidebarWidth, minWidth: 200, maxWidth: 600 }}
        >
          <TableFilter
            textHidden
            BtnClass="!p-2"
            className="mt-3 md:mt-4 !mb-0 !p-4 !flex-nowrap md:!justify-end relative z-[2]"
            searchClass="!mr-0"
            sortDrop={false}
          />
          <div className="py-3 px-4 flex flex-col gap-3 border-b border-stroke">
            <div className="flex justify-between">
              <div className="flex items-center gap-3 ">
                <div className="size-[30px] flex items-center justify-center rounded-full bg-[#FFF0EF]">
                  <span className="uppercase font-semibold text-xs font-inter !leading-[1.5] bg-[linear-gradient(114deg,#FF6B5F_49.41%,#FFC563_110.43%)] bg-clip-text text-transparent">
                    jc
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base text-heading">Romain Lapeyere</h4>
                  <span className="text-xs text-white font-normal !leading-[1.5] px-[5px] py-px rounded-full font-inter bg-[linear-gradient(114deg,#FF6B5F_49.41%,#FFC563_110.43%)]">
                    ВЕТА
                  </span>
                </div>
              </div>
              <button className="size-6 rounded-lg bg-white border border-solid border-[#E2E4E9] flex items-center justify-center hover:bg-primary text-white">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00065 1.97786C5.23077 1.97786 5.41732 1.79132 5.41732 1.5612C5.41732 1.33108 5.23077 1.14453 5.00065 1.14453C4.77053 1.14453 4.58398 1.33108 4.58398 1.5612C4.58398 1.79132 4.77053 1.97786 5.00065 1.97786Z"
                    fill="black"
                  />
                  <path
                    d="M5.00065 5.41537C5.23077 5.41537 5.41732 5.22882 5.41732 4.9987C5.41732 4.76858 5.23077 4.58203 5.00065 4.58203C4.77053 4.58203 4.58398 4.76858 4.58398 4.9987C4.58398 5.22882 4.77053 5.41537 5.00065 5.41537Z"
                    fill="black"
                  />
                  <path
                    d="M5.00065 8.85287C5.23077 8.85287 5.41732 8.66632 5.41732 8.4362C5.41732 8.20608 5.23077 8.01953 5.00065 8.01953C4.77053 8.01953 4.58398 8.20608 4.58398 8.4362C4.58398 8.66632 4.77053 8.85287 5.00065 8.85287Z"
                    fill="black"
                  />
                  <path
                    d="M5.00065 1.97786C5.23077 1.97786 5.41732 1.79132 5.41732 1.5612C5.41732 1.33108 5.23077 1.14453 5.00065 1.14453C4.77053 1.14453 4.58398 1.33108 4.58398 1.5612C4.58398 1.79132 4.77053 1.97786 5.00065 1.97786Z"
                    stroke="#111111"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.00065 5.41537C5.23077 5.41537 5.41732 5.22882 5.41732 4.9987C5.41732 4.76858 5.23077 4.58203 5.00065 4.58203C4.77053 4.58203 4.58398 4.76858 4.58398 4.9987C4.58398 5.22882 4.77053 5.41537 5.00065 5.41537Z"
                    stroke="#111111"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.00065 8.85287C5.23077 8.85287 5.41732 8.66632 5.41732 8.4362C5.41732 8.20608 5.23077 8.01953 5.00065 8.01953C4.77053 8.01953 4.58398 8.20608 4.58398 8.4362C4.58398 8.66632 4.77053 8.85287 5.00065 8.85287Z"
                    stroke="#111111"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-1 text-xs">
                Customer Fields
                <button>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.16667 3H4.63333C3.8866 3 3.51323 3 3.22801 3.14532C2.97713 3.27316 2.77316 3.47713 2.64532 3.72801C2.5 4.01323 2.5 4.3866 2.5 5.13333V11.8667C2.5 12.6134 2.5 12.9868 2.64532 13.272C2.77316 13.5229 2.97713 13.7268 3.22801 13.8547C3.51323 14 3.8866 14 4.63333 14H11.3667C12.1134 14 12.4868 14 12.772 13.8547C13.0229 13.7268 13.2268 13.5229 13.3547 13.272C13.5 12.9868 13.5 12.6134 13.5 11.8667V10.3333M9.16667 3H13.5M13.5 3V7.33333M13.5 3L7.33333 9.16667"
                      stroke="#7856FF"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <div className="flex items-center gap-1 text-xs">
                  Customer Type:
                  <button onClick={() => setAddCustomer(!addCustomer)}>
                    <span className="text-primary font-semibold"> +Add</span>
                  </button>
                </div>
                {addCustomer && (
                  <div className="absolute top-full right-0 p-4 rounded-xl bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] min-w-[240px] ">
                    <Input
                      type="search"
                      inputClass="!h-9"
                      leftIcon={search}
                      name="search"
                    />
                    <div className="flex flex-col gap-6">
                      {customerType.map((item, index) => (
                        <button
                          onClick={() => setAddCustomer(!addCustomer)}
                          key={index}
                          className="flex items-center gap-2"
                        >
                          <div className="">
                            <img src={item.icon} alt="" />
                          </div>
                          <span className="text-[#0A0D14] font-semibold !leading-[140%] ">
                            {item.text}{" "}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {customer.map((item, index) => (
                <li className="flex items-center gap-1" key={index}>
                  <div className="icon">{item.icon} </div>
                  {item.text && <p className="text-xs">{item.text} </p>}
                  {item.number && (
                    <a href="#" className="text-xs text-primary">
                      {item.number}{" "}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3 px-4 flex flex-col gap-3 border-b border-stroke">
            <div className="flex items-center gap-2">
              <img src={img} className="w-5" alt="" />
              <h5 className="text-sm font-bold !leading-[140%]">Al Agent</h5>
            </div>
            <ul className="flex flex-col gap-2">
              {shopify.map((item, index) => (
                <li
                  className="flex items-center justify-between gap-1"
                  key={index}
                >
                  <p className="text-xs">{item.name}</p>
                  <span className="text-xs text-heading font-semibold max-w-[185px]">
                    {" "}
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3 px-4 gap-3 border-b border-stroke">
            <h5 className="text-sm font-bold !leading-[140%]">Details</h5>
            <p className="text-xs">Details:</p>
            <span className="text-xs text-heading font-semibold max-w-[185px]">
              {" "}
              Store configuration not found
            </span>
          </div>
          <div className="py-3 px-4 flex flex-col gap-3 border-b border-stroke">
            <h4 className="text-sm font-bold !leading-[140%] mb-2">
              Shopify Julien C
            </h4>
            <ul className="flex flex-col gap-2">
              {order.map((item, index) => (
                <li className="flex items-center gap-1" key={index}>
                  <p className="text-xs">
                    {item.name}{" "}
                    <span className="text-xs text-heading font-semibold">
                      {" "}
                      {item.value}
                    </span>{" "}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1 text-xs">
              Tags:
              <button onClick={() => setAddCustomer(!addCustomer)}>
                <span className="text-primary font-semibold">Add tags..</span>
              </button>
            </div>
          </div>
          <div className="py-3 px-4 flex flex-col gap-3 border-b border-stroke">
            <h4 className="text-xl font-bold !leading-[140%] mb-2">
              Order #1009
            </h4>
            <div className="flex items-center gap-1 rounded">
              {["UNFULFILLED", "CANCELLED", "PAID"].map((item, index) => (
                <button
                  key={index}
                  className="bg-[#7856FF]/10 px-3 py-1 text-heading font-semibold !leading-[140%] text-xs rounded"
                >
                  {item}
                </button>
              ))}
            </div>
            <ul className="flex flex-col gap-2">
              {order2.map((item, index) => (
                <li className="flex items-center gap-1" key={index}>
                  <p className="text-xs">
                    {item.name}{" "}
                    <span className="text-xs text-heading font-semibold">
                      {" "}
                      {item.value}
                    </span>{" "}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <button className="btn grow !px-0 !min-w-[unset] !border-primary !text-primary hover:!text-white">
                Duplicate
              </button>
              <button className="btn grow !px-0 !min-w-[unset] !border-primary !text-primary hover:!text-white">
                Refund
              </button>
            </div>
          </div>
          <div className="py-3 px-4 flex flex-col gap-3 border-b border-stroke">
            <div className="flex items-center gap-2">
              <h4 className="text-xl font-bold !leading-[140%] flex items-center gap-1">
                Snipping Address
              </h4>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.041 5.20678L13.4042 2.84362C14.055 2.19275 15.1103 2.19275 15.7612 2.84362L17.1542 4.2366C17.805 4.88748 17.805 5.94275 17.1542 6.59362L14.791 8.95678M11.041 5.20678L2.77917 13.4686C2.46661 13.7812 2.29102 14.2051 2.29102 14.6471V17.7068H5.35066C5.79269 17.7068 6.21661 17.5312 6.52917 17.2186L14.791 8.95678M11.041 5.20678L14.791 8.95678"
                    stroke="#7856FF"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {snipping.map((item, index) => (
                <li className="flex items-center gap-1" key={index}>
                  <p className="text-xs">{item.li}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
