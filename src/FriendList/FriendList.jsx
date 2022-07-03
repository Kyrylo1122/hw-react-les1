import { Box } from "../Components/Box";
import { Friends } from "./Friends";
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => (
  <Box as="ul" p={0} m={-3} mt={6}>
    <Friends friendsArr={friends} />
  </Box>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
