import React from "react";
import { Link } from "react-router";
import { AspectRatio } from "@mantine/core";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className=" w-full bg-color">
        <div className=" w-full">
          <div className=" p-4 lg:p-8 lg:px-2 xl:px-8 grid lg:grid-cols-2 gap-8">
            <div className=" primary-text-color grid grid-cols-1 md:grid-cols-3 gap-4 px-6 xl:px-12 text-sm lg:text-base xl:text-lg">
              <div className=" flex flex-col justify-center items-start gap-4">
                <h3 className="option font-semibold">About Us</h3>
                <div className=" flex flex-col gap-2 lg:gap-4">
                  <Link to={"/principal"} className=" hover:text-purple-700 duration-300">Principal</Link>
                  <Link to={"/overview"} className=" hover:text-purple-700 duration-300">Overview</Link>
                  <Link to={"/chairman"} className=" hover:text-purple-700 duration-300">Chairman</Link>
                  <Link to={"/faculty"} className=" hover:text-purple-700 duration-300">Faculty</Link>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-start gap-4">
                <h3 className="option font-semibold">Know Us</h3>
                <div className=" flex flex-col gap-2 lg:gap-4">
                  <Link to={"/facilities"} className=" hover:text-purple-700 duration-300">Facilities</Link>
                  <Link to={"/programme"} className=" hover:text-purple-700 duration-300">Programme</Link>
                  <Link to={"/gallery"} className=" hover:text-purple-700 duration-300">Gallery</Link>
                  <Link to={"/hostel"} className=" hover:text-purple-700 duration-300">Hostel</Link>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-startstart gap-4">
                <div className=" w-fit">
                <h3 className="option line font-semibold">Event</h3>
                </div>
                <div className=" flex flex-col gap-2 lg:gap-4">
                  <Link to={"/science-event"} className=" hover:text-purple-700 duration-300">Science Event</Link>
                  <Link to={"/independence-day"} className=" hover:text-purple-700 duration-300">Independence Day</Link>
                  <Link to={"/cultural-event"} className=" hover:text-purple-700 duration-300">Cultural Event</Link>
                  <Link to={"/other-school-event"} className=" hover:text-purple-700 duration-300">Other Event</Link>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-[400px] xl:w-[600px] mx-auto">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.176631015468!2d76.97578667506961!3d12.57060218770915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa66e0fffffff%3A0x31071de2eaf4d70d!2sMS%20International%20Public%20School!5e0!3m2!1sen!2sin!4v1739625769885!5m2!1sen!2sin"
                  title="Google map"
                  style={{ border: 0, borderRadius: "10px" }}
                />
              </AspectRatio>
            </div>
          </div>
          <hr className=" border-color" />
          <div className=" container mx-auto p-4 lg:p-8 flex flex-col xl:flex-row justify-between items-center gap-y-4 primary-text-color">
            <div className=" font-semibold text-base xl:text-lg">
              &copy; Copyright MS International Public School{" "}{new Date().getFullYear()}.
              <br className=" block md:hidden"/> All rights reserved.
            </div>
            <div className=" flex gap-4 primary-text-color">
              <Link className=" hover:text-purple-700 duration-300 text-base">Disclaimer</Link>
              <Link className=" hover:text-purple-700 duration-300 text-base">T&C</Link>
              <Link className=" hover:text-purple-700 duration-300 text-base">Privacy Policy</Link>
            </div>
            <div className=" flex gap-4">
              <div>
                <Link>
                  <FaYoutube className=" w-6 h-6 primary-text-color" />
                </Link>
              </div>
              <div>
                <Link>
                  <FaLinkedin className=" w-6 h-6 primary-text-color" />
                </Link>
              </div>
              <div>
                <Link>
                  <FaFacebook className=" w-6 h-6 primary-text-color" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
