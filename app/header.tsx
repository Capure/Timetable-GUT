import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { motion } from "framer-motion";

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function Header({
  day,
  dayIdx,
  setToToday,
  offsetDay,
}: {
  day: string;
  dayIdx: number;
  setToToday: () => void;
  offsetDay: (offset: number) => void;
}) {
  const [arrowOpacities, setArrowOpacities] = useState({ left: dayIdx === 0 ? 0 : 1, right: dayIdx === 6 ? 0 : 1 });

  useEffect(() => {
    setArrowOpacities({ left: dayIdx === 0 ? 0 : 1, right: dayIdx === 6 ? 0 : 1 });
  }, [dayIdx]);

  return (
    <header className={styles.header}>
      <h1>Timetable</h1>
      <div className={styles.controls}>
        <motion.div onClick={() => offsetDay(-1)} className={styles.arrow} initial={{ opacity: arrowOpacities.left }} animate={{ opacity: arrowOpacities.left }}>
          <RiArrowLeftSLine size={20} />
        </motion.div>
        <p onClick={setToToday}>{day}</p>
        <motion.div onClick={() => offsetDay(1)} className={styles.arrow} initial={{ opacity: arrowOpacities.right }} animate={{ opacity: arrowOpacities.right }}>
          <RiArrowRightSLine size={20} />
        </motion.div>
      </div>
    </header>
  );
}
