import {View, Text} from 'react-native'
import HeaderComponents from '../components/HeaderComponents'

const Cart = ({navigation}) => {
    return(
        <View style={{flex: 1}}>
            <HeaderComponents navigation={navigation}/>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart