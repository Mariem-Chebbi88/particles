"use client"
import { FormEvent, useState } from 'react';

const MailchimpForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Your Mailchimp action URL
  const mailchimpURL =
    'https://gmail.us22.list-manage.com/subscribe/post?u=d959a0180f23e7f16d921cd78&amp;id=5f2200af5c&amp;f_id=00cdd7e1f0';

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    // Mailchimp requires data to be submitted in form-data format, so we're going to use URLSearchParams
    const formData = new URLSearchParams();
    formData.append('EMAIL', email);

    fetch(mailchimpURL, {
      method: 'POST',
      mode: 'no-cors', // Mailchimp form is external, so no-cors is needed
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })
      .then(() => {
        setMessage('Thank you for subscribing!');
        setEmail(''); // Clear email field after successful submission
      })
      .catch(() => {
        setMessage('Something went wrong. Please try again.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MailchimpForm;
