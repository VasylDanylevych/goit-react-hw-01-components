// import PropTypes from 'prop-types';
import { Profile } from "components/Profile/Profile"


export const ProfileBoard = ({user}) => {
    return (
    <div>
            <Profile 
                key={user.username} 
                username={user.username} 
                tag={user.tag} 
                location={user.location}
                avatar={user.avatar}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes} 
            />
    </div>)
};

// ProfileBoard.propTypes = {
//     user: PropTypes.objectOf(
//         PropTypes.exact({
//             username: PropTypes.string.isRequired,
//             tag: PropTypes.string.isRequired,
//             location: PropTypes.string.isRequired,
//             avatar: PropTypes.string.isRequired,
//             stats: PropTypes.objectOf(
//                 PropTypes.exact({
//                     followers: PropTypes.number.isRequired,
//                     views: PropTypes.number.isRequired,
//                     likes: PropTypes.number.isRequired,
//                 })
//             )
//     })),
// }