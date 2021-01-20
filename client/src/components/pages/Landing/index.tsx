import { Intro } from './Intro';
import { MachineWashable } from './MachineWashable';
import { NewestArrivals } from './NewestArrivals';
import { TonsOfTexture } from './TonsOfTexture';
import { Reviews } from './Reviews';
import { PerfectRugSize } from './PerfectRugSize';
import { Footer } from '../../Footer';

export function Landing() {
  return (
    <>
      <Intro />
      <MachineWashable />
      <PerfectRugSize />
      <NewestArrivals />
      <TonsOfTexture />
      <NewestArrivals />
      <Reviews />
    </>
  );
}
