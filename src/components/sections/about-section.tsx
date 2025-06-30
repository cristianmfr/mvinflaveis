import HeroVideoDialog from '../videos/hero-video-dialog'

export function AboutSection() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-[38rem] bg-primary">
      <div className="flex flex-col text-lg font-normal text-white gap-4 justify-center px-12">
        <img src="/logo.svg" alt="logo" className="size-20 -mb-4" />
        <span className="text-2xl font-black">Sobre a MV!</span>
        <p>
          Na <strong>MV Infláveis</strong>, transformamos ideias em estruturas
          que chamam atenção de longe. Somos especialistas em infláveis
          promocionais e desenvolvemos soluções que ajudam marcas a se
          destacarem em eventos, ativações e campanhas publicitárias.
        </p>
        <p>
          Produzimos réplicas gigantes, tendas, totens, túneis, balões e wind
          banners com alto padrão de qualidade e personalização. Nosso foco é
          entregar produtos que não só impactam visualmente, mas também
          fortalecem a presença da sua marca.
        </p>
        <p>
          Atendemos empresas de todos os tamanhos, com agilidade, compromisso e
          um atendimento próximo. Se o objetivo é ser visto, lembrado e
          comentado, você está no lugar certo.
        </p>
        <p className="font-bold">Seu evento maior, sua marca mais forte.</p>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://pub-0c43a5b91b2c48b3a54b09c43b3d0b19.r2.dev/VIDEO%20INSTITUCIONAL.mp4"
          thumbnailSrc="https://pub-0c43a5b91b2c48b3a54b09c43b3d0b19.r2.dev/video-capture-t0030.00seg-8044.png"
          thumbnailAlt="Sobre Nós"
        />
      </div>
    </div>
  )
}
