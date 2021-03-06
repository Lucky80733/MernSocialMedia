import React,{useState} from 'react'
import {Avatar,Button,Paper,Typography,Container,Grid} from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import {useHistory} from 'react-router-dom';
import Icon from './icon';
import {useDispatch} from 'react-redux';
import {GoogleLogin} from 'react-google-login';
import {signin,signup} from '../../actions/auth';
const Auth = () => {
     const dispatch = useDispatch();
    const classes=useStyles();
    const history=useHistory();
    const initialState=useState({firstName:'',lastName:'',email:'',password:'',confirmPassword:''});
    const [formData,setFormData]=useState(initialState);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(formData,history))
        } else {
            dispatch(signin(formData,history))
        }
        console.log(formData);
    }
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const googleSuccess= async (res) =>{
        const result = res?.profileObj;
        const token= res?.tokenId;

        try {
            dispatch({type:'AUTH', data:{result,token}});
            history.push('/');
        }catch (error) {
            console.log(error)
        }
    };
    const googleFailure= () =>{
        console.log('Login Failure')
    };
    const handleGoogleClick = () =>{

    }
    const handleSignUp = () =>{
        setSignUp(true);
    }
    const handleHaveAccount=()=>{
        setSignUp(false);
    }
    const handleShowPassword = ()=> setShowPassword((prevShowPassword)=>!prevShowPassword)
    const [showPassword,setShowPassword]=useState(false);
    const [isSignUp,setSignUp]=useState(false);
    return (
        <Container component="main" maxwidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up': 'Sign In' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange}  half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text" :"password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                 
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                        clientId="your google client id"
                        render={(renderProps)=>(
                            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" 
                            
                            > Google Login</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    {isSignUp ? <Button onClick={handleHaveAccount} fullWidth variant="contained" color="primary" className={classes.signUp}>Already Have an Account? Sign In </Button>: <Button onClick={handleSignUp} fullWidth variant="contained" color="primary" className={classes.signUp}>
                        Sign Up
                    </Button> }
                </form>
            </Paper>
        </Container>
    );
};

export default Auth
