"use client";
import { Formik, Form, Field } from "formik";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import Image from "next/image";
import React, { useState, useRef } from "react";

const Settings = () => {
  // Default profile picture (replace with the path or URL of your default image)
  const defaultProfilePic = "/default-profile.png"; 
  const [profileImage, setProfileImage] = useState<string>(defaultProfilePic); // Initialize with the default image
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle reset to default image
  const handleResetImage = () => {
    setProfileImage(defaultProfilePic); // Reset to the default image
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input
    }
  };

  return (
    <div className="w-full h-full py-[4.375rem] px-[1.25rem] justify-center grid grid-cols-1 md:grid-cols-2 gap-5 bg-white border border-[#EDEDED] rounded-2xl">
      {/* Left Section: Profile Picture Change */}
      <div className="md:max-h-[50%] p-[1rem] flex flex-col gap-7 border border-[#EDEDED] rounded-xl">
        <div>
          <p className="mb-2 capitalize text-[#454348] font-medium text-[1.375rem] leading-6 tracking-[-4%]">
            Change Profile
          </p>
          <p className="text-[#6F6F6F] text-[0.875rem] leading-5">
            Change your profile pictures from here
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <Image
            alt="profile pic"
            src={profileImage} // Use profileImage state (starts with default image)
            height={127}
            width={127}
            className="bg-center bg-cover size-[7.9375rem] rounded-full"
          />
          <div className="flex gap-3">
            <label className="w-[6.25rem] px-2.5 py-3 rounded-full text-white bg-[#5AC3DF] text-center cursor-pointer">
              Upload
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
            </label>
            <button
              className="w-[6.25rem] px-2.5 py-3 rounded-full text-[#E78AC5] border border-[#E78AC5]"
              onClick={handleResetImage}
            >
              Reset
            </button>
          </div>
        </div>
        <p className="text-[#6F6F6F] text-[0.875rem] leading-5 text-center">
          Allowed JPG, GIF or PNG. Max size of 800K
        </p>
      </div>

      {/* Right Section: Profile Info Change */}
      <div className="md:max-h-[50%] p-[1rem] flex flex-col gap-6 border border-[#EDEDED] rounded-xl">
        <div>
          <p className="mb-2 capitalize text-[#454348] font-medium text-[1.375rem] leading-6 tracking-[-4%]">
            Change Profile
          </p>
          <p className="mb-2 text-[#6F6F6F] text-[0.875rem] leading-5">
            Change your profile details from here
          </p>
        </div>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              {/* Name Field */}
              <label
                htmlFor="name"
                className="block mb-2 text-[#6F6F6F] text-[0.875rem] leading-5"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
                className="rounded-xl w-full px-5 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5AC3DF] mb-4"
              />

              {/* Email Field */}
              <label
                htmlFor="email"
                className="block text-[#6F6F6F] text-[0.875rem] leading-5 mb-2"
              >
                Email Address
              </label>
              <Field
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                className="rounded-xl w-full px-5 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5AC3DF] mb-4"
              />

              {/* Password Label only (no input) */}
              <label className="block mb-2 text-[#6F6F6F] text-[0.875rem] leading-5">
                Password
              </label>

              {/* Submit Button */}
              <button className="flex items-center justify-center gap-2 w-[6.25rem] px-2.5 py-3 rounded-full text-[#5AC3DF] border border-[#5AC3DF]">
                <PiPencilSimpleLineLight /> Modify
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Settings;
