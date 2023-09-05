import { create } from 'zustand';
import { AuthSlice } from './slice/AuthSlice';
import { ModalSlice } from './slice/ModalSlice';
import { LinkSlice } from './slice/LinkSlice';

export const useBoundedStore = create((...a) => ({
  ...AuthSlice(...a),
  ...ModalSlice(...a),
  ...LinkSlice(...a),
}));
