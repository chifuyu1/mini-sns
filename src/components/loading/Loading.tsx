import React from 'react';
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  .MuiCircularProgress-indeterminate {
    animation: none;
  }
  .MuiCircularProgress-root {
    width: 24px;
    height: 24px;
  }
  & > * {
    width: 24px;
    height: 24px;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      // '& > * + *': {
      //   marginLeft: theme.spacing(2),
      // },
    },
  }),
);

function Loading() {
  const classes = useStyles();

  const styles: React.CSSProperties = {
    width: 24,
    height: 24,
  };

  return (
    <LoadingContainer className={classes.root}>
      <CircularProgress style={styles} />
    </LoadingContainer>
  );
}

export default React.memo(Loading);
