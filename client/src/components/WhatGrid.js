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
const WhatGrid = (props) => (
  <div style={styles.root}>
    <GridList
      cols={5}
      padding={10}
      cellHeight={180}
      style={styles.gridList}
    >
      {props.items.map((item, index) => (
        <GridTile
          key={index}
          title={item.name}
          containerElement={
          <Link to={`/users/${props.userId}/people/${item.person_id}/items`} />
          }
        >
          <img src={item.picture} alt="" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default withRouter(WhatGrid);