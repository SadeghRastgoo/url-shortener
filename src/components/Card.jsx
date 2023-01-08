import { Card, Box, Heading } from "@chakra-ui/react";

const PrimaryCard = ({ label, children, LinksCard = false }) => {
  return (
    <Card
      bg="#131517"
      position="relative"
      width="full"
      border="1px"
      borderColor="#292d2f"
      p="4"
      pt="6"
      maxWidth="2xl"
      mx="auto"
    >
      <Heading
        className="card-label-bg"
        position="absolute"
        top="-2.5"
        size="xs"
        color="whiteAlpha.700"
        px="1"
      >
        {label}
      </Heading>
      <Box>{children}</Box>
    </Card>
  );
};

export { PrimaryCard };
