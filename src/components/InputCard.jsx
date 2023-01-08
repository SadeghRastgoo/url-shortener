import { Spinner, Button, Flex, Input } from "@chakra-ui/react";
import { PrimaryCard } from "./Card";
import { useState } from "react";

const InputCard = ({ appFunctionalities }) => {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await appFunctionalities.getShortenURL(e.target[0].value);
    setIsLoading(false);
  };

  return (
    <PrimaryCard label="Enter your URL">
      <Flex
        onSubmit={submitForm}
        as="form"
        flexDirection={["column", null, "row"]}
        gap="2"
      >
        <Input
          bg="#211219"
          type="text"
          fontSize="sm"
          border="1px"
          borderColor="#303435"
          placeholder="e.g. google.com"
        />
        <Button
          disabled={isLoading}
          bg="secondary"
          as="button"
          type="submit"
          fontSize="sm"
          width={["100%", null, "25%"]}
        >
          {isLoading ? <Spinner /> : "Shorten"}
        </Button>
      </Flex>
    </PrimaryCard>
  );
};

export default InputCard;
