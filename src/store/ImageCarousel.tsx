import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const placeholder = 'https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=600&h=600&fit=crop';

export default function ImageCarousel({ images = [] }: { images?: string[] }) {
    const imgs = images.length > 0 ? images : [placeholder];
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const navigate = (dir: number) => {
        setDirection(dir);
        setCurrent(prev => {
            if (dir === 1) return prev === imgs.length - 1 ? 0 : prev + 1;
            return prev === 0 ? imgs.length - 1 : prev - 1;
        });
    };

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-video md:aspect-video rounded-2xl overflow-hidden bg-zinc-800 border border-white/5">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img
                        key={current}
                        src={imgs[current]}
                        alt="Producto"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>

                {imgs.length > 1 && (
                    <>
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                        >
                            <ChevronLeft className="w-5 h-5 text-[#3a3a3a]" />
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                        >
                            <ChevronRight className="w-5 h-5 text-[#3a3a3a]" />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails */}
            {imgs.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                    {imgs.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 ${i === current
                                    ? 'border-[#5297ac] shadow-md'
                                    : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            {i !== current && <div className="absolute inset-0 bg-black/20" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}