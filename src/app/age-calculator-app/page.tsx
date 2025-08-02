"use client";
import { useState } from "react";
import Arrow from "@/components/age-calculator-app/icon-arrow.svg";

export default function AgeCalculatorApp() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  const [errors, setErrors] = useState({ day: '', month: '', year: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { day: '', month: '', year: '' };

    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    const today = new Date();

    if (!day) {
      newErrors.day = 'This field is required';
      hasError = true;
    } else if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
      newErrors.day = 'Must be a valid day';
      hasError = true;
    }

    if (!month) {
      newErrors.month = 'This field is required';
      hasError = true;
    } else if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      newErrors.month = 'Must be a valid month';
      hasError = true;
    }

    if (!year) {
      newErrors.year = 'This field is required';
      hasError = true;
    } else if (isNaN(yearNum) || yearNum > today.getFullYear()) {
      newErrors.year = 'Must be in the past';
      hasError = true;
    } else {
        const date = new Date(yearNum, monthNum - 1, dayNum);
        if (date.getFullYear() !== yearNum || date.getMonth() + 1 !== monthNum || date.getDate() !== dayNum) {
            newErrors.day = 'Must be a valid date';
            newErrors.month = '';
            newErrors.year = '';
            hasError = true;
        }
    }

    setErrors(newErrors);

    if (!hasError) {
      const birthDate = new Date(yearNum, monthNum - 1, dayNum);
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
      }

      if (days < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
         if (months < 0) {
            months = 11;
            years--
         }
      }

      setAge({ years: years.toString(), months: months.toString(), days: days.toString() });
    } else {
      setAge({ years: '--', months: '--', days: '--' });
    }
  };

  return (
    <div className="bg-[hsl(0,0%,94%)] min-h-screen flex items-center justify-center font-['Poppins']">
      <main className="bg-white p-8 rounded-3xl rounded-br-[100px] max-w-lg w-full shadow-lg">
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex space-x-4">
            <label htmlFor="day" className={`flex flex-col ${errors.day ? 'text-red-500' : 'text-gray-500'}`}>
              <span className="tracking-widest text-xs font-bold mb-1">DAY</span>
              <input type="number" id="day" placeholder="DD" value={day} onChange={(e) => setDay(e.target.value)} className={`p-3 border rounded-md w-24 text-black text-xl font-bold focus:outline-none focus:ring-2 ${errors.day ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-500'}`} />
              {errors.day && <div className="text-red-500 text-xs italic mt-1">{errors.day}</div>}
            </label>

            <label htmlFor="month" className={`flex flex-col ${errors.month ? 'text-red-500' : 'text-gray-500'}`}>
              <span className="tracking-widest text-xs font-bold mb-1">MONTH</span>
              <input type="number" id="month" placeholder="MM" value={month} onChange={(e) => setMonth(e.target.value)} className={`p-3 border rounded-md w-24 text-black text-xl font-bold focus:outline-none focus:ring-2 ${errors.month ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-500'}`} />
              {errors.month && <div className="text-red-500 text-xs italic mt-1">{errors.month}</div>}
            </label>

            <label htmlFor="year" className={`flex flex-col ${errors.year ? 'text-red-500' : 'text-gray-500'}`}>
              <span className="tracking-widest text-xs font-bold mb-1">YEAR</span>
              <input type="number" id="year" placeholder="YYYY" value={year} onChange={(e) => setYear(e.target.value)} className={`p-3 border rounded-md w-24 text-black text-xl font-bold focus:outline-none focus:ring-2 ${errors.year ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-500'}`} />
              {errors.year && <div className="text-red-500 text-xs italic mt-1">{errors.year}</div>}
            </label>
          </div>

          <div className="flex items-center my-8">
            <hr className="flex-grow border-t border-gray-300" />
            <button type="submit" className="cursor-pointer bg-[hsl(259,100%,65%)] rounded-full p-4 hover:bg-black focus:outline-none">
              <Arrow className="w-8 h-8" />
            </button>
          </div>
        </form>

        <div className="text-6xl font-extrabolditalic">
          <div><span className="text-[hsl(259,100%,65%)]">{age.years}</span> years</div>
          <div><span className="text-[hsl(259,100%,65%)]">{age.months}</span> months</div>
          <div><span className="text-[hsl(259,100%,65%)]">{age.days}</span> days</div>
        </div>
      </main>
    </div>
  );
}