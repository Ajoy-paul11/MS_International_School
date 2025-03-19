import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Fieldset } from "@mantine/core";
import { Input } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { toast } from "react-toastify";

export default function ContactComponent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Push the form submission event to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submission",
          formId: "admission_form",
        });

        toast.success("Message sent Successfully");

        await gtag_report_conversion();

        reset();
      } else {
        toast.error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(error.message || "Internal Server Error, Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className=" w-[330px] h-[40px] mx-auto my-4 cta-color rounded-tl-full rounded-br-full flex justify-center items-center">
        <h2 className=" cta-text-color text-xl lg:text-3xl font-bold">
          GET IN TOUCH
        </h2>
      </div>
      <div className=" cta-color ">
        <div className="container mx-auto px-4 py-8">
          <div className=" w-full grid lg:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div className="w-full cta-text-color p-6 px-1 md:px-0">
              <h2 className="text-xl lg:text-3xl font-bold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <p className="flex items-center gap-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-2 cta-text-color"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className=" text-xl xl:text-2xl">
                    9845041912 / 8884534548
                  </span>
                </p>
                <p className="flex items-center gap-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-2 cta-text-color"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className=" text-sm md:text-xl xl:text-2xl">
                    msinternationalpublicschool2@gmail.com
                  </span>
                </p>
                <p className="flex items-center gap-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-2 cta-text-color"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className=" text-xl xl:text-2xl">
                    {" "}
                    VVS Campus, Hanakere, Mandya
                  </span>
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-[350px]md:w-full bg-color primary-text-color p-6 rounded-lg shadow-md">
              <h2 className="  text-center text-xl lg:text-3xl font-bold mb-4">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  type="hidden"
                  value={import.meta.env.VITE_FORM_API_KEY}
                  {...register("access_key")}
                />
                <input type="hidden" {...register("subject")} />
                <input
                  type="hidden"
                  value="MS International School"
                  {...register("from_name")}
                />
                <Fieldset
                  legend="Personal Information"
                  variant="filled"
                  className="bg-color"
                >
                  <div className=" my-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium "
                    >
                      Name
                    </label>
                    <Input
                      variant="filled"
                      placeholder="Enter your name"
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="mt-1 block w-full rounded-md  shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className=" my-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium "
                    >
                      Email
                    </label>
                    <Input
                      variant="filled"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="mt-1 block w-full rounded-md  shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className=" my-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium "
                    >
                      Phone Number
                    </label>
                    <Input
                      variant="filled"
                      placeholder="Enter your mobile number"
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className="mt-1 block w-full rounded-md  shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className=" my-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium "
                    >
                      Message
                    </label>
                    <Textarea
                      placeholder="Enter your query"
                      autosize
                      variant="filled"
                      minRows={2}
                      id="message"
                      rows="4"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="mt-1 block w-full rounded-md  shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={`w-full cta-color text-white py-2 px-4 rounded-md hover:cta-color/70 focus:outline-none focus:ring-2  focus:ring-opacity-50 transition duration-150 ease-in-out 
                      ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </Fieldset>
              </form>
              {/* {message && (
                <div
                  className={`mt-4 p-4 rounded-md ${
                    isSuccess
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
