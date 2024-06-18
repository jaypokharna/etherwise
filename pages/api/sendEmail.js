import transporter from "@/utils/nodemailerConfig";

export default async function handler(req, res) {
  // Assuming req.body contains email data (to, subject, text, etc.)
  const { to, subject, text } = req.body;

  console.log('Email Request Received')

  // Create email options
  const mailOptions = {
    from: 'contact@etherwise.io',
    to,
    subject : "Excited to Connect with You!",
    // text : `Dear ${text.name},\nThank you for reaching out to Etherwise! We are thrilled to receive your inquiry and look forward to exploring how we can assist you with our services.\n\nWe appreciate the details you’ve provided and are eager to understand your needs better. To make scheduling easier, please use the link below to book a time slot that works best for you: \n ${(<a href="https://calendar.app.google/tv84L8fKwagreN1z8">Book a Meeting with Us</a>)}\n\nIf you have any immediate questions or additional information you’d like to share, please don’t hesitate to include that as well.\n\nWe look forward to connecting with you soon!\n\nBest regards,\nAbhijeet \nFounder & CEO\nEtherwise`
    html: `
    <p>Dear <b>${text.name ? text.name : 'Client' }</b>,</p>
    <p>Thank you for reaching out to Etherwise! We are thrilled to receive your inquiry and look forward to exploring how we can assist you with our services.</p>
    <p>We appreciate the details you’ve provided and are eager to understand your needs better. To make scheduling easier, please use the link below to book a time slot that works best for you:</p>
    <p><a href="https://calendar.app.google/tv84L8fKwagreN1z8">Book a Meeting with Us</a></p>
    <p>If you have any immediate questions or additional information you’d like to share, please don’t hesitate to include that as well.</p>
    <p>We look forward to connecting with you soon!</p>
    <p>Best regards,<br>Abhijeet<br>Founder & CEO<br>Etherwise</p>
  `
  };

  const personalMailOptions = {
    from:'contact@etherwise.io',
    to : 'contact@etherwise.io',
    subject,
    text : `${text.name ? `Client's Name - ${text.name}\n\nClient's Email - ${text.email}\n\nClient's PH. Number - ${text.number}\n\nWhere client hear about us - ${text.whereuhear}\n\nService client require - ${text.service}\n\nClient's Message - ${text.message}` :  `Client Email - ${text.email}`}`
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    const personalInfo = await transporter.sendMail(personalMailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}
