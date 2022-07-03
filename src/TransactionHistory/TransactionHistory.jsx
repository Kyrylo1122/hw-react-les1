import PropTypes from "prop-types";
import { Transactions } from "./Transactions";
import { Box } from "../Components/Box";
import { Column } from "./TransactionHistory.styled";

export const TransactionHistory = ({ trans }) => {
  return (
    <Box as="table" width="300px" mt={6} border="normal">
      <thead>
        <tr>
          <Column>Type</Column>
          <Column>Amount</Column>
          <Column>Currency</Column>
        </tr>
      </thead>
      <Transactions items={trans} />
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
