import {useEffect, useState} from "react";
import {Box, Container, CssBaseline} from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar.tsx";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard.tsx";

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:5001/api/activities')
            .then(response => setActivities(response.data));
    }, []);

    return (
        <Box sx={{bgcolor: '#eeeeee'}}>
            <CssBaseline/>
            <NavBar/>
            <Container maxWidth='xl' sx={{mt: 3}}>
                <ActivityDashboard activities={activities}/>
            </Container>
        </Box>
    )
}

export default App
