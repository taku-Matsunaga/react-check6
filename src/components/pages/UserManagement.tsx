import { useDisclosure } from "@chakra-ui/hooks";
import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { memo, useCallback, useEffect, VFC } from "react";
import { userAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = userAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();

  useEffect(() => getUsers(), []);

  console.log(selectedUser);

  const onClickUser = (id: number) => {
    onSelectUser({ id, users, onOpen });
  };

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      )
        : (
          <Wrap p={{ base: 4, md: 10 }} justify="center">
            {users.map((user) => (
              <WrapItem key={user.id} mx="auto">
                <UserCard id={user.id} imageUrl={"https://source.unsplash.com/random"} userName={user.username} fullName={user.name} onClick={onClickUser} />
              </WrapItem>
            ))}
          </Wrap>
        )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
});