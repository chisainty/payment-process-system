// import Back from "../components/Back";
// import ColumnHeader from "../components/ColumnHeader";
// import CenterSlider from "../components/CenterSlider";
// import PurchaseNow from "../components/PurchaseNow";

const Index = () => {
  return (
    <>
      {/* BEGIN: Header*/}
      <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
          <div className="navbar-container d-flex content">
            <div className="bookmark-wrapper d-flex align-items-center">
              <ul className="nav navbar-nav d-xl-none">
                <li className="nav-item"><a className="nav-link menu-toggle" href="#"><i className="ficon" data-feather="menu" /></a></li>
              </ul>
              <ul className="nav navbar-nav bookmark-icons">
                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-email.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Email"><i className="ficon" data-feather="mail" /></a></li>
                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-chat.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Chat"><i className="ficon" data-feather="message-square" /></a></li>
                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-calendar.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Calendar"><i className="ficon" data-feather="calendar" /></a></li>
                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Todo"><i className="ficon" data-feather="check-square" /></a></li>
              </ul>
              <ul className="nav navbar-nav">
                <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star"><i className="ficon text-warning" data-feather="star" /></a>
                  <div className="bookmark-input search-input">
                    <div className="bookmark-input-icon"><i data-feather="search" /></div>
                    <input className="form-control input" type="text" placeholder="Bookmark" tabIndex={0} data-search="search" />
                    <ul className="search-list search-list-bookmark" />
                  </div>
                </li>
              </ul>
            </div>
            <ul className="nav navbar-nav align-items-center ms-auto">
              <li className="nav-item dropdown dropdown-language"><a className="nav-link dropdown-toggle" id="dropdown-flag" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flag-icon flag-icon-us" /><span className="selected-language">English</span></a>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="#" data-language="en"><i className="flag-icon flag-icon-us" /> English</a><a className="dropdown-item" href="#" data-language="fr"><i className="flag-icon flag-icon-fr" /> French</a><a className="dropdown-item" href="#" data-language="de"><i className="flag-icon flag-icon-de" /> German</a><a className="dropdown-item" href="#" data-language="pt"><i className="flag-icon flag-icon-pt" /> Portuguese</a></div>
              </li>
              <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-style"><i className="ficon" data-feather="moon" /></a></li>
              <li className="nav-item nav-search"><a className="nav-link nav-link-search"><i className="ficon" data-feather="search" /></a>
                <div className="search-input">
                  <div className="search-input-icon"><i data-feather="search" /></div>
                  <input className="form-control input" type="text" placeholder="Explore Vuexy..." tabIndex={-1} data-search="search" />
                  <div className="search-input-close"><i data-feather="x" /></div>
                  <ul className="search-list search-list-main" />
                </div>
              </li>
              <li className="nav-item dropdown dropdown-cart me-25"><a className="nav-link" href="#" data-bs-toggle="dropdown"><i className="ficon" data-feather="shopping-cart" /><span className="badge rounded-pill bg-primary badge-up cart-item-count">6</span></a>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
                  <li className="dropdown-menu-header">
                    <div className="dropdown-header d-flex">
                      <h4 className="notification-title mb-0 me-auto">My Cart</h4>
                      <div className="badge rounded-pill badge-light-primary">4 Items</div>
                    </div>
                  </li>
                  <li className="scrollable-container media-list">
                    <div className="list-item align-items-center"><img className="d-block rounded me-1" src="app-assets/images/pages/eCommerce/1.png" alt="donuts" width={62} />
                      <div className="list-item-body flex-grow-1"><i className="ficon cart-item-remove" data-feather="x" />
                        <div className="media-heading">
                          <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> Apple watch 5</a></h6><small className="cart-item-by">By Apple</small>
                        </div>
                        <div className="cart-item-qty">
                          <div className="input-group">
                            <input className="touchspin-cart" type="number" defaultValue={1} />
                          </div>
                        </div>
                        <h5 className="cart-item-price">$374.90</h5>
                      </div>
                    </div>
                    <div className="list-item align-items-center"><img className="d-block rounded me-1" src="app-assets/images/pages/eCommerce/7.png" alt="donuts" width={62} />
                      <div className="list-item-body flex-grow-1"><i className="ficon cart-item-remove" data-feather="x" />
                        <div className="media-heading">
                          <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> Google Home Mini</a></h6><small className="cart-item-by">By Google</small>
                        </div>
                        <div className="cart-item-qty">
                          <div className="input-group">
                            <input className="touchspin-cart" type="number" defaultValue={3} />
                          </div>
                        </div>
                        <h5 className="cart-item-price">$129.40</h5>
                      </div>
                    </div>
                    <div className="list-item align-items-center"><img className="d-block rounded me-1" src="app-assets/images/pages/eCommerce/2.png" alt="donuts" width={62} />
                      <div className="list-item-body flex-grow-1"><i className="ficon cart-item-remove" data-feather="x" />
                        <div className="media-heading">
                          <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> iPhone 11 Pro</a></h6><small className="cart-item-by">By Apple</small>
                        </div>
                        <div className="cart-item-qty">
                          <div className="input-group">
                            <input className="touchspin-cart" type="number" defaultValue={2} />
                          </div>
                        </div>
                        <h5 className="cart-item-price">$699.00</h5>
                      </div>
                    </div>
                    <div className="list-item align-items-center"><img className="d-block rounded me-1" src="app-assets/images/pages/eCommerce/3.png" alt="donuts" width={62} />
                      <div className="list-item-body flex-grow-1"><i className="ficon cart-item-remove" data-feather="x" />
                        <div className="media-heading">
                          <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> iMac Pro</a></h6><small className="cart-item-by">By Apple</small>
                        </div>
                        <div className="cart-item-qty">
                          <div className="input-group">
                            <input className="touchspin-cart" type="number" defaultValue={1} />
                          </div>
                        </div>
                        <h5 className="cart-item-price">$4,999.00</h5>
                      </div>
                    </div>
                    <div className="list-item align-items-center"><img className="d-block rounded me-1" src="app-assets/images/pages/eCommerce/5.png" alt="donuts" width={62} />
                      <div className="list-item-body flex-grow-1"><i className="ficon cart-item-remove" data-feather="x" />
                        <div className="media-heading">
                          <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> MacBook Pro</a></h6><small className="cart-item-by">By Apple</small>
                        </div>
                        <div className="cart-item-qty">
                          <div className="input-group">
                            <input className="touchspin-cart" type="number" defaultValue={1} />
                          </div>
                        </div>
                        <h5 className="cart-item-price">$2,999.00</h5>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-menu-footer">
                    <div className="d-flex justify-content-between mb-1">
                      <h6 className="fw-bolder mb-0">Total:</h6>
                      <h6 className="text-primary fw-bolder mb-0">$10,999.00</h6>
                    </div><a className="btn btn-primary w-100" href="app-ecommerce-checkout.html">Checkout</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-notification me-25"><a className="nav-link" href="#" data-bs-toggle="dropdown"><i className="ficon" data-feather="bell" /><span className="badge rounded-pill bg-danger badge-up">5</span></a>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
                  <li className="dropdown-menu-header">
                    <div className="dropdown-header d-flex">
                      <h4 className="notification-title mb-0 me-auto">Notifications</h4>
                      <div className="badge rounded-pill badge-light-primary">6 New</div>
                    </div>
                  </li>
                  <li className="scrollable-container media-list"><a className="d-flex" href="#">
                      <div className="list-item d-flex align-items-start">
                        <div className="me-1">
                          <div className="avatar"><img src="app-assets/images/portrait/small/avatar-s-15.jpg" alt="avatar" width={32} height={32} /></div>
                        </div>
                        <div className="list-item-body flex-grow-1">
                          <p className="media-heading"><span className="fw-bolder">Congratulation Sam 🎉</span>winner!</p><small className="notification-text"> Won the monthly best seller badge.</small>
                        </div>
                      </div></a><a className="d-flex" href="#">
                      <div className="list-item d-flex align-items-start">
                        <div className="me-1">
                          <div className="avatar"><img src="app-assets/images/portrait/small/avatar-s-3.jpg" alt="avatar" width={32} height={32} /></div>
                        </div>
                        <div className="list-item-body flex-grow-1">
                          <p className="media-heading"><span className="fw-bolder">New message</span>&nbsp;received</p><small className="notification-text"> You have 10 unread messages</small>
                        </div>
                      </div></a><a className="d-flex" href="#">
                      <div className="list-item d-flex align-items-start">
                        <div className="me-1">
                          <div className="avatar bg-light-danger">
                            <div className="avatar-content">MD</div>
                          </div>
                        </div>
                        <div className="list-item-body flex-grow-1">
                          <p className="media-heading"><span className="fw-bolder">Revised Order 👋</span>&nbsp;checkout</p><small className="notification-text"> MD Inc. order updated</small>
                        </div>
                      </div></a>
                    <div className="list-item d-flex align-items-center">
                      <h6 className="fw-bolder me-auto mb-0">System Notifications</h6>
                      <div className="form-check form-check-primary form-switch">
                        <input className="form-check-input" id="systemNotification" type="checkbox" defaultChecked />
                        <label className="form-check-label" htmlFor="systemNotification" />
                      </div>
                    </div><a className="d-flex" href="#">
                      <div className="list-item d-flex align-items-start">
                        <div className="me-1">
                          <div className="avatar bg-light-danger">
                            <div className="avatar-content"><i className="avatar-icon" data-feather="x" /></div>
                          </div>
                        </div>
                        <div className="list-item-body flex-grow-1">
                          <p className="media-heading"><span className="fw-bolder">Server down</span>&nbsp;registered</p><small className="notification-text"> USA Server is down due to high CPU usage</small>
                        </div>
                      </div></a><a className="d-flex" href="#">
                      <div className="list-item d-flex align-items-start">
                        <div className="me-1">
                          <div className="avatar bg-light-success">
                            <div className="avatar-content"><i className="avatar-icon" data-feather="check" /></div>
                          </div>
                        </div>
                        <div className="list-item-body flex-grow-1">
                          <p className="media-heading"><span className="fw-bolder">Sales report</span>&nbsp;generated</p><small className="notification-text"> Last month sales report generated</small>
                        </div>
                      </div></a><a className="d-flex" href="#">
                      <div className="list-item d-flex align-items-start">
                        <div className="me-1">
                          <div className="avatar bg-light-warning">
                            <div className="avatar-content"><i className="avatar-icon" data-feather="alert-triangle" /></div>
                          </div>
                        </div>
                        <div className="list-item-body flex-grow-1">
                          <p className="media-heading"><span className="fw-bolder">High memory</span>&nbsp;usage</p><small className="notification-text"> BLR Server using high memory</small>
                        </div>
                      </div></a>
                  </li>
                  <li className="dropdown-menu-footer"><a className="btn btn-primary w-100" href="#">Read all notifications</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-user"><a className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="user-nav d-sm-flex d-none"><span className="user-name fw-bolder">John Doe</span><span className="user-status">Admin</span></div><span className="avatar"><img className="round" src="app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height={40} width={40} /><span className="avatar-status-online" /></span></a>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user"><a className="dropdown-item" href="page-profile.html"><i className="me-50" data-feather="user" /> Profile</a><a className="dropdown-item" href="app-email.html"><i className="me-50" data-feather="mail" /> Inbox</a><a className="dropdown-item" href="app-todo.html"><i className="me-50" data-feather="check-square" /> Task</a><a className="dropdown-item" href="app-chat.html"><i className="me-50" data-feather="message-square" /> Chats</a>
                  <div className="dropdown-divider" /><a className="dropdown-item" href="page-account-settings-account.html"><i className="me-50" data-feather="settings" /> Settings</a><a className="dropdown-item" href="page-pricing.html"><i className="me-50" data-feather="credit-card" /> Pricing</a><a className="dropdown-item" href="page-faq.html"><i className="me-50" data-feather="help-circle" /> FAQ</a><a className="dropdown-item" href="auth-login-cover.html"><i className="me-50" data-feather="power" /> Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="main-search-list-defaultlist d-none">
          <li className="d-flex align-items-center"><a href="#">
              <h6 className="section-label mt-75 mb-0">Files</h6></a></li>
          <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
              <div className="d-flex">
                <div className="me-75"><img src="app-assets/images/icons/xls.png" alt="png" height={32} /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Two new item submitted</p><small className="text-muted">Marketing Manager</small>
                </div>
              </div><small className="search-data-size me-50 text-muted">'17kb</small></a></li>
          <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
              <div className="d-flex">
                <div className="me-75"><img src="app-assets/images/icons/jpg.png" alt="png" height={32} /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">52 JPG file Generated</p><small className="text-muted">FontEnd Developer</small>
                </div>
              </div><small className="search-data-size me-50 text-muted">'11kb</small></a></li>
          <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
              <div className="d-flex">
                <div className="me-75"><img src="app-assets/images/icons/pdf.png" alt="png" height={32} /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">25 PDF File Uploaded</p><small className="text-muted">Digital Marketing Manager</small>
                </div>
              </div><small className="search-data-size me-50 text-muted">'150kb</small></a></li>
          <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
              <div className="d-flex">
                <div className="me-75"><img src="app-assets/images/icons/doc.png" alt="png" height={32} /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Anna_Strong.doc</p><small className="text-muted">Web Designer</small>
                </div>
              </div><small className="search-data-size me-50 text-muted">'256kb</small></a></li>
          <li className="d-flex align-items-center"><a href="#">
              <h6 className="section-label mt-75 mb-0">Members</h6></a></li>
          <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view-account.html">
              <div className="d-flex align-items-center">
                <div className="avatar me-75"><img src="app-assets/images/portrait/small/avatar-s-8.jpg" alt="png" height={32} /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">John Doe</p><small className="text-muted">UI designer</small>
                </div>
              </div></a></li>
          <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view-account.html">
              <div className="d-flex align-items-center">
                <div className="avatar me-75"><img src="app-assets/images/portrait/small/avatar-s-1.jpg" alt="png" height={32} /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Michal Clark</p><small className="text-muted">FontEnd Developer</small>
                </div>
              </div></a></li>
          <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view-account.html">
              <div className="d-flex align-items-center">
                <div className="avatar me-75"><img src="app-assets/images/portrait/small/avatar-s-14.jpg" alt="png" height={32} /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Milena Gibson</p><small className="text-muted">Digital Marketing Manager</small>
                </div>
              </div></a></li>
          <li className="auto-suggestion"><a className="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view-account.html">
              <div className="d-flex align-items-center">
                <div className="avatar me-75"><img src="app-assets/images/portrait/small/avatar-s-6.jpg" alt="png" height={32} /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Anna Strong</p><small className="text-muted">Web Designer</small>
                </div>
              </div></a></li>
        </ul>
        <ul className="main-search-list-defaultlist-other-list d-none">
          <li className="auto-suggestion justify-content-between"><a className="d-flex align-items-center justify-content-between w-100 py-50">
              <div className="d-flex justify-content-start"><span className="me-75" data-feather="alert-circle" /><span>No results found.</span></div></a></li>
        </ul>
        {/* END: Header*/}
        {/* BEGIN: Main Menu*/}
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item me-auto"><a className="navbar-brand" href="index-2.html">
                  <span className="brand-logo">
                    <img style={{marginBottom: '.3rem'}} src="./app-assets/images/logo/sim-card3.png" />
                  </span>
                  <h2 className="brand-text">Simsplug</h2></a></li>
              <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><i className="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x" /><i className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc" data-ticon="disc" /></a></li>
            </ul>
          </div>
          <div className="shadow-bottom" />
          <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
              <li className=" nav-item"><a className="d-flex align-items-center" href="index-2.html"><i data-feather="home" /><span className="menu-title text-truncate" data-i18n="Dashboards">Dashboards</span><span className="badge badge-light-warning rounded-pill ms-auto me-1">2</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="dashboard-analytics.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Analytics">Analytics</span></a>
                  </li>
                  <li className="active"><a className="d-flex align-items-center" href="dashboard-ecommerce.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="eCommerce">eCommerce</span></a>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header"><span data-i18n="Apps & Pages">Apps &amp; Pages</span><i data-feather="more-horizontal" />
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="app-email.html"><i data-feather="mail" /><span className="menu-title text-truncate" data-i18n="Email">Email</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="app-chat.html"><i data-feather="message-square" /><span className="menu-title text-truncate" data-i18n="Chat">Chat</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="app-todo.html"><i data-feather="check-square" /><span className="menu-title text-truncate" data-i18n="Todo">Todo</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="app-calendar.html"><i data-feather="calendar" /><span className="menu-title text-truncate" data-i18n="Calendar">Calendar</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="app-kanban.html"><i data-feather="grid" /><span className="menu-title text-truncate" data-i18n="Kanban">Kanban</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="file-text" /><span className="menu-title text-truncate" data-i18n="Invoice">Invoice</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="app-invoice-list.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="List">List</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="app-invoice-preview.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Preview">Preview</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="app-invoice-edit.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Edit">Edit</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="app-invoice-add.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Add">Add</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="app-file-manager.html"><i data-feather="save" /><span className="menu-title text-truncate" data-i18n="File Manager">File Manager</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="shield" /><span className="menu-title text-truncate" data-i18n="Roles & Permission">Roles &amp; Permission</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="app-access-roles.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Roles">Roles</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="app-access-permission.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Permission">Permission</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="shopping-cart" /><span className="menu-title text-truncate" data-i18n="eCommerce">eCommerce</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="app-ecommerce-shop.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Shop">Shop</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="app-ecommerce-details.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Details">Details</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="app-ecommerce-wishlist.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Wish List">Wish List</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="app-ecommerce-checkout.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Checkout">Checkout</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="user" /><span className="menu-title text-truncate" data-i18n="User">User</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="app-user-list.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="List">List</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="View">View</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="app-user-view-account.html"><span className="menu-item text-truncate" data-i18n="Account">Account</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="app-user-view-security.html"><span className="menu-item text-truncate" data-i18n="Security">Security</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="app-user-view-billing.html"><span className="menu-item text-truncate" data-i18n="Billing & Plans">Billing &amp; Plans</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="app-user-view-notifications.html"><span className="menu-item text-truncate" data-i18n="Notifications">Notifications</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="app-user-view-connections.html"><span className="menu-item text-truncate" data-i18n="Connections">Connections</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="file-text" /><span className="menu-title text-truncate" data-i18n="Pages">Pages</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Account Settings">Account Settings</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="page-account-settings-account.html"><span className="menu-item text-truncate" data-i18n="Account">Account</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="page-account-settings-security.html"><span className="menu-item text-truncate" data-i18n="Security">Security</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="page-account-settings-billing.html"><span className="menu-item text-truncate" data-i18n="Billings & Plans">Billings &amp; Plans</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="page-account-settings-notifications.html"><span className="menu-item text-truncate" data-i18n="Notifications">Notifications</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="page-account-settings-connections.html"><span className="menu-item text-truncate" data-i18n="Connections">Connections</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="d-flex align-items-center" href="page-profile.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Profile">Profile</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="page-faq.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="FAQ">FAQ</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="page-knowledge-base.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Knowledge Base">Knowledge Base</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="page-pricing.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Pricing">Pricing</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="page-license.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="License">License</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="page-api-key.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="API Key">API Key</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Blog">Blog</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="page-blog-list.html"><span className="menu-item text-truncate" data-i18n="List">List</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="page-blog-detail.html"><span className="menu-item text-truncate" data-i18n="Detail">Detail</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="page-blog-edit.html"><span className="menu-item text-truncate" data-i18n="Edit">Edit</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Mail Template">Mail Template</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Welcome">Welcome</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Reset Password">Reset Password</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Verify Email">Verify Email</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Deactivate Account">Deactivate Account</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Invoice">Invoice</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Promotional">Promotional</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Miscellaneous">Miscellaneous</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="page-misc-coming-soon.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Coming Soon">Coming Soon</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="page-misc-not-authorized.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Not Authorized">Not Authorized</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="page-misc-under-maintenance.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Maintenance">Maintenance</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="page-misc-error.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Error">Error</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="user-check" /><span className="menu-title text-truncate" data-i18n="Authentication">Authentication</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Login">Login</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="auth-login-basic.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Basic">Basic</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="auth-login-cover.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Cover">Cover</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Register">Register</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="auth-register-basic.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Basic">Basic</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="auth-register-cover.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Cover">Cover</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="auth-register-multisteps.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Multi-Steps">Multi-Steps</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Forgot Password">Forgot Password</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="auth-forgot-password-basic.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Basic">Basic</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="auth-forgot-password-cover.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Cover">Cover</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Reset Password">Reset Password</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="auth-reset-password-basic.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Basic">Basic</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="auth-reset-password-cover.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Cover">Cover</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Verify Email">Verify Email</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="auth-verify-email-basic.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Basic">Basic</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="auth-verify-email-cover.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Cover">Cover</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Two Steps">Two Steps</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="auth-two-steps-basic.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Basic">Basic</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="auth-two-steps-cover.html" target="_blank"><span className="menu-item text-truncate" data-i18n="Cover">Cover</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="modal-examples.html"><i data-feather="square" /><span className="menu-title text-truncate" data-i18n="Modal Examples">Modal Examples</span></a>
              </li>
              <li className=" navigation-header"><span data-i18n="User Interface">User Interface</span><i data-feather="more-horizontal" />
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="ui-typography.html"><i data-feather="type" /><span className="menu-title text-truncate" data-i18n="Typography">Typography</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="ui-feather.html"><i data-feather="eye" /><span className="menu-title text-truncate" data-i18n="Feather">Feather</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="credit-card" /><span className="menu-title text-truncate" data-i18n="Card">Card</span><span className="badge badge-light-success rounded-pill ms-auto me-1">New</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="card-basic.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Basic">Basic</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="card-advance.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Advance">Advance</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="card-statistics.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Statistics">Statistics</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="card-analytics.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Analytics">Analytics</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="card-actions.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Card Actions">Card Actions</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="briefcase" /><span className="menu-title text-truncate" data-i18n="Components">Components</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="component-accordion.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Accordion">Accordion</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-alerts.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Alerts">Alerts</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-avatar.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Avatar">Avatar</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-badges.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Badges">Badges</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-breadcrumbs.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Breadcrumbs">Breadcrumbs</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-buttons.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Buttons">Buttons</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-carousel.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Carousel">Carousel</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-collapse.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Collapse">Collapse</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-divider.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Divider">Divider</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-dropdowns.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Dropdowns">Dropdowns</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-list-group.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="List Group">List Group</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-modals.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Modals">Modals</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-navs-component.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Navs Component">Navs Component</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-offcanvas.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Offcanvas">Offcanvas</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-pagination.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Pagination">Pagination</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-pill-badges.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Pill Badges">Pill Badges</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-pills-component.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Pills Component">Pills Component</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-popovers.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Popovers">Popovers</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-progress.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Progress">Progress</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-spinner.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Spinner">Spinner</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-tabs-component.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Tabs Component">Tabs Component</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-timeline.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Timeline">Timeline</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-bs-toast.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Toasts">Toasts</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="component-tooltips.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Tooltips">Tooltips</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="box" /><span className="menu-title text-truncate" data-i18n="Extensions">Extensions</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="ext-component-sweet-alerts.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Sweet Alert">Sweet Alert</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-blockui.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Block UI">BlockUI</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-toastr.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Toastr">Toastr</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-sliders.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Sliders">Sliders</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-drag-drop.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Drag & Drop">Drag &amp; Drop</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-tour.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Tour">Tour</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-clipboard.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Clipboard">Clipboard</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-media-player.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Media player">Media Player</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-context-menu.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Context Menu">Context Menu</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-swiper.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="swiper">Swiper</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-tree.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Tree">Tree</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-ratings.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Ratings">Ratings</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="ext-component-i18n.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="l18n">l18n</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="layout" /><span className="menu-title text-truncate" data-i18n="Page Layouts">Page Layouts</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="layout-collapsed-menu.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Collapsed Menu">Collapsed Menu</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="layout-full.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Layout Full">Layout Full</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="layout-without-menu.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Without Menu">Without Menu</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="layout-empty.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Layout Empty">Layout Empty</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="layout-blank.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Layout Blank">Layout Blank</span></a>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header"><span data-i18n="Forms & Tables">Forms &amp; Tables</span><i data-feather="more-horizontal" />
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="copy" /><span className="menu-title text-truncate" data-i18n="Form Elements">Form Elements</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="form-input.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Input">Input</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-input-groups.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Input Groups">Input Groups</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-input-mask.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Input Mask">Input Mask</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-textarea.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Textarea">Textarea</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-checkbox.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Checkbox">Checkbox</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-radio.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Radio">Radio</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-custom-options.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Custom Options">Custom Options</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-switch.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Switch">Switch</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-select.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Select">Select</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-number-input.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Number Input">Number Input</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-file-uploader.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="File Uploader">File Uploader</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-quill-editor.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Quill Editor">Quill Editor</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="form-date-time-picker.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Date & Time Picker">Date &amp; Time Picker</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="form-layout.html"><i data-feather="box" /><span className="menu-title text-truncate" data-i18n="Form Layout">Form Layout</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="form-wizard.html"><i data-feather="package" /><span className="menu-title text-truncate" data-i18n="Form Wizard">Form Wizard</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="form-validation.html"><i data-feather="check-circle" /><span className="menu-title text-truncate" data-i18n="Form Validation">Form Validation</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="form-repeater.html"><i data-feather="rotate-cw" /><span className="menu-title text-truncate" data-i18n="Form Repeater">Form Repeater</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="table-bootstrap.html"><i data-feather="server" /><span className="menu-title text-truncate" data-i18n="Table">Table</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="grid" /><span className="menu-title text-truncate" data-i18n="Datatable">Datatable</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="table-datatable-basic.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Basic">Basic</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="table-datatable-advanced.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Advanced">Advanced</span></a>
                  </li>
                </ul>
              </li>
              <li className=" navigation-header"><span data-i18n="Charts & Maps">Charts &amp; Maps</span><i data-feather="more-horizontal" />
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="pie-chart" /><span className="menu-title text-truncate" data-i18n="Charts">Charts</span><span className="badge badge-light-danger rounded-pill ms-auto me-2">2</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="chart-apex.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Apex">Apex</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="chart-chartjs.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Chartjs">Chartjs</span></a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="maps-leaflet.html"><i data-feather="map" /><span className="menu-title text-truncate" data-i18n="Leaflet Maps">Leaflet Maps</span></a>
              </li>
              <li className=" navigation-header"><span data-i18n="Misc">Misc</span><i data-feather="more-horizontal" />
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="menu" /><span className="menu-title text-truncate" data-i18n="Menu Levels">Menu Levels</span></a>
                <ul className="menu-content">
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Second Level">Second Level 2.1</span></a>
                  </li>
                  <li><a className="d-flex align-items-center" href="#"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Second Level">Second Level 2.2</span></a>
                    <ul className="menu-content">
                      <li><a className="d-flex align-items-center" href="#"><span className="menu-item text-truncate" data-i18n="Third Level">Third Level 3.1</span></a>
                      </li>
                      <li><a className="d-flex align-items-center" href="#"><span className="menu-item text-truncate" data-i18n="Third Level">Third Level 3.2</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="disabled nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="eye-off" /><span className="menu-title text-truncate" data-i18n="Disabled Menu">Disabled Menu</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation" target="_blank"><i data-feather="folder" /><span className="menu-title text-truncate" data-i18n="Documentation">Documentation</span></a>
              </li>
              <li className=" nav-item"><a className="d-flex align-items-center" href="https://pixinvent.ticksy.com/" target="_blank"><i data-feather="life-buoy" /><span className="menu-title text-truncate" data-i18n="Raise Support">Raise Support</span></a>
              </li>
            </ul>
          </div>
        </div>
        {/* END: Main Menu*/}
        {/* BEGIN: Content*/}
        <div className="app-content content ">
          <div className="content-overlay" />
          <div className="header-navbar-shadow" />
          <div className="content-wrapper container-xxl p-0">
            <div className="content-header row">
            </div>
            <div className="content-body">{/* Dashboard Ecommerce Starts */}
              <section id="dashboard-ecommerce">
                <div className="row match-height">
                  {/* Medal Card */}
                  <div className="col-xl-4 col-md-6 col-12">
                    <div className="card card-congratulation-medal">
                      <div className="card-body">
                        <h5>Congratulations 🎉 John!</h5>
                        <p className="card-text font-small-3">You have won gold medal</p>
                        <h3 className="mb-75 mt-2 pt-50">
                          <a href="#">N200k</a>
                        </h3>
                        <button type="button" className="btn btn-primary">Fund Wallet</button>
                        <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/illustration/badge.svg" className="congratulation-medal" alt="Medal Pic" />
                      </div>
                    </div>
                  </div>
                  {/*/ Medal Card */}
                  {/* Statistics Card */}
                  <div className="col-xl-8 col-md-6 col-12">
                    <div className="card card-statistics">
                      <div className="card-header">
                        <h4 className="card-title">Statistics</h4>
                        <div className="d-flex align-items-center">
                          <p className="card-text font-small-2 me-25 mb-0">Updated 1 month ago</p>
                        </div>
                      </div>
                      <div className="card-body statistics-body">
                        <div className="row">
                          <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                            <div className="d-flex flex-row">
                              <div className="avatar bg-light-primary me-2">
                                <div className="avatar-content">
                                  <i data-feather="trending-up" className="avatar-icon" />
                                </div>
                              </div>
                              <div className="my-auto">
                                <h4 className="fw-bolder mb-0">230k</h4>
                                <p className="card-text font-small-3 mb-0">Sales</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                            <div className="d-flex flex-row">
                              <div className="avatar bg-light-info me-2">
                                <div className="avatar-content">
                                  <i data-feather="user" className="avatar-icon" />
                                </div>
                              </div>
                              <div className="my-auto">
                                <h4 className="fw-bolder mb-0">8.549k</h4>
                                <p className="card-text font-small-3 mb-0">Customers</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                            <div className="d-flex flex-row">
                              <div className="avatar bg-light-danger me-2">
                                <div className="avatar-content">
                                  <i data-feather="box" className="avatar-icon" />
                                </div>
                              </div>
                              <div className="my-auto">
                                <h4 className="fw-bolder mb-0">1.423k</h4>
                                <p className="card-text font-small-3 mb-0">Products</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-sm-6 col-12">
                            <div className="d-flex flex-row">
                              <div className="avatar bg-light-success me-2">
                                <div className="avatar-content">
                                  <i data-feather="dollar-sign" className="avatar-icon" />
                                </div>
                              </div>
                              <div className="my-auto">
                                <h4 className="fw-bolder mb-0">$9745</h4>
                                <p className="card-text font-small-3 mb-0">Revenue</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Statistics Card */}
                </div>
                <div className="row match-height">
                  <div className="col-lg-4 col-12">
                    <div className="row match-height">
                      {/* Bar Chart - Orders */}
                      <div className="col-lg-6 col-md-3 col-6">
                        <div className="card">
                          <div className="card-body pb-50">
                            <h6>Orders</h6>
                            <h2 className="fw-bolder mb-1">2,76k</h2>
                            <div id="statistics-order-chart" />
                          </div>
                        </div>
                      </div>
                      {/*/ Bar Chart - Orders */}
                      {/* Line Chart - Profit */}
                      <div className="col-lg-6 col-md-3 col-6">
                        <div className="card card-tiny-line-stats">
                          <div className="card-body pb-50">
                            <h6>Profit</h6>
                            <h2 className="fw-bolder mb-1">6,24k</h2>
                            <div id="statistics-profit-chart" />
                          </div>
                        </div>
                      </div>
                      {/*/ Line Chart - Profit */}
                      {/* Earnings Card */}
                      <div className="col-lg-12 col-md-6 col-12">
                        <div className="card earnings-card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-6">
                                <h4 className="card-title mb-1">Earnings</h4>
                                <div className="font-small-2">This Month</div>
                                <h5 className="mb-1">$4055.56</h5>
                                <p className="card-text text-muted font-small-2">
                                  <span className="fw-bolder">68.2%</span><span> more earnings than last month.</span>
                                </p>
                              </div>
                              <div className="col-6">
                                <div id="earnings-chart" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*/ Earnings Card */}
                    </div>
                  </div>
                  {/* Revenue Report Card */}
                  <div className="col-lg-8 col-12">
                    <div className="card card-revenue-budget">
                      <div className="row mx-0">
                        <div className="col-md-8 col-12 revenue-report-wrapper">
                          <div className="d-sm-flex justify-content-between align-items-center mb-3">
                            <h4 className="card-title mb-50 mb-sm-0">Revenue Report</h4>
                            <div className="d-flex align-items-center">
                              <div className="d-flex align-items-center me-2">
                                <span className="bullet bullet-primary font-small-3 me-50 cursor-pointer" />
                                <span>Earning</span>
                              </div>
                              <div className="d-flex align-items-center ms-75">
                                <span className="bullet bullet-warning font-small-3 me-50 cursor-pointer" />
                                <span>Expense</span>
                              </div>
                            </div>
                          </div>
                          <div id="revenue-report-chart" />
                        </div>
                        <div className="col-md-4 col-12 budget-wrapper">
                          <div className="btn-group">
                            <button type="button" className="btn btn-outline-primary btn-sm dropdown-toggle budget-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              2020
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">2020</a>
                              <a className="dropdown-item" href="#">2019</a>
                              <a className="dropdown-item" href="#">2018</a>
                            </div>
                          </div>
                          <h2 className="mb-25">$25,852</h2>
                          <div className="d-flex justify-content-center">
                            <span className="fw-bolder me-25">Budget:</span>
                            <span>56,800</span>
                          </div>
                          <div id="budget-chart" />
                          <button type="button" className="btn btn-primary">Increase Budget</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Revenue Report Card */}
                </div>
                <div className="row match-height">
                  {/* Company Table Card */}
                  <div className="col-lg-8 col-12">
                    <div className="card card-company-table">
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Company</th>
                                <th>Category</th>
                                <th>Views</th>
                                <th>Revenue</th>
                                <th>Sales</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/toolbox.svg" alt="Toolbar svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="fw-bolder">Dixons</div>
                                      <div className="font-small-2 text-muted">meguc@ruj.io</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-primary me-1">
                                      <div className="avatar-content">
                                        <i data-feather="monitor" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Technology</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">23.4k</span>
                                    <span className="font-small-2 text-muted">in 24 hours</span>
                                  </div>
                                </td>
                                <td>$891.2</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">68%</span>
                                    <i data-feather="trending-down" className="text-danger font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/parachute.svg" alt="Parachute svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="fw-bolder">Motels</div>
                                      <div className="font-small-2 text-muted">vecav@hodzi.co.uk</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-success me-1">
                                      <div className="avatar-content">
                                        <i data-feather="coffee" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Grocery</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">78k</span>
                                    <span className="font-small-2 text-muted">in 2 days</span>
                                  </div>
                                </td>
                                <td>$668.51</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">97%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/brush.svg" alt="Brush svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="fw-bolder">Zipcar</div>
                                      <div className="font-small-2 text-muted">davcilse@is.gov</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-warning me-1">
                                      <div className="avatar-content">
                                        <i data-feather="watch" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Fashion</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">162</span>
                                    <span className="font-small-2 text-muted">in 5 days</span>
                                  </div>
                                </td>
                                <td>$522.29</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">62%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/star.svg" alt="Star svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="fw-bolder">Owning</div>
                                      <div className="font-small-2 text-muted">us@cuhil.gov</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-primary me-1">
                                      <div className="avatar-content">
                                        <i data-feather="monitor" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Technology</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">214</span>
                                    <span className="font-small-2 text-muted">in 24 hours</span>
                                  </div>
                                </td>
                                <td>$291.01</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">88%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/book.svg" alt="Book svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="fw-bolder">Cafés</div>
                                      <div className="font-small-2 text-muted">pudais@jife.com</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-success me-1">
                                      <div className="avatar-content">
                                        <i data-feather="coffee" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Grocery</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">208</span>
                                    <span className="font-small-2 text-muted">in 1 week</span>
                                  </div>
                                </td>
                                <td>$783.93</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">16%</span>
                                    <i data-feather="trending-down" className="text-danger font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/rocket.svg" alt="Rocket svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="fw-bolder">Kmart</div>
                                      <div className="font-small-2 text-muted">bipri@cawiw.com</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-warning me-1">
                                      <div className="avatar-content">
                                        <i data-feather="watch" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Fashion</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">990</span>
                                    <span className="font-small-2 text-muted">in 1 month</span>
                                  </div>
                                </td>
                                <td>$780.05</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">78%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                      <div className="avatar-content">
                                        <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/speaker.svg" alt="Speaker svg" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="fw-bolder">Payers</div>
                                      <div className="font-small-2 text-muted">luk@izug.io</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-warning me-1">
                                      <div className="avatar-content">
                                        <i data-feather="watch" className="font-medium-3" />
                                      </div>
                                    </div>
                                    <span>Fashion</span>
                                  </div>
                                </td>
                                <td className="text-nowrap">
                                  <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">12.9k</span>
                                    <span className="font-small-2 text-muted">in 12 hours</span>
                                  </div>
                                </td>
                                <td>$531.49</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">42%</span>
                                    <i data-feather="trending-up" className="text-success font-medium-1" />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Company Table Card */}
                  {/* Developer Meetup Card */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="card card-developer-meetup">
                      <div className="meetup-img-wrapper rounded-top text-center">
                        <img src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/illustration/email.svg" alt="Meeting Pic" height={170} />
                      </div>
                      <div className="card-body">
                        <div className="meetup-header d-flex align-items-center">
                          <div className="meetup-day">
                            <h6 className="mb-0">THU</h6>
                            <h3 className="mb-0">24</h3>
                          </div>
                          <div className="my-auto">
                            <h4 className="card-title mb-25">Developer Meetup</h4>
                            <p className="card-text mb-0">Meet world popular developers</p>
                          </div>
                        </div>
                        <div className="mt-0">
                          <div className="avatar float-start bg-light-primary rounded me-1">
                            <div className="avatar-content">
                              <i data-feather="calendar" className="avatar-icon font-medium-3" />
                            </div>
                          </div>
                          <div className="more-info">
                            <h6 className="mb-0">Sat, May 25, 2020</h6>
                            <small>10:AM to 6:PM</small>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="avatar float-start bg-light-primary rounded me-1">
                            <div className="avatar-content">
                              <i data-feather="map-pin" className="avatar-icon font-medium-3" />
                            </div>
                          </div>
                          <div className="more-info">
                            <h6 className="mb-0">Central Park</h6>
                            <small>Manhattan, New york City</small>
                          </div>
                        </div>
                        <div className="avatar-group">
                          <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="Billy Hopkins" className="avatar pull-up">
                            <img src="app-assets/images/portrait/small/avatar-s-9.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="Amy Carson" className="avatar pull-up">
                            <img src="app-assets/images/portrait/small/avatar-s-6.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="Brandon Miles" className="avatar pull-up">
                            <img src="app-assets/images/portrait/small/avatar-s-8.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="Daisy Weber" className="avatar pull-up">
                            <img src="app-assets/images/portrait/small/avatar-s-20.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="Jenny Looper" className="avatar pull-up">
                            <img src="app-assets/images/portrait/small/avatar-s-20.jpg" alt="Avatar" width={33} height={33} />
                          </div>
                          <h6 className="align-self-center cursor-pointer ms-50 mb-0">+42</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Developer Meetup Card */}
                  {/* Browser States Card */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="card card-browser-states">
                      <div className="card-header">
                        <div>
                          <h4 className="card-title">Browser States</h4>
                          <p className="card-text font-small-2">Counter August 2020</p>
                        </div>
                        <div className="dropdown chart-dropdown">
                          <i data-feather="more-vertical" className="font-medium-3 cursor-pointer" data-bs-toggle="dropdown" />
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">Last 28 Days</a>
                            <a className="dropdown-item" href="#">Last Month</a>
                            <a className="dropdown-item" href="#">Last Year</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="browser-states">
                          <div className="d-flex">
                            <img src="app-assets/images/icons/google-chrome.png" className="rounded me-1" height={30} alt="Google Chrome" />
                            <h6 className="align-self-center mb-0">Google Chrome</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="fw-bold text-body-heading me-1">54.4%</div>
                            <div id="browser-state-chart-primary" />
                          </div>
                        </div>
                        <div className="browser-states">
                          <div className="d-flex">
                            <img src="app-assets/images/icons/mozila-firefox.png" className="rounded me-1" height={30} alt="Mozila Firefox" />
                            <h6 className="align-self-center mb-0">Mozila Firefox</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="fw-bold text-body-heading me-1">6.1%</div>
                            <div id="browser-state-chart-warning" />
                          </div>
                        </div>
                        <div className="browser-states">
                          <div className="d-flex">
                            <img src="app-assets/images/icons/apple-safari.png" className="rounded me-1" height={30} alt="Apple Safari" />
                            <h6 className="align-self-center mb-0">Apple Safari</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="fw-bold text-body-heading me-1">14.6%</div>
                            <div id="browser-state-chart-secondary" />
                          </div>
                        </div>
                        <div className="browser-states">
                          <div className="d-flex">
                            <img src="app-assets/images/icons/internet-explorer.png" className="rounded me-1" height={30} alt="Internet Explorer" />
                            <h6 className="align-self-center mb-0">Internet Explorer</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="fw-bold text-body-heading me-1">4.2%</div>
                            <div id="browser-state-chart-info" />
                          </div>
                        </div>
                        <div className="browser-states">
                          <div className="d-flex">
                            <img src="app-assets/images/icons/opera.png" className="rounded me-1" height={30} alt="Opera Mini" />
                            <h6 className="align-self-center mb-0">Opera Mini</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="fw-bold text-body-heading me-1">8.4%</div>
                            <div id="browser-state-chart-danger" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Browser States Card */}
                  {/* Goal Overview Card */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="card-title">Goal Overview</h4>
                        <i data-feather="help-circle" className="font-medium-3 text-muted cursor-pointer" />
                      </div>
                      <div className="card-body p-0">
                        <div id="goal-overview-radial-bar-chart" className="my-2" />
                        <div className="row border-top text-center mx-0">
                          <div className="col-6 border-end py-1">
                            <p className="card-text text-muted mb-0">Completed</p>
                            <h3 className="fw-bolder mb-0">786,617</h3>
                          </div>
                          <div className="col-6 py-1">
                            <p className="card-text text-muted mb-0">In Progress</p>
                            <h3 className="fw-bolder mb-0">13,561</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Goal Overview Card */}
                  {/* Transaction Card */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="card card-transaction">
                      <div className="card-header">
                        <h4 className="card-title">Transactions</h4>
                        <div className="dropdown chart-dropdown">
                          <i data-feather="more-vertical" className="font-medium-3 cursor-pointer" data-bs-toggle="dropdown" />
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">Last 28 Days</a>
                            <a className="dropdown-item" href="#">Last Month</a>
                            <a className="dropdown-item" href="#">Last Year</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="transaction-item">
                          <div className="d-flex">
                            <div className="avatar bg-light-primary rounded float-start">
                              <div className="avatar-content">
                                <i data-feather="pocket" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="transaction-percentage">
                              <h6 className="transaction-title">Wallet</h6>
                              <small>Starbucks</small>
                            </div>
                          </div>
                          <div className="fw-bolder text-danger">- $74</div>
                        </div>
                        <div className="transaction-item">
                          <div className="d-flex">
                            <div className="avatar bg-light-success rounded float-start">
                              <div className="avatar-content">
                                <i data-feather="check" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="transaction-percentage">
                              <h6 className="transaction-title">Bank Transfer</h6>
                              <small>Add Money</small>
                            </div>
                          </div>
                          <div className="fw-bolder text-success">+ $480</div>
                        </div>
                        <div className="transaction-item">
                          <div className="d-flex">
                            <div className="avatar bg-light-danger rounded float-start">
                              <div className="avatar-content">
                                <i data-feather="dollar-sign" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="transaction-percentage">
                              <h6 className="transaction-title">Paypal</h6>
                              <small>Add Money</small>
                            </div>
                          </div>
                          <div className="fw-bolder text-success">+ $590</div>
                        </div>
                        <div className="transaction-item">
                          <div className="d-flex">
                            <div className="avatar bg-light-warning rounded float-start">
                              <div className="avatar-content">
                                <i data-feather="credit-card" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="transaction-percentage">
                              <h6 className="transaction-title">Mastercard</h6>
                              <small>Ordered Food</small>
                            </div>
                          </div>
                          <div className="fw-bolder text-danger">- $23</div>
                        </div>
                        <div className="transaction-item">
                          <div className="d-flex">
                            <div className="avatar bg-light-info rounded float-start">
                              <div className="avatar-content">
                                <i data-feather="trending-up" className="avatar-icon font-medium-3" />
                              </div>
                            </div>
                            <div className="transaction-percentage">
                              <h6 className="transaction-title">Transfer</h6>
                              <small>Refund</small>
                            </div>
                          </div>
                          <div className="fw-bolder text-success">+ $98</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Transaction Card */}
                </div>
              </section>
              {/* Dashboard Ecommerce ends */}
            </div>
          </div>
        </div>
        {/* END: Content*/}
        {/* BEGIN: Customizer*/}
        <div className="customizer d-none d-md-block"><a className="customizer-toggle d-flex align-items-center justify-content-center" href="#"><i className="spinner" data-feather="settings" /></a><div className="customizer-content">
            {/* Customizer header */}
            <div className="customizer-header px-2 pt-1 pb-0 position-relative">
              <h4 className="mb-0">Theme Customizer</h4>
              <p className="m-0">Customize &amp; Preview in Real Time</p>
              <a className="customizer-close" href="#"><i data-feather="x" /></a>
            </div>
            <hr />
            {/* Styling & Text Direction */}
            <div className="customizer-styling-direction px-2">
              <p className="fw-bold">Skin</p>
              <div className="d-flex">
                <div className="form-check me-1">
                  <input type="radio" id="skinlight" name="skinradio" className="form-check-input layout-name" defaultChecked data-layout />
                  <label className="form-check-label" htmlFor="skinlight">Light</label>
                </div>
                <div className="form-check me-1">
                  <input type="radio" id="skinbordered" name="skinradio" className="form-check-input layout-name" data-layout="bordered-layout" />
                  <label className="form-check-label" htmlFor="skinbordered">Bordered</label>
                </div>
                <div className="form-check me-1">
                  <input type="radio" id="skindark" name="skinradio" className="form-check-input layout-name" data-layout="dark-layout" />
                  <label className="form-check-label" htmlFor="skindark">Dark</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="skinsemidark" name="skinradio" className="form-check-input layout-name" data-layout="semi-dark-layout" />
                  <label className="form-check-label" htmlFor="skinsemidark">Semi Dark</label>
                </div>
              </div>
            </div>
            <hr />
            {/* Menu */}
            <div className="customizer-menu px-2">
              <div id="customizer-menu-collapsible" className="d-flex">
                <p className="fw-bold me-auto m-0">Menu Collapsed</p>
                <div className="form-check form-check-primary form-switch">
                  <input type="checkbox" className="form-check-input" id="collapse-sidebar-switch" />
                  <label className="form-check-label" htmlFor="collapse-sidebar-switch" />
                </div>
              </div>
            </div>
            <hr />
            {/* Layout Width */}
            <div className="customizer-footer px-2">
              <p className="fw-bold">Layout Width</p>
              <div className="d-flex">
                <div className="form-check me-1">
                  <input type="radio" id="layout-width-full" name="layoutWidth" className="form-check-input" defaultChecked />
                  <label className="form-check-label" htmlFor="layout-width-full">Full Width</label>
                </div>
                <div className="form-check me-1">
                  <input type="radio" id="layout-width-boxed" name="layoutWidth" className="form-check-input" />
                  <label className="form-check-label" htmlFor="layout-width-boxed">Boxed</label>
                </div>
              </div>
            </div>
            <hr />
            {/* Navbar */}
            <div className="customizer-navbar px-2">
              <div id="customizer-navbar-colors">
                <p className="fw-bold">Navbar Color</p>
                <ul className="list-inline unstyled-list">
                  <li className="color-box bg-white border selected" data-navbar-default />
                  <li className="color-box bg-primary" data-navbar-color="bg-primary" />
                  <li className="color-box bg-secondary" data-navbar-color="bg-secondary" />
                  <li className="color-box bg-success" data-navbar-color="bg-success" />
                  <li className="color-box bg-danger" data-navbar-color="bg-danger" />
                  <li className="color-box bg-info" data-navbar-color="bg-info" />
                  <li className="color-box bg-warning" data-navbar-color="bg-warning" />
                  <li className="color-box bg-dark" data-navbar-color="bg-dark" />
                </ul>
              </div>
              <p className="navbar-type-text fw-bold">Navbar Type</p>
              <div className="d-flex">
                <div className="form-check me-1">
                  <input type="radio" id="nav-type-floating" name="navType" className="form-check-input" defaultChecked />
                  <label className="form-check-label" htmlFor="nav-type-floating">Floating</label>
                </div>
                <div className="form-check me-1">
                  <input type="radio" id="nav-type-sticky" name="navType" className="form-check-input" />
                  <label className="form-check-label" htmlFor="nav-type-sticky">Sticky</label>
                </div>
                <div className="form-check me-1">
                  <input type="radio" id="nav-type-static" name="navType" className="form-check-input" />
                  <label className="form-check-label" htmlFor="nav-type-static">Static</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="nav-type-hidden" name="navType" className="form-check-input" />
                  <label className="form-check-label" htmlFor="nav-type-hidden">Hidden</label>
                </div>
              </div>
            </div>
            <hr />
            {/* Footer */}
            <div className="customizer-footer px-2">
              <p className="fw-bold">Footer Type</p>
              <div className="d-flex">
                <div className="form-check me-1">
                  <input type="radio" id="footer-type-sticky" name="footerType" className="form-check-input" />
                  <label className="form-check-label" htmlFor="footer-type-sticky">Sticky</label>
                </div>
                <div className="form-check me-1">
                  <input type="radio" id="footer-type-static" name="footerType" className="form-check-input" defaultChecked />
                  <label className="form-check-label" htmlFor="footer-type-static">Static</label>
                </div>
                <div className="form-check me-1">
                  <input type="radio" id="footer-type-hidden" name="footerType" className="form-check-input" />
                  <label className="form-check-label" htmlFor="footer-type-hidden">Hidden</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End: Customizer*/}
        {/* Buynow Button*/}
        <div className="buy-now"><a href="https://1.envato.market/vuexy_admin" target="_blank" className="btn btn-danger">Buy Now</a>
        </div>
        <div className="sidenav-overlay" />
        <div className="drag-target" />
        {/* BEGIN: Footer*/}
        <footer className="footer footer-static footer-light">
          <p className="clearfix mb-0"><span className="float-md-start d-block d-md-inline-block mt-25">COPYRIGHT  © 2021<a className="ms-25" href="https://1.envato.market/pixinvent_portfolio" target="_blank">Pixinvent</a><span className="d-none d-sm-inline-block">, All rights Reserved</span></span><span className="float-md-end d-none d-md-block">Hand-crafted &amp; Made with<i data-feather="heart" /></span></p>
        </footer>
        <button className="btn btn-primary btn-icon scroll-top" type="button"><i data-feather="arrow-up" /></button>
        {/* END: Footer*/}
    </>
  );
};

export default Index;
