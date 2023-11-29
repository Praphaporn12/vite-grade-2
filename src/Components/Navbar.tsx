

function Navbar() {
  return (
    <nav
    className="relative flex w-full items-center justify-between bg-top py-2 text-neutral-600 shadow-lg  focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start">
    <div className="flex w-full flex-wrap items-center justify-between px-3">
      <>
        <ul
          className="mr-auto flex flex-col lg:flex-row"
          data-te-navbar-nav-ref>
          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <p className="block transition duration-150 text-black font-bold p-2"
              >โปรแกรมช่วยคิดเกรดเฉลี่ย</p>
          </li>
        </ul>
      </>
    </div>
  </nav>
  )
}

export default Navbar
