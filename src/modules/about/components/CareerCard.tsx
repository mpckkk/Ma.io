import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { CareerProps } from '@/common/types/careers';

const CareerCard = ({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  link,
}: CareerProps) => {
  const startDate = new Date(start_date);
  const endDate = end_date ? new Date(end_date) : new Date();

  // const durationYears = differenceInYears(endDate, startDate);
  // const durationMonths = differenceInMonths(endDate, startDate) % 12;

  // const durationText =
  //   `${durationYears > 0 ? `${durationYears} Year${durationYears > 1 ? 's' : ''} ` : ''}` +
  //   `${durationMonths > 0 ? `${durationMonths} Month${durationMonths > 1 ? 's' : ''}` : ''}`.trim();

  return (
    <Card className='flex items-center gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900'>
      {logo ? (
        <Image src={logo} width={55} height={55} alt={company} />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className='space-y-1'>
        <a
          href={link || '#'}
          target='_blank'
          data-umami-event={`Click Career Company Name: ${company}`}
        >
          <h6>{position}</h6>
        </a>
        <div className='space-y-2 text-sm text-neutral-600 dark:text-neutral-400'>
          <div className='flex flex-col gap-1 md:flex-row md:gap-2'>
            <span>{company}</span>
            <span className='hidden text-neutral-300 dark:text-neutral-700 md:flex'>
              •
            </span>
            <span>{location}</span>
          </div>
          <div className='flex flex-col gap-3 md:flex-row md:text-[13px]'>
            <div className='flex gap-1 text-neutral-500'>
              <span>{format(startDate, 'MMM yyyy')}</span> -{' '}
              <span>{end_date ? format(endDate, 'MMM yyyy') : 'Present'}</span>
            </div>
            <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;
