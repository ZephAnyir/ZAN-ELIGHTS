import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const lastUpdated = "December 2024";

  return (
    <>
      <Head>
        <title>Privacy Policy | ZAN E-lite Visuals</title>
        <meta name="description" content="Privacy Policy for ZAN E-lite Visuals - Learn how we collect, use, and protect your personal information and photography data." />
      </Head>

      <HeroSection 
        title="Privacy Policy"
        subtitle="Your privacy and data protection are important to us"
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
                <h2 className="text-3xl font-bold mb-6 text-gradient">1. Introduction</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  ZAN E-lite Visuals ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our photography and videography services, visit our website, or interact with us through various channels.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gold-400 dark:text-gold-400 light:text-gold-600">Personal Information</h3>
                    <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                      <li>Contact information (name, email, phone number, address)</li>
                      <li>Event details and preferences</li>
                      <li>Payment and billing information</li>
                      <li>Emergency contact information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gold-400 dark:text-gold-400 light:text-gold-600">Visual Content</h3>
                    <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                      <li>Photographs and videos captured during sessions</li>
                      <li>Behind-the-scenes content</li>
                      <li>Client testimonials and reviews</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gold-400 dark:text-gold-400 light:text-gold-600">Technical Information</h3>
                    <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                      <li>Website usage data and analytics</li>
                      <li>Device information and IP addresses</li>
                      <li>Communication records (emails, messages)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-3">
                  <li>Providing photography and videography services</li>
                  <li>Processing bookings and payments</li>
                  <li>Communicating about your projects and events</li>
                  <li>Delivering final photos and videos</li>
                  <li>Marketing our services (with your consent)</li>
                  <li>Improving our website and service quality</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">4. Sharing Your Information</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-3">
                  <li><strong>With your consent:</strong> For portfolio display or marketing purposes</li>
                  <li><strong>Service providers:</strong> Third-party vendors who assist in our operations</li>
                  <li><strong>Legal requirements:</strong> When required by law or legal process</li>
                  <li><strong>Business transfers:</strong> In case of merger, acquisition, or asset sale</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">5. Data Security</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes secure storage systems, encrypted data transmission, and limited access protocols.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">6. Your Rights</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-4">
                  Under Kenyan data protection laws, you have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2">
                  <li>Access your personal data we hold</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Restrict processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">7. Retention Period</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Photos and videos are typically retained for 2-5 years unless otherwise specified in our service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">8. Cookies and Tracking</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and improve our services. You can manage cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">9. Third-Party Links</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">10. Children's Privacy</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  Our services are not directed to children under 18. We do not knowingly collect personal information from children without parental consent. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">11. Changes to This Policy</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20 dark:from-gold-900/20 dark:via-black dark:to-gold-900/20 light:from-gold-100/50 light:via-white light:to-gold-100/50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-gradient">12. Contact Us</h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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