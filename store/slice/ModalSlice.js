export const ModalSlice = (set) => ({
  open: false,
  openModal: () => {
    set({ open: true });
  },
  closeModal: () => {
    set({ open: false });
  },
  ToggleModal: () => {
    set({ open: !state.open });
  },
});
