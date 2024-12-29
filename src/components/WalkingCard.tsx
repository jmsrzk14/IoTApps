import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Button from './Button';
import CardContent from './card/CardContent';
import Sparkles from './decorative/Sparkles';
import { scaleIn } from './animations/variants';

interface Step {
  id: number;
  title: string;
  message: string;
  emoji?: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "SELAMAT TAHUN BARU RENTHA SYALOOM MARGARET PANGARIBUAN",
    message: "Ini ada sticky note tahun baru dari aku tapi gabisa dimakan cuman bisa diliatin",
    emoji: "💌"
  },
  {
    id: 2,
    title: "Ga terasa euyyy udah tahun baru aja",
    message: "Padahal kek baru kemarin kita jadi panitia asmat dan kek baru kemarin juga kau gigitin aku. Emang ga terasa yaa",
    emoji: "✨"
  },
  {
    id: 3,
    title: "Tapi kalkulatormu belom jadi kupinjam",
    message: "Jadi pas nanti dah masuk bawa ya aku mau minjam soalnya",
    emoji: "😤"
  },
  {
    id: 4,
    title: "Aku juga mau minta maaf ya",
    message: "Mungkin selama ini aku banyak salah samamu. Tapi harus dimaafin ya biar bisa aku masuk surga soalnya ga diterima surga aku padahal cape atuhh udah jadi hantu tapi masih berkeliaran di bumi apalagi harus kuliah di Del",
    emoji: "🙏"
  },
  {
    id: 5,
    title: "Apapun itu yang penting",
    message: "",
    emoji: ""
  },
  {
    id: 6,
    title: "Happy New Year 2025!",
    message: "Semoga apa yang kau harapkan ditahun 2025 ini tercapai dan teruslah excited menyapa aku yaa",
    emoji: "🎉"
  },
  {
    id: 7,
    title: "From Someone",
    message: "Anonymous",
    emoji: ""
  }
];

export default function WalkingCard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.div
        variants={scaleIn}
        initial="initial"
        animate="animate"
        className="relative bg-gradient-to-br from-purple-600/40 via-pink-500/40 to-red-500/40 rounded-xl p-16 shadow-2xl backdrop-blur-sm border border-white/10"
      >
        <Sparkles />
        <AnimatePresence mode="wait" custom={direction}>
          <CardContent
            key={currentStep}
            title={steps[currentStep].title}
            message={steps[currentStep].message}
            emoji={steps[currentStep].emoji}
          />
        </AnimatePresence>
      </motion.div>
      
      <div className="flex justify-between mt-8">
        <Button
          variant="secondary"
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="flex items-center space-x-2 backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </Button>
        
        <Button
          variant="primary"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="flex items-center space-x-2 backdrop-blur-sm"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}