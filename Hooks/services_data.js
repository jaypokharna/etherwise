const useServicesData = () => {
  let data = [
    {
      content1: "What we offer",
      content2: "Our Services",
      content3:
        "Etherwise helps you unify your brand identity by collecting, storing and distributing design tokens and assets — automatically.",
      cards: [
        {link : "/imgs/icons/icons/web-scraping-service-icon.webp",
          heading: "Python Development for Data Automation",
          content:
            "Leverage our Python expertise to develop tailored solutions that meet a wide range of automation needs. Whether you're looking to automate routine scripting tasks, extract valuable data through web scraping, or implement complex data processing workflows, we've got it covered. Our customized approach ensures that each solution enhances efficiency and aligns perfectly with your specific business objectives.",
        },
        {link : "/imgs/icons/icons/custom-ai-solutions-service-icon.png",
          heading: "AI-Driven Process Optimization",
          content:
            "Transform your business operations with custom AI solutions designed for diverse applications. Automate content generation pipelines to streamline creation across platforms, enhance customer service with intelligent response systems, and utilize predictive analytics for market trends and behavior insights. Each solution is tailored to integrate seamlessly with your existing processes, boosting operational efficiency and effectiveness.",
        },
        {link : "/imgs/icons/icons/chatbot-development-service.png",
          heading: "Custom Chatbot Development",
          content:
            "Create intelligent chatbots tailored specifically to your business needs. Our chatbots enhance customer interactions with advanced natural language processing capabilities, providing instant, effective support. Designed for versatility, they can serve a wide range of functions from customer service to sales enhancement, integrating seamlessly into your existing digital environment to improve engagement and operational efficiency.",
        },
      ],
    },
    {
      content1: "FAQs",
      content2: "GOT QUESTIONS? WE'VE GOT THE ANSWERS!",
      cards: [
        {
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eorem ipsum dolor sit amet.",
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eorem ipsum dolor sit amet.",
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eorem ipsum dolor sit amet.",
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eorem ipsum dolor sit amet.",
        },
      ],
    },
    {
      content1: "",
      content2: "GET USEFUL INSIGHTS OF INDUSTRY",
      content3:
        "Your Qusestions, Answered Find Clarity and Confidence in Your Shopping Experience wtih Our Comporehensive FAQs",
      cards: [
        {
          img: "/imgs/blogs/blog1.png",
          date: "15 Sep, 2023",
          heading: "Importance of branding in web design",
          content:
            "Harness the power of Python with Etherwise. Our expert Python developers craft robust and scalable solutions tailored to your specific needs, ensuring efficiency and flexibility in every line of code",
          link: "https://www.google.com/",
        },
        {
          img: "/imgs/blogs/blog1.png",
          date: "15 Sep, 2023",
          heading: "Importance of branding in web design",
          content:
            "We believe in turning challenges into opportunities. Our innovative solutions are tailored to meet the unique needs of our clients",
          link: "https://www.google.com/",
        },
        {
          img: "/imgs/blogs/blog1.png",
          date: "15 Sep, 2023",
          heading: "Importance of branding in web design",
          content:
            "The future is dynamic, and so are we. Etherwise embraces emerging technologies, staying at the forefront of industry trends. With a future-forward vision",
          link: "https://www.google.com/",
        },
      ],
    },
  ];

  return data;
};

export { useServicesData };
