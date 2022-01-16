import React from 'react';

// Props are passed through our functional component.
function Nav(props) {
  const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];
  return (
    <ul className="flex justify-end space-x-5">
      {tabs.map(tab => (
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  ..." key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
