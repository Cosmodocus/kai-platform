import { useState } from 'react';

import { Button, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import {API} from '@/constants/API'

const ProfileSetupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const testuid="S8rs8ya2KhXGG8SB17wuv1Vf4uV2";

  const handleupdateemail = async (email) => {
    await fetch(API.UPDATEEMAIL, {
    method: 'POST',
    body: JSON.stringify({
       data:{
        uid:testuid,//need change for production
        email,
       }
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .catch((err) => {
       console.log(err.message);//need a pop out alert
    });
    };

  const handleupdatename = async (name) => {
    await fetch(API.UPDATENAME, {
    method: 'POST',
    body: JSON.stringify({
        data:{
        uid:testuid,//need change for production
        name,
        }
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .catch((err) => {
        console.log(err.message);//need a pop out alert
    });
    };

  const handleSubmit = () => {
    handleupdateemail(email);
    handleupdatename(name);
    router.push('/onboarding/2');
  };

  return (
    <Grid sx={{ p: 3, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Profile Setup
      </Typography>
      <Typography>Get started by setting up your profile</Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
        Next
      </Button>
    </Grid>
  );
};

export default ProfileSetupForm;
