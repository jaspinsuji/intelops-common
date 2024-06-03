import React, { useEffect, useState } from "react";
import Icons from "../../Icon/src/Icon";
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { notificationDetails, breadcrumb, homeUrl, pageTitle, search, signin, signinUrl, settings, notifications } = props;
    const [notification, setNotification] = useState(notificationDetails);
    const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
  let pathTitle = "Stats";
  return (
    <>
     
      <nav
        navbar-main
        class="relative flex flex-wrap items-center justify-between w-full px-0 py-2 mx-6 mt-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
        navbar-scroll="true"
      >
        <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
          <nav>
            {/* <!-- breadcrumb --> */}
            {breadcrumb ? (
              <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <li class="leading-normal text-sm breadcrumb-item">
                  <a
                    class="text-slate-700 opacity-30 dark:text-white"
                    href={homeUrl}
                  >
                    <Icons
                      icon="HomeIcon"
                      color="Orange"
                      variant="extraSmall"
                      className="text-slate-500"
                    />
                  </a>
                </li>
                <li class="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
                  <a
                    class="opacity-50 text-slate-700 dark:text-white"
                    href="javascript:;"
                  >
                    Pages
                  </a>
                </li>
                <li
                  class="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
                  aria-current="page"
                >
                  {pageTitle}
                </li>
              </ol>
            ) : (
              ""
            )}
            {pageTitle ? (
              <h6 class="mb-0 font-bold capitalize dark:text-white">
                {pageTitle}
              </h6>
            ) : (
              ""
            )}
          </nav>

          <div
            class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
            id="navbar"
          >
            <div class="flex items-center md:ml-auto md:pr-4">
              {search ? (
                <div class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                  <span class="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                    <Icons
                      icon="SearchIcon"
                      color="Orange"
                      variant="extraSmall"
                      className="text-slate-500 w-5 h-5"
                    />
                  </span>
                  <input
                    type="text"
                    class="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                    placeholder="Type here..."
                  />
                </div>
              ) :(
                ""
              ) }
            </div>
            <ul class="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
              <li class="flex items-center">
                {signin ? (
                  <a
                    href={signinUrl}
                    class="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500 dark:text-white"
                  >
                    <Icons
                      icon="UserIcon"
                      color="Orange"
                      variant="small"
                      className="text-slate-500 w-4 h-4"
                    />
                    <span class="sm:inline">Sign In</span>
                  </a>
                ) : (
                  ""
                )}
              </li>
              <li class="flex items-center pl-4 xl:hidden">
                {settings ? (
                  <a
                    sidenav-trigger=""
                    class="block p-0 transition-all ease-nav-brand text-sm text-slate-500 dark:text-white"
                    href="javascript:;"
                    aria-expanded="false"
                  >
                    <div class="w-4.5 overflow-hidden">
                      <i class="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                      <i class="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                      <i class="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                    </div>
                  </a>
                ) : (
                  ""
                )}
              </li>
              <li class="flex items-center px-4">
                {notifications ? (
                  <a
                    href="javascript:;"
                    class="p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white"
                  >
                    <Icons
                      icon="CogIcon"
                      color="Orange"
                      variant="extraSmall"
                      className="text-slate-500 w-5 h-5"
                    />
                  </a>
                ) : (
                  ""
                )}
              </li>


              <li class="relative flex items-center pr-2">
                <p class="hidden transform-dropdown-show"></p>
                <a
                  dropdown-trigger="true"
                  href="javascript:;"
                  class="block p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white"
                  aria-expanded="false"
                >
                  <Icons
                      icon="BellIcon"
                      color="Orange"
                      variant="extraSmall"
                      className="text-slate-500 w-5 h-5"
                    />
                </a>

                <ul
                  dropdown-menu="true"
                  class="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7 before:text-5.5 dark:bg-gray-950 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer"
                >
                   {notification &&
                        notification.length > 0 &&
                        notification.map((iteration, index) => {
                            //Parent elements

                            return (
                                <li class="relative mb-2" key={index}>
                                     <a
                      class="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 lg:transition-colors"
                      href={iteration.href}
                    >
                      <div class="flex py-1">
                        <div class="flex flex-col justify-center">
                          <h6 class="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">
                            <span class="font-semibold">{iteration.content}</span> from {iteration.name}
                          </h6>
                          <p class="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                            <i class="mr-1 fa fa-clock" aria-hidden="true"></i>
                            {currDate} <span className="pl-2">{currTime}</span>
                          </p>
                        </div>
                      </div>
                    </a>
                    </li>
                            );
                        })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {

    /**
     * Specify a custom `notification` for the `<Navbar>`
     */
    notificationDetails: PropTypes.string,

    /**
     * Specify a custom `breadcrumb` for the `<Navbar>`
     */
    breadcrumb: PropTypes.string,
    
    /**
     * Specify a home `Url` from the `<Navbar>`
     */
    homeUrl: PropTypes.node,

    /**
     * Specify a custom `page Title` for the `<Navbar>`
     */
    pageTitle: PropTypes.string,

    /**
     * Specify a custom `search` option for the `<Navbar>`
     */
    search: PropTypes.string,

    /**
     * Specify a custom `signin` option for the `<Navbar>`
     */
    signin: PropTypes.string,
    
    /**
     * Specify a signin `Url` from the `<Navbar>`
     */
    signinUrl: PropTypes.node,

    /**
     * Specify a custom `settings` for the `<Navbar>`
     */
    settings: PropTypes.string,

    /**
     * Specify a custom `notifications` for the `<Navbar>`
     */
    notifications: PropTypes.string

};

export default Navbar;
