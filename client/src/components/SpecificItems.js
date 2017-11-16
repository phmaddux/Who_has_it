import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const SpecificItems = (props) => (
    <div>
        {props.items.map((item, index) => (
            <Card>
                <CardHeader
                    leftAvatar={
                        <Avatar
                            src={item.picture}
                            size={30}
                        />
                    }
                    title={item.name}
                    subtitle={item.description}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    <p>Outgoing Condition: {item.condition_outgoing}</p>
                    <p>Returned Condition: {item.condition_returned}</p>
                    <p>Date lent: {item.created_at}</p>
                    <CardActions>
                        <FlatButton label="returned" />
                        <FlatButton label="Edit" />
                        <FlatButton label="Delete" />
                    </CardActions>
                </CardText>
            </Card>
        ))}
    </div>
);

export default SpecificItems;