import { Box } from "../Components/Box";
import { Title, Text, Stats, Amount } from "./Profile.styled";
import PropTypes from "prop-types";

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <Box width={300} bg="grey">
    <Box textAlign="center" bg="white" pb={5}>
      <Box
        src={avatar}
        alt="User avatar"
        width={1}
        borderRadius="50%"
        as="img"
      />
      <Title className="name">{username}</Title>
      <Text className="tag">@{tag}</Text>
      <Text className="location">{location}</Text>
    </Box>

    <Box display="flex" width={0}>
      <Box
        display="flex"
        flexDirection="column"
        border="normal"
        alignItems="center"
        width={0}
        p={4}
      >
        <Stats className="label">Followers</Stats>
        <Amount className="quantity">{stats.followers}</Amount>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        border="normal"
        alignItems="center"
        width={0}
        p={4}
      >
        <Stats className="label">Views</Stats>
        <Amount className="quantity">{stats.views}</Amount>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        border="normal"
        alignItems="center"
        width={0}
        p={4}
      >
        <Stats className="label">Likes</Stats>
        <Amount className="quantity">{stats.likes}</Amount>
      </Box>
    </Box>
  </Box>
);
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
