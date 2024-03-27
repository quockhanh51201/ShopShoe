import {View, Text} from 'react-native'
import HeaderComponents from '../components/HeaderComponents'
const Profile = ({navigation}) => {
    return(
        <View style={{flex: 1}}>
            <HeaderComponents navigation={navigation}/>
            <Text>Profile</Text>
        </View>
    )
}

export default Profile