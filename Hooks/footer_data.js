import {
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsTwitterX,
} from "react-icons/bs";

const useFooterData = () => {
  let content1 = "Contact Us";
  let content2 = "Get In Touch";
  let content3 =
    "Don’t miss out on anything! Receive the latest news and product updates from Etherwise";

  let content4 = "Engineering Your Success Through Smart Automation";
  let socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/etherwise",
      icon: BsLinkedin,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/EtherwiseTech",
      icon: BsTwitterX,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61559262361470",
      icon: BsFacebook,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/etherwise.io/",
      icon: BsInstagram,
    },
  ];

  let content5 = {
    name: "QUICK ACCESS",
    items: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Blogs",
        link: "/blogs",
      },
      {
        name: "About us",
        link: "/about",
      },
    ],
  };
  let content6 = {
    name: "WHY CHOOSE US?",
    items: [
      {
        name: "Automation, Personalized",
        link: "/",
      },
      {
        name: "Dedicated Teams",
        link: "/",
      },
      {
        name: "Proactive Support",
        link: "/",
      },
      {
        name: "Seamless Integration",
        link: "/",
      }
    ],
  };
  let content7 = {
    name: "LEGAL",
    items: [
      {
        name: "Privacy Policy",
        link: "/",
      },
      {
        name: "Terms & Conditions",
        link: "/",
      },
    ],
  };
  return {
    content1,
    content2,
    content3,
    content4,
    socials,
    content5,
    content6,
    // content7,
  };
};

export { useFooterData };
