// stores/useEventAnimation.ts
import { create } from "zustand";

interface EventAnimationStore {
  triggerAnimation: boolean;
  animate: () => void;
  reset: () => void;
}

export const useEventAnimation = create<EventAnimationStore>((set) => ({
  triggerAnimation: false,
  animate: () => set({ triggerAnimation: true }),
  reset: () => set({ triggerAnimation: false }),
}));
