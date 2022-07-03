import { Title } from "./Statistic.styled";
import { Box } from "../Components/Box";
import { Stat } from "./Data.Statistic";
import PropTypes from "prop-types";

export const Statistic = ({ title, stats }) => (
  <Box as="section" width="300px" border="normal" mt={5}>
    {title && <Title>{title}</Title>}

    <Box display="flex" width={0}>
      <Stat data={stats} />
    </Box>
  </Box>
);
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
