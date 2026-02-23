import {Grid} from "@mui/material";
import {ActivityList} from "./ActivityList";
import {ActivityDetails} from "../details/ActivityDetails.tsx";
import {ActivityForm} from "../form/ActivityForm.tsx";

type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
}

export default function ActivityDashboard({activities, selectActivity, cancelSelectActivity, selectedActivity}: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </Grid>
            <Grid size={5}>
                {selectedActivity &&
                    <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}/>}
            <ActivityForm />
            </Grid>
        </Grid>
    )
}