"use client";
import { Formik, Form, Field } from "formik";
import { PiPencilSimpleLineLight } from "react-icons/pi";

const PersonalDetails = () => {
  return (
    <div className="p-[1rem] flex flex-col gap-6 border border-[#EDEDED] rounded-xl">
      <div>
        <p className="mb-2 capitalize text-[#454348] font-medium text-[1.375rem] leading-6 tracking-[-4%]">
          change profile
        </p>
        <p className="mb-2 text-[#6F6F6F] text-[0.875rem] leading-5">
          Change your profile pictures from here
        </p>
      </div>{" "}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            {/* Name Field */}
            <label htmlFor="name" className="block mb-2 text-[#6F6F6F] text-[0.875rem] leading-5">
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
  );
};

export default PersonalDetails;
