import {Menu} from 'lucide-react';
import {Sheet, SheetContent, SheetTrigger} from './ui/sheet';
import {Sidebar} from './sidebar';

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-custom-blue" />
      </SheetTrigger>

      <SheetContent className="p-0 z-[100] border-none" side="right">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
