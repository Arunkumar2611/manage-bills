import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { connect } from 'react-redux';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.category,
});

const Filter = (props) => {
    const { items } = props;
    return (
        <Autocomplete
            id="filter-demo"
            options={items}
            getOptionLabel={(option) => option.category}
            filterOptions={filterOptions}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Custom filter" />}
        />
    );
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];
const mapStateToProps = (state) => {
    const { bills } = state;
    return {
      loading: bills.loading,
      items: bills.data,
      error: bills.error,
    };
  };

  export default connect(mapStateToProps)(Filter);
