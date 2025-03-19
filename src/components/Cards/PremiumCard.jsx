import './Card.css';
import { Link } from 'react-router-dom';
export default function PremiumCard() {
  return (
    <div className="w-full pt-10 px-8 pb-8 mt-5" style={{ backgroundColor: 'rgba(28, 28, 29, 0.55)', borderRadius: '1.5rem' }}>
      <div className="text-center mb-6">
        <h5 className="text-2xl font-semibold text-white mb-3 font_monarch_1">«Премиум»</h5>
        <span className="block text-4xl font-bold text-white mb-3">Индивидуальный рассчёт</span>
        <span className="block text-gray-300 font-medium mb-6">Для тех, кто хочет больше, чем  трек.</span>
        <Link
          className="relative group inline-block w-full py-4 px-6 text-center text-gray-50 hover:text-gray-900 bg-[#7CA200] font-semibold rounded-full overflow-hidden transition duration-200"
          to="/survey-individual?name=Premium"
        >
          <div
            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
          ></div>
          <span className="relative">Заказать</span>
        </Link>
      </div>
      <ul>
        <li className="flex mb-4 items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white w-100">Вы получите сразу ТРИ ВЕРСИИ ПЕСНИ: 1 основная версия трека и 2 в подарок</span>
        </li>
        <li className="flex mb-4 items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white w-100">Грубый, матёрый, воинственный голос с хрипотцой – сила, пробивающая сквозь бетон.</span>
        </li>
        <li className="flex mb-4 items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white w-100">Глубокая вокальная подача – прочувствованная, мощная, передающая эмоции.</span>
        </li>
        <li className="flex mb-4 items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white w-100">Эксклюзив от артиста KSON – самый низкий голос на эстраде, известный артист лично исполнит трек для вашего героя.</span>
        </li>
        <li className="flex mb-4 items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white">Всё из «Расширенного»</span>
        </li>
        <li className="flex mb-4 items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white">3 версии трека</span>
        </li>
        <li className="flex mb-4 items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white w-100">Ваш голос или персональное послание в треке</span>
        </li>
        <li className="flex mb-4 items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white w-100">Озвучка позывного или имени легендарным голосом</span>
        </li>
        <li className="flex mb-4 items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white w-100">Профессиональная запись с несколькими звукорежиссёрами и сонграйтерами</span>
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
            ></path>
          </svg>
          <span className="ml-2 text-white w-100">Авторский подход – мы превратим историю солдата в шедевр</span>
        </li>
      </ul>
    </div>
  );
}
