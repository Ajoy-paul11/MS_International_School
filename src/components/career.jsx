import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Fieldset } from "@mantine/core";
import { Input } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { toast } from "react-toastify";
import bgImage from "../assets/overview-bg.jpeg";
import teacherImg from "../assets/teacher.avif";

const jobPositions = [
  "Hindi Teacher",
  "English Teacher",
  "Kannada Teacher",
  "Kindergarten Teacher",
  "Primary Teacher",
  "PT Teacher",
  "Hostel Warden",
];

const Career = () => {
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
    <div>
      <div>
        <div
          className=" w-full h-[245px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Background black effect */}
          <div className=" w-full h-full bg-black/50">
            <div className=" absolute top-[120px] w-full">
              <div className=" flex justify-center items-center gap-4">
                <div className="w-2 h-10 cta-color"></div>
                <h2 className=" text-2xl xl:text-3xl cta-text-color font-bold">
                  CAREER
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full cta-color">
          <div className=" max-w-6xl mx-auto flex flex-col lg:gap-y-12 lg:flex-row lg:justify-center lg:items-center p-8 px-2 md:px-0 lg:px-4 xl:p-12">
            <div className=" w-full lg:w-1/2 cta-text-color p-2 text-lg lg:text-xl xl:text-2xl lg:p-8 text-start px-4 lg:px-0">
              <div className=" mb-3">
                <img src={teacherImg} alt="teacher-img" className=" lg:max-w-sm rounded-xl"/>
              </div>
              <h4 className="my-2 text-3xl font-bold"> Job Opportunity: </h4>

              <ul className="my-2 py-4 list-disc list-inside">
                {jobPositions.map((position, index) => (
                  <li key={index} className="mb-1">
                    {position}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" w-full lg:w-1/2">
              <div className=" cta-text-color lg:py-12 ">
                <div className=" px-4 max-w-md mx-auto">
                  <div className=" w-full bg-color primary-text-color p-2 2xl:p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.25)] ">
                    <h2 className="  text-center text-xl xl:text-3xl font-bold mb-1 2xl:mb-4">
                      Fill the Form to Apply
                    </h2>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
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
                        className="bg-color lg:!mt-0 2xl:mt-0 lg:!pb-2 2xl:!pb-4 "
                      >
                        <div className=" my-1 2xl:my-4">
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
                            {...register("name", {
                              required: "Name is required",
                            })}
                            className="mt-1 block w-full rounded-md  shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className=" my-1 2xl:my-4">
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
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                        <div className=" my-1 2xl:my-4">
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
                        <div className=" my-1 2xl:my-4">
                          <label
                            htmlFor="position"
                            className="block text-sm font-medium "
                          >
                            Appling Position
                          </label>
                          <Textarea
                            placeholder="Enter desired position"
                            autosize
                            variant="filled"
                            minRows={2}
                            id="message"
                            rows="4"
                            {...register("position", {
                              required: "Position is required",
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
                                      ${
                                        isSubmitting
                                          ? "opacity-50 cursor-not-allowed"
                                          : ""
                                      }`}
                        >
                          {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                      </Fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=" border-color" />
      </div>
    </div>
  );
};

export default Career;
