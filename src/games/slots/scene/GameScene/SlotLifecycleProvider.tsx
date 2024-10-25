import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useEffect } from 'react';
import {
  selectSlotLifecycle,
  setLifecycle,
  SlotLifecycle,
} from '../../slices/slotSlice';
import soundEffect from '@/assets/sounds/54109742_8bit-slot-machine-stinger_by_ruinmusic_preview.mp3';
import useSound from 'use-sound';

type Props = {
  children: React.ReactNode;
};

const SlotLifecycleProvider = ({ children }: Props) => {
  const [play, { stop }] = useSound(soundEffect, {
    volume: 0.3,
    loop: true,
  });
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (lifecycle !== SlotLifecycle.PLAY) return;
    play();
    const interval = setInterval(() => {
      dispatch(setLifecycle(SlotLifecycle.STOPPING));
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, lifecycle]);

  useEffect(() => {
    if (lifecycle !== SlotLifecycle.STOPPING) return;

    const interval = setInterval(() => {
      dispatch(setLifecycle(SlotLifecycle.STOP));
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, lifecycle]);

  useEffect(() => {
    if (lifecycle !== SlotLifecycle.STOP) return;
    dispatch(setLifecycle(SlotLifecycle.INFO));
    stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, lifecycle]);

  useEffect(() => {
    if (lifecycle !== SlotLifecycle.INFO) return;
    const interval = setInterval(() => {
      dispatch(setLifecycle(SlotLifecycle.READY_TO_START));
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, lifecycle]);

  return <>{children}</>;
};

export default SlotLifecycleProvider;
