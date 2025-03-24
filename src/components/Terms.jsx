import React from "react";
import ScrollToTop from "./ScrollToTop";

function Terms() {
  const info = [
    {
      title: "Acceptance of Terms",
      desc: "By accessing and using this website, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with these terms, please refrain from using the site.",
    },
    {
      title: "Use of Website",
      desc: "You agree to use this website solely for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use and enjoyment of the site.",
    },
    {
      title: "Intellectual Property",
      desc: "All content on this website, including text, images, logos, and graphics, is the property of MS International Public School and is protected by copyright laws. Unauthorized use or reproduction of this content is prohibited.",
    },
    {
      title: "User Content",
      desc: "If you submit any content to the website, such as comments or feedback, you grant MS International Public School a non-exclusive, royalty-free license to use, modify, and display that content. You are responsible for ensuring that your submissions do not violate any laws or infringe upon the rights of others.",
    },
    {
      title: "Privacy",
      desc: "Your use of this website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.",
    },
    {
      title: "External Links",
      desc: "Our website may contain links to external sites for your convenience. MS International Public School does not endorse or assume responsibility for the content, accuracy, or legality of these external sites. We recommend reviewing the terms and privacy policies of any third-party websites you visit.",
    },
    {
      title: " Limitation of Liability",
      desc: "MS International Public School shall not be held liable for any damages arising from the use or inability to use this website, including but not limited to direct, indirect, incidental, or consequential damages.",
    },
    {
      title: "Modifications",
      desc: "MS International Public School reserves the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of those changes.",
    },
    {
      title: "Governing Law",
      desc: "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Mandya, Karnataka. By using this website, you acknowledge that you have read, understood, and agree to the terms outlined in these Terms and Conditions.",
    },
  ];
  return (
    <section>
      <ScrollToTop />
      <div className="container mx-auto px-8 py-12 text-black">
        <div className="my-4">
          <h1 className="text-4xl font-semibold text-center mb-6">
            Terms and Conditions
          </h1>
          <p className=" text-xl px-4 lg:px-12">
            Welcome to MS International Public School's website. By accessing
            and using this site, you agree to the following terms and
            conditions:
          </p>
        </div>
        <div className="my-8 flex flex-col gap-6 px-4 lg:px-16">
          {info.map((item, index) => (
            <div key={index} className="my-4">
              <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
              <p className=" text-xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Terms;
