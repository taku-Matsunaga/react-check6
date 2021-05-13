import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { ChangeEvent, memo, ReactNode, useEffect, useState, VFC } from "react";
import { User } from "../../../types/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin, onClose } = props;

  const [ username, setUsername ] = useState("");
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

  const onClickUpdate = () => alert();

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom" >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input onChange={onChangeUserName} value={username} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input onChange={onChangeName} value={name} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input onChange={onChangeEmail} value={email} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input onChange={onChangePhone} value={phone} isReadOnly={!isAdmin} />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
})