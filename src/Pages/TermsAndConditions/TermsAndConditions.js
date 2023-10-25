import React from "react";
import Navbar from "../../Components/Landing/Navbar/Navbar";
import Footer from "../../Components/Landing/Footer/Footer";

export default function TermsAndConditions() {
  const titleText =
    " font-Poppins font-bold text-[18px] text-[#212529] leading-[28px] ";
  const bodyText =
    " font-Poppins font-normal text-[18px] text-[#212529] leading-[28px] ";
  return (
    <>
      <Navbar />
      <div
        className='terms-content-wrapper flex flex-col gap-[24px] justify-center items-start max-w-[1109px] h-fit my-[126px] mx-auto px-[24px]
      
      tablet:my-[64px] tablet:mx-[24px] tablet:px-0

      mobile:my-[64px] mobile:mx-[16px] mobile-px-0

      '
      >
        <h1
          className='font-Poppins font-semibold text-[40px] text-[#212529] leading-[54px]
        
        tablet:text-[28px] tablet:leading-[40px]

        mobile:text-[28px] mobile:leading-[40px]
        '
        >
          Terms and Conditions
        </h1>
        <p className={titleText}>Last Updated: October 24, 2023</p>
        <p className={bodyText}>
          Please read these terms and conditions carefully before using Syne
          SaaS Project Management Software.
        </p>

        <p className={titleText}>1. Acceptance of Terms</p>
        <p className={bodyText}>
          By using the Syne SaaS Project Management Software ("Syne"), you agree
          to be bound by these Terms and Conditions. If you do not agree to
          these terms, please refrain from using Syne.
        </p>

        <p className={titleText}>2. Use of the Service</p>
        <p className={bodyText}>
          2.1. You must be at least 18 years old to use Syne. If you are using
          Syne on behalf of a company, you represent that you have the authority
          to bind the company to these terms.
        </p>
        <p className={bodyText}>
          2.2. You are responsible for maintaining the confidentiality of your
          account information and for all activities that occur under your
          account.
        </p>
        <p className={bodyText}>
          2.3. You agree not to use Syne for any illegal or unauthorized
          purpose.
        </p>

        <p className={titleText}>3. Privacy</p>
        <p className={bodyText}>
          3.1. Your use of Syne is also governed by our Privacy Policy, which is
          incorporated by reference into these terms.
        </p>

        <p className={titleText}>4. Subscription and Payment</p>
        <p className={bodyText}>
          4.1. Syne offers subscription plans. By subscribing to a plan, you
          agree to pay the fees associated with the plan.
        </p>
        <p className={bodyText}>
          4.2. Subscriptions will automatically renew unless you cancel your
          subscription at least 30 days before the end of the current
          subscription period.
        </p>
        <p className={bodyText}>4.3. All payments are non-refundable.</p>

        <p className={titleText}>5. Intellectual Property</p>
        <p className={bodyText}>
          5.1. Syne and its content are protected by copyright and other
          intellectual property laws. You may not copy, modify, distribute, or
          create derivative works from Syne or its content.
        </p>

        <p className={titleText}>6. Termination</p>
        <p className={bodyText}>
          6.1. We may terminate or suspend your account and access to Syne at
          our sole discretion, with or without notice.
        </p>
        <p className={bodyText}>
          6.2. You may cancel your subscription at any time, but no refunds will
          be provided.
        </p>

        <p className={titleText}>7. Warranty and Liability</p>
        <p className={bodyText}>
          7.1. Syne is provided "as is" without any warranty of any kind. We
          make no warranties, express or implied, regarding the reliability or
          accuracy of the software.
        </p>
        <p className={bodyText}>
          7.2. In no event shall Syne be liable for any indirect, consequential,
          or incidental damages.
        </p>

        <p className={titleText}>8. Changes to Terms</p>
        <p className={bodyText}>
          8.1. We reserve the right to modify these terms at any time. We will
          notify you of significant changes, and your continued use of Syne
          after the modifications will constitute your acceptance of the revised
          terms.
        </p>

        <p className={titleText}>9. Governing Law</p>
        <p className={bodyText}>
          9.1. These terms are governed by and construed in accordance with the
          laws of Canada and international intellectual property rights.
        </p>

        <p className={titleText}>10. Contact Information</p>
        <p className={bodyText}>
          If you have any questions or concerns regarding these terms, please
          contact us at syne@gmail.com.
        </p>
        <p className={bodyText}>
          By using Syne, you acknowledge that you have read, understood, and
          agreed to these Terms and Conditions.
        </p>
      </div>
      <Footer />
    </>
  );
}
