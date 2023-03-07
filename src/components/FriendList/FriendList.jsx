import PropTypes from 'prop-types';
import { Friends } from "components/Friend/Friend"
import { Container } from './FriendList.styled';



export const FriendsList = ({friends}) => {
    return(
        <Container>
            <Friends friends={friends}/>
        </Container>
    )
};



FriendsList.propTypes = {
    friends: PropTypes.array,
  };