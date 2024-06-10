import { useState } from "react";

import styles from "./Contact.module.css";
import Input from "../validInput/input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../validInput/valid.jsx";
import { useInput } from "../validInput/useInput.jsx";

function Contact(props) {
  //Valid thông tin trước khi gửi đi firebase
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    handleReset: handleNameReset,
    hasError: nameHasError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    handleReset: handleEmailReset,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: subjectValue,
    handleInputChange: handleSubjectChange,
    handleInputBlur: handleSubjectBlur,
    handleReset: handleSubjectReset,
    hasError: subjectHasError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));
  const {
    value: messageValue,
    handleInputChange: handleMessageChange,
    handleInputBlur: handleMessageBlur,
    handleReset: handleMessageReset,
    hasError: messageHasError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || nameHasError || subjectHasError) {
      return;
    } else {
      alert("Submit successfully");
      addMessage();
      handleNameReset();
      handleEmailReset();
      handleSubjectReset();
      handleMessageReset();
    }
  }
  //Kết thúc Valid

  //Add thông tin lên firebase
  const newMessage = {
    name: nameValue,
    email: emailValue,
    subject: subjectValue,
    message: messageValue,
  };
  async function addMessage() {
    const response = await fetch(
      "https://usermessage-d4cf2-default-rtdb.firebaseio.com/message.json",
      {
        method: "POST",
        body: JSON.stringify(newMessage),
      }
    );
  }
  //Hoàn tất add thông tin lên firebase

  return (
    <>
      <div className={styles.contact}>
        <div>
          {/* <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <form onSubmit={handleSubmit}>
            <div className={styles.contactInput}>
              <div>
                <Input
                  className={styles.formControl}
                  type="text"
                  placeholder="Name"
                  name="username "
                  onBlur={handleNameBlur}
                  onChange={handleNameChange}
                  value={nameValue}
                  error={nameHasError && "Please enter a valid name!"}
                />
                <Input
                  className={styles.formControl}
                  type="text"
                  placeholder="Email"
                  name="email"
                  onBlur={handleEmailBlur}
                  onChange={handleEmailChange}
                  value={emailValue}
                  error={emailHasError && "Please enter a valid email!"}
                />
                <Input
                  className={styles.formControl1}
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  onBlur={handleSubjectBlur}
                  onChange={handleSubjectChange}
                  value={subjectValue}
                  error={subjectHasError && "Please enter a valid subject!"}
                />
              </div>
              <textarea
                placeholder="Message"
                type="text"
                name="message"
                onBlur={handleMessageBlur}
                onChange={handleMessageChange}
                value={messageValue}
              ></textarea>
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
