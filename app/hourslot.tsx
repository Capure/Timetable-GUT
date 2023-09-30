import styles from "./hourslot.module.css";
import { Item } from "./types";

export default function HourSlot({
  hour,
  items,
}: {
  hour: string;
  items: Item[] | null;
}) {
  if (!items) {
    return <>No classes</>;
  }
  return (
    <div className={styles.container}>
      <p className={styles.hour}>{hour}</p>
      <div className={styles.itemsContainer}>
        {items.map((item, idx) => (
          <div className={styles.classWrapper} key={idx}>
            <h3>{item.subject_name}</h3>
            <h5>{item.teacher}</h5>
            <h5>{item.room}</h5>
            <p>{item.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
