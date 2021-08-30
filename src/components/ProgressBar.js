import styled from "styled-components";
import { COLORS } from "../../styles";

const STATUS = {
  progress: {
    backgroundColor: `${COLORS.secondary}`,
  },
  finished: {
    backgroundColor: "#2C8F72",
  },
};

export const ProgressBar = ({ value, status, max }) => {
  const styles = STATUS[status];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${status}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": (value / max) * 100 + "%",
            "--background-color": styles.backgroundColor,
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const VisuallyHidden = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const Wrapper = styled.div`
  background-color: ${COLORS.white};
  box-shadow: inset 0px 2px 4px ${COLORS.primary};
  border-radius: 8px;
  padding: 4px;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: 16px;
  background-color: var(--background-color);
  border-radius: 4px 0 0 4px;
`;
