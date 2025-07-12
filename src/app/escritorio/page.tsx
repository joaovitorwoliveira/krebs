import Image from "next/image";

export default function Office() {
  return (
    <div className="min-h-screen relative">
      {/* Background with images */}
      <div className="absolute inset-0 mx-auto opacity-10 -z-10">
        <Image
          className="w-full"
          src={"/images/curvas.svg"}
          alt={"Curvas"}
          width={100}
          height={100}
        />
        <Image
          className="w-full rotate-180 scale-x-[-1]"
          src={"/images/curvas.svg"}
          alt={"Curvas"}
          width={100}
          height={100}
        />
        <Image
          className="w-full"
          src={"/images/curvas.svg"}
          alt={"Curvas"}
          width={100}
          height={100}
        />
        <Image
          className="w-full rotate-180 scale-x-[-1]"
          src={"/images/curvas.svg"}
          alt={"Curvas"}
          width={100}
          height={100}
        />
      </div>

      <div className="relative z-10">
        <section className="container mx-auto px-4 py-16 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mx-auto max-w-[1200px]">
            <div className="order-2 lg:order-1">
              <Image
                className="w-full h-auto shadow-lg"
                src={"/images/colegio-farroupilha/foto-3.jpg"}
                alt={"Escritório"}
                unoptimized
                width={400}
                height={400}
              />
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-3xl font-semibold text-dark mb-6">
                Nosso Escritório
              </h1>
              <p className="text-base font-light text-green-5 mb-4">
                Somos um estúdio de arquitetura paisagística que cria
                experiências únicas através do design
              </p>
              <p className="text-base font-light text-green-5 mb-4">
                Com mais de 35 anos de experiência, projetamos ambientes
                excepcionais e envolventes capazes de conectar as pessoas à
                natureza. ​ Não importa o tipo de projeto. Com criatividade,
                projetamos designs contemporâneos que definem o espaço e
                enaltecem as plantas de forma estratégica, através de soluções
                exclusivas e duradouras que traduzem as necessidades e a
                personalidade de cada cliente em sinergia com a natureza do
                local.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
