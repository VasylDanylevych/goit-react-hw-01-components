import PropTypes from 'prop-types';
import { Container, Item, List } from './Statistics.styled';



export const Statistics = ({title, stats}) => {
    return (
        <Container>
            <h2 className="title">{title}</h2>
            <List className="stat-list">
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
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };