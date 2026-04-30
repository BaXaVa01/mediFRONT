import { create } from 'zustand';

interface SelectedProfileState {
  selectedId: string | null;
  selectedType: 'doctor' | 'clinic' | null;
  setSelected: (id: string, type: 'doctor' | 'clinic') => void;
  clearSelected: () => void;
}

export const useSelectedProfileStore = create<SelectedProfileState>((set) => ({
  selectedId: null,
  selectedType: null,
  setSelected: (id, type) => set({ selectedId: id, selectedType: type }),
  clearSelected: () => set({ selectedId: null, selectedType: null }),
}));
