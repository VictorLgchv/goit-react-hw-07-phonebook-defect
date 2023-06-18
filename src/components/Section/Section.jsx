import PropTypes from 'prop-types';
import Container from 'components/Container/Container';
import { Div } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Div>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </Div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};