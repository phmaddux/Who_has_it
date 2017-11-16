import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const PersonCard = (props) => (
    <div>
            <Card>
                <CardHeader
                    leftAvatar={
                        <Avatar
                            src={props.person.picture}
                            size={60}
                        />
                    }
                    title={props.person.nickname}
                    subtitle={props.person.notes}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                <p>{props.person.first_name} {props.person.last_name}</p>
                <p>Email: {props.person.email} Phone: {props.person.phone}</p>
                    <CardActions>
                        <FlatButton label="Would I lend to them again?" />
                        <FlatButton label="Edit" />
                        <FlatButton label="Delete" />
                    </CardActions>
                </CardText>
            </Card>
    </div>
);

export default PersonCard;