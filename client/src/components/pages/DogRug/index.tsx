import { HowOurRugsWork } from './HowOurRugsWork';
import { DogApproved } from './DogApproved';
import { CleanUp } from './CleanUp';
import { Learn } from './Learn';
import { Ruggable } from './Ruggable';
import { PupApprovedRugs } from './PupApprovedRugs';
import { Intro } from './Intro';

export function DogRug() {
  return (
    <>
      <Intro />
      <HowOurRugsWork />
      <DogApproved />
      <CleanUp />
      <PupApprovedRugs />
      <Learn />
      <Ruggable />
    </>
  );
}
