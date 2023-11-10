import { Center, Box, Image, Text, ScrollView, HStack, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import datas from "../datas";
import { TouchableOpacity } from "react-native";

const Katalog = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <HStack flexWrap={'wrap'} justifyContent={'space-between'}  >
          {datas.map((katagor, index) => {
            return (

              <TouchableOpacity
                key={index}
              >
                <HStack p={3}>

                  <Box h="300" w="180" borderWidth={3} rounded="md" shadow={3} >

                    <Center h="40" rounded="md"  >
                      <Image source={{ uri: katagor.image }}
                        w="full"
                        h="full"
                        alt="img"
                        rounded="md"

                      />

                    </Center>
                    <VStack p={3} alignItems={"center"}>
                      <Text fontSize={20}>{katagor.nama}</Text>
                      <Text >{katagor.harga}</Text>
                    </VStack>

                  </Box>
                </HStack>
              </TouchableOpacity>
            );
          })}
        </HStack>
        

      </ScrollView>
    </SafeAreaView>
  );
};
export default Katalog;
