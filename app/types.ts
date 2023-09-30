export interface Item {
  room: string;
  type: "lecture" | "lab" | "exercise" | "project";
  subject_name: string;
  teacher: string;
  notes: string | null;
}

export interface Day {
  hour: string;
  items: Item[];
}

export interface Week {
  monday: Day[];
  tuesday: Day[];
  wednesday: Day[];
  thursday: Day[];
  friday: Day[];
}
