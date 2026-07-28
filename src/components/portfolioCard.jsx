import Image from 'next/image';
import Link from 'next/link';

const PortfolioCard = ({ item }) => {
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
    >
      <div className="flex flex-col gap-6 md:gap-8 text-white items-center justify-center text-center pt-16 px-4">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg">
          {item.title}
        </h1>

        <div className="relative w-80 h-56 sm:w-96 sm:h-64 md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover rounded-xl shadow-2xl"
          />
        </div>

        <p className="w-80 sm:w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] md:text-lg lg:text-xl font-medium drop-shadow-md">
          {item.desc}
        </p>

        <Link href={item.link} className="flex justify-center">
          <button className="px-6 py-3 text-sm md:text-base lg:text-lg bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors shadow-lg">
            See Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
