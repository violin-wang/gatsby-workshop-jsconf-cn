import React, { useState, useCallback } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: purple;
  border: none;
  color: white;
  padding: 4px 10px;
`;

const Wave = () => {
  const [times, setTimes] = useState(0);
  const label = `${times} 次挥手`;
  const increaseTimes = useCallback(() => {
    setTimes(times => times + 1);
  }, [setTimes]);

  return <StyledButton onClick={increaseTimes}>{label}</StyledButton>;
};

export default Wave;
