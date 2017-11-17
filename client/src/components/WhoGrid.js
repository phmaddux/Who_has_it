import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { Link, withRouter } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    maxWidth: 1000,
    maxHeight: 500,
    margin: 15,
    overflowY: 'auto',
  },
};
const WhoGrid = (props) => (
  <div style={styles.root}>
    <GridList
      cols={5}
      padding={10}
      cellHeight={180}
      style={styles.gridList}
    >
      {props.people.map((person, index) => (
        <GridTile
          key={index}
          title={person.nickname}
          containerElement={
          <Link to={`/users/${props.userId}/people/${person.id}/items`} />
          }
        >
          <img src={person.picture} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default withRouter(WhoGrid);