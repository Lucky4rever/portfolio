import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Title = styled.span`
  margin: 0px 10px 20px;

  font-size: 36px;
  font-weight: bolder;
`;

const ContactFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80%;
`;

const CustomLabel = styled.label`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;

  :nth-child(1) {
    width: 100%;
  }
  :nth-child(2) {
    width: 94%;
  }
  :nth-child(3) {
    width: 84%;
  }

  > span {
    font-size: 24px;
    font-weight: bold;
    margin: 5px 15px 0px;
  }
  
  > input, textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    margin: 10px;

    border: 2px solid transparent;
    outline: 1px solid var(--base-color);
    border-radius: 12px;
    font-size: 14px;
    line-height: 20px;

    :focus {
      border: 2px solid var(--important);
      outline: none;
    }
  }

  > textarea {
    resize: none;
    padding: 4px 8px;
  }
`;

const Submit = styled.button`
  width: fit-content;
  padding: 10px 45px;
  margin: 10px 15px;

  border: none !important;
  border-radius: 15px;
  color: var(--background);
  background-color: var(--important);
  font-size: 24px;

  :focus, :active {
    background-color: var(--important-action);
  }
`;

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zi230k9",
        "template_dc8e7sf",
        {
          from_name: form.name,
          to_name: "Snigur Pavlo",
          from_email: form.email,
          to_email: "snigur.pavlo@lll.kpi.ua",
          message: form.message,
        },
        "xGkUsjWky2Uy2HiEC"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <Title>Contact me.</Title>
      <ContactFormLayout ref={formRef} onSubmit={handleSubmit}>
        <CustomLabel>
          <span>Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
          />
        </CustomLabel>
        <CustomLabel>
          <span>Your email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
          />
        </CustomLabel>
        <CustomLabel>
          <span>Your Message</span>
          <textarea
            rows={4}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What you want to say?'
          />
        </CustomLabel>

        <Submit type='submit'> {loading ? "Sending..." : "Send"}</Submit>
      </ContactFormLayout>
    </>
  );
};

export default ContactForm;
