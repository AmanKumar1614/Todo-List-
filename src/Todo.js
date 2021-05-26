import React from 'react'
import './Todo.css'
import { List,ListItem,ListItemText } from '@material-ui/core';


function Todo(props) {
    return (
        <List className="List">
            <ListItem>
                <ListItemText className="listitemtext" primary="Todo" secondary={props.text}/>

            </ListItem>

        </List>
             
            
        
    )
}

export default Todo
