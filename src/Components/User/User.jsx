import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { app } from '../../base';


    const User = () => {
        const { handleSubmit,register } = useForm();
      
        const onSubmit = data => {
        console.log(data)
        }
      
        return (
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <input
              type="file"
              name='image'
              {...register('value_name')}
              required
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<CloudUploadIcon />}
              type="submit"
            >
              Upload
            </Button>
          </form>
        );
      };

export default User

