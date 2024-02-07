import {
  Action,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import survies from '@/store/survies/reducer';
import auth from '@/store/auth/reducer';
import patient from '@/store/patient/reducer';
import survey from '@/store/survey/reducer';
import common from '@/store/common/reducer';
import scaleOfWasserman from '@/store/scaleOfWasserman/reducer';
import hospitalDysphagiaScale from '@/store/hospitalDysphagiaScale/reducer';
import dysarthriaRatingScale from '@/store/dysarthriaRatingScale/reducer';
import confirmScalesModal from '@/store/confirmScalesModal/reducer';
import procedure from '@/store/procedure/reducer';
import scaleScore from '@/store/scales/reducer';
import confirmProcedureModal from '@/store/confirmProcedureModal/reducer';
import icf from '@/store/icf/reducer';
import medhistory from '@/store/medhistory/reducer';

export const store = configureStore({
  reducer: {
    auth,
    common,
    patient,
    survies,
    scaleOfWasserman,
    dysarthriaRatingScale,
    hospitalDysphagiaScale,
    confirmScalesModal,
    scaleScore,
    procedure,
    confirmProcedureModal,
    survey,
    icf,
    medhistory,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type ThunkAppDispath = ThunkDispatch<RootState, void, Action>;
export const useAppDispatch = () => useDispatch<ThunkAppDispath>();
