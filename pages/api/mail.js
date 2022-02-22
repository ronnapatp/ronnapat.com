import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  // NOTE: Uncomment the below lines to make the code work

  try {
    await sendgrid.send({
      to: req.body.email, // Your email where you'll receive emails
      from: "noreply@ronnapat.me", // your website email address here
      subject: `[ Ronnapat Contact ] - We receive your contact form`,
      html: `
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <p><h2>Thanks for contacting Ronnapat Srivoravilai!</h2> <br /> we just receive you contact form and we will contact you back soon but if it pass 3 days and you didn't get any email back please contact again your form may lost </p>
              <small class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards,<br>Ronnapat Srivoravilai<br>Visit website : <a href="https://ronnapat.com" target="_blank">ronnapat.com</a><br>Support : <a href="mailto:support@ronnapat.me">support@ronnapat.me</a><br><br><small style="color: #808388;">This is auto mail from ronnapat.com please don't reply this email</small></small>
              </div>
      `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
