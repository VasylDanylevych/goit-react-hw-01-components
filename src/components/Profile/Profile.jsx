import PropTypes from 'prop-types';
import { Container, Description, Stats, Avatar } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <Container >
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </Description>

            <Stats>
                <li>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </Stats>
        </Container>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};