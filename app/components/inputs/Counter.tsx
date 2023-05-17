"use client";

type CounterProps = {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
};

export default function Counter({
  title,
  subtitle,
  value,
  onChange,
}: CounterProps) {
  const onAdd = () => {
    onChange(value + 1);
  };

  return <div>Counter</div>;
}
