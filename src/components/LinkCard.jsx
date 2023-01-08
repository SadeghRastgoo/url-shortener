import { Card, Flex, Text, Button, Link, Tooltip } from "@chakra-ui/react";

const LinkCard = ({ url, shortenUrl, toggleQR }) => {
  return (
    <Card bg="#131517" px="2.5" py="2.5" border="1px" borderColor="#242829">
      <Flex justifyContent="space-between" alignItems="stretch" height="100%">
        <Flex flexDirection="column" gap="1">
          <Text fontSize="sm" fontWeight="semibold">
            {url}
          </Text>
          <Text height="5" width="5" display="flex" p="0.5" alignSelf="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </Text>
          <Link
            href={shortenUrl}
            target="_blank"
            fontSize="xs"
            color="whiteAlpha.800"
          >
            {shortenUrl}
          </Link>
        </Flex>
        <Tooltip
          label="Not available right now!"
          bg="blackAlpha.500"
          placement="top-start"
          hasArrow
          color="whiteAlpha.800"
          aria-label="A tooltip"
        >
          <Button disabled onClick={() => toggleQR(shortenUrl)} height="">
            <Flex flexDirection="column" gap="1">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 31.5H19.5V28.5H22.5V31.5ZM19.5 21H16.5V28.5H19.5V21ZM31.5 18H28.5V24H31.5V18ZM28.5 15H25.5V18H28.5V15ZM10.5 18H7.5V21H10.5V18ZM7.5 15H4.5V18H7.5V15ZM18 7.5H21V4.5H18V7.5ZM6.75 6.75V11.25H11.25V6.75H6.75ZM13.5 13.5H4.5V4.5H13.5V13.5ZM6.75 24.75V29.25H11.25V24.75H6.75ZM13.5 31.5H4.5V22.5H13.5V31.5ZM24.75 6.75V11.25H29.25V6.75H24.75ZM31.5 13.5H22.5V4.5H31.5V13.5ZM28.5 28.5V24H22.5V27H25.5V31.5H31.5V28.5H28.5ZM25.5 18H19.5V21H25.5V18ZM19.5 15H10.5V18H13.5V21H16.5V18H19.5V15ZM21 13.5V10.5H18V7.5H15V13.5H21ZM10.125 7.875H7.875V10.125H10.125V7.875ZM10.125 25.875H7.875V28.125H10.125V25.875ZM28.125 7.875H25.875V10.125H28.125V7.875Z"
                  fill="#545454"
                />
              </svg>
              <Text fontSize="6px" color="whiteAlpha.600">
                QR CODE
              </Text>
            </Flex>
          </Button>
        </Tooltip>
      </Flex>
    </Card>
  );
};

export default LinkCard;
