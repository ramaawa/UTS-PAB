import { Center, Box, Image, Text, ScrollView, HStack, VStack,AspectRatio,Stack, Heading, } from "native-base";


const About = () => {
    return <Box alignItems="center">
        <Box marginTop="8"maxW="full" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"  >
          <Box>
            <Center>
              <Image source={
              require("../assets/about.png")
            } alt="image" 
            w="full"
            h="250"
            />
            </Center>
            
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Livik Rental
              </Heading>
              
            </Stack>
            <Text fontWeight="400">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore etlorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
            </Text>
           
        </Stack>
        </Box>
      </Box>;
  };
  export default About;
