import { FunctionComponent } from "react";
import { View } from "react-native";

interface SeparatorListProps {
    
}
 
const SeparatorList: FunctionComponent<SeparatorListProps> = () => {
    return (
        <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />
    );
}
 
export default SeparatorList;