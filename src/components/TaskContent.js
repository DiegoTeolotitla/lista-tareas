import { Grid, Header, Icon } from "semantic-ui-react";
import Task from "./Task";
export default function TaskContent(props) {
    const { tasks } = props;
    const { deleteTask } = props;

    if(tasks.length === 0){
        return null;
    }

    return(
        <Grid className="tasks-content">
            <Header as= "h2" icon textAlign="center">
                <Icon name="settings"/>
                Administra tus tareas
            </Header>
            <Grid.Row>
                {
                    tasks.map((task, index) => (
                        <Task 
                        task={task}
                        deleteTask = {deleteTask}
                        key={index}/>
                    ))
                }
            </Grid.Row>
        </Grid>
    )
}