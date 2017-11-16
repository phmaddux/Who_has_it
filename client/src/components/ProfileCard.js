import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const ProfileCard = (props) => (
    <div>
        <Card>
            <CardHeader
                title={props.user.username}
                avatar={props.user.picture}
            />
            <CardText>
                <p>Email: {props.user.email}</p>
            <CardActions>
                <FlatButton label="Edit Profile" />
                <FlatButton label="Delete Profile" />
            </CardActions>
            </CardText>
            </Card>
    </div>
);

export default ProfileCard;