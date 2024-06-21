import { Children } from "@/utility/types";

const Layout = ({children}: Children): JSX.Element => {
  return (
    <div>
      <header>Header</header>
      <div>{children}</div>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;