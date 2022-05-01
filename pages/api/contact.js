const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, phone, message } = req.body

  const clientEmail = {
    to: email,
    from: 'Elliott@coopallc.com',
    subject: `Submission was successful!`,
    html: `
      <p>Thank you for contacting us! We will be in touch shortly.</p>
      <p>Your message: ${message}</p>
    `
  }

  const userEmail = {
    to: 'Elliott@coopallc.com',
    from: 'Elliott@coopallc.com',
    subject: `New Message From - ${name}`,
    html: `
      <p>New message from ${email}: ${message}</p>
      <p>Their phone number: ${phone}</p>
    `
  }

  try {
    await sgMail.send(clientEmail)
    await sgMail.send(userEmail)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}