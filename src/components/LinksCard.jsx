import { Flex, Text } from "@chakra-ui/react";
import { PrimaryCard } from "./Card";
import LinkCard from "./LinkCard";

const LinksCard = ({ appFunctionalities }) => {
  return (
    <PrimaryCard label="Generated URLs" LinksCard bg="#111315">
      <Flex flexDirection="column" gap="3">
        {appFunctionalities.getGeneratedURLs().length === 0 && (
          <Text align="center" color="whiteAlpha.700" py="4">
            There's nothing to show here :( <br />
          </Text>
        )}
        {appFunctionalities.getGeneratedURLs().map((obj) => (
          <LinkCard
            key={obj.date}
            url={obj.url}
            shortenUrl={obj.shortenUrl}
            toggleQR={appFunctionalities.toggleQRModal}
          />
        ))}
      </Flex>
    </PrimaryCard>
  );
};

export default LinksCard;
