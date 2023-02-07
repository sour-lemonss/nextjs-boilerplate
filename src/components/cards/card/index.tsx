import React from 'react';
import { CardImageDimensions, ICard } from './interface';
import Link from 'next/link';
import Styles from './card.module.scss';
import { PortableText } from '@portabletext/react';
import { CustomImage } from '@components/custom-image';
import CardWrapper from '../wrapper';
import { CardBorderRadiusEnum, CardShadowEnum } from '../wrapper/interface';

function BaseCard({ dog }: Omit<ICard, 'link'>) {
  return (
    <CardWrapper
      dataTestId="card"
      cardBorderRadius={CardBorderRadiusEnum.RadiusOne}
      cardShadow={CardShadowEnum.ShadowOne}
    >
      <div className={Styles.card}>
        <CustomImage
          alt={dog.image.alt}
          height={CardImageDimensions.height}
          width={CardImageDimensions.width}
          src={dog.image.src}
          lqip={dog.image.lqip}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{dog.name}</div>
          <div className="text-gray-700 dark:text-slate-200 text-base truncate">
            <PortableText value={dog.description} />
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #tag3
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}

function Card({ link, dog }: ICard) {
  if (link !== undefined) {
    return (
      <Link href={link} className="inline-block">
        <BaseCard dog={dog} />
      </Link>
    );
  } else {
    return <BaseCard dog={dog} />;
  }
}

export default Card;
