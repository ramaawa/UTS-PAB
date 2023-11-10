import {  Text, bold, VStack, HStack } from "native-base";
import { Box, } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const Contact = () => {
    const navigation = useNavigation();
    return (
        
        <SafeAreaView>
            <HStack marginTop={30} >
            <Box marginLeft={5} my={3}>
              <Ionicons as="Ionicons" name="arrow-back" size={30} color="black"></Ionicons>
            </Box>
            <Box mx={97}>
              <Text fontWeight="semi-bold" fontSize={30} >Contact Us</Text>
            </Box>
          </HStack>
            <VStack p={3}>
                <HStack justifyContent={"space-between"} py={5}>
                    <Text fontWeight="bold">Email.</Text>
                    <TouchableOpacity>
                    <Box marginLeft={5} my={0}>
                    <Ionicons as="Ionicons" name="arrow-forward" size={30} color="black"></Ionicons>
                    </Box>
                    </TouchableOpacity>
                </HStack>
                <HStack justifyContent={"space-between"} py={5}>
                    <Text fontWeight="bold">Instagram.</Text>
                    <TouchableOpacity>
                    <Box marginLeft={5} my={0}>
                    <Ionicons as="Ionicons" name="arrow-forward" size={30} color="black"></Ionicons>
                    </Box>
                    </TouchableOpacity>
                </HStack>
                <HStack justifyContent={"space-between"} py={5}>
                    <Text fontWeight="bold">Whats'up.</Text>
                    <TouchableOpacity>
                    <Box marginLeft={5} my={0}>
                    <Ionicons as="Ionicons" name="arrow-forward" size={30} color="black"></Ionicons>
                    </Box>
                    </TouchableOpacity>
                </HStack>
            </VStack>
        </SafeAreaView>
        
    );
    
};


export default Contact;
