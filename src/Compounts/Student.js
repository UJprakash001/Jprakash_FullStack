import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button } from '@mui/material';

export default function Student() 
{
    const[name,setname]= useState('')
    const[address,setaddress]=  useState('');
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Constant-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student added")
        })
        }

    
    return (
   <Container>

    <Box
      
    component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate                    
      autoComplete="off"
    >
        <h1 style={{color:"Pink"}}><u>Add Student</u></h1>
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
        value={name}
        onChange={(e)=>setname(e.target.value)}/>
      
      <TextField id="outlined-basic" label="Student Address" variant="outlined"  fullWidth
      value={address}
      onChange={(e)=>setaddress(e.target.value)}
      />
      
      <Button variant="contained" onClick={handleClick}>Submit</Button>
      
    </Box> </Container>
  );
}