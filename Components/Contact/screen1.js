/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import NormalCard from "/src/components/cards/normal";
"use client";

import NormalCard from "@/Components/Cards/contact_card";
import { useState } from "react";




export default function Screen1({
  content1 = "",
  content2 = "",
  form = "",
  content3 = "",
  content4 = "",
  content5 = "",
  content6 = "",
}) {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [number, setnumber] = useState();
  const [whereuhear, setwhereuhear] = useState();
  const [service, setservice] = useState();
  const [message, setmessage] = useState();

  async function sendEmail(name,email,number,whereuhear,service,message) {
    const data = {
      to: email,
      subject: `Client Enquiry for ${service}`,
      text: `Client's Name - ${name}\n\nClient's Email - ${email}\n\nClient's PH. Number - ${number}\n\nWhere client hear about us - ${whereuhear}\n\nService client require - ${service}\n\nClient's Message - ${message}`
    };

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Email sent");
    } else {
      console.error("Failed to send email:", response.status);
    }
  }

  
  const addNewClientToMongo =async(name,email,number,whereuhear,service,message)=>{

    const response = await fetch('/api/addNewClient',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,number,whereuhear,service,message}),
    })
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
  }


  return (
    <div
      className="
            grid lg:place-items-center
         pt-24 mx-[5%] max-lg:mx-0 max-lg:w-[100vw]
            "
    >
      <div
        className="
                flex justify-between gap-10
                border-2 p-10 
               max-lg:h-[100%] h-fit w-full bg-[--grey] rounded-xl max-lg:rounded-b-xl max-lg:rounded-t-none max-lg:flex-col
                "
      >
        <div
          className="
                    flex flex-col items-start max-lg:items-center w-full
                    "
        >
          <section
            className="
                        py-2 px-6 rounded-[20px]
                        gradient-bg text-white
                        "
          >
            <p>{content1}</p>
          </section>
          <section
            className="
                        py-2
                        text-4xl xl:text-5xl font-stretched
                        "
          >
            <h1 className="my-1 font-bold">{content2}</h1>
          </section>

          {/* Contact form starts here */}
          <section
            className=" contact-form
                        flex flex-wrap justify-between gap-y-6
                        lg:my-8 max-lg:my-5 max-lg:flex-col w-full
                        "
          >
            <section
              className="
           w-[100%]
            flex flex-col"
            >
              <strong>
                
                Your Name*
              </strong>
              <input
                className={`
                p-4 bg-transparent border-2 rounded-md
                `}
                type="text"
                placeholder="Enter your full name"
                required
                onChange={(e) => {
                  setname(e.target.value);
                }}
                value={name}
              />
            </section>

            <section
              className="
           w-[100%]
            flex flex-col"
            >
              <strong>
                
                Your email*
              </strong>
              <input
                className={`
                p-4 bg-transparent border-2 rounded-md
                `}
                type="text"
                placeholder="Enter your email address"
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
              />
            </section>

            <section
              className="
           w-[100%]
            flex flex-col"
            >
              <strong>
                
                Phone number*
              </strong>
              <input
                className={`
                p-4 bg-transparent border-2 rounded-md
                `}
                type="number"
                placeholder="Enter your mobile with country code"
                required
                onChange={(e) => {
                  setnumber(e.target.value);
                }}
                value={number}
              />
            </section>

            <section
              className="
           w-[100%]
            flex flex-col"
            >
              <strong>
                
                How did you hear about us*
              </strong>
              <input
                className={`
                p-4 bg-transparent border-2 rounded-md
                `}
                type="text"
                placeholder="Google, Meta, X, Ads, etc"
                required
                onChange={(e) => {
                  setwhereuhear(e.target.value);
                }}
                value={whereuhear}
              />
            </section>

            <section
              className="
           w-[100%]
            flex flex-col"
            >
              <strong>
                
                What kind of service are you looking for*
              </strong>
              <input
                className={`
                p-4 bg-transparent border-2 rounded-md
                `}
                type="text"
                placeholder="Subject"
                required
                onChange={(e) => {
                  setservice(e.target.value);
                }}
                value={service}
              />
            </section>

            <section
              className="
           w-[100%]
            flex flex-col"
            >
              <strong>
                
                Message*
              </strong>
              <input
                className={`
                p-4 bg-transparent border-2 rounded-md
                `}
                type="text"
                placeholder="A short description if possible..."
                required
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
                value={message}
              />
            </section>
          </section>
          {/* Contact Form End */}

          <section
            className="lg:p-2 
                        bg-[url(/imgs/home/btn_bg.svg)] bg-no-repeat bg-contain bg-left max-lg:flex items-center
                        "
          >
            <button
              className="
                            grid place-items-center
                            text-white p-8
                            "
              onClick={() => {
                sendEmail(name,email,number,whereuhear,service,message);
                addNewClientToMongo(name,email,number,whereuhear,service,message)
                setname("")
                setemail("")
                setmessage("")
                setnumber("")
                setservice("")
                setwhereuhear("")
                setmessage("")
              }}
            >
              Send message
            </button>
          </section>
        </div>
        <div
          className="
                    flex flex-col gap-8"
        >
          <NormalCard heading={content3} content={content4} />
          <NormalCard
            heading={content5}
            content={content6}
            className="gradient-bg"
          />
        </div>
      </div>
    </div>
  );
}
