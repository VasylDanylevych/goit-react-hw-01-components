import { Friends } from "components/Friend/Friend"
import { Container, Item, Marker } from './FriendList.styled';



export const FriendsList = ({friends}) => {
    return(
        <Container>
            <Friends friends={friends} item={Item} marker={Marker}/>
        </Container>
    )
}