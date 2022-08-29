import { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { blurDataURL } from "../utils/constatns";
import Loader from "../components/Loader";

const headerImg = "/images/headers/egowall-header.png";
const FORMSPARK_ACTION_URL = "https://submit-form.com/17vYhgQ6";

export default function ContactUs() {
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);
      const rr = await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      const res = await rr.json();
      clearForm();
      alert("Form submitted");
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setSubmitting(false);
    }
  };
  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <Layout className={"bg-gray-100 "}>
      <SEO
        title="Contact Us"
        url="https://egowallapps.com/contact-us"
        description="egowallapps"
      />
      <div className=" relative">
        <img
          alt="egowallapps"
          src={headerImg}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className="app-container py-[100px]">
        <h2 className="title mb-6">CONTACT US</h2>
        <div className="flex gap-10  justify-between flex-wrap md:flex-nowrap">
          <div className="w-full">
            <h2 className="text-appblack100 text-2xl font-semibold title-bottom-line left-line mb-10">
              GET IN TOUCH WITH US!
            </h2>
            <form
              className="flex flex-col gap-4 w-full  xl:w-[500px]"
              onSubmit={onSubmit}
              autoComplete="off"
            >
              <input
                placeholder="Name"
                className="focus:bg-inputFocus outline-none text-sm text-termsP rounded-3xl px-4 h-[60px]"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                placeholder="Email address"
                className="focus:bg-inputFocus outline-none text-sm text-termsP rounded-3xl px-4 h-[60px]"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                placeholder="Subject"
                className="focus:bg-inputFocus outline-none text-sm text-termsP rounded-3xl px-4 h-[60px]"
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <input
                placeholder="Message"
                className="focus:bg-inputFocus outline-none text-sm text-termsP rounded-3xl px-4 h-[100px]"
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              {submitting ? (
                <div className="h-[50px] flex justify-center">
                  <Loader className="mx-auto" />
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-appOrange rounded-3xl h-[50px] text-white"
                  disabled={submitting}
                >
                  Send
                </button>
              )}
            </form>
          </div>
          <div className="w-full flex justify-start  flex-col">
            <h2 className="text-appblack100 text-2xl font-semibold title-bottom-line left-line mb-10">
              CONTACT INFORMATION
            </h2>
            <p className="text-termsP mb-6 text-sm">
              Egowall welcomes your questions or comments. Please contact
              Egowall at:
            </p>
            <div className="flex text-termsP py-2 text-sm">
              <img
                src="images/location.svg"
                alt="egowallapps"
                className="w-4"
              />
              <p className="pl-2">
                Egowall LLC 3102 Oak Lawn Avenue Suite 505 Dallas, Texas 75219
              </p>
            </div>
            <div className="flex text-termsP py-2  text-sm">
              <img
                src="images/envelope.svg"
                alt="egowallapps"
                className="w-4"
              />
              <a href="mailto:admin@esmtgroup.com" className="pl-2">
                admin@esmtgroup.com
              </a>
            </div>
            <div className="flex text-termsP py-2  text-sm">
              <img src="images/fone.svg" alt="egowallapps" className="w-4" />
              <a href="tel:+1(214) 755-7000" className="pl-2">
                +1(214) 755-7000
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.379741832188!2d-96.8098352852924!3d32.80870188967739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9ecbfc403607%3A0x876118c61ac948b9!2s3102%20Oak%20Lawn%20Ave%20%23505%2C%20Dallas%2C%20TX%2075219%2C%20USA!5e0!3m2!1sen!2s!4v1591367024055!5m2!1sen!2s"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
