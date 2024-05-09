import React, { useEffect, useRef, useState } from 'react';

// EmailJS
import emailjs from '@emailjs/browser';

// MUI
import { FormControl, FormLabel, TextField, Button, InputLabel, OutlinedInput } from '@mui/material';

export default function Contact() {  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form)

    emailjs
      .sendForm(
        'service_u3wqqhx',
        'contact_form',
        form.current, {
        publicKey: '_3vYKPJT8JGclpS_F',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div>
        <div className='form-container'>
          <h1 className='contact-title'>Get In Touch</h1>
          <form ref={form} onSubmit={sendEmail}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <TextField id="name" variant="outlined" name='user_name' />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <TextField id='email' variant='outlined' name='user_email'></TextField>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel htmlFor='message'>Message</FormLabel>
              <TextField
                id="message"
                variant='outlined'
                multiline
                rows={4}
              />
            </FormControl>
            <Button
              id='send-email-btn'
              type="submit"
              value="Send"
              variant="contained"
              // sx={{width: '50%'}}  
            >Send</Button>
          </form>
        </div>
      </div>
    </>
  )
}