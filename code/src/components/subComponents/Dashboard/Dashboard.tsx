import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Avatar, Card, CardContent, CardHeader, Divider } from '@material-ui/core';

export default function ResponsiveDashboard(props) {

    const Styles = {
        avatar: {
            backgroundColor: '#3C5A99',
        },
    }
    
    return (
        <div >
            <Card>
                <CardHeader
                    avatar={
                        <Avatar style={Styles.avatar} alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
                                titleTypographyProps={{ variant: 'h5' }}
                                title="Dashboard" />
                <Divider />
                <CardContent>
                    <Doughnut height={340} data={props.data} options={{ maintainAspectRatio: false }} />
                </CardContent>
            </Card>
        </div>
    );
}