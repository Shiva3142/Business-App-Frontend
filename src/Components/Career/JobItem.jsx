import { Button } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function JobItem({data,index}) {
    function ShowDescription() {
        let jobDescription = document.getElementById(`jobDescription${index}`);
        let jobdetailsExpantionButton = document.getElementById(`jobdetailsExpantionButton${index}`);
        if (jobDescription.style.maxHeight === "0px") {
            jobDescription.style.maxHeight = "1200px";
            jobdetailsExpantionButton.style.display = "none";
        } else {
            jobDescription.style.maxHeight = "0px";
            jobdetailsExpantionButton.style.display = "block";
        }
    }
    return (
        <div className="JobItem">
            <div className="JobPreview">
                <div className="jobHeader">
                    <div className="jobplace">
                        <span>FULL TIME</span>
                        <span>{data.place}</span>
                    </div>
                    <h2>{data.title}</h2>
                </div>
                <div className="jobdescription">
                    {data.predescription}
                </div>
                <div className="salaryContainer">
                    <p>salery</p>
                    <span>{data.salery}</span>
                </div>
                <div className="jobdetailsExpantionButton" id={`jobdetailsExpantionButton${index}`}>
                    <Button variant="contained" onClick={ShowDescription}>
                        Details
                    </Button>
                </div>
            </div>
            <div id={`jobDescription${index}`} className="jobDescription">
                <h2>Job Description</h2>
                <p>
                {data.description}
                </p>
                <h2>Job Responsibilites</h2>
                <p>
                    {data.responsiblities}
                </p>
                {
                    data.duration?(<>
                    
                    <p>Duration : {data.duration} </p>
                    </>):(
                        <>
                        
                        </>
                    )
                }
                <h2>Qualification</h2>
                <ul>
                    {
                        data.qualifications.map((value,index)=>{
                            return(
                                <li key={index}>{value}</li>
                            )
                        })
                    }
                </ul>
                <div className="applybutton">
                    <Button variant="contained">APPLY</Button>
                </div>
                <div className="arrowup">
                    <ArrowBackIosIcon onClick={ShowDescription}/>
                </div>
            </div>
        </div>
    );
}

export default JobItem;
