import transporter from "@/utils/nodemailerConfig";

export default async function handler(req, res) {
  // Assuming req.body contains email data (to, subject, text, etc.)
  const { to, subject, text } = req.body;

  // Create email options
  const mailOptions = {
    from: 'Etherwise',
    to,
    subject : "Custom response to client",
    text : "Custom response to client"
  };
  const personalMailOptions = {
    from: 'admin@therwise.io',
    to : 'pokharnajay@gmail.com',
    subject,
    text
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
