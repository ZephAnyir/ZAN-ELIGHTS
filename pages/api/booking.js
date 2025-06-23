import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, service, date, time, location, guests, budget, message } = req.body;

  if (!name || !email || !phone || !service || !date) {
    return res.status(400).json({ message: 'Name, email, phone, service, and date are required' });
  }

  try {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content for booking
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'zanelightvisuals@gmail.com',
      subject: `New Booking Request: ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #ffc107; margin-bottom: 20px; text-align: center;">🎉 New Booking Request</h2>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #333; margin-bottom: 15px; border-bottom: 2px solid #ffc107; padding-bottom: 5px;">👤 Client Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ffc107;">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #ffc107;">${phone}</a></p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #333; margin-bottom: 15px; border-bottom: 2px solid #ffc107; padding-bottom: 5px;">📸 Service Details</h3>
              <p><strong>Service:</strong> <span style="color: #ffc107; font-weight: bold;">${service}</span></p>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Time:</strong> ${time || 'Not specified'}</p>
              <p><strong>Location:</strong> ${location || 'Not specified'}</p>
              <p><strong>Number of Guests:</strong> ${guests || 'Not specified'}</p>
              <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            </div>
            
            ${message ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #333; margin-bottom: 15px; border-bottom: 2px solid #ffc107; padding-bottom: 5px;">💬 Additional Message</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107;">
                <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            ` : ''}
            
            <div style="background-color: #ffc107; color: #000; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0;">🎯 Next Steps:</h4>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Contact client within 24 hours</li>
                <li>Confirm availability for ${date}</li>
                <li>Discuss package details and pricing</li>
                <li>Send booking contract if agreed</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This booking request was submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </p>
              <p style="color: #666; font-size: 12px; margin: 10px 0 0 0;">
                From ZAN E-lite Visuals booking system
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
NEW BOOKING REQUEST

Client Information:
Name: ${name}
Email: ${email}
Phone: ${phone}

Service Details:
Service: ${service}
Date: ${date}
Time: ${time || 'Not specified'}
Location: ${location || 'Not specified'}
Number of Guests: ${guests || 'Not specified'}
Budget: ${budget || 'Not specified'}

${message ? `Additional Message:\n${message}\n` : ''}

Next Steps:
- Contact client within 24 hours
- Confirm availability for ${date}
- Discuss package details and pricing
- Send booking contract if agreed

---
This booking request was submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
From ZAN E-lite Visuals booking system
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Booking request submitted successfully! We will contact you within 24 hours to confirm details.' 
    });
    
  } catch (error) {
    console.error('Booking email error:', error);
    
    // Log for manual follow-up
    console.log('BOOKING REQUEST - REQUIRES MANUAL FOLLOW-UP:', {
      name,
      email,
      phone,
      service,
      date,
      time,
      location,
      guests,
      budget,
      message,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({ 
      success: false, 
      message: 'There was an error submitting your booking. Please contact us directly via WhatsApp or phone.' 
    });
  }
} 