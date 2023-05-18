import React, { useEffect } from "react";
import styles from "./styles.m.styl";
import { map } from "lodash";
import { observer } from "mobx-react-lite";
import OrdersListState from "./store";

import Button from "../../../components/Button";
import AngleLeftIcon from "../../../assets/icons/angle-left-solid.svg";
import AngleRightIcon from "~/assets/icons/angle-right-solid.svg";
import ListItem from "./components/ListItem";
import ListItemSkeleton from "./components/ListItemSkeleton";

const OrdersList = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersListState());

    useEffect(() => {
      if (state.initialized) return;
      state.initialize();
    });

    return (
      <React.Fragment>
        <div className={styles.title}>
          <h1>Заказы</h1>
        </div>
        <div className={styles.table}>
          <div className={styles.head}>
            <div className={styles.row}>
              <div className={styles.cell}>Номер</div>
              <div className={styles.cell}>Создан</div>
              <div className={styles.cell}>Доставка</div>
              <div className={styles.cell}>В работе</div>
              <div className={styles.cell}>Статус</div>
            </div>

            {state.loading ? (
              <>
                <ListItemSkeleton />
                <ListItemSkeleton />
                <ListItemSkeleton />
                <ListItemSkeleton />
              </>
            ) : (
              <>
                {map(state.orders, (order, index: number) => (
                  <ListItem order={order} key={index} />
                ))}
              </>
            )}

            <div className={styles.pagination}>
              <Button
                small
                text="PREV"
                icon={AngleLeftIcon}
                resting
                disabled={!state.canPrev}
                onClick={() => state.prevPage()}
              />
              <Button
                small
                text="NEXT"
                rightIcon={AngleRightIcon}
                resting
                disabled={!state.canNext}
                onClick={() => state.nextPage()}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
);

export default OrdersList;
