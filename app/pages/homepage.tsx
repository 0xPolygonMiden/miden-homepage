import { Link } from "react-router";
import { Container, Header } from "~/components/container";

export function PageHome() {
	return (
		<Container className="flex-1">
			<Header>
				<h2>Miden is a high-throughput, privacy-enabled blockchain</h2>
				<p>
					Miden is the next-generation blockchain protocol designed from the
					ground up to take full advantage of the capabilities unlocked by ZK
					technology. It takes the core concept of ZK rollups to its logical
					conclusion and pushes both state and execution to the edge (i.e., the
					client side). This allows Miden to simultaneously address the problems
					plaguing transparent and synchronous blockchains in scalability,
					privacy, and safety.
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
						<h4 className="mb-1 font-bold text-primary">
							Unbounded scalability
						</h4>
						<p>
							Through client-side proving, Miden allows users to execute and
							prove transactions locally without requiring the network to
							re-execute them. This scales better.
						</p>
					</li>
					<li>
						<h4 className="mb-1 font-bold text-primary">Privacy by default</h4>
						<p>
							With client-side execution and a self-custodied state, users
							maintain complete control over their data and transaction details.
							The network only needs to know commitments to states.
						</p>
					</li>
					<li>
						<h4 className="mb-1 font-bold text-primary">Safe development</h4>
						<p>
							Miden prioritizes developer safety and accessibility by leveraging
							Rust as the primary smart contract language and incorporating
							in-protocol safeguards like account abstraction and self-custodied
							state.
						</p>
					</li>
				</ol>
			</div>
		</Container>
	);
}
