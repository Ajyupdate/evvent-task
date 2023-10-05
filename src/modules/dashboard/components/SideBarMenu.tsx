import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

export interface ISideBarMenu {
  navMenus: { name: string; url: string; isActive: boolean }[];
}

const SideBarMenu: React.FC<ISideBarMenu> = ({ navMenus }) => {
  return (
    <div className="">
      <Flex as={'nav'} direction={{ base: 'row', md: 'column' }}>
        {navMenus.map((menu, index) => (
          <Link key={menu.name} href={menu.url}>
            <Box
              className="my-1 "
              px={'2'}
              borderRightRadius={{ base: '0', md: '8' }}
              key={index}
            >
              <button
                className={` w-[200px] md:w-full
            md:hover:bg-slate-100
            md:hover:border-l-2
            md:border-teal-700
            md:hover:text-teal-700
            font-medium
            hover:bg-white hover:text-[#319795] ${
              menu.isActive
                ? 'bg-gray-100 text-[#319795] md:border-l-2 md:border-teal-700'
                : ''
            }
            py-2 md:text-left px-4 rounded-r-md capitalize `}
              >
                {menu.name}
              </button>
            </Box>
          </Link>
        ))}
      </Flex>
    </div>
  );
};

export default SideBarMenu;
