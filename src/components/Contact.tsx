import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Contact() {
  const [name, setName] = useState('');
  
  return (
    <div id="contact" style={{ padding: '2rem', backgroundColor: '#f8f9fa' }}>
      <h1>Test Contact Field</h1>
      <Box>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p style={{ marginTop: '1rem', color: '#333' }}>
          Typed: <strong>{name}</strong>
        </p>
      </Box>
    </div>
  );
}

export default Contact;
