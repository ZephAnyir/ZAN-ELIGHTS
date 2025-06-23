export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  try {
    // Use Formspree for reliable email delivery
    const response = await fetch('https://formspree.io/f/xpwzgqpb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone || 'Not provided',
        service: service || 'Not specified',
        message: message,
        _replyto: email,
        _subject: `New Contact Form: ${name} - ${service || 'General Inquiry'}`
      })
    });

    if (response.ok) {
      res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully! We will respond within 24 hours.' 
      });
    } else {
      throw new Error('Formspree API failed');
    }
    
  } catch (error) {
    console.error('Email error:', error);
    
    // Log for manual follow-up
    console.log('CONTACT FORM - REQUIRES MANUAL FOLLOW-UP:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please contact us via WhatsApp or phone.' 
    });
  }
}