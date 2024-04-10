import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white uppercase"
      >
        <span className="px-2 py-1 mr-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Kishore&apos;s
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button
        className="w-12 h-9 lg:hidden"
        color="gray"
        pill
      >
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 items-center md:order-2">
        <Button
          className="w-12 h-9 hidden sm:inline"
          color="gray"
          pill
        >
          <FaMoon />
        </Button>

        <Link to="/login">
          <Button
            gradientDuoTone="purpleToBlue"
            outline
          >
            Login
          </Button>
        </Link>

        <Navbar.Toggle>
          <FiMenu size={30} />
        </Navbar.Toggle>
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          as={"div"}
          active={path === "/"}
        >
          <NavLink to="/">Home</NavLink>
        </Navbar.Link>
        <Navbar.Link
          as={"div"}
          active={path === "/about"}
        >
          <NavLink to="/about">About</NavLink>
        </Navbar.Link>
        <Navbar.Link
          as={"div"}
          active={path === "/projects"}
        >
          <NavLink to="/projects">Projects</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
