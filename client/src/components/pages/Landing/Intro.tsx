import { Image } from 'semantic-ui-react';

export function Intro() {
  return (
    // add grid layer for this one
    <div>
      <Image
        src={
          process.env.PUBLIC_URL +
          '/img/Desktop_Hero_Polar-White-Plush-Rug_3x5.webp'
        }
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
}
