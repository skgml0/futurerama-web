import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS?: Array<ROUTE>;
}

export const Navigation = () => {
  return (
    <Header>
      <h1>
        <Link href="/">
          <a>
            <Logoimg src="/futurama-logo.png" alt="futurama logo" />
          </a>
        </Link>
      </h1>
      <nav>
        <Sidenav>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={`main-menu-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <Amenu>{routeObject.LABEL}</Amenu>
                </Link>
                <ul>
                  {routeObject.SUBS &&
                    routeObject.SUBS.map((subRouteObject: ROUTE) => {
                      return (
                        <li key={`sub-menu-${subRouteObject.ID}`}>
                          <Link
                            href={`${routeObject.PATH}${subRouteObject.PATH}`}
                          >
                            <a>{subRouteObject.LABEL}</a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </Sidenav>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #eee;
  background-color: black;
`;
const Logoimg = styled.img`
  max-height: 65px;
  padding: 1%;
`;
const Sidenav = styled.ul`
  display: flex;
  gap: 10px;
  right: 30px;
  justify-content: center;
  align-items: center;

  color: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(255, 4, 4, 1) 31%);
`;

const Amenu = styled.a`
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
  background: linear-gradient(to top, #b90606 30%, #251a1a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.3px yellow;
  padding: 10px;
  margin-right: 20px;
  line-height: 65px;
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
