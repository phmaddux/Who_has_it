import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const ProfileCard = (props) => (
    <div>
        <Card>
            <CardHeader
                title={props.user.username}
                avatar={props.user.picture}
            />
            <CardText>
                <p>Email: {props.user.email}</p>
            </CardText>
            </Card>

    </div>
);

export default ProfileCard;