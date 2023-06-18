import PropTypes from 'prop-types';
import Container from 'components/Container/Container';

const Section = ({ title, children }) => {
  return (
    <div>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};