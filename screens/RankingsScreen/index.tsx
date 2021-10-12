import React from 'react'
import {View, Text, Image, FlatList} from 'react-native';
import UserRankingItem from '../../components/UserRankingItem';
import styles from './styles';
const image = require("../../assets/images/Saly-20.png");
const userRankingItems = [
    {
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg1.pnghut.com%2F20%2F21%2F8%2FNk2a8tmPyj%2Fdollar-coin-symbol-text-trademark-sign.jpg&imgrefurl=https%3A%2F%2Fwww.rheingau.com%2Ffileadmin%2Fcrypto%2Fbitcointalk-forum%2Fdollar-sign-coin.php&tbnid=GC7IZ0q1KHuzhM&vet=12ahUKEwia_6OHsrzzAhUKMRoKHTxyD2wQMygHegUIARDmAQ..i&docid=gHn3NTCOh2rBqM&w=830&h=1183&q=dollar%20sign&ved=2ahUKEwia_6OHsrzzAhUKMRoKHTxyD2wQMygHegUIARDmAQ',
    netWorth:  69420,
},{
    id: '1',
    name: 'Bitcoin',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-illustration%2Fgolden-bitcoin-sign-isolated-on-260nw-655867564.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fbitcoin%2Bsign&tbnid=1f7k6qCJKxi7hM&vet=12ahUKEwjFt6eXsrzzAhVN2xoKHeuUBCIQMygCegUIARDDAQ..i&docid=FPSvf4K0pTCdDM&w=260&h=280&q=btc%20sign&ved=2ahUKEwjFt6eXsrzzAhVN2xoKHeuUBCIQMygCegUIARDDAQ',
    netWorth:  59420
},{
    id: '1',
    name: 'Ethereum',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fgold-coin-with-ethereum-sign-vector-19576543&psig=AOvVaw3SZ-HEH9vUrUQrBVE0QuKI&ust=1633836748042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDrgq6yvPMCFQAAAAAdAAAAABAD',
    netWorth:  30120
}
]
const RankingsScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList 
            style={{width: '100%'}} 
            data={userRankingItems} 
            renderItem={({item, index}) => <UserRankingItem user={item} place={index+1} />}
            keyExtractor={(item, index)=>index.toString()}
            ListHeaderComponentStyle={{alignItems: 'center'}}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                () => (
                <>
                <Image style={styles.image} source={image} />
                </>
                )
            }
            />
        </View>
    )
}

export default RankingsScreen;
