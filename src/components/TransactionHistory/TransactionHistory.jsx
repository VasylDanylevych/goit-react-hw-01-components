import PropTypes from 'prop-types';
import { Transaction } from "components/Transaction/Transaction";
import { Container, TableHead, TableBody } from './TransactionsHistory.styled';



export const TransactionHistory = ({transactions}) => {
    return(
        <Container>
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>
            <TableBody>
                <Transaction transactions={transactions}/>
            </TableBody>
        </Container>
    )
};


TransactionHistory.propTypes = {
    transactions: PropTypes.array,
  };