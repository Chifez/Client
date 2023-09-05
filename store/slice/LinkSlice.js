export const LinkSlice = (set) => ({
  ActiveLink: 'home',
  setActiveLink: (linkname) => {
    set({ ActiveLink: linkname });
  },
});
