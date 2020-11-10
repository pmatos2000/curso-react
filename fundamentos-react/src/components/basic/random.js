import React from 'react';

const Random = (props) => {
  const min = Math.ceil(props.min);
  const max = Math.floor(props.max);
  const num = Math.floor(Math.random() * (max - min)) + min;
  return(
    <div>
      Numero aleatório entre {min} e {max}: {num}
    </div>
  );
}

export default Random;
