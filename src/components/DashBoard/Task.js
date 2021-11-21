import {CardContent, Typography} from "@mui/material";
import {useContext, useEffect} from "react";
import User from "../common/User";
import useStore from "../../hooks/useStore";

export default function Task({task}) {
    useEffect(()=> {
        console.log(task, "123123")
    },[])
    return(
        <CardContent>
            <Typography color="textPrimary" gutterBottom style={{fontSize: 18}}>
                {task?.title}
            </Typography>
            <Typography color="textPrimary" gutterBottom >
                {task?.description}
            </Typography>
            <User user={task.assignee}/>
        </CardContent>
    )
}

