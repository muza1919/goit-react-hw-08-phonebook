import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        name="filter"
        onChange={e => {
          handleFilterChange(e);
        }}
      />
    </label>
  );
};

export default Filter;
