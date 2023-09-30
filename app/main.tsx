"use client";
import { useEffect, useRef, useState } from "react";
import Header from "./header";
import styles from "./main.module.css";
import { Week } from "./types";
import HourSlot from "./hourslot";

const DAYS = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];

const convertToLocaleDay = (idx: number) => {
  return idx === 0 ? 6 : idx - 1;
};

const convertWeekToArray = (week: Week) => {
  const weekArray = [];
  for (const day in week) {
    weekArray.push(week[day as keyof Week]);
  }
  return [
    ...weekArray,
    [{ hour: "", items: null }],
    [{ hour: "", items: null }],
  ];
};

export default function Main({ data: dataRaw }: { data: Week }) {
  const [dayIdx, setDayIdx] = useState(convertToLocaleDay(new Date().getDay()));
  const data = convertWeekToArray(dataRaw);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollToIdx = (ref: HTMLDivElement, idx = dayIdx) => {
    ref.scrollTo({
      left: ref.offsetWidth * idx,
      behavior: "smooth",
    });
  };
  const setToToday = () => {
    const newIdx = convertToLocaleDay(new Date().getDay());
    setDayIdx(newIdx);
    const contentRefCurrent = contentRef.current;
    if (!contentRefCurrent) return;
    scrollToIdx(contentRefCurrent, newIdx);
  };
  useEffect(() => {
    const contentRefCurrent = contentRef.current;
    if (!contentRefCurrent) {
      return;
    }
    scrollToIdx(contentRefCurrent);
    const handleScroll = () => {
      const newDayIdx = Math.round(
        contentRefCurrent.scrollLeft / contentRefCurrent.offsetWidth
      );
      setDayIdx(newDayIdx);
    };
    contentRefCurrent.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      <Header onClick={setToToday} day={DAYS[dayIdx]} />
      <div ref={contentRef} className={styles.classesViewContainer}>
        {data.map((dayOfTheWeek, idx) => (
          <section key={idx}>
            {dayOfTheWeek.map((hourSlot, idx) => (
              <HourSlot hour={hourSlot.hour} items={hourSlot.items} key={idx} />
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
