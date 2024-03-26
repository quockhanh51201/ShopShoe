import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../images/images";


const DetailProduct = ({route, navigation}) => {
    const item = route.params.item
    console.log(item.name)
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 0.1, flexDirection: 'row', alignItems:'center',justifyContent: 'space-between'}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image source={IMAGES.iconBack}resizeMode="contain" style={{height: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                    <Image source={IMAGES.iconCham} resizeMode="contain" style={{height: 7}}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={{flex: 0.8}}>
                <View style={{flex: 0.4, backgroundColor: '#EEEEEE', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={item.logo} style={{resizeMode:'contain', height: 300, width: 300, tintColor: '#949494'}}/>   
                    <Image source={item.image} style={{resizeMode:'contain', height: 300, position: 'absolute', top: 0}}/>   
                </View>
                <View style={{
                    marginLeft: 35,
                    marginRight: 35,
                    flex: 0.4
                }}>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'Gilroy-SemiBold',
                        fontWeight: 900,
                        fontSize: 25,
                        paddingTop: 24
                        
                    }}>
                        {item.name}
                    </Text>
                    <Text style={{
                        color: '#666666',
                        fontFamily: 'Gilroy-SemiBold',
                        fontWeight: 900,
                        fontSize:18,
                        paddingTop: 12
                    }}>
                        $ {item.price}
                    </Text>
                    <Text style={{
                        color: '#949494',
                        fontFamily: 'Gilroy-SemiBold',
                        fontWeight: 300,
                        fontSize: 18,
                        paddingTop:18
                        
                    }}>
                        {item.detail}
                        {item.detail}
                        {item.detail}
                        {item.detail}
                        {item.detail}
                        {item.detail}


                    </Text>
                </View>
                <View style={{flex: 0.2, flexDirection: 'row'}}>

                </View>
            </ScrollView>
            <View style={{
                    flex: 0.1,                
                    marginLeft: 35,
                    marginRight: 35,
                    justifyContent: 'center',
                    }}>
                <TouchableOpacity style={{flex:1, justifyContent: 'center'}}>
                    <View style={{borderRadius: 15, backgroundColor: '#000000', justifyContent: 'center', flex:0.6, alignItems: 'center'}}>
                        <Text style={{ fontFamily: 'SemiBold', fontSize: 18, fontWeight: 500, color: '#FFFFFF'}}>
                            Add to bag
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailProduct;