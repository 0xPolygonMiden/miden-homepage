import { Container, Header } from "~/components/container";

export function PageHome() {
  return (
    <Container>
      <Header className="!border-b-0">
        <h2>Isn't that how Blockchains should work?</h2>
      </Header>

      <ol className="flex flex-col gap-8 mt-6 px-6 w-miden">
        <li>
          <h3 className="mb-1 text-primary">Unbounded scalability</h3>
          <p>
            Through client-side proving, Miden allows users to execute and prove
            transactions locally without requiring the network to re-execute
            them. This scales better.
          </p>
        </li>
        <li>
          <h3 className="mb-1 text-primary">Privacy by default</h3>
          <p>
            With client-side execution and a self-custodied state, users
            maintain complete control over their data and transaction details.
            The network only needs to know commitments to states.
          </p>
        </li>
        <li>
          <h3 className="mb-1 text-primary">Safe development</h3>
          <p>
            Miden prioritizes developer safety and accessibility by leveraging
            Rust as the primary smart contract language and incorporating
            in-protocol safeguards like account abstraction and self-custodied
            state.
          </p>
        </li>
      </ol>
    </Container>
  );
}
