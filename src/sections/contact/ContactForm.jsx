import { faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, InputAdornment, Stack, styled, TextField, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import MainButton from '../../components/MainButton'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ContactForm = () => {
    const formRef = useRef(null)
    const theme = useTheme()

    const methods = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            message: ''
        }
    })

    const { handleSubmit, register } = methods

    const onSubmit = (values) => {
        console.log(values);
    }

    useEffect(() => {
        const formEl = formRef.current
        gsap.fromTo('.form-input', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, stagger: 0.5, scrollTrigger: { trigger: formEl } })
        gsap.fromTo('.submit-btn', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 2.5, scrollTrigger: { trigger: formEl } })
    }, [])


    return (
        <Stack alignItems='center' width={{ xs: '100%', md: '50%' }} pt={3} gap='20px 0' ref={formRef}>
            <Typography variant='h2'>Send me an <Typography component='span' color='primary' variant='h2'>Message</Typography></Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CssTextField
                            {...register('fullname')}
                            fullWidth
                            label='Fullname'
                            placeholder='ex: Tran Son'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon icon={faPen} color={theme.palette.text.primary} />
                                    </InputAdornment>
                                ),
                            }}
                            className='form-input'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CssTextField
                            {...register('email')}
                            fullWidth
                            label='Email'
                            placeholder='ex: abc@gmail.com'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon icon={faEnvelope} color={theme.palette.text.primary} />
                                    </InputAdornment>
                                ),
                            }}
                            className='form-input'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField
                            {...register('message')}
                            fullWidth
                            multiline
                            rows={5}
                            label='Message'
                            placeholder='Write your message'
                            className='form-input'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack>
                            <MainButton className='submit-btn' type='submit' colorType='primary' customStyle={{ alignSelf: { xs: 'center', md: 'flex-end' }, px: 5 }}>Send</MainButton>
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </Stack>
    )
}

const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.text.primary,
        },
    },
    '&.MuiFormLabel-root': {
        color: theme.palette.text.primary
    }
}));

export default ContactForm