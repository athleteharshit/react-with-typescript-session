import React from 'react';

function List() {
  console.log("render title");
  return (
    <div>
      <h1>useCallback</h1>
    </div>
  );
}

export default React.memo(List);
