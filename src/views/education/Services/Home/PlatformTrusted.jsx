import React from "react";
import { FaUserGraduate, FaClipboardList, FaVideo, FaFileAlt } from "react-icons/fa";
import "./PlatformTrusted.css";

const statsData = [
  {
    number: "15M+",
    label: "Happy Students",
    icon: <FaUserGraduate />,
    light: "#FFF3E6",
    dark: "#2E2E2E",
  },
  {
    number: "24K+",
    label: "Mock Tests",
    icon: <FaClipboardList />,
    light: "#FFECEC",
    dark: "#3A3A3A",
  },
  {
    number: "14K+",
    label: "Video Lectures",
    icon: <FaVideo />,
    light: "#E6F8FF",
    dark: "#1F1F1F",
  },
  {
    number: "80K+",
    label: "Practice Papers",
    icon: <FaFileAlt />,
    light: "#EFE8FF",
    dark: "#2B2B2B",
  },
];

function PlatformTrusted() {
  return (
    <section className="trusted-container">
      <h2 className="trusted-title text-center">Platform Trusted</h2>
      <p className="trusted-subtitle text-center">
        Visdom Waves delivers real impact through measurable learning outcomes.
      </p>

      <div className="row justify-content-center mt-5">
        {statsData.map((item, index) => (
          <div
            className="col-xl-3 col-md-6 d-flex justify-content-center"
            key={index}
          >
            <div
              className="trusted-card"
              style={{
                "--light-color": item.light,
                "--dark-color": item.dark,
              }}
            >
              <div className="trusted-icon">{item.icon}</div>
              <h3 className="trusted-number">{item.number}</h3>
              <p className="trusted-label">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlatformTrusted;








// import React from "react";
// import "./PlatformTrusted.css";

// const statsData = [
//   {
//     number: "15M+",
//     label: "Happy Students",
//     accent: "#FF9F43",
//   },
//   {
//     number: "24K+",
//     label: "Mock Tests",
//     accent: "#FF6B6B",
//   },
//   {
//     number: "14K+",
//     label: "Video Lectures",
//     accent: "#1DD1A1",
//   },
//   {
//     number: "80K+",
//     label: "Practice Papers",
//     accent: "#5F27CD",
//   },
// ];

// function PlatformTrusted() {
//   return (
//     <section className="trusted-container position-relative">
//       {/* Heading */}
//       <h2 className="trusted-title text-center">
//         Platform Trusted
//       </h2>

//       <p className="trusted-subtitle text-center">
//         Visdom Waves delivers real impact through measurable learning outcomes.
//       </p>

//       {/* Stats Cards */}
//       <div className="row justify-content-center mt-5">
//         {statsData.map((item, index) => (
//           <div
//             className="col-xl-3 col-md-6 d-flex justify-content-center"
//             key={index}
//           >
//             <div
//               className="trusted-card"
//               style={{ "--accent": item.accent }}
//             >
//               <div className="trusted-glow" />
//               <h3 className="trusted-number">{item.number}</h3>
//               <p className="trusted-label">{item.label}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default PlatformTrusted;
