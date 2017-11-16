import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class CardExampleControlled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }
    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };
    handleToggle = (event, toggle) => {
        this.setState({ expanded: toggle });
    };
    handleExpand = () => {
        this.setState({ expanded: true });
    };
    handleReduce = () => {
        this.setState({ expanded: false });
    };
    render() {
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title="Everything you need to know about"
                    subtitle='{props.person.nickname}'
                    avatar='{props.person.picture}'
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>
                </CardText>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title="{props.person.first_name}" subtitle="{props.person.last_name" />}
                >
                    <img src="images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Email: {props.person.email}" subtitle="Phone number: {props.person.phone_number" expandable={true} />
                <CardText expandable={true}>
                    Notes: props.person.notes
                </CardText>
            </Card>
        );
    }
}