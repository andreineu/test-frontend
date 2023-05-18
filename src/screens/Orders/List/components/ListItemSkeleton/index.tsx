import styles from "./styles.m.styl";

const ListItemSkeleton = (): JSX.Element => {
  return (
    <div className={styles.item}>
      <div>
        <div className={styles.line}></div>
      </div>
      <div>
        <div className={styles.line}></div>
      </div>
      <div>
        <div className={styles.line}></div>
      </div>
      <div>
        <div className={styles.line}></div>
      </div>
      <div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default ListItemSkeleton;
