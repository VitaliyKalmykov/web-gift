import WitcherSet from '../../../../images/witcher_heart_set.webp'
import HikeSet from '../../../../images/hikeSet.jpg'
import OfficeSet from '../../../../images/OfficeSet.png'
import EverythingSet from '../../../../images/EverythingSet.png'

const Sets = () => {
    return(
        <section className="container">
            <h2 className="text-center font-bold text-xl mb-4">Готові набори:</h2>
            <div className="grid place-items-center grid-cols-2 gap-4">
                <div className="w-full rounded-xl overflow-hidden relative group">
                    <img
                        className="w-full h-full"
                        src={WitcherSet}
                        alt="Witcher Set"
                    />
                    {/* Текст, який зникає при ховері */}
                    <div className="absolute inset-0 flex items-center justify-center text-xl group-hover:hidden">
                        <h3 className="font-bold border-2 bg-white rounded-xl p-2">Відьмаче серце</h3>
                    </div>
                    {/* Затінений фон */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-50 bg-black transition-all duration-300"></div>
                    {/* Текст, який з'являється при ховері */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:flex items-center justify-center text-white transition-all duration-300">
                        <p className="text-xl">Текст на ховер</p>
                    </div>
                </div>

                <div className="w-full rounded-xl overflow-hidden relative group">
                    <img
                        className="w-full h-full"
                        src={HikeSet}
                        alt="Hike Set"
                    />
                    {/* Текст, який зникає при ховері */}
                    <div className="absolute inset-0 flex items-center justify-center text-xl group-hover:hidden">
                        <h3 className="font-bold border-2 bg-white rounded-xl p-2">Візьми в похід !</h3>
                    </div>
                    {/* Затінений фон */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-50 bg-black transition-all duration-300"></div>
                    {/* Текст, який з'являється при ховері */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:flex items-center justify-center text-white transition-all duration-300">
                        <p className="text-xl">Текст на ховер</p>
                    </div>
                </div>

                <div className="w-full rounded-xl overflow-hidden relative group">
                    <img
                        className="w-full h-full"
                        src={OfficeSet}
                        alt="Office Set"
                    />
                    {/* Текст, який зникає при ховері */}
                    <div className="absolute inset-0 flex items-center justify-center text-xl group-hover:hidden">
                        <h3 className="font-bold border-2 bg-white rounded-xl p-2">Подбай про колег</h3>
                    </div>
                    {/* Затінений фон */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-50 bg-black transition-all duration-300"></div>
                    {/* Текст, який з'являється при ховері */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:flex items-center justify-center text-white transition-all duration-300">
                        <p className="text-xl">Текст на ховер</p>
                    </div>
                </div>

                <div className="w-full rounded-xl overflow-hidden relative group">
                    <img
                        className="w-full h-full"
                        src={EverythingSet}
                        alt="Everything Set"
                    />
                    {/* Текст, який зникає при ховері */}
                    <div className="absolute inset-0 flex items-center justify-center text-xl group-hover:hidden">
                        <h3 className="font-bold border-2 bg-white rounded-xl p-2">Все потроху</h3>
                    </div>
                    {/* Затінений фон */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-50 bg-black transition-all duration-300"></div>
                    {/* Текст, який з'являється при ховері */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:flex items-center justify-center text-white transition-all duration-300">
                        <p className="text-xl">Текст на ховер</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sets;