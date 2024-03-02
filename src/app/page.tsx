import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-button">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

      <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://beabstracto.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >

        <p className="fixed left-0 animate-blink top-0 flex w-full justify-center  text-center border-bpb-6 pt-8 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Bem vindo ao próximo nível de marketing!!!&nbsp;
          <Image
            src="/logoemp.svg"
            alt="Logo"
            className="dark:invert"
            width={50}
            height={14}
            priority
          />
        </p>

          </a>

        <div className="   fixed bottom-0 left-0 flex h-48 w-full items-end justify-center   dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
             <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://beabstracto.web.app/#services"
            target="_blank"
            rel="noopener noreferrer"
          >
           {" "}
            <Image
              src="/logoemp.svg"
              alt="Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>




      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://beabstracto.web.app/#services"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >

{" "}
            <Image
              src="/tecnolog.svg"
              alt="Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />

          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tecnologia{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius..
          </p>
        </a>

        <a
          href="https://beabstracto.web.app/#services"
          className="  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >

{" "}
            <Image
              src="/1.jpg"
              alt="Logo"
              className="dark:invert "
              width={100}
              height={24}
              priority
            />

          <h2 className={`mb-3 text-2xl font-semibold`}>
            Marketing{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius..
          </p>
        </a>

        <a
          href="https://beabstracto.web.app/#services"
          className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >

          
{" "}
            <Image
              src="/2.png"
              alt="Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />

          <h2 className={`mb-3 text-2xl font-semibold`}>
            AudioVisual{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius..
          </p>
        </a>

        <a
          href="https://beabstracto.web.app/"
          className="group animate-blink rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius..
          </p>
        </a>
      </div>
    </main>
  );
}



