import React, { useEffect } from "react";
import OrdersShowStore from "./store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import styles from "./styles.m.styl";
import Item from "./components/Item";
import { map } from "lodash";

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersShowStore());
    const params = useParams<ShowParams>();

    useEffect(() => {
      state.loadOrder(params.id);
    }, [params, state]);

    return (
      <React.Fragment>
        <div className={styles.title}>
          <h1>Заказы</h1>
        </div>
        <div>
          <div className={styles.screen}>
            <div className={styles.items}>
              {map(state?.order?.items, (item, index: number) => (
                <Item item={item} key={index} />
              ))}
              {map(state?.order?.items, (item, index: number) => (
                <Item item={item} key={index} />
              ))}
              {map(state?.order?.items, (item, index: number) => (
                <Item item={item} key={index} />
              ))}
              {map(state?.order?.items, (item, index: number) => (
                <Item item={item} key={index} />
              ))}
              {map(state?.order?.items, (item, index: number) => (
                <Item item={item} key={index} />
              ))}
              {map(state?.order?.items, (item, index: number) => (
                <Item item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
);

export default OrdersShow;
