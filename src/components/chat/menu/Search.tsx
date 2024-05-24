import React from 'react';
import { Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, styled } from '@mui/material';

const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #F2F2F2;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  position: relative;
  border-radius: 10px;
  background-color: #f0f2f5;
  margin: 0 13px;
  width: 100%;
`;

const Icon = styled(Box)`
  color: #919191;
  padding: 2px;
  padding-left:8px;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 40px; /* Adjusted padding to make space for the icon */
  font-size: 14px;
  height: 15px;
`;

const Search: React.FC = () => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon />
        </Icon>
        <InputField placeholder="Search or start a new chat" inputProps={{ 'aria-label': 'search' }} />
      </Wrapper>
    </Component>
  );
}

export default Search;
