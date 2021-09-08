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

const QueueStatusClosed = styled(Text)`
    padding: 8px 0 2px 16px;
    font-size: 16px;
    color: ${colors.error};
`

const QueueStatusOpen = styled(Text)`
    padding: 8px 0 2px 16px;
    font-size: 16px;
    color: ${colors.success};
`

const Row = styled(View)`
    flex-direction: row;
`

export const QueueInfo = ({queue={}}) =>{
     
    const name = queue.name;
    const address= queue.location; 
    const sizeOfQueue = queue.membersOfQueue.length;
    return (
        <Card elevation={5} style = {styles.card}>
            <Title >{name}</Title>
            <Information>{address}</Information>
            <Row>
                {
                    queue.queueStatus=='closed' ? <QueueStatusClosed>{queue.queueStatus}</QueueStatusClosed>:
                                                  <QueueStatusOpen>{queueStatus}</QueueStatusOpen>
                }
            </Row>
            <Information>Size of Queue: {sizeOfQueue} </Information>
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