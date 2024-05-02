"use client"
import ContactForm from "src/app/components/Base/ContactForm";
import NavBar from "src/app/components/Base/NavBar";
import Footer from "src/app/components/Base/Footer";
import withAuth from "src/app/middleware/withAuth";

function ContactUs() {
  return (
    <>
      <NavBar />
      <ContactForm />
      <Footer />
    </>
  );
}

export default withAuth(ContactUs);