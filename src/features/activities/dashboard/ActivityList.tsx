import {Box} from "@mui/material";
import {ActivityCard} from "./ActivityCard.tsx";

type Props = {
    activities: Activity[]
}

export const ActivityList = ({activities}: Props) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            {activities.map(activity => (
                <ActivityCard activity={activity} key={activity.id}/>
            ))}
        </Box>
    );
};
