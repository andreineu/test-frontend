import { makeAutoObservable } from "mobx";
import client from "~/api/gql";
import { SingleOrder } from "~/screens/Orders/Show/types";
import { ORDER_QUERY } from "./queries";

export default class OrdersShowStore {
  order: SingleOrder | null = null;
  id: string | null = null;
  loading: boolean = false
  initialized = false;


  setInitialized(val: boolean) {
    this.initialized = val;
  }

  constructor() {
    makeAutoObservable(this);
  }

  setOrder(order: SingleOrder) {
    this.order = order
  }

  startLoading(): void {
    this.loading = true;
  }

  stopLoading(): void {
    this.loading = false;
  }

  async loadOrder(id: string) {
    this.startLoading()
    await client
      .query(ORDER_QUERY, { number: id })
      .toPromise()
      .then((res) => {
        const order = res.data.order
        this.setOrder(order)
      })
    this.stopLoading()
  }

  initialize(id: string) {
    if (this.initialized) return;
    this.setInitialized(true);
    this.loadOrder(id);
  }
}
