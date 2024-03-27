
import { View,TouchableOpacity,Image } from "react-native"
import { IMAGES } from "../images/images"
const HeaderComponents = ({navigation}) =>
{
    return(
        <View style={{flex: 0.07, flexDirection: 'row', alignItems:'center',justifyContent: 'space-between'}}>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
            <Image source={IMAGES.iconBack}resizeMode="contain" style={{height: 30}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
            <Image source={IMAGES.iconCham} resizeMode="contain" style={{height: 7}}/>
        </TouchableOpacity>
    </View>
    )
}

export default HeaderComponents