import { useState } from "react";
// import { useScreen } from "../contexts/DeviceContext";
// import { BsLinkedin, BsGithub } from "react-icons/bs";
import Section from "./Section";
import ContactForm from "./ContactForm";

const Contact = ({ contactRef, style }) => {
  const [headingsHeight, setHeadingsHeight] = useState(0);

  return (
    <Section
      id="contact"
      sectionRef={contactRef}
      style={style}
      heading="Contact"
      subHeading="Send Me a Message!"
      contentWrapper={false}
      headingsHeight={(height) => setHeadingsHeight(height)}
    >
      <ContactForm headingsHeight={headingsHeight} />
    </Section>
  );
};
export default Contact;
