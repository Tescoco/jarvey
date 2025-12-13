import React, { useState } from "react";
import MainInner from "../../components/MainInner";
import Top from "../../layouts/Top";
import Input from "../../components/Input";
import { c_24 } from "../../utilities/Classes";

export default function Password() {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.currentPassword) {
            newErrors.currentPassword = "Current password is required";
        }

        if (!formData.newPassword) {
            newErrors.newPassword = "New password is required";
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword = "Password must be at least 8 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (formData.currentPassword && formData.newPassword &&
            formData.currentPassword === formData.newPassword) {
            newErrors.newPassword = "New password must be different from current password";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("");

        if (validateForm()) {
            // Here you would typically make an API call to update the password
            console.log("Password update submitted:", formData);

            // Show success message
            setSuccessMessage("Password updated successfully!");

            // Reset form
            setFormData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage("");
            }, 5000);
        }
    };

    const handleCancel = () => {
        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
        setErrors({});
        setSuccessMessage("");
    };

    return (
        <MainInner>
            <Top title="Password Settings" />
            <div className="p-4 lg:p-5 xl:p-6">
                <div className={`${c_24} max-w-2xl`}>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-[#0A0D14] mb-2">
                            Change Password
                        </h2>
                        <p className="text-sm text-[#525866]">
                            Update your password to keep your account secure
                        </p>
                    </div>

                    {successMessage && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 mt-0.5"
                            >
                                <path
                                    d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                                    fill="#22C55E"
                                />
                            </svg>
                            <p className="text-sm text-green-800 font-medium">
                                {successMessage}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Current Password */}
                        <div className="relative">
                            <Input
                                type={showCurrentPassword ? "text" : "password"}
                                name="currentPassword"
                                label="Current Password"
                                placeholder="Enter your current password"
                                required
                                value={formData.currentPassword}
                                onChange={handleChange}
                                className="mb-0"
                            />
                            <button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="absolute right-3 top-[42px] text-gray-500 hover:text-gray-700"
                            >
                                {showCurrentPassword ? (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.5 10C2.5 10 5 4.16667 10 4.16667C15 4.16667 17.5 10 17.5 10C17.5 10 15 15.8333 10 15.8333C5 15.8333 2.5 10 2.5 10Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.95 14.95C13.5255 16.0358 11.7908 16.6373 10 16.6667C5 16.6667 2.5 10.8333 2.5 10C2.5 10 3.75 7.08333 6.66667 5.41667M8.75 4.16667C9.15703 4.0553 9.57665 3.99935 10 4C15 4 17.5 10 17.5 10C17.5 10 16.875 11.4167 15.4167 12.9167M11.7683 11.7683C11.5383 12.0123 11.2616 12.2073 10.9543 12.3418C10.6469 12.4763 10.3154 12.5476 9.97965 12.5514C9.64387 12.5552 9.31082 12.4914 9.00033 12.3641C8.68983 12.2368 8.40831 12.0486 8.17274 11.8103C7.93716 11.5719 7.75173 11.2882 7.62727 10.9762C7.50282 10.6641 7.44182 10.3302 7.44843 9.99439C7.45504 9.6586 7.52914 9.32762 7.66626 9.02131C7.80338 8.71501 8.00058 8.43993 8.24667 8.21333M2.5 2.5L17.5 17.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </button>
                            {errors.currentPassword && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.currentPassword}
                                </p>
                            )}
                        </div>

                        {/* New Password */}
                        <div className="relative">
                            <Input
                                type={showNewPassword ? "text" : "password"}
                                name="newPassword"
                                label="New Password"
                                placeholder="Enter your new password"
                                required
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="mb-0"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 top-[42px] text-gray-500 hover:text-gray-700"
                            >
                                {showNewPassword ? (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.5 10C2.5 10 5 4.16667 10 4.16667C15 4.16667 17.5 10 17.5 10C17.5 10 15 15.8333 10 15.8333C5 15.8333 2.5 10 2.5 10Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.95 14.95C13.5255 16.0358 11.7908 16.6373 10 16.6667C5 16.6667 2.5 10.8333 2.5 10C2.5 10 3.75 7.08333 6.66667 5.41667M8.75 4.16667C9.15703 4.0553 9.57665 3.99935 10 4C15 4 17.5 10 17.5 10C17.5 10 16.875 11.4167 15.4167 12.9167M11.7683 11.7683C11.5383 12.0123 11.2616 12.2073 10.9543 12.3418C10.6469 12.4763 10.3154 12.5476 9.97965 12.5514C9.64387 12.5552 9.31082 12.4914 9.00033 12.3641C8.68983 12.2368 8.40831 12.0486 8.17274 11.8103C7.93716 11.5719 7.75173 11.2882 7.62727 10.9762C7.50282 10.6641 7.44182 10.3302 7.44843 9.99439C7.45504 9.6586 7.52914 9.32762 7.66626 9.02131C7.80338 8.71501 8.00058 8.43993 8.24667 8.21333M2.5 2.5L17.5 17.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </button>
                            {errors.newPassword && (
                                <p className="mt-1 text-xs text-red-500">{errors.newPassword}</p>
                            )}
                            <p className="mt-1 text-xs text-[#858585]">
                                Password must be at least 8 characters long
                            </p>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <Input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                label="Confirm New Password"
                                placeholder="Re-enter your new password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="mb-0"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-[42px] text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.5 10C2.5 10 5 4.16667 10 4.16667C15 4.16667 17.5 10 17.5 10C17.5 10 15 15.8333 10 15.8333C5 15.8333 2.5 10 2.5 10Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.95 14.95C13.5255 16.0358 11.7908 16.6373 10 16.6667C5 16.6667 2.5 10.8333 2.5 10C2.5 10 3.75 7.08333 6.66667 5.41667M8.75 4.16667C9.15703 4.0553 9.57665 3.99935 10 4C15 4 17.5 10 17.5 10C17.5 10 16.875 11.4167 15.4167 12.9167M11.7683 11.7683C11.5383 12.0123 11.2616 12.2073 10.9543 12.3418C10.6469 12.4763 10.3154 12.5476 9.97965 12.5514C9.64387 12.5552 9.31082 12.4914 9.00033 12.3641C8.68983 12.2368 8.40831 12.0486 8.17274 11.8103C7.93716 11.5719 7.75173 11.2882 7.62727 10.9762C7.50282 10.6641 7.44182 10.3302 7.44843 9.99439C7.45504 9.6586 7.52914 9.32762 7.66626 9.02131C7.80338 8.71501 8.00058 8.43993 8.24667 8.21333M2.5 2.5L17.5 17.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </button>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        {/* Password Requirements */}
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <h3 className="text-sm font-semibold text-[#0A0D14] mb-2">
                                Password Requirements:
                            </h3>
                            <ul className="text-xs text-[#525866] space-y-1">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-0.5">•</span>
                                    <span>At least 8 characters long</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-0.5">•</span>
                                    <span>Include uppercase and lowercase letters</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-0.5">•</span>
                                    <span>Include at least one number</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-0.5">•</span>
                                    <span>Include at least one special character</span>
                                </li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-2">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="btn bg-off px-6"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn bg-primary text-white px-6"
                            >
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainInner>
    );
}