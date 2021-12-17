import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const SelectedFocus: React.FC = () => (
  <Svg
    width="1000"
    height="1001"
    viewBox="0 0 1000 1001"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect
      y="0.34375"
      width="1000"
      height="1000"
      rx="22"
      fill="illustrationBackground020"
    />
    <Path
      d="M184 223C134.294 223 94 268.079 94 323.687V760H175H833L907 760V323.687C907 268.079 866.706 223 817 223H184Z"
      fill="illustrationPalette010"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M107.5 749C100.044 749 94 755.044 94 762.5C94 769.956 100.044 776 107.5 776H893.5C900.956 776 907 769.956 907 762.5C907 755.044 900.956 749 893.5 749H107.5Z"
      fill="illustrationPalette060"
    />
    <Path
      d="M425.2 429.85V449.625H392.65V552H368.15V449.625H335.6V429.85H425.2Z"
      fill="illustrationPalette060"
    />
    <Path
      d="M436.776 503.175C436.776 493.375 438.701 484.683 442.551 477.1C446.518 469.517 451.826 463.683 458.476 459.6C465.243 455.517 472.768 453.475 481.051 453.475C488.284 453.475 494.584 454.933 499.951 457.85C505.434 460.767 509.809 464.442 513.076 468.875V455.05H537.751V552H513.076V537.825C509.926 542.375 505.551 546.167 499.951 549.2C494.468 552.117 488.109 553.575 480.876 553.575C472.709 553.575 465.243 551.475 458.476 547.275C451.826 543.075 446.518 537.183 442.551 529.6C438.701 521.9 436.776 513.092 436.776 503.175ZM513.076 503.525C513.076 497.575 511.909 492.5 509.576 488.3C507.243 483.983 504.093 480.717 500.126 478.5C496.159 476.167 491.901 475 487.351 475C482.801 475 478.601 476.108 474.751 478.325C470.901 480.542 467.751 483.808 465.301 488.125C462.968 492.325 461.801 497.342 461.801 503.175C461.801 509.008 462.968 514.142 465.301 518.575C467.751 522.892 470.901 526.217 474.751 528.55C478.718 530.883 482.918 532.05 487.351 532.05C491.901 532.05 496.159 530.942 500.126 528.725C504.093 526.392 507.243 523.125 509.576 518.925C511.909 514.608 513.076 509.475 513.076 503.525Z"
      fill="illustrationPalette060"
    />
    <Path
      d="M586.18 469.225C589.33 464.558 593.646 460.767 599.13 457.85C604.73 454.933 611.088 453.475 618.205 453.475C626.488 453.475 633.955 455.517 640.605 459.6C647.371 463.683 652.68 469.517 656.53 477.1C660.496 484.567 662.48 493.258 662.48 503.175C662.48 513.092 660.496 521.9 656.53 529.6C652.68 537.183 647.371 543.075 640.605 547.275C633.955 551.475 626.488 553.575 618.205 553.575C610.971 553.575 604.613 552.175 599.13 549.375C593.763 546.458 589.446 542.725 586.18 538.175V552H561.68V422.5H586.18V469.225ZM637.455 503.175C637.455 497.342 636.23 492.325 633.78 488.125C631.446 483.808 628.296 480.542 624.33 478.325C620.48 476.108 616.28 475 611.73 475C607.296 475 603.096 476.167 599.13 478.5C595.28 480.717 592.13 483.983 589.68 488.3C587.346 492.617 586.18 497.692 586.18 503.525C586.18 509.358 587.346 514.433 589.68 518.75C592.13 523.067 595.28 526.392 599.13 528.725C603.096 530.942 607.296 532.05 611.73 532.05C616.28 532.05 620.48 530.883 624.33 528.55C628.296 526.217 631.446 522.892 633.78 518.575C636.23 514.258 637.455 509.125 637.455 503.175Z"
      fill="illustrationPalette060"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M131.629 839.526L134.734 823.83C141.923 825.252 149.366 826 157 826H181.464V842H157C148.318 842 139.835 841.149 131.629 839.526ZM817.536 842V826H842C849.634 826 857.077 825.252 864.266 823.83L867.371 839.526C859.165 841.149 850.682 842 842 842H817.536ZM914.23 820.104L905.329 806.808C917.768 798.48 928.48 787.768 936.808 775.329L950.104 784.23C940.612 798.407 928.407 810.612 914.23 820.104ZM972 311.688H956V285C956 277.366 955.252 269.923 953.83 262.734L969.526 259.629C971.149 267.835 972 276.318 972 285V311.688ZM950.104 212.77L936.808 221.671C928.48 209.232 917.768 198.52 905.329 190.192L914.23 176.896C928.407 186.388 940.612 198.593 950.104 212.77ZM181.464 155H157C148.318 155 139.835 155.851 131.629 157.474L134.734 173.17C141.923 171.748 149.366 171 157 171H181.464V155ZM84.77 176.896L93.6711 190.192C81.2323 198.52 70.5195 209.232 62.192 221.671L48.8965 212.77C58.3875 198.593 70.5933 186.388 84.77 176.896ZM27 685.312H43V712C43 719.634 43.7481 727.077 45.1702 734.266L29.4744 737.371C27.8511 729.165 27 720.682 27 712V685.312ZM48.8965 784.23L62.192 775.329C70.5195 787.768 81.2323 798.48 93.6711 806.808L84.77 820.104C70.5933 810.612 58.3876 798.407 48.8965 784.23ZM27 631.938H43V578.562H27V631.938ZM27 525.188H43V471.812H27V525.188ZM27 418.438H43V365.062H27V418.438ZM27 311.688H43V285C43 277.366 43.7481 269.923 45.1702 262.734L29.4744 259.629C27.8511 267.835 27 276.318 27 285V311.688ZM230.393 155V171H279.321V155H230.393ZM328.25 155V171H377.179V155H328.25ZM426.107 155V171H475.036V155H426.107ZM523.964 155V171H572.893V155H523.964ZM621.821 155V171H670.75V155H621.821ZM719.679 155V171H768.607V155H719.679ZM817.536 155V171H842C849.634 171 857.077 171.748 864.266 173.17L867.371 157.474C859.165 155.851 850.682 155 842 155H817.536ZM972 365.062H956V418.438H972V365.062ZM972 471.812H956V525.188H972V471.812ZM972 578.562H956V631.938H972V578.562ZM972 685.312H956V712C956 719.634 955.252 727.077 953.83 734.266L969.526 737.371C971.149 729.165 972 720.682 972 712V685.312ZM768.607 842V826H719.679V842H768.607ZM670.75 842V826H621.821V842H670.75ZM572.893 842V826H523.964V842H572.893ZM475.036 842V826H426.107V842H475.036ZM377.179 842V826H328.25V842H377.179ZM279.321 842V826H230.393V842H279.321Z"
      fill="illustrationPalette070"
    />
  </Svg>
);

export default SelectedFocus;
