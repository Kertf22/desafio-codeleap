import { UserCircle2, ChevronDown } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface UserInfoPrpos {
  username: string;
}
export const UserInfo = ({ username }: UserInfoPrpos) => {

    

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="flex flex-row items-center gap-2 p-2 px-4 text-black bg-white hover:bg- rounded-md cursor-pointer ">
          <UserCircle2 size={20} />
          <p className="text-md font-regular">
          {username}
          </p>
          <ChevronDown size={16} />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="flex flex-row gap-2 p-2 px-4 text-gray-800 bg-red hover:bg-gray-300 rounded-md cursor-pointer">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
