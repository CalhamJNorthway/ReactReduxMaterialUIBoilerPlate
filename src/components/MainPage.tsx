import * as React from 'react';
import './MainPage.css';
import { ButtonBase, Typography, IconButton } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { ChangeEvent } from 'react';
import { TabVO } from '../vo/TabVO';

export interface Props {
  num: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const classes = {
  page: 'page',
  spacer: 'spacer',
  container: 'container',
};

function MainPage({num, onDecrement, onIncrement}: Props) {
 
  return (
    <div className={classes.page}>
        <div className={classes.container}>
          <IconButton onClick={onIncrement}><Add/></IconButton>
          <Typography variant="display1">{num}</Typography>
          <IconButton onClick={onDecrement}><Remove/></IconButton>
        </div>
    </div>
  );
}

export default MainPage;

// helpers