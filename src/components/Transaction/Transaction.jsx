import PropTypes from 'prop-types';


export const Transaction = ({transactions}) => {
    return(transactions.map(({id, type, amount, currency }) => {
        return(
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        )
    }) 
    )
};


Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ),
  };