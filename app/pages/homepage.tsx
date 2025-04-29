import { Link } from "react-router";
import { Container, Header } from "~/components/container";

export function PageHome() {
  return (
    <Container className="flex-1">
      <Header>
        <h2>Miden is the Edge Blockchain</h2>
        <p>
          Miden grants applications the power to scale with public and private
          transactions.
        </p>
        <p>
          By pushing execution and state to the edge, on the client side, Miden
          overcomes the limitations of scalability, privacy and security that
          hold back traditional blockchains.
        </p>
        <Link
          to="/developers"
          className="font-medium text-primary underline underline-offset-2"
        >
          START BUILDING →
        </Link>
      </Header>

      <div className="mt-16">
        <h3 className="font-sans font-semibold text-2xl text-balance">
          The way blockchains were always meant to work
        </h3>
        <ol className="flex flex-col gap-8 mt-6">
          <li>
            <h4 className="mb-1 font-bold text-primary">It scales</h4>
            <p>
              Miden allows users to execute and prove their own transactions
              with client-side proving, removing the need for re-execution.
            </p>
          </li>
          <li>
            <h4 className="mb-1 font-bold text-primary">It’s private</h4>
            <p>
              With edge execution and self-custodied state control, users keep
              full control of their data and transaction details.
            </p>
          </li>
          <li>
            <h4 className="mb-1 font-bold text-primary">It’s secure</h4>
            <p>
              Miden enables safe smart contract development with Rust and
              built-in account abstraction, while also minimizing attack surface
              with native asset storage for user accounts.
            </p>
          </li>
        </ol>
      </div>

      {/* TODO: Add a section investors */}
    </Container>
  );
}
