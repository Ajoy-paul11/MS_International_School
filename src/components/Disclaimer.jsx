import React from 'react'

function Disclaimer() {
    const info = [
        {
          title: "Accuracy of Information",
          desc: "While we strive to provide accurate and up-to-date information, MS International Public School makes no guarantees regarding the completeness, accuracy, or reliability of the content on this website. The information is provided 'as is' and may be subject to change without notice.",
        },
        {
          title: "External Links",
          desc: "Our website may contain links to external sites for your convenience. MS International Public School does not endorse or assume responsibility for the content, accuracy, or legality of these external sites. We recommend reviewing the terms and privacy policies of any third-party websites you visit.",
        },
        {
          title: "Limitation of Liability",
          desc: "MS International Public School shall not be held liable for any damages arising from the use or inability to use this website, including but not limited to direct, indirect, incidental, or consequential damages.",
        },
        {
          title: "Educational Content",
          desc: "The content provided on this website is intended for informational purposes only and should not be construed as professional advice. For specific concerns or guidance, please consult with the appropriate professionals.",
        },
        {
          title: "Privacy",
          desc: "We are committed to protecting your privacy. Please refer to our Privacy Policy for information on how we collect, use, and safeguard your personal data.",
        },
        {
          title: "Changes to the Disclaimer",
          desc: "MS International Public School reserves the right to modify this disclaimer at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of those changes.",
        },
      ];
  return (
    <section>
      <div className="container mx-auto px-8 py-12 text-black">
        <div className="my-4">
          <h1 className="text-4xl font-semibold text-center mb-6">Disclaimer</h1>
          <p className=" text-xl px-4 lg:px-12">
          Welcome to MS International Public School's website. By accessing and using this site, you agree to the following terms and conditions:
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
  )
}

export default Disclaimer