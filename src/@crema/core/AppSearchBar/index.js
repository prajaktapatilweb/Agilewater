import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SearchIcon from '@mui/icons-material/Search';
import {
  SearchIconBox,
  SearchIconWrapper,
  SearchInputBase,
  SearchWrapper,
} from './index.style';
import {useState} from 'react';
import NewSearch from './NewSearch';

const AppSearch = ({
  placeholder,
  iconPosition,
  align,
  overlap,
  onlyIcon,
  disableFocus,
  iconStyle,
  ...rest
}) => {
  //   <script async src="https://cse.google.com/cse.js?cx=754ae9cc9677b415d">
  // </script>
  // <div class="gcse-search"></div>
  const [onClosee, setonClosee] = useState(true);
  const handleClick = () => {
    console.log('sssddd', onClosee);
    setonClosee(false);

    // return <h1>ssss</h1>;
  };
  return (
    <>
      {!onClosee ? (
        <SearchWrapper sx={rest.sx} iconPosition={iconPosition}>
          <SearchIconBox
            align={align}
            className={clsx(
              'searchRoot',
              {'hs-search': overlap},
              {'hs-disableFocus': disableFocus},
              {searchIconBox: onlyIcon},
            )}
          >
            <SearchIconWrapper
              className={clsx({
                right: iconPosition === 'right',
              })}
              style={iconStyle}
            >
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInputBase
              {...rest}
              placeholder={placeholder || 'Search…'}
              inputProps={{'aria-label': 'search'}}
              onClick={handleClick}
            />
          </SearchIconBox>
        </SearchWrapper>
      ) : (
        <NewSearch />
      )}
    </>
  );
};

export default AppSearch;

AppSearch.propTypes = {
  iconPosition: PropTypes.string,
  align: PropTypes.string,
  placeholder: PropTypes.string,
  overlap: PropTypes.bool,
  borderLight: PropTypes.bool,
  className: PropTypes.string,
  onlyIcon: PropTypes.bool,
  disableFocus: PropTypes.bool,
  iconStyle: PropTypes.object,
};

AppSearch.defaultProps = {
  onlyIcon: false,
  overlap: true,
  iconPosition: 'left',
  align: 'left',
  iconStyle: {
    color: 'grey',
  },
};
