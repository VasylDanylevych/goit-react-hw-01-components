import PropTypes from 'prop-types';
import { Container, Item, List } from './Statistics.styled';



export const Statistics = ({title, stats}) => {
    return (
        <Container>
            {title && <h2>{title}</h2>}
            <List>
                {stats.map (({ id, label, percentage }) => {
                    return (
                        <Item key={id}>
                            <span>{label}</span>
                            <span>{percentage}%</span>
                        </Item>
                    )
                })}
            </List>
        </Container>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };