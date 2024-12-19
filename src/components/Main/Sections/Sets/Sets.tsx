import WitcherSet from '../../../../images/witcher_heart_set.webp'
import HikeSet from '../../../../images/hikeSet.jpg'
import OfficeSet from '../../../../images/OfficeSet.png'
import EverythingSet from '../../../../images/EverythingSet.png'
import SetCard from "./SetCard";

const Sets = () => {

    const setsData = [
        {
            imageSrc: WitcherSet,
            altText:"Witcher Set",
            price: "700",
            defaultText: "Відьмаче серце",
            hoverContent: (
                <div className="flex flex-col justify-center items-center p-2">
                    <p className="border-2 rounded-xl mb-4 p-4 font-bold backdrop-blur">
                        Цей набір ідеально підходить для дружнього вечора та
                        затишних посиденьок у колі друзів! Відмінний вибір для вечірки, перегляду фільму або просто
                        гарного
                        відпочинку. Крафтове пиво з насиченим смаком і класичні снеки стануть ідеальним доповненням до
                        вашого
                        настрою. Замовляйте зараз, щоб зробити свій вечір незабутнім!
                    </p>
                    <p className="font-bold">До складу входить:</p>
                    <hr className="my-2 border-t border-gray-300"/>
                    <ul className="border-2 rounded-xl mb-4 p-4 bg-green-500">
                        <li>4 упаковки класичних джерок.</li>
                        <li>4л. класичного крафтового пива</li>
                    </ul>
                </div>
            ),
        },
        {
            imageSrc: HikeSet,
            altText: "Hike Set",
            defaultText: "Візьми в похід !",
            price: "1400",
            hoverContent: (
                <div className="flex flex-col justify-center items-center p-2">
                    <p className="border-2 rounded-xl mb-4 p-4 font-bold backdrop-blur">
                        Ідеальний набір для вашої наступної подорожі на природу!
                        Візьміть із собою класичні снеки та смачне домашнє вино, щоб зробити відпочинок ще приємнішим.
                        Будь то пікнік на свіжому повітрі або вечір біля вогнища, цей набір стане чудовим доповненням до
                        вашого часу на природі.
                        Зберіть друзів, візьміть намет і зробіть ваш похід незабутнім!
                    </p>
                    <p className="font-bold">До складу входить:</p>
                    <hr className="my-2 border-t border-gray-300"/>
                    <ul className="border-2 rounded-xl mb-4 p-4 bg-green-500">
                        <li>6 упаковок класичних та 6 упаковок спайсі джерок.</li>
                        <li>2л. домашнього вина котре було зроблено за усіма стандартами</li>
                    </ul>
                </div>
            ),
        },
        {
            imageSrc: OfficeSet,
            altText: "Office Set",
            defaultText: "Подбай про колег",
            price: "1200",
            hoverContent: (
                <div className="flex flex-col justify-center items-center p-2">
                    <p className="border-2 rounded-xl mb-4 p-4 font-bold backdrop-blur">
                        Спільні перекуси на роботі завжди створюють гарну атмосферу!
                        Подбай про своїх колег і зроби день у офісі ще приємнішим з нашим комплектом — 20 упаковок джерок з різними смаками для будь-якого настрою.
                        Це чудовий спосіб підняти настрій і підтримати командний дух. Порадуй колег смачними перекусами і зроби кожен робочий день трошки кращим!
                    </p>
                    <p className="font-bold">До складу входить:</p>
                    <hr className="my-2 border-t border-gray-300"/>
                    <ul className="border-2 rounded-xl mb-4 p-4 bg-green-500">
                        <li>20 упаковок джерок з різними смаками.</li>
                    </ul>
                </div>
            ),
        },
        {
            imageSrc: EverythingSet,
            altText: "Everything Set",
            price: "1200",
            defaultText: "Все потроху",
            hoverContent: (
                <div className="flex flex-col justify-center items-center p-2">
                    <p className="border-2 rounded-xl mb-4 p-4 font-bold backdrop-blur">
                        Коли не можеш визначитись з вибором і хочеш спробувати все!
                        Візьми набір з 20 упаковок джерок з різними смаками і знайди свій ідеальний смак.
                        Від класичних до оригінальних варіантів — цей тест смаку точно допоможе визначитись!
                        І хто знає, можливо, ти знайдеш новий улюблений смак!
                    </p>
                    <p className="font-bold">До складу входить:</p>
                    <hr className="my-2 border-t border-gray-300"/>
                    <ul className="border-2 rounded-xl mb-4 p-4 bg-green-500">
                        <li>?? упаковок джерок по пачці на смак</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <section className="container">
            <h2 className="text-center font-bold text-xl mb-4">Готові набори:</h2>
            <div className="grid place-items-center grid-cols-2 gap-4">
                {setsData.map((set, index) => (
                    <SetCard
                        key={index}
                        price={set.price}
                        imageSrc={set.imageSrc}
                        altText={set.altText}
                        defaultText={set.defaultText}
                        hoverContent={set.hoverContent}
                    />
                ))}
            </div>
        </section>
    );
};

export default Sets;