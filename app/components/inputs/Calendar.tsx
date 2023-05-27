"use client";

import React from "react";
import { DateRange, Range } from "react-date-range";

type DatePickerProps = {
  value: Range;
  onChange: (value: Range) => void;
  disabledDates?: Date[];
};

export default function Calendar({
  value,
  onChange,
  disabledDates,
}: DatePickerProps) {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
}
