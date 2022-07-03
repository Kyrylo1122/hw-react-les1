import { TransactionLayer } from "./TransactionHistory.styled";
import { Box } from "../Components/Box";

export const Transactions = ({ items }) => {
  return items.map(({ id, type, amount, currency }) => {
    return (
      <Box key={id} as="tbody" textAlign="center" bg="primary">
        <tr>
          <TransactionLayer>{type}</TransactionLayer>
          <TransactionLayer>{amount}</TransactionLayer>
          <TransactionLayer>{currency}</TransactionLayer>
        </tr>
      </Box>
    );
  });
};
