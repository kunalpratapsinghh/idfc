// "use client"

// import * as React from "react"
// import { CalendarIcon } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// function formatDate(date: Date | undefined) {
//   if (!date) {
//     return ""
//   }

//   return date.toLocaleDateString("en-US", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   })
// }

// function isValidDate(date: Date | undefined) {
//   if (!date) {
//     return false
//   }
//   return !isNaN(date.getTime())
// }

// interface Calendar28Props {
//   value?: Date;
//   onChange?: (date: Date) => void;
//   label?: string;
// }
// export function Calendar28({ value, onChange, label = "Date" }: Calendar28Props) {
//   const [open, setOpen] = React.useState(false)
//   const [month, setMonth] = React.useState<Date | undefined>(date)
//   const [value, setValue] = React.useState(formatDate(date))

//   const [date, setDate] = React.useState<Date | undefined>(value)
//   const [inputValue, setInputValue] = React.useState(formatDate(date))

//   React.useEffect(() => {
//     setDate(value)
//     setInputValue(formatDate(value))
//   }, [value])

//   return (
//     // <div className="flex flex-col gap-3">
//     //   <Label htmlFor="date" className="px-1">
//     //     Subscription Date
//     //   </Label>
//     //   <div className="relative flex gap-2">
//     //     <Input
//     //       id="date"
//     //       value={value}
//     //       placeholder="June 01, 2025"
//     //       className="bg-background pr-10"
//     //       onChange={(e) => {
//     //         const date = new Date(e.target.value)
//     //         setValue(e.target.value)
//     //         if (isValidDate(date)) {
//     //           setDate(date)
//     //           setMonth(date)
//     //         }
//     //       }}
//     //       onKeyDown={(e) => {
//     //         if (e.key === "ArrowDown") {
//     //           e.preventDefault()
//     //           setOpen(true)
//     //         }
//     //       }}
//     //     />
//     //     <Popover open={open} onOpenChange={setOpen}>
//     //       <PopoverTrigger asChild>
//     //         <Button
//     //           id="date-picker"
//     //           variant="ghost"
//     //           className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
//     //         >
//     //           <CalendarIcon className="size-3.5" />
//     //           <span className="sr-only">Select date</span>
//     //         </Button>
//     //       </PopoverTrigger>
//     //       <PopoverContent
//     //         className="w-auto overflow-hidden p-0"
//     //         align="end"
//     //         alignOffset={-8}
//     //         sideOffset={10}
//     //       >
//     //         <Calendar
//     //           mode="single"
//     //           selected={date}
//     //           captionLayout="dropdown"
//     //           month={month}
//     //           onMonthChange={setMonth}
//     //           onSelect={(date) => {
//     //             setDate(date)
//     //             setValue(formatDate(date))
//     //             setOpen(false)
//     //           }}
//     //         />
//     //       </PopoverContent>
//     //     </Popover>
//     //   </div>
//     // </div>

//         <div className="flex flex-col gap-3">
//       <Label>{label}</Label>
//       <div className="relative flex gap-2">
//         <Input
//           value={inputValue}
//           placeholder="Select date"
//           className="bg-background pr-10"
//           onChange={(e) => {
//             const newDate = new Date(e.target.value)
//             setInputValue(e.target.value)
//             if (isValidDate(newDate)) {
//               setDate(newDate)
//               setMonth(newDate)
//               onChange?.(newDate)
//             }
//           }}
//           onKeyDown={(e) => {
//             if (e.key === "ArrowDown") {
//               e.preventDefault()
//               setOpen(true)
//             }
//           }}
//         />
//         <Popover open={open} onOpenChange={setOpen}>
//           <PopoverTrigger asChild>
//             <Button
//               variant="ghost"
//               className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
//             >
//               <CalendarIcon className="size-3.5" />
//               <span className="sr-only">Select date</span>
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent
//             className="w-auto overflow-hidden p-0"
//             align="end"
//             alignOffset={-8}
//             sideOffset={10}
//           >
//             <Calendar
//               mode="single"
//               selected={date}
//               captionLayout="dropdown"
//               month={month}
//               onMonthChange={setMonth}
//               onSelect={(selectedDate) => {
//                 setDate(selectedDate)
//                 setInputValue(formatDate(selectedDate))
//                 setOpen(false)
//                 onChange?.(selectedDate)
//               }}
//             />
//           </PopoverContent>
//         </Popover>
//       </div>
//     </div>
//   )
// }

"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

// Helper to format Date to string
function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

// Helper to check if a Date object is valid
function isValidDate(date: Date | undefined) {
  return date instanceof Date && !isNaN(date.getTime());
}

interface Calendar28Props {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
}

export function Calendar28({
  value,
  onChange,
  label = "Date"
}: Calendar28Props) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [month, setMonth] = React.useState<Date | undefined>(value);
  const [inputValue, setInputValue] = React.useState(formatDate(value));

  // Sync prop value changes
  React.useEffect(() => {
    setDate(value);
    setMonth(value);
    setInputValue(formatDate(value));
  }, [value]);

  return (
    <div className="flex flex-col gap-3">
      <Label>{label}</Label>
      <div className="relative flex gap-2">
        <Input
          value={inputValue}
          placeholder="Select date"
          className="bg-background pr-10"
          onChange={e => {
            const newDate = new Date(e.target.value);
            setInputValue(e.target.value);
            if (isValidDate(newDate)) {
              setDate(newDate);
              setMonth(newDate);
              onChange?.(newDate);
            }
          }}
          onKeyDown={e => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={selectedDate => {
                if (!selectedDate) return; // Guard against undefined
                setDate(selectedDate);
                setInputValue(formatDate(selectedDate));
                setOpen(false);
                onChange?.(selectedDate);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
