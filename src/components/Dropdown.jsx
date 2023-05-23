import { Button } from "@mui/material";
import { getUsers } from '../service/api';
import React from "react";
import { useEffect,useState } from "react";
import Select from "react-select";
import "./Dropdown.styles.css";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {

    const getUsersDetails = async() => {
        let response = await getUsers();
        setUsers(response.data);
    }

    useEffect(()=>{
        getUsersDetails();
    }
    , [])

    const [users, setUsers] = useState([]);

    const [College, setCollege] = useState(null);
    const [Year, setYear] = useState(null);
    const [Branch, setBranch] = useState(null);
    const navigate = useNavigate();

    const CollegeOptions = [
        {value: "CHAUDHARY DEVI LAL UNIVERSITY", label: "Chaudhary Devi Lal University"},
        {value: "KURUKSHETRA UNIVERSITY", label: "Kurukshetra University"}
    ]

    const YearOptions = [
        {value: 1, label: 1},
        {value: 2, label: 2},
        {value: 3, label: 3},
        {value: 4, label: 4}
    ]

    const BranchOptions = [
        {value: "CSE", label: "CSE"},
        {value: "ECE", label: "ECE"},
        {value: "EEE", label: "EEE"},
        {value: "ME", label: "ME"},
        {value: "CE", label: "CE"}
    ]
    return(
        <div className="Main">

            <Select options = {CollegeOptions} 
                    defaultvalue={College} 
                    placeholder="Select College" 
                    OnChange={setCollege}
                    isSearchable
                    noOptionsMessage = {()=>"College Not Found"}
                    className="College" />

            <Select options = {YearOptions} 
                    defaultvalue={Year} 
                    placeholder="Select Year" 
                    OnChange={setYear}
                    className="Year"/>

            <Select options = {BranchOptions} 
                    defaultvalue={Branch} 
                    placeholder="Select Branch" 
                    OnChange={setBranch}
                    isSearchable
                    noOptionsMessage = {()=>"Branch Not Found"}
                    className="Branch" />

            <Button className="button" variant="contained" onClick={()=>navigate("/cards")}>Submit</Button>
        </div>
    )
}