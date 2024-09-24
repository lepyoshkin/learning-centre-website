import {cn} from '@/lib/utils';

type Props = {
  className?: string;
};

export const Sidebar = ({className}: Props) => {
  return (
    <div
      className={cn(
        'flex bg-blue-500 h-full lg:w-64 lg:fixed left-0 top-0 px-4 flex-col',
        className
      )}
    ></div>
  );
};
