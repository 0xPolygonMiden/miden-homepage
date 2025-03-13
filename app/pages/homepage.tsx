import { Container, Header } from "~/components/container";

export function PageHome() {
  return (
    <Container>
      <Header>
        <h2>Isn't that how Blockchains should work?</h2>
      </Header>

      <ol className="flex flex-col mt-6 max-w-xl gap-8">
        <li>
          Unbounded scalability: Through client-side proving, Miden allows users
          to execute and prove transactions locally without requiring the
          network to re-execute them. This scales better.
        </li>
        <li>
          Privacy by default: With client-side execution and a self-custodied
          state, users maintain complete control over their data and transaction
          details. The network only needs to know commitments to states.
        </li>
        <li>
          Safe development: Miden prioritizes developer safety and accessibility
          by leveraging Rust as the primary smart contract language and
          incorporating in-protocol safeguards like account abstraction and
          self-custodied state.
        </li>
      </ol>
    </Container>
  );
}
