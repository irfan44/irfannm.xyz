import Link from 'next/link';
import { useRouter } from 'next/router';
import navMenu from 'data/constants/navMenu';

const ListMenu = () => {
  const route = useRouter();
  const { pathname } = useRouter();
  return (
    <>
      {navMenu.map(({ name, link }) => {
        return (
          <li
            key={name}
            className={
              route.pathname == link ||
              (pathname.startsWith(link) && link != '/')
                ? 'w-text-neutral-900 font-bold dark:text-white'
                : ''
            }
          >
            <Link href={link}>
              <a className="hover:text-black dark:hover:text-white">{name}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default ListMenu;
