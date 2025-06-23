import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';

export default function Terms() {
  const lastUpdated = "December 2024";

  return (
    <>
      <Head>
        <title>Terms of Service | ZAN E-lite Visuals</title>
        <meta name="description" content="Terms of Service for ZAN E-lite Visuals - Read our service terms, conditions, and policies for photography and videography services." />
      </Head>

      <HeroSection 
        title="Terms of Service"
        subtitle="Important terms and conditions for our photography and videography services"
      />

      <section className="section-padding bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-invert dark:prose-invert light:prose-gray max-w-none"
          >
            <div className="mb-8 p-6 glass rounded-2xl">
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-0">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">1. Agreement to Terms</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  By engaging ZAN E-lite Visuals for photography and videography services or using our website, you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you (the "Client") and ZAN E-lite Visuals (the "Company").
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">2. Services Offered</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-4">
                  ZAN E-lite Visuals provides professional photography and videography services including:
                </p>
                <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                  <li>Wedding photography and videography</li>
                  <li>Portrait and graduation photography</li>
                  <li>Event coverage and documentation</li>
                  <li>Commercial and brand photography</li>
                  <li>Content creation and social media visuals</li>
                  <li>Video production and editing services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">3. Booking and Contracts</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gold-400 dark:text-gold-400 light:text-gold-600">Booking Process</h3>
                    <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                      <li>All bookings require a signed contract and deposit</li>
                      <li>Dates are reserved only upon receipt of deposit</li>
                      <li>Contract terms may vary based on service type</li>
                      <li>Changes to bookings must be confirmed in writing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gold-400 dark:text-gold-400 light:text-gold-600">Deposits and Payments</h3>
                    <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                      <li>A 50% deposit is required to secure booking</li>
                      <li>Final payment is due before or on the day of service</li>
                      <li>Late payments may incur additional charges</li>
                      <li>Payment methods: Bank transfer, M-Pesa, cash</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">4. Cancellation and Refund Policy</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gold-400 dark:text-gold-400 light:text-gold-600">Client Cancellation</h3>
                    <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                      <li>30+ days before event: 50% refund of deposit</li>
                      <li>15-29 days before event: 25% refund of deposit</li>
                      <li>Less than 14 days: No refund</li>
                      <li>Weather-related cancellations are handled case-by-case</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gold-400 dark:text-gold-400 light:text-gold-600">Company Cancellation</h3>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                      In the unlikely event we must cancel, we will provide a full refund and attempt to recommend alternative photographers when possible.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">5. Intellectual Property Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gold-400 dark:text-gold-400 light:text-gold-600">Copyright Ownership</h3>
                    <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                      <li>ZAN E-lite Visuals retains copyright to all images and videos</li>
                      <li>Clients receive usage rights for personal use</li>
                      <li>Commercial use requires separate licensing agreement</li>
                      <li>Images may not be altered without permission</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gold-400 dark:text-gold-400 light:text-gold-600">Portfolio Rights</h3>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                      We reserve the right to use images from your session for portfolio, marketing, and promotional purposes unless specifically requested otherwise in writing.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">6. Delivery and Timeline</h2>
                <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-3">
                  <li>Wedding photos: 4-6 weeks for full gallery</li>
                  <li>Portrait sessions: 2-3 weeks</li>
                  <li>Event coverage: 3-4 weeks</li>
                  <li>Sneak peeks provided within 48-72 hours</li>
                  <li>Rush delivery available for additional fee</li>
                  <li>Images delivered via secure online gallery</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">7. Client Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-3">
                  <li>Provide accurate event details and timeline</li>
                  <li>Secure necessary permissions for photography at venues</li>
                  <li>Inform us of any special requirements or restrictions</li>
                  <li>Ensure safety of photographer and equipment</li>
                  <li>Provide meal for photographer during long events (8+ hours)</li>
                  <li>Respect photographer's creative process and directions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">8. Limitation of Liability</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-4">
                  Our liability is limited to the total amount paid for services. We are not liable for:
                </p>
                <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                  <li>Lost or missed moments due to technical failures</li>
                  <li>Inclement weather affecting outdoor shoots</li>
                  <li>Venue restrictions limiting photography</li>
                  <li>Guest behavior affecting photo opportunities</li>
                  <li>Equipment failure beyond our control</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">9. Force Majeure</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  ZAN E-lite Visuals shall not be liable for any failure to perform due to unforeseen circumstances including but not limited to acts of God, natural disasters, government regulations, strikes, or other events beyond our reasonable control.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">10. Privacy and Data Protection</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  We are committed to protecting your privacy and personal data in accordance with applicable Kenyan data protection laws. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">11. Dispute Resolution</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  Any disputes arising from these terms shall be resolved through good faith negotiation. If resolution cannot be reached, disputes shall be subject to the laws of Kenya and jurisdiction of Kenyan courts.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">12. Modifications to Terms</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be posted on our website with an updated effective date. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20 dark:from-gold-900/20 dark:via-black dark:to-gold-900/20 light:from-gold-100/50 light:via-white light:to-gold-100/50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-gradient">13. Contact Information</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms of Service or to discuss your specific requirements:
                </p>
                <div className="space-y-2 text-gray-300 dark:text-gray-300 light:text-gray-700">
                  <p><strong>Email:</strong> zanelightvisuals@gmail.com</p>
                  <p><strong>Phone:</strong> +254 706 190246</p>
                  <p><strong>WhatsApp:</strong> +254 700 440330</p>
                  <p><strong>Location:</strong> Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 