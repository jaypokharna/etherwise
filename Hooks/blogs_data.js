
const useBlogsData = () => {
    let data = [
      {
        content1: "Blogs",
        content2: "GET USEFUL INSIGHTS OF INDUSTRY",
        content3: "Etherwise helps you unify your brand identity by collecting, storing and distributing design tokens and assets - automatically.",
        cards: [
          {
            img: '/imgs/blogs/blog1/image1.png',
            date: "15 Sep, 2023",
            heading: "Chatbot: The Future of Customer Service is Here",
            content: "Harness the power of Python with Etherwise. Our expert Python developers craft robust and scalable solutions tailored to your specific needs, ensuring efficiency and flexibility in every line of code.",
            blogNumber : 1
          },
          {
            img: "/imgs/blogs/blog2/image1.png",
            date: "15 Sep, 2023",
            heading: "Custom AI Solutions: Tailoring Technology to Your Business Needs",
            content: "Imagine being able to predict your customers' needs before they even express them, use chatbots to provide instant, personalized customer service, streamline your operations with automated pipelining to save both time and money, and make data-driven decisions with pinpoint accuracy. ",
            blogNumber : 2
          },
          {
            img: "/imgs/blogs/blog3/image1.png",
            date: "15 Sep, 2023",
            heading: "Web Scraping: Unlocking Valuable Data for Business Insights",
            content: "Ever feel like you've explored every avenue to grow your business? You've analysed sales figures, experimented with marketing campaigns, and feel like you're missing a key piece. There's a treasure trove of data out there, just waiting to be discovered, and web scraping can be your secret weapon to find it.",
            blogNumber : 3
          },
          {
            img: "/imgs/blogs/blog4/image1.png",
            date: "15 Sep, 2023",
            heading: "The ROI of Automation: How Automated Pipelines Can Save Your Business Time and Money",
            content: "In the fast-paced world of business, time is money. Every second counts, and inefficiencies can add up to significant losses. This is where automation steps in as a game-changer, particularly through automated pipelines. But what exactly are automated pipelines, and how can they transform your business?",
            blogNumber : 4
          },
          
        ]
      },
    ];
  
    return data;
}
  
  export { useBlogsData };