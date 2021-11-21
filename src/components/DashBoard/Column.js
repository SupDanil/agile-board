import {Draggable} from "react-beautiful-dnd";
import {Card} from "@mui/material";
import Task from "./Task";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

function getItemStyle(draggableStyle) {
    return{
        padding: 8,
        marginBottom: 8,
        ...draggableStyle
    }
}

function Column({section}) {
    useEffect(()=>{
        console.log(JSON.stringify(section.tasks))
    },[])
    return (
        <div>
            {section?.tasks?.map((task, index) => {
                return(
                    <Draggable draggableId={task.id} key={task.id} index={index}>
                        {(provided) => (
                            <Card
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(provided.draggableProps.style)}
                            >
                                <Task task={task}></Task>
                            </Card>
                        )}
                    </Draggable>
                )
            })}
        </div>
    )
}

export default observer(Column);