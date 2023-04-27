import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({ filter, onInputChange }) => {

    return (
        <>
            <label>
                <FilterInput
                    onChange={onInputChange}
                    value={filter}
                    type='text'
                    name='filter'
                />
            </label>
        </>
    )
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired
};