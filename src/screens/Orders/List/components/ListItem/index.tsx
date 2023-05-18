import React from "react";
import styles from "./styles.m.styl";
import { OrdersListItem } from "../../types";
import { observer } from "mobx-react-lite";
import moment from "moment";
import "moment/locale/ru";
import OrderStatus from "components/OrderStatus";
import DeliveryType from "components/DeliveryType";
import { Link } from "react-router-dom";
import Tag from "~/components/Tag";

const ListItem = observer(
  ({ order }: { order: OrdersListItem }): JSX.Element => {
    return (
      <div className={styles.item}>
        <div>
          <Link className={styles.orderNumber} to={`/orders/${order.id}`}>
            {order.number}
          </Link>
        </div>
        <div>{moment(order.createdAt).format("DD.MM.YYYY HH:mm")}</div>
        <div>
          {order.delivery?.code ? (
            <DeliveryType code={order.delivery.code} />
          ) : (
            <Tag color="grey" text="Не указано" />
          )}
        </div>
        <div>{moment().from(order.createdAt, true)}</div>
        <div>
          <OrderStatus code={order.status} />
        </div>
      </div>
    );
  }
);

export default ListItem;
