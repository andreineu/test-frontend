import { makeAutoObservable } from "mobx";
import { SingleOrder } from "~/screens/Orders/Show/types";
import client from "api/gql";
import { ORDER_QUERY } from "./queries";

export default class OrdersShowStore {
  initialized = false;
  loading: boolean;
  order: SingleOrder | null = null;
  id: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setInitialized(val: boolean) {
    this.initialized = val;
  }

  startLoading(): void {
    this.loading = true;
  }

  stopLoading(): void {
    this.loading = false;
  }

  setOrder(order: SingleOrder) {
    this.order = order;
  }

  async loadOrder(id: string) {
    this.startLoading();

    const { data } = await client.query(ORDER_QUERY, { id }).toPromise();
    console.log(data);

    if (data) {
      this.setOrder(data.order);
    }

    this.stopLoading();
  }
}
