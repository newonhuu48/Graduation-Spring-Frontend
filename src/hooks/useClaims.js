import { useState, useEffect } from 'react';

function useClaims() {
  const [claims, setClaims] = useState(null);

  useEffect(() => {
    const storedClaims = localStorage.getItem('claims');
    if (storedClaims) {
      setClaims(JSON.parse(storedClaims));
    }
  }, []);

  console.log(claims);

  return claims;
}

export default useClaims;