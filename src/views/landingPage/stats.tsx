import { ClockIcon, MapPinIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    name: "Students",
    value: "100000+",
    icon: <UserGroupIcon width={42} height={42} className="mx-auto" />,
  },
  { id: 2, name: "Hours", value: "100k+", icon: <ClockIcon width={42} height={42} className="mx-auto" />, },
  { id: 3, name: "Cities", value: "1500+", icon: <MapPinIcon width={42} height={42} className="mx-auto" />, },
];

export default function StatsSection() {
  return (
    <div className="bg-white pt-4 pb-12 sm:pb-16 sm:pt-6 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              id={stat.value}
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              
              <div className="mx-auto flex flex-col gap-y-0">
                {stat.icon}
                <h5 className="text-base/7 text-gray-600"> {stat.name}</h5>
              </div>
              <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
