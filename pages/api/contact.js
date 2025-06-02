// API endpoint for handling contact form submissions
export default function handler(req, res) {
  if (req.method === 'POST') {
    // In a real application, you would: 
    // 1. Validate the incoming data (req.body)
    // 2. Sanitize the data
    // 3. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 4. Store the submission in a database (optional)
    
    const { name, email, message, subject } = req.body;

    // Basic validation example (can be more sophisticated)
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Simulate email sending success
    console.log('Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // For now, we'll just return a success message as per user instruction.
    // Later, integrate with an actual email service.
    res.status(200).json({ message: 'Message received successfully! We will be in touch soon.' });

  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
