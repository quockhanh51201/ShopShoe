import {View, Text} from 'react-native'
import HeaderComponents from '../components/HeaderComponents'

const Like = ({navigation}) => {
    return(
        <View style={{flex: 1}}>
            <HeaderComponents navigation={navigation}/>
            <Text>Like</Text>
        </View>
    )
}

export default Like