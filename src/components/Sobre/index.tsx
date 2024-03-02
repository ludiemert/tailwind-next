import { ArrowRight } from "lucide-react";

export function Sobre() {
  return (

    <div className="h-[128px] w-[430px] gap-2 p-0">
      <h1 className="order-0 h-[24px] w-[430px] flex-none flex-grow-0 text-xs font-semibold leading-6 lg:text-base">
        SOMOS MARKETEIROS
      </h1>

      <h2 className="h-[48px] w-[430px] text-left text-xs font-normal leading-6 mb-2 text-base-font-warning-500 lg:text-base  lg:mb-8">
        Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing
        pulvinar pulvinar varius. 
      </h2>

      <a
        href="https://beabstracto.web.app/#services"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className=" translate text-xs font-median flex items-center justify-center gap-2 rounded lg:text-base">
          <h2 className=" animate-blink text-base  font-bold text-base-global-blue-600  lg:text-base">
            Todos serviços
          </h2>

          <ArrowRight className=" order-0 ml-auto h-4 w-4 flex-none  text-base-global-blue-600  hover:text-base-global-blue-700" />
        </button>
      </a>
    </div>

  )

}


