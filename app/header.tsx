import styles from "./header.module.css";

export default function Header({
  day,
  onClick,
}: {
  day: string;
  onClick: () => void;
}) {
  return (
    <header className={styles.header}>
      <h1>Timetable</h1>
      <p onClick={onClick}>{day}</p>
    </header>
  );
}
