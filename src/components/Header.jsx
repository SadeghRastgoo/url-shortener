import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box
        className="header-gradient"
        position="absolute"
        left="0"
        top="-30%"
      />
      <Flex
        position="relative"
        textAlign="center"
        my="4"
        flexDirection="column"
        gap="2"
      >
        <Image mx="auto" width="8" src="/logo.png" />
        <Heading fontWeight="bold" as="h1">
          URL Shortener
        </Heading>
        <Text color="whiteAlpha.700" maxWidth={["sm", null, "lg"]} mx="auto">
          URL Shortener is a free tool to shorten a URL or reduce a link length.
          Use URL Shortener to create a shortened link making it easy to
          remember
        </Text>
      </Flex>
    </>
  );
};

export default Header;
