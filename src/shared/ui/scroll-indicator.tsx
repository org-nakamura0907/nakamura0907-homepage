import { motion, Variants } from 'motion/react';
import { Typography } from './typography';

const arrowVariants = {
  initial: { opacity: 0 },
  animate: (i: number) => ({
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: i * 0.4,
      ease: 'easeInOut',
    },
  }),
} as const satisfies Variants;

type ScrollIndicatorProps = {
  targetRef: React.RefObject<Element | null>;
};

/**
 * 指定されたターゲットまでスクロールすることができるインジケーターボタン
 */
const ScrollIndicator = ({ targetRef }: ScrollIndicatorProps) => {
  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTarget} className="block h-auto w-fit p-2">
      <div className="flex flex-col items-center">
        <motion.span
          custom={0}
          variants={arrowVariants}
          initial="initial"
          animate="animate"
          className="w-4 h-4 border-r-2 border-b-2 border-slate-800 rotate-45 -translate-y-1/4"
        />
        <motion.span
          custom={1}
          variants={arrowVariants}
          initial="initial"
          animate="animate"
          className="w-4 h-4 border-r-2 border-b-2 border-slate-800 rotate-45 -translate-y-1/4 -mt-1"
        />
      </div>

      <Typography.Small>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block mt-2 tracking-[0.4em]"
        >
          SCROLL
        </motion.span>
      </Typography.Small>
    </button>
  );
};

export default ScrollIndicator;
