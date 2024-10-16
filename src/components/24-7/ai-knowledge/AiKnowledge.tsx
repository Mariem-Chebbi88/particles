"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import { PiPencilSimpleLineLight } from "react-icons/pi";

const AiKnowledge = () => {
  return (
    <div className="p-5 flex flex-col gap-8 h-full border border-[#EDEDED] rounded-2xl">
      <div className="text-[0.875rem] leading-5 flex flex-col gap-[2.375rem] px-5 py-6 border border-[#EDEDED] rounded-xl">
        <div className="flex justify-between">
          <div>
            <p className="text-[#373737] text-[1.25rem] leading-6 font-medium mb-[1.125rem]">
              AI Knowledge
            </p>
            <p className="text-[#9E9E9E]">
              You can edit the brand name, chatbot name, website, and customize
              the knowledge base in a Q&A format.
            </p>
          </div>
          <button className="flex items-center justify-center text-[0.875rem] gap-2 w-[6.25rem] px-2.5 py-3 h-11 rounded-full text-[#5AC3DF] border border-[#5AC3DF]">
            <PiPencilSimpleLineLight /> Modify
          </button>
        </div>

        <div className="max-w-[22.375rem]">
          <Formik
            initialValues={{
              ChatbotName: "Nika",
              BrandName: "GARMONY",
              website: "www.garmonyshop.com",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <label
                  htmlFor="name"
                  className="block mb-2 text-[#6F6F6F] text-[0.875rem] leading-5"
                >
                  Chatbot Name
                </label>
                <Field
                  id="ChatbotName"
                  name="ChatbotName"
                  placeholder="Enter your Chatbot Name"
                  type="text"
                  className="rounded-xl w-full px-5 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5AC3DF] mb-4"
                />

                <label
                  htmlFor="email"
                  className="block text-[#6F6F6F] text-[0.875rem] leading-5 mb-2"
                >
                  Brand Name
                </label>
                <Field
                  id="BrandName"
                  name="BrandName"
                  placeholder="Enter your Brand Name"
                  type="email"
                  className="rounded-xl w-full px-5 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5AC3DF] mb-4"
                />

                <label className="block mb-2 text-[#6F6F6F] text-[0.875rem] leading-5">
                  website
                </label>
                <Field
                  id="website"
                  name="website"
                  placeholder="Enter your website"
                  type="email"
                  className="rounded-xl w-full px-5 py-3.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5AC3DF] mb-4"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="p-5 sm:p-10 border border-[#EDEDED] rounded-xl text-[#94A3B8] leading-5 font-medium ">
        <p className="text-[1.25rem] mb-3">
          Let’s Teach Your Bot - Coming soon ...
        </p>
        <p className="text-[0.875rem]">
          Upload training documents to help your bot answer questions and
          resolve issues !
        </p>
      </div>
    </div>
  );
};

export default AiKnowledge;
