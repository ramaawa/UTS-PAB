import { Heading, Text,  } from "native-base";
import { Box, Center, VStack, FormControl, Input, Button,} from "native-base";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
      return <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray"
        }} fontWeight="bold">
            SIGN UP
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Phone</FormControl.Label>
              <Input type="number" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email-Addres</FormControl.Label>
              <Input />
            </FormControl>
            <Button mt="2" color="blue">
              <Text
                 Text style={{ fontWeight: 'bold' }}
                 color="black"
               >
                SIGN UP
              </Text>
            </Button>
            <Button >
              <Text
               >
                Already Have Account
              </Text>
            </Button>
          </VStack>
        </Box>
      </Center>;
  };

export default Home;
