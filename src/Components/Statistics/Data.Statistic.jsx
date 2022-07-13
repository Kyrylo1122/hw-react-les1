import { Box } from 'Components/Box';
import { getRandomHexColor } from 'Components/Utils/getRandomHexColor';
export const Stat = ({ data }) =>
  data.map(e => (
    <Box
      key={e.id}
      width={4}
      pt={4}
      pb={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="normal"
      bg={getRandomHexColor()}
      as="li"
    >
      <span>{e.label}</span>
      <span>{e.percentage}</span>
    </Box>
  ));
