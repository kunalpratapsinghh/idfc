import * as React from "react";

type GraduationCapIconProps = React.SVGProps<SVGSVGElement>;

export const GraduationCapIcon = (props: GraduationCapIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      d="M14.2818 7.28125C14.4012 7.2286 14.5024 7.14209 14.5731 7.03245C14.6438 6.9228 14.6807 6.79484 14.6794 6.6644C14.678 6.53397 14.6384 6.40679 14.5655 6.29863C14.4926 6.19048 14.3896 6.10608 14.2692 6.05591L8.55515 3.45325C8.38144 3.37401 8.19274 3.33301 8.00182 3.33301C7.81089 3.33301 7.62219 3.37401 7.44848 3.45325L1.73515 6.05325C1.61646 6.10523 1.5155 6.19067 1.4446 6.29912C1.3737 6.40758 1.33594 6.53434 1.33594 6.66391C1.33594 6.79348 1.3737 6.92025 1.4446 7.0287C1.5155 7.13716 1.61646 7.2226 1.73515 7.27458L7.44848 9.87991C7.62219 9.95915 7.81089 10.0002 8.00182 10.0002C8.19274 10.0002 8.38144 9.95915 8.55515 9.87991L14.2818 7.28125Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6641 6.66602V10.666"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 8.33301V10.6663C4 11.1968 4.42143 11.7055 5.17157 12.0806C5.92172 12.4556 6.93913 12.6663 8 12.6663C9.06087 12.6663 10.0783 12.4556 10.8284 12.0806C11.5786 11.7055 12 11.1968 12 10.6663V8.33301"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default GraduationCapIcon;
