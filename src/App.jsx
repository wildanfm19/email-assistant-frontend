import { Box, Button, CircularProgress, Container, FormControl, InputLabel, Menu, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const App = () => {
  const [emailContent , setEmailContent] = useState('');
  const [tone , setTone] = useState('');
  const [generatedReply , setGeneratedReply] = useState('');
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState('');

  const handleSubmit = async () => {
    
  }

  return (
    <Container maxWidth='md' sx={{py: 4}}>
      <Typography variant='h3' component="h1" gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{mx: 3}}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          label = 'original Email Content'
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{mb: 2}}
        />

        <FormControl fullWidth sx={{mb: 2}}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
          value={tone || ''}
          label={"Tone (Optional)"}
          onChange={(e) => setTone(e.target.value)}>
            <MenuItem value= "none">None</MenuItem>
            <MenuItem value= "profesional">Profesional</MenuItem>
            <MenuItem value= "casual">Casual</MenuItem>
            <MenuItem value = "friendly">Friendly</MenuItem>


          </Select>
        </FormControl>

        <Button 
        variant='contained'
        onClick={handleSubmit}
        disabled= {!emailContent || loading}>
          {loading ? <CircularProgress size={24}/> : "Generate Reply"}
        </Button>
      </Box>
    </Container>
  )
}

export default App