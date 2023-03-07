import PropTypes from 'prop-types';
import { Transaction } from "components/Transaction/Transaction";
import { Container, TabletHead, TabletBody } from './TransactionsHistory.styled';



export const TransactionHistory = ({transactions}) => {
    return(
        <Container>
            <TabletHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TabletHead>
            <TabletBody>
                <Transaction transactions={transactions}/>
            </TabletBody>
        </Container>
    )
};


TransactionHistory.propTypes = {
    transactions: PropTypes.array,
  };