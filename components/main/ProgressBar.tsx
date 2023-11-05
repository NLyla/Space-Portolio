import { ProgressBar, Stack } from "@airplane/views";

const DefaultProgressBar = () => {
  return (
    <Stack>
      <ProgressBar label="JavaScript 75%" value={75} />
    </Stack>
  );
};

export default DefaultProgressBar;
