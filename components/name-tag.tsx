import { Card } from "@/components/ui/card";
import { CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";
import WavyLinesBackground from "@/components/wavy-lines";

const BapendaLogo = () => (
  <svg
    width="110"
    height="25"
    viewBox="0 0 130 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mb-2 text-blue-500"
  >
    <g fill="currentColor">
      <path
        className="text-orange-600"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.139716 11.2024C0.0465981 11.4047 0 11.395 0 11.173V0.157488C0 0.0355908 0.0609599 -0.0155002 0.182958 0.00406172C2.94442 0.408877 4.81748 3.34071 5.49615 5.82522C5.53384 5.96454 5.48515 6.0625 5.3498 6.11903C2.94769 7.15943 1.211 8.85387 0.139716 11.2024Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M110.754 10.2601C109.567 8.15779 108.179 7.20422 106.036 6.11401C105.938 6.06414 105.902 5.98813 105.929 5.88621C106.576 3.2143 108.33 0.828856 111.16 0.00872662C111.27 -0.0236198 111.386 0.0366378 111.42 0.143235C111.426 0.161894 111.429 0.18124 111.429 0.20074V11.0998C111.429 11.2104 111.395 11.2212 111.328 11.1323C111.113 10.8459 110.922 10.5552 110.754 10.2601Z"
      />
      <path
        className="text-orange-600"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5689 17.59C14.6799 14.7703 11.5323 10.0011 7.8138 11.5386C6.98151 11.8809 6.37395 12.4337 5.99101 13.1969C5.97553 13.2297 5.79403 13.9198 5.44654 15.2675C4.92419 17.289 3.59385 18.6443 1.45568 19.3334C1.35831 19.3638 1.28525 19.3345 1.23657 19.2451C-0.505438 15.9566 -0.406903 12.8524 1.53209 9.93251C5.81841 3.47548 15.6295 5.13717 17.9071 12.4119C18.2346 13.4564 18.3321 14.5697 18.1992 15.7516C17.2629 24.0829 6.86093 26.6081 1.74124 20.0922C1.65049 19.9767 1.67479 19.895 1.8143 19.8469C3.61606 19.2146 4.91976 18.0457 5.72541 16.3404C5.7874 16.2095 5.8505 16.2084 5.91468 16.3371C6.98704 18.483 9.84238 19.1568 11.5689 17.59Z"
      />
      <path
        className="text-orange-600"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.1711 23.7538C18.5733 23.0854 15.453 11.909 22.9961 7.26619C27.105 4.73618 32.1756 5.85773 35.1771 9.63324C35.2264 9.69812 35.2127 9.79006 35.1469 9.83862C35.136 9.84675 35.1238 9.85333 35.1109 9.85816C33.3217 10.4994 32.0137 11.6666 31.1872 13.3598C31.1233 13.4902 31.0561 13.4913 30.9856 13.3631C29.9301 11.4677 28.4173 10.8428 26.4471 11.4884C25.5766 11.7753 24.9376 12.3252 24.5299 13.1381C23.069 16.0561 25.6769 19.1762 28.837 18.2568C29.8045 17.9764 30.502 17.395 30.9294 16.5126C30.9405 16.493 31.1189 15.8008 31.4649 14.4358C31.9783 12.4121 33.305 11.0634 35.4448 10.3896C35.5482 10.357 35.6266 10.3885 35.6795 10.4842C39.1536 16.6983 34.2945 24.3081 27.1711 23.7538Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.2253 13.4994C43.2097 13.5257 43.1752 13.5348 43.1485 13.5196C43.1389 13.5142 43.131 13.506 43.126 13.4961C42.3106 11.7779 40.9851 10.6004 39.1495 9.96358C39.0196 9.91824 38.9975 9.84375 39.0834 9.74021C40.7074 7.78022 42.6467 6.60484 44.9011 6.21409C53.7202 4.68259 59.1215 15.086 52.8245 21.293C51.3083 22.7866 49.4826 23.6081 47.3472 23.7569C40.0255 24.2653 35.206 17.0514 38.5281 10.6824C38.6207 10.5054 38.7637 10.4493 38.9578 10.514C40.7934 11.1314 42.0263 12.2798 42.6567 13.9591C42.6609 13.9699 42.7846 14.5064 43.0268 15.5685C43.5591 17.8932 45.9259 19.1235 48.1439 18.1425C49.0695 17.7323 49.6833 17.0643 49.985 16.1383C51.36 11.8998 45.6086 9.4002 43.2253 13.4994Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.6006 15.6511C68.6891 15.6067 68.747 15.5192 68.753 15.421C68.998 11.7894 64.4712 9.67205 62.1796 12.9211C60.9113 14.7206 61.5537 16.6758 63.2658 17.9761C63.3224 18.0188 63.3327 18.0981 63.2889 18.1534C63.288 18.1548 63.287 18.1562 63.2856 18.1576C62.0207 19.6146 61.6995 21.2834 62.3219 23.164C62.3477 23.248 62.2988 23.3366 62.213 23.3618C62.1828 23.3708 62.1505 23.3708 62.12 23.3618C56.4837 21.6984 54.5101 15.1875 57.2521 10.4308C61.0106 3.90046 71.1273 4.91536 73.6308 11.9807C74.7435 15.1227 74.0514 18.1965 70.9287 19.795C68.3457 21.1136 65.7528 22.3848 63.1499 23.6083C63.0681 23.6472 63.013 23.6256 62.9842 23.5433C61.2259 18.6634 65.0903 17.4703 68.6006 15.6511Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.217 11.7721C81.1373 12.3056 80.1077 13.5598 80.171 14.8206C80.3443 18.3508 79.7045 24.0858 74.7661 23.769C74.6594 23.7603 74.606 23.7054 74.606 23.6043C74.595 20.8282 74.6003 18.062 74.6227 15.3056C74.6537 11.4369 76.3478 8.66649 79.7045 6.99405C84.6594 4.52744 90.7875 7.18797 92.4237 12.2635C92.7193 13.1816 92.8636 14.521 92.8568 16.2818C92.846 18.7087 92.8436 21.1354 92.8502 23.5621C92.8502 23.6591 92.8003 23.7142 92.7002 23.7271C87.6287 24.3832 87.5819 19.0652 87.4787 15.6773C87.4429 14.5717 87.2786 13.7549 86.9854 13.2269C86.0757 11.5813 83.9263 10.9316 82.217 11.7721Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M98.7967 23.1931C94 21.1194 91.9345 15.5843 94.331 10.9114C98.2504 3.27001 109.985 5.04647 111.316 13.527C111.614 15.4309 111.339 17.6613 110.283 19.343C110.219 19.4431 110.131 19.4747 110.018 19.4377C107.756 18.6735 106.407 17.1953 105.97 15.0031C105.784 14.0757 105.609 13.4661 105.444 13.1744C104.169 10.9342 100.912 10.7285 99.3692 12.9687C96.4562 17.1975 103.305 21.0704 105.622 16.4203C105.647 16.3739 105.705 16.3558 105.752 16.3799C105.771 16.3893 105.786 16.4047 105.794 16.4237C106.606 18.15 107.923 19.331 109.743 19.9668C109.802 19.9875 109.833 20.051 109.811 20.1087C109.808 20.1187 109.803 20.128 109.796 20.1365C107.271 23.4575 102.865 24.9532 98.7967 23.1931Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M124.189 13.5104C121.209 8.32038 114.376 13.9345 118.486 17.6989C120.219 19.2844 123.072 18.6549 124.129 16.616C124.557 15.7973 124.464 14.8675 124.812 13.9997C125.503 12.2838 126.764 11.1323 128.593 10.5452C128.719 10.504 128.856 10.5581 128.914 10.6723C130.883 14.4304 130.183 19.1995 126.747 21.9169C120.696 26.696 111.845 22.4454 111.901 14.9556C111.967 6.33044 123.214 2.73229 128.391 9.85031C128.429 9.90313 128.416 9.97648 128.362 10.0141C128.353 10.0208 128.342 10.0261 128.331 10.0297C126.513 10.6343 125.199 11.7913 124.391 13.5007C124.329 13.6311 124.262 13.6343 124.189 13.5104Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.9612 23.9761C42.4648 26.5743 40.376 29.5618 37.6142 29.9971C37.5099 30.0123 37.4576 29.9688 37.4576 29.8662V18.8221C37.4576 18.4097 37.5465 18.3902 37.7241 18.7632C38.7925 21.0342 40.4903 22.6802 42.818 23.7011C42.9248 23.749 42.9842 23.8628 42.9612 23.9761Z"
      />
      <path
        className="text-orange-600"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.7529 18.5186C36.7609 18.5004 36.7823 18.4924 36.8005 18.5007C36.8138 18.5067 36.8223 18.5204 36.8216 18.535L36.8281 23.6112C36.8281 23.7295 36.7692 23.7866 36.6512 23.7821C35.5665 23.7406 34.6988 23.2955 34.0482 22.4475C33.9695 22.3444 33.9783 22.2511 34.0743 22.168C35.2443 21.1576 36.1372 19.9411 36.7529 18.5186Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M129.87 18.7817C129.957 18.6008 130 18.6104 130 18.8103L129.99 23.6259C129.99 23.7344 129.935 23.7864 129.825 23.7822C128.758 23.7375 127.894 23.312 127.233 22.5058C127.137 22.3909 127.146 22.2835 127.258 22.1834C128.371 21.2282 129.242 20.0943 129.87 18.7817Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.7859 20.7095C72.2089 21.275 73.311 22.1957 74.0926 23.4715C74.1661 23.5954 74.1225 23.7538 73.995 23.8254C73.9557 23.8475 73.9115 23.8593 73.8661 23.8601L63.9562 23.9378C63.6832 23.94 63.6698 23.8837 63.9163 23.7693L70.3963 20.7224C70.5252 20.6619 70.655 20.6577 70.7859 20.7095Z"
      />
    </g>
  </svg>
);

interface NameTagProps {
  name: string;
  role?: string;
  position: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
}

export function NameTag({
  name,
  position,
  eventTitle,
  eventDate,
  eventTime,
}: NameTagProps) {
  return (
    <Card
      className="h-[116mm] w-[81mm] relative overflow-hidden text-blue-950 rounded-none
        border-2 border-dashed border-gray-200 
        print:border print:border-dotted print:border-gray-300
        print:shadow-none 
        print:break-inside-avoid
        print:bg-white"
    >
      {/* Add corner marks for cutting guides */}
      <div className="absolute inset-0">
        {/* Top left corner */}
        <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-gray-300 print:border-gray-400" />
        {/* Top right corner */}
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-gray-300 print:border-gray-400" />
        {/* Bottom left corner */}
        <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-gray-300 print:border-gray-400" />
        {/* Bottom right corner */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-gray-300 print:border-gray-400" />
      </div>

      <div className="absolute inset-0 w-full h-full">
        <WavyLinesBackground numberOfLines={15} rotationAngle={-20} />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col items-center py-6">
          <div className="mb-2 flex flex-col items-center gap-x-2">
            <BapendaLogo />
            <div className=" w-8 h-[2px] bg-blue-500"></div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-sm ">
              Pemerintah Kabupaten <span>Garut</span>
            </p>
            <p className=" text-xs">Provinsi Jawa Barat</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-between flex-1 text-center py-4">
          {/* Event Info */}
          <div className="space-y-2 w-full">
            <div className="flex flex-col">
              <p className="text-xs italic">Seminar:</p>
              <p className="text-sm font-medium tracking-wide">{eventTitle}</p>
            </div>
            <div className="grid grid-cols-[1fr] gap-y-1 text-sm w-fit mx-auto">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-1 px-1.5 py-0.5 bg-blue-500 text-white rounded-md">
                  <CalendarBlank
                    weight="fill"
                    className="w-3.5 h-3.5 text-white"
                  />
                  <span className="font-bold text-xs">Waktu</span>
                </div>
                <p className="text-left text-xs ">{eventDate}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-1 px-1.5 py-0.5 bg-blue-500 text-white rounded-md">
                  <Clock weight="regular" className="w-3.5 h-3.5 text-white" />
                  <span className="font-bold text-xs">Jam</span>
                </div>
                <p className="text-left text-xs ">{eventTime}</p>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className=" w-full px-2 py-1 rounded-md">
            <p className="text-xs italic">Peserta:</p>
            <h2 className="text-lg font-bold text-blue-700 leading-tight">
              {name}
            </h2>
            <p className="text-xs font-medium ">{position}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
