import {Table, TableHead, TableBody, TableCell, TableRow, styled} from '@mui/material';
import { useEffect, useState } from 'react';
import { getUsers } from '../service/api';

const StyledTable = styled(Table)`
width: "90%";
margin: 50px 50px 50px 50px;
`

const THead = styled(TableRow)`
background: #000;
& > th{
    font-size: 20px;
    color: #fff;
} 
`
const Tbody = styled(TableRow)`
& > td{
    font-size: 18px;
}
`

const AllUsers = () => {

    const getUsersDetails = async() => {
        console.log("hello")
        let response = await getUsers();
        console.log(response.data)
        setUsers(response.data);
    }

    useEffect(()=>{
        getUsersDetails();
    }
    , [])

    const [users, setUsers] = useState([]);

    return (
        <StyledTable>
            <TableHead>
                <THead>
                <TableCell>id</TableCell>
                    <TableCell>StudentName</TableCell>
                    <TableCell>Interests</TableCell>
                    <TableCell>Skills</TableCell>
                    <TableCell>Bio</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Branch</TableCell>
                    </THead>    
            </TableHead>

            <TableBody>
                {users.map(user => (
                    
                    <Tbody key={user.studentid}>
                       <TableCell>{user.studentid}</TableCell>
                        <TableCell>{user.studentName}</TableCell>
                        <TableCell>{user.interests}</TableCell>
                        <TableCell>{user.skills}</TableCell>
                        <TableCell>{user.bio}</TableCell>
                        <TableCell>{user.year}</TableCell>
                        <TableCell>{user.branch}</TableCell>
                    </Tbody>
                ))
}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;