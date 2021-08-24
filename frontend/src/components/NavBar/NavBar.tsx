import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
// import { ChatIcon, HomeIcon, Logo, SearchIcon } from '../../assets';
// import { PlusIcon } from '../../assets/icons/PlusIcon';
// import { UserIcon } from '../../assets/icons/UserIcon';
import { useOnClickOutside } from '../../hooks';
import { withApollo } from '../../utils';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';
import { useApolloClient } from '@apollo/client';
import { SearchIcon } from '../../assets/icons';
import { Link as NavLink } from '..';
// import { Loader } from '../Loader/Loader';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileRef = useRef<any>(null);
  useOnClickOutside(profileRef, () => setIsProfileDropdownOpen(false));
  const apolloClient = useApolloClient();
  const { data, loading, error } = useMeQuery();
  const [logout, { loading: logoutFetching }] = useLogoutMutation();

  const handleOpenProfileOptions = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <>
      {logoutFetching && 'Signing out'}
      <nav className='bg-white shadow-lg hidden md:block'>
        <div className='max-width-nav mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div
                className='flex-shrink-0 flex items-center cursor-pointer'
                onClick={() => router.push('/')}
              >
                <h5 className='h-8'>Alvaro Castle</h5>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <NavLink path='/' title='Home' />
              <NavLink path='/about' title='About' />
              <NavLink path='/work' title='Work' />
              <NavLink path='/contact' title='Contact' />

              {/* <!-- Profile dropdown --> */}
              <div className='ml-3 relative'>
                <div>
                  <button
                    type='button'
                    className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={handleOpenProfileOptions}
                  >
                    <span className='sr-only'>Open user menu</span>
                    {error && 'Error...'}
                    {loading ? (
                      'Loading...'
                    ) : (
                      <img
                        className='h-8 w-8 rounded-full'
                        src={data?.me?.pictureUrl as any}
                        alt='User picture'
                      />
                    )}
                  </button>
                </div>

                {isProfileDropdownOpen && (
                  <div
                    className='origin-top-right absolute right-0 mt-2 z-20 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    ref={profileRef}
                    tabIndex={-1}
                  >
                    <Link href='/profile'>
                      <span className='block cursor-pointer px-4 py-2 text-sm text-gray-700'>
                        Your Profile
                      </span>
                    </Link>
                    <Link href='/profile/settings'>
                      <span className='block cursor-pointer px-4 py-2 text-sm text-gray-700'>
                        Settings
                      </span>
                    </Link>
                    <span
                      className='block cursor-pointer px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex={-1}
                      id='user-menu-item-2'
                      onClick={async () => {
                        await logout();
                        await apolloClient.resetStore();
                        await router.push('/');
                      }}
                    >
                      Sign out
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withApollo({ ssr: false })(NavBar);
