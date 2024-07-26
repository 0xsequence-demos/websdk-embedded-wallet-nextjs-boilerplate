import { Text } from "@0xsequence/design-system";

const FullScreenLoading = () => {
  return (
    <div className="fullscreen-loading-overlay">
      <div className="fullscreen-loading-container">
        <Text variant="large" fontWeight="bold">
          Loading
        </Text>
        <div className="fullscreen-loading-dots">
          <Text variant="large" fontWeight="bold"></Text>
          <Text variant="large" fontWeight="bold"></Text>
          <Text variant="large" fontWeight="bold"></Text>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoading;