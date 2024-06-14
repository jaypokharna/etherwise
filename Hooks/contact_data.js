
const useContactData = () => {
    let data = [
        {
            content1: "Get in touch",
            content2: "Contact Us",
            form: [
                {
                    name: "Your name",
                    required: true,
                    type: "text",
                    placeholder: "Enter your full name"
                },
                {
                    name: "Your email",
                    required: true,
                    type: "mail",
                    placeholder: "Enter your email address"
                },
                {
                    name: "Phone number",
                    required: false,
                    type: "number",
                    placeholder: "Enter your mobile with country code"
                },
                {
                    name: "How did you hear about us",
                    required: false,
                    type: "text",
                    placeholder: "Google, Meta, X, Ads, etc"
                },
                {
                    name: "What kind of service are you looking for",
                    required: false,
                    type: "text",
                    placeholder: "Subject"
                },
                {
                    name: "Message",
                    required: false,
                    type: "text",
                    placeholder: "A short description if possible..."
                },
            ],
            content3: "+91 7498120156",
            content4: "Call us directly if you need any urgent help. Our agents will help you",
            content5: "info@etherwise.com",
            content6: "Email us directly if you need any help. Our agents will help you.",
        }
    ];
  
    return data;
}
  
  export { useContactData };