import React, { useState } from "react";
import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import {IMAGES} from '../images/images';

const Home = ({navigation}) => {

const [logo, setLogo] = useState([
    {
        name: 'Adidas',
        image: IMAGES.logoAdidas,
    },
    {
        name: 'Jordan',
        image: IMAGES.logoJordan,
    },
    {
        name: 'Nice',
        image: IMAGES.logoNice,
    },
    {
        name: 'Puma',
        image: IMAGES.logoPuma,
    },
])

const [products, setProduct] = useState([
    {
        name: 'Nike Air Max 90',
        price: 234.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoNice,
        image: IMAGES.product
    },
    {
        name: 'Nike Air Max 80',
        price: 234.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoPuma,
        image: IMAGES.product
    },
    {
        name: 'Nike Air Max 70',
        price: 234.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoPuma,
        image: IMAGES.product
    },
    {
        name: 'Nike Air Max 911',
        price: 234.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoJordan,
        image: IMAGES.product
    },
    {
        name: 'Nike Air Max 9220',
        price: 234.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoNice,
        image: IMAGES.product
    },
    {
        name: 'Nike Air Max 930',
        price: 234.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoPuma,
        image: IMAGES.product
    },
    {
        name: 'Nike Air Max 990',
        price: 234.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoAdidas,
        image: IMAGES.product
    },
    {
        name: 'Nike Air Max 290',
        price: 22231.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoAdidas,
        image: IMAGES.product
    },
    {
        name: 'Nike Air Max 902',
        price: 123.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoJordan,
        image: IMAGES.product
    },
    {
        name: 'Nike Air Max 590',
        price: 222.2,
        detail: 'A pillar of sneaker culture, the Nike Air Max 90 remains one of the most significant designs since the brand’s founding. And while its OG colorways are some of the most significant.',
        logo: IMAGES.logoAdidas,
        image: IMAGES.product
    },
])

    return (
        <View style={{flex: 1, marginLeft: 35, marginRight: 35, marginBottom: 0}}>
            <View style={{flex: 0.1, flexDirection:'row',alignItems: 'center', justifyContent: 'space-between'}}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 600,
                        fontFamily: 'Gilroy-Bold',
                        color: '#000000'

                    }}
                >Sneakrs</Text>
                <Image source={IMAGES.iconNatification} style={{height: '50%',resizeMode:'contain'}}></Image>
            </View>

            <View  style={{flex: 0.1, flexDirection:'row',backgroundColor: '#EEEEEE', borderRadius: 15, alignItems: 'center'}}>
                <Image source={IMAGES.iconSearch} style={{height: '50%', resizeMode:'contain', left: 22}}></Image>
                <TextInput 
                    placeholder="Search ?"
                    style={{
                        left: 24
                    }}
                ></TextInput>
            </View>

            <View style={{flex:0.15}}>
                <Text
                    style={{
                        marginTop: 27,
                        fontFamily: 'Gilroy-SemiBold',
                        fontSize: 20,
                        color: '#000000',
                        fontWeight: 600,

                    }}
                >
                    Top Brands
                </Text>
                <View style={{flex: 1, justifyContent: 'space-between',flexDirection: 'row'}}>
                    {
                    logo.map((item, index) => (
                        <Logo key={index} item={item}/>
                    ))
                    }
                </View>
  
            </View>

            <View style={{flex: 0.7}}>
                <Text
                    style={{
                        marginTop: 27,
                        fontFamily: 'Gilroy-SemiBold',
                        fontSize: 20,
                        color: '#000000',
                        fontWeight: 600,

                    }}
                >
                    Popular
                </Text>
                <View>
                    <ListProduct navigation={navigation} products={products}/>
                </View>
            </View>
        </View>
    );
}


const Logo = ({item}) => {

    return (
        <View   
                style={{
                    marginTop: 17,  
                    flex: 1,
                    borderRadius: 18,
                    backgroundColor: '#EEEEEE',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 28,
                    padding: 5
                }}
            >
                <Image source={item.image} style={{width: '100%',resizeMode:'contain'}}/>
        </View>

    )
}

const ListProduct = ({navigation, products}) => {
    return (
        <FlatList
            data={products}
            renderItem={({item, index}) => {
                    return(
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Detail',{
                                    item: item
                                })
                            }}
                        >
                            <View
                            style={{
                                width:160,
                                height: 160,
                                borderRadius: 25,
                                backgroundColor: '#EEEEEE',
                                marginRight: index % 2 == 0 ? 25: 0,
                                marginTop: index % 2 == 0 ? 0: 30,
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                            >
                                <View style={{
                                    flex: 0.7
                                }}>
                                    <Image source={item.image} 
                                        style={{
                                            resizeMode: 'contain',
                                            flex: 1
                                        }
                                    }/>
                                </View>
                                <View 
                                    style={{
                                        height: '30%',
                                        position:'absolute',
                                        right: 10,
                                        bottom: 0,
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Image source={item.logo} 
                                        style={{
                                            resizeMode: 'contain',
                                            height: '90%',
                                            tintColor: '#949494'
                                            
                                        }
                                    }/>
                                </View>
                        </View>
                        <View>
                            <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 14, fontWeight: 600, color: 'black'}}>$ {item.price}</Text>
                            <Text style={{fontFamily: 'Gilroy-SemiBold', fontSize: 14, fontWeight: 600}}>{item.name}</Text>
                        </View>
                        </TouchableOpacity>
                    )
                }
            }
            numColumns={2}
        >   
        </FlatList>
    )
}

export default Home;
