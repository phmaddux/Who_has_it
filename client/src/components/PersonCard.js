import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const PersonCard = (props) => (
    <div>
        <Card>
            <CardHeader
                avatar={props.person.picture}
                title={props.person.nickname}
                subtitle={props.person.notes}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardText expandable={true}>
                <p>Name: {props.person.first_name} {props.person.last_name}</p>
                <p>Email: {props.person.email} Phone: {props.person.phone}</p>
            </CardText>
        </Card>
    </div>
);

export default PersonCard;