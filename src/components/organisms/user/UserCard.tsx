import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { memo, ReactNode, VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
}

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;

  return (
    <Box _hover={{ cursor: "pointer", opacity: 0.8 }} p={4} w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" onClick={ () => onClick(id) }>
    <Stack textAlign="center">
      <Image boxSize="160px" borderRadius="full" src={imageUrl} alt={userName} m="auto" />
      <Text fontSize="lg" fontWeight="bold" >{userName}</Text>
      <Text fontSize="sm" color="gray" >{fullName}</Text>
    </Stack>
  </Box>
  )
})