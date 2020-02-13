import React from "react";
import View from "../View";
import BaseList from "../List/BaseList";
import GallonItem from "../List/GallonItem";
import IHeaderList from "../../types/HeaderList";

interface CardList {
  data: [any];
  renderItem: () => React.ReactElement;
  header?: React.ReactElement<IHeaderList>;
}

const CardList: React.FunctionComponent<CardList> = props => {
  return (
    <View card="container">
      <BaseList
        data={props.data}
        renderItem={props.renderItem}
        header={props.header}
      />
    </View>
  );
};

export default CardList;
