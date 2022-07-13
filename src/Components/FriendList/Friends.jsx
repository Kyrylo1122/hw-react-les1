import { Box } from '../Box';
import { Status } from './FriendsList.styled';
import PropTypes from 'prop-types';
export const Friends = ({ friendsArr }) =>
  friendsArr.map(e => (
    <Box
      key={e.id}
      display="flex"
      alignItems="center"
      border="normal"
      p={4}
      borderRadius="normal"
      width="300px"
      m={3}
      boxShadow="normal"
    >
      <Status isOnline={e.isOnline}></Status>
      <img src={e.avatar} alt="User avatar" width="48" />
      <p>{e.name}</p>
    </Box>
  ));
Status.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};
