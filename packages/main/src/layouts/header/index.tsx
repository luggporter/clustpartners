import { ArrowLeft, Menu, Search, X } from "react-feather";
import { Button, Navbar } from "@doar/components";
import {
  StyleNavbarRight,
  StyledHeader,
  StyledLogo,
  StyledMenuBtn,
  StyledNavbarBody,
  StyledNavbarElement,
  StyledNavbarHeader,
  StyledNavbarMenu,
  StyledNavbarTitle,
  StyledNavbarWrap,
  StyledSidebarBtn,
} from "./style";
import { toggleBody, toggleSidebar } from "../../redux/slices/ui";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";

import Logo from "../../components/logo";
import MessageDropdown from "../../components/header/message-dropdown";
import NavSearch from "../../components/header/nav-search";
import NotificationDropdown from "../../components/header/notification-dropdown";
import ProfileDropdown from "../../components/header/profile-dropdown";
import { menuData } from "@doar/shared/data";

interface IProps {
  hasSidebar?: boolean;
  sidebarLayout?: 1 | 2;
}

const Header = ({ hasSidebar, sidebarLayout }: IProps) => {
  const dispatch = useAppDispatch();
  const { sidebar, isBody } = useAppSelector((state) => state.ui);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchHandler = useCallback(() => {
    setSearchOpen((prev) => !prev);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarHandler = useCallback(
    (_: any, isOpen?: "open") => {
      dispatch(toggleSidebar({ isOpen }));
    },
    [dispatch]
  );

  const bodyHandler = useCallback(() => {
    dispatch(toggleBody());
    dispatch(toggleSidebar({ isOpen: "open" }));
  }, [dispatch]);

  const menuHandler = useCallback(() => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) {
      sidebarHandler(undefined, "open");
    }
  }, [menuOpen, sidebarHandler]);

  useEffect(() => {
    return () => {
      sidebarHandler(undefined, "open");
      bodyHandler();
    };
  }, [sidebarHandler, bodyHandler]);

  return (
    <>
      <StyledHeader>
        {hasSidebar && sidebarLayout === 1 && (
          <>
            <StyledMenuBtn
              variant="texted"
              onClick={menuHandler}
              $hasSidebar={hasSidebar}
              $sidebarOpen={sidebar}
              $bodyOpen={isBody}
              className="menu-btn"
            >
              <Menu size={20} strokeWidth="2.5px" />
            </StyledMenuBtn>
            <StyledSidebarBtn
              variant="texted"
              onClick={!isBody ? sidebarHandler : bodyHandler}
              $sidebarOpen={sidebar}
              $bodyOpen={isBody}
              className="sidebar-btn"
            >
              <ArrowLeft size={20} strokeWidth="2.5px" />
            </StyledSidebarBtn>
          </>
        )}
        {hasSidebar && sidebarLayout === 2 && (
          <>
            <StyledMenuBtn
              variant="texted"
              onClick={menuHandler}
              $hasSidebar={hasSidebar}
              $sidebarOpen={!sidebar}
              $bodyOpen={false}
            >
              <Menu size={20} strokeWidth="2.5px" />
            </StyledMenuBtn>
            <StyledSidebarBtn
              variant="texted"
              onClick={sidebarHandler}
              $sidebarOpen={!sidebar}
              $bodyOpen={false}
            >
              <ArrowLeft size={20} strokeWidth="2.5px" />
            </StyledSidebarBtn>
          </>
        )}
        {!hasSidebar && (
          <StyledMenuBtn
            variant="texted"
            onClick={menuHandler}
            $hasSidebar={hasSidebar}
            $sidebarOpen={!sidebar}
          >
            <Menu size={20} strokeWidth="2.5px" />
          </StyledMenuBtn>
        )}
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <StyledNavbarWrap
          $isOpen={menuOpen}
          onClick={menuHandler}
          className="navbar-wrap"
        >
          <StyledNavbarMenu
            $isOpen={menuOpen}
            onClick={(e) => e.stopPropagation()}
          >
            <StyledNavbarHeader>
              <Logo />
              <Button variant="texted" onClick={menuHandler}>
                <X color="#7987a1" width={20} strokeWidth="2.5px" />
              </Button>
            </StyledNavbarHeader>
            <StyledNavbarBody>
              <StyledNavbarTitle>모바일 메뉴</StyledNavbarTitle>
              <Navbar menus={menuData} />
            </StyledNavbarBody>
          </StyledNavbarMenu>
        </StyledNavbarWrap>
        {/* <StyleNavbarRight>
                    <StyledNavbarElement>
                        <Button
                            variant="texted"
                            onClick={searchHandler}
                            className="search-btn"
                        >
                            <Search className="header-icon" />
                        </Button>
                    </StyledNavbarElement>
                    <StyledNavbarElement ml={["8px", "15px"]}>
                        <MessageDropdown />
                    </StyledNavbarElement>
                    <StyledNavbarElement ml={["8px", "15px"]}>
                        <NotificationDropdown />
                    </StyledNavbarElement>
                    <StyledNavbarElement ml={["15px", "20px", "30px"]}>
                        <ProfileDropdown />
                    </StyledNavbarElement>
                </StyleNavbarRight> */}
      </StyledHeader>
      <NavSearch isOpen={searchOpen} onClose={searchHandler} />
    </>
  );
};

Header.defaultProps = {
  sidebarLayout: 1,
};

export default Header;
