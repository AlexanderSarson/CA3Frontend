import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { apiUtils } from '../utils/apiUtils';
import useFetch from '../hooks/useFetch.jsx';

const Jokes = () => {
  const opts = apiUtils.makeOptions('GET');
  const { response, isLoading } = useFetch('/jokes', opts);

  if (isLoading) {
    return (
      <Backdrop open={true}>
        <CircularProgress color='inherit' />
      </Backdrop>
    );
  }

  return (
    <>
      <h1>Jokes</h1>
      {response && (
        <>
          <h2>Joke 1</h2>
          <p>{response.joke1}</p>
          <p>Reference: {response.joke1Reference}</p>
          <br />
          <h2>Joke 2</h2>
          <p>{response.joke2}</p>
          <p>Reference: {response.joke2Reference}</p>
        </>
      )}
    </>
  );
};

export default Jokes;
