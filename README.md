# ZAN E-lite Visuals - Photography & Videography Portfolio

A modern, responsive, and beautiful portfolio website for ZAN E-lite Visuals, built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- Modern, responsive design with a stunning black, white, and gold theme
- Smooth animations and transitions with Framer Motion
- Optimized for performance and SEO
- Mobile-first approach with a fully responsive layout
- Easy-to-update content structure
- **Direct email contact form** - messages sent directly to zanelightvisuals@gmail.com
- Portfolio gallery with filtering
- Blog section (coming soon)

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Icons
- **Email Service**: Nodemailer with Gmail SMTP
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn
- Gmail account for email functionality

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zan-e-lite-visuals.git
   cd zan-e-lite-visuals
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   # Email Configuration (Required for contact form)
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-gmail-app-password
   
   # Site Configuration (Optional)
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_GA_MEASUREMENT_ID=YOUR_GA_ID
   ```

4. **Email Setup Instructions:**
   
   To enable the contact form to send emails directly to `zanelightvisuals@gmail.com`, you need to:
   
   a) Use a Gmail account (can be the same as zanelightvisuals@gmail.com)
   b) Enable 2-factor authentication on your Gmail account
   c) Generate an App Password:
      - Go to Google Account settings
      - Security → 2-Step Verification → App passwords
      - Generate a new app password for "Mail"
      - Use this password in EMAIL_PASS
   
   d) Set the environment variables:
      - EMAIL_USER: Your Gmail address
      - EMAIL_PASS: The app password you generated

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
.
├── components/         # Reusable UI components
├── pages/              # Application pages and API routes
│   └── api/           # API endpoints (including contact form)
├── public/             # Static files
│   ├── images/         # Image assets
│   └── videos/         # Video assets
├── styles/             # Global styles
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation
```

## 🎨 Customization

### Colors

The primary color scheme uses the following palette:

- **Black**: `#000000` (Background)
- **White**: `#FFFFFF` (Text)
- **Gold**: `#FFC107` (Accent)

You can customize these colors in `tailwind.config.js` under the `theme.extend.colors` section.

### Fonts

The project uses two main fonts:

1. **Inter** - For body text
2. **Playfair Display** - For headings

These are loaded via Google Fonts in `_app.js`.

## 📧 Contact Form Configuration

The contact form is configured to send emails directly to `zanelightvisuals@gmail.com`. The email includes:

- **Subject**: "New Contact Form: [Name] - [Service]"
- **Content**: 
  - Contact information (name, email, phone, service)
  - Customer message
  - Timestamp
  - Professional HTML formatting

**Important**: Make sure to set up the email credentials in your `.env.local` file before deploying.

## 🔧 Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-docs) from the creators of Next.js.

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import your project on Vercel
3. **Configure environment variables** (especially EMAIL_USER and EMAIL_PASS)
4. Deploy!

### Environment Variables for Production

Make sure to add these environment variables in your Vercel dashboard:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail app password

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Nodemailer Documentation](https://nodemailer.com/)

## 📬 Contact

For any questions or inquiries, please contact [your-email@example.com](mailto:your-email@example.com).
# ZAN-ELIGHTS