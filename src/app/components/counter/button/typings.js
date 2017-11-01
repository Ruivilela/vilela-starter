import PropTypes from 'prop-types';

const typings = {
    action: PropTypes.oneOf(['increase', 'decrease']),
    buttonText: PropTypes.string,
    buttonClass: PropTypes.string
}

export default typings