import React from 'react';
import styled from 'styled-components';
import { Text,StyleSheet,View } from 'react-native';
import { Card } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

const Title = styled.Text`
    padding: 16px 0 0 16px;
    font-size: 20px;
    color: ${colors.primary};
`;
const Information = styled(Text)`
    padding: 8px 0 2px 16px;
    font-size: 16px;
    color: ${colors.primary};
`

const Openq = styled(Text)`
    padding: 8px 0 2px 16px;
    font-size: 16px;
    color: ${colors.success};
`

const Closedq = styled(Text)`
    padding: 8px 0 2px 16px;
    font-size: 16px;
    color: ${colors.error};
`
const Row = styled(View)`
    flex-direction: row;
`
const CardCover = styled(Card.Cover)`
 
`;

export const LocationInfo = ({location={}}) =>{
     
    const name = location.name;
    const address= location.address; 
    const img=location.image ? location.img:null;
    const closedQueues= location.queues.filter((queue)=>queue.status != 'open').length;
    const openQueues= location.queues.filter((queue)=>queue.status == 'open').length;
    return (
        <Card elevation={5} style = {styles.card}>
            <Card.Cover key={name} style = {StyleSheet.cover} source={{uri: img}} />
            <Title >{name}</Title>
            <Information>{address}</Information>
            <Row>
                <Openq>Open Queues: {openQueues}</Openq>
                <Closedq>Closed Queues: {closedQueues}</Closedq>
            </Row>
        </Card>
    );
}

const styles = StyleSheet.create({
    card:{
        color: colors.primary,
        backgroundColor: colors.cardBackground,
        padding: 16,
        marginBottom: 16

    },
    cover:{
        padding: 20,
        backgroundColor:"white"
    },
    title:{
        fontSize: 28,
        padding :10
    },
    information:{
        padding: 10,
        fontSize:16,
        color: colors.primary,
    },
});