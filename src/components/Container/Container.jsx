import PropTypes from 'prop-types';
import { Div } from './Container.styled';

const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};