import { useState, useEffect, useRef } from "react";
import { BsPersonFillGear } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";

const StatsCounter = () => {
  const [counters, setCounters] = useState([
    { number: 324, current: 0, name: " طلاب الكلية", icon: <FaPeopleGroup className="text-[#272222] text-7xl mx-auto" /> },
    { number: 43, current: 0, name: "أعضاء هيئة التدريس", icon: <FaChalkboardTeacher className="text-[#0b0202] text-7xl mx-auto " /> },
    { number: 28, current: 0, name: "العاملين بالكادر العام", icon: <BsPersonFillGear className="text-[#272222] text-7xl mx-auto" /> },
    { number: 8, current: 0, name: "أقسام الكلية", icon: <GiBookshelf className="text-[#272222] text-7xl mx-auto" /> },
  ]);

  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = countersRef.current.indexOf(entry.target);
            if (index !== -1) {
              animateCounter(index);
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold for better control of when the element is visible
    );

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      countersRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const animateCounter = (index) => {
    let start = 0;
    const end = counters[index].number;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 2;
      setCounters((prevCounters) => prevCounters.map((counter, i) => (i === index ? { ...counter, current: start } : counter)));
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <>
      <div className="">
        <div className="container mx-auto my-10 py-32">
          <div className="grid grid-cols-4">
            {counters.map((item, index) => (
              <div key={index} className="flex flex-row-reverse items-center mx-auto ScrollEffectApper" ref={(el) => (countersRef.current[index] = el)}>
                <div className="flex flex-col items-center ScrollEffectLeft">
                  <span className="font-bold text-7xl">+{item.current}</span>
                  <span className="border-b-8 border-primary w-full"></span>
                  <span className="text-l">{item.name}</span>
                </div>
                <div className="border-r-4 ScrollEffectRight border-primary h-full items-center p-2 m-2">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCounter;
