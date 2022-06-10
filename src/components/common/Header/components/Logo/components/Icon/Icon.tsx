import React from 'react';
import { Icon as ChakraIcon, IconProps } from '@chakra-ui/react';

export const Icon = (props: IconProps) => {
  //
  return (
    <ChakraIcon
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      {...props}
    >
      <mask
        id="mask0_649_46780"
        //style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="42"
        height="42"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0ZM13.1366 9.23104C15.4642 7.6758 18.2007 6.8457 21.0001 6.8457C24.7539 6.8457 28.3539 8.3369 31.0083 10.9913C33.6627 13.6456 35.1539 17.2457 35.1539 20.9995C35.1539 23.7989 34.3238 26.5354 32.7685 28.863C31.2133 31.1906 29.0027 33.0047 26.4165 34.076C23.8302 35.1473 20.9843 35.4276 18.2387 34.8814C15.4931 34.3353 12.9712 32.9873 10.9918 31.0078C9.01231 29.0284 7.66429 26.5064 7.11816 23.7608C6.57203 21.0152 6.85232 18.1694 7.92359 15.5831C8.99486 12.9968 10.809 10.7863 13.1366 9.23104ZM25.7111 16.4435L21.0001 14.0053L16.289 16.4435L19.0371 17.7865L21.0001 16.7534L22.963 17.7865L25.7111 16.4435ZM27.2814 21.6814L21.0001 18.4374L14.7186 21.6917L17.4667 23.0348L21.0001 21.2062L24.5333 23.0245L27.2814 21.6814ZM21.0001 25.597L25.9177 27.9938L28.7175 26.6301L21.0001 22.8592L13.2826 26.6301L16.0824 27.9938L21.0001 25.597Z"
          fill="url(#paint0_linear_649_46780)"
        />
      </mask>
      <g mask="url(#mask0_649_46780)">
        <g filter="url(#filter0_f_649_46780)">
          <rect
            x="6"
            y="6"
            width="30"
            height="30"
            rx="15"
            fill="url(#paint1_linear_649_46780)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_649_46780"
          x="-2"
          y="-2"
          width="46"
          height="46"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4"
            result="effect1_foregroundBlur_649_46780"
          />
        </filter>
        <linearGradient
          id="paint0_linear_649_46780"
          x1="5.58709"
          y1="7.49223"
          x2="34.695"
          y2="36.6001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCEB00" />
          <stop offset="1" stopColor="#00EAEA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_649_46780"
          x1="9.99078"
          y1="11.3516"
          x2="30.7821"
          y2="32.1429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCEB00" />
          <stop offset="1" stopColor="#00EAEA" />
        </linearGradient>
      </defs>
    </ChakraIcon>
  );
};
