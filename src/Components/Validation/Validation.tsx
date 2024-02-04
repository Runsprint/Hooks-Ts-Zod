import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import Box from '@mui/material/Box';



const Validation = () => {
  const navigation = useNavigate()
  const imageUrl = "https://images.unsplash.com/photo-1512386233331-f023884a92e8?q=80&w=3590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //validation of email and password
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),

});
type FormFields = z.infer<typeof schema>;// this code is for ts and check if schemas' types === formfields' types
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({

    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    navigation("User")
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    } 
   
  };

  return (
    <Box sx={{...Div,backgroundImage: `URL(${imageUrl})`}}>
      <Box sx={{...SecondDiv}}>
          <form  onSubmit={handleSubmit(onSubmit)} >
          <TextField id="outlined-basic"  {...register("email")} placeholder="Email"/>
        
          {errors.email && (
            <div style={{color:"red"}}>{errors.email.message}</div>
          )}
          <TextField {...register("password")} type="password" placeholder="Password"/>
          {errors.password && (
            <div style={{color:"red"}}>{errors.password.message}</div>
          )}
          <Button disabled={isSubmitting} type="submit" variant="contained">
            {isSubmitting ? "Loading..." : "Submit"}
          </Button>
          {errors.root && <div>{errors.root.message}</div>}
        </form>
      </Box>
        
    </Box>
   
  );
};

export default Validation;

const Div = {
  display: "flex",
  justifyContent:"center",
  height:"900px",
  alignItems: "center", 
}
const SecondDiv = {
  width: "250px",
 height: "250px",
 display: "flex",
 justifyContent: "center",
 alignItems:"center",


}