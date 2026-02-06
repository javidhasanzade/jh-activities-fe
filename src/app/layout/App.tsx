import {useEffect, useState} from "react";
import {Box, Container, CssBaseline} from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar.tsx";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard.tsx";

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:5001/api/activities')
            .then(response => setActivities(response.data));
    }, []);

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities.find(a => a.id === id));
    }

    const handleCancelSelectActivity = () => {
        setSelectedActivity(undefined);
    }

    return (
        <Box sx={{bgcolor: '#eeeeee'}}>
            <CssBaseline/>
            <NavBar/>
            <Container maxWidth='xl' sx={{mt: 3}}>
                <ActivityDashboard
                    activities={activities}
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    selectedActivity={selectedActivity}
                />
            </Container>
        </Box>
    )
}

export default App
