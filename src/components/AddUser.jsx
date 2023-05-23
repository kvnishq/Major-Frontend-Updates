import {FormGroup, FormControl, InputLabel, Input, Button, Typography, styled} from '@mui/material'

import {useState} from 'react';

import {addUser} from '../service/api'

import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 30px;
`;

const InitialValues = {
    StudentName:'',
    Interests:'',
    Skills:'',
    Bio:'',
    Year:'',
    Branch:''
}

const AddUser = () => {

    const [user, setUser] = useState(InitialValues);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async () => {
        JSON.stringify(user)
        await addUser(user);
        navigate('/students');
    }


    return (
        <Container>
            <Typography variant = 'h4'>Add User</Typography>
            <FormControl>
                <InputLabel>StudentName</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'studentName'/>
            </FormControl>
            <FormControl>
                <InputLabel>Interests</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'interests'/>
            </FormControl>

            <FormControl>
                <InputLabel>Skills</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'skills'/>
            </FormControl>

            <FormControl>
                <InputLabel>Bio</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'bio'/>
            </FormControl>

            <FormControl>
                <InputLabel>Year</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'year'/>
            </FormControl>

            <FormControl>
                <InputLabel>Branch</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = 'branch'/>
            </FormControl>

            <FormControl>
                <Button onClick = {() => addUserDetails()} variant = 'contained'>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;