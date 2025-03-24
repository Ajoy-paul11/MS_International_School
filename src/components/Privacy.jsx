import React from "react";
import ScrollToTop from "./ScrollToTop";

function Privacy() {
  const info = [
    {
      title: "Information We Collect",
      desc: "We may collect the following types of information:",
      items: [
        "Personal Information: Details such as your name, email address, phone number, and other contact information when you fill out forms or communicate with us.",
        "Usage Data: Information about your interactions with our website, including IP addresses, browser types, and pages visited.",
      ],
    },
    {
      title: "How We Use Your Information",
      desc: "The information we collect is used for:",
      items: [
        "Providing and improving our services.",
        "Responding to your inquiries and requests.",
        "Sending you updates, newsletters, and promotional materials, if you have opted to receive them.",
        "Analyzing website usage to enhance user experience.",
      ],
    },
    {
      title: "Data Security",
      desc: "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      title: "Sharing Your Information",
      desc: "We do not sell, rent, or lease your personal information to third parties. However, we may share information with:",
      items: [
        "Service providers who assist in our operations.",
        "Legal authorities when required by law.",
      ],
    },
    {
      title: "Cookies",
      desc: "Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze web traffic and personalize content. You can adjust your browser settings to refuse cookies, but this may affect your experience on our site.",
    },
    {
      title: "Your Rights",
      desc: "You have the right to:",
      items: [
        "Access the personal information we hold about you.",
        "Request corrections to any inaccuracies.",
        "Withdraw consent for processing your data.",
      ],
    },
    {
      title: "Changes to This Policy",
      desc: "We may update this Privacy Policy periodically. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top.",
    },
  ];

  return (
    <section>
      <ScrollToTop />
      <div className="container mx-auto px-8 py-12 text-black">
        <div className="my-4">
          <h1 className="text-4xl font-semibold text-center mb-6">
            Privacy Policy
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
              <ul>
                {item.items &&
                  item.items.map((subitem, i) => (
                    <li key={i} className="ml-4 list-disc">
                      {subitem}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Privacy;
