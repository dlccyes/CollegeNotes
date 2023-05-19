# Distributed Resource Allocation for Data Center Networks: A Hierarchical Game Approach

<https://ieeexplore.ieee.org/document/8345584>

- 2 DCOs (data center operators) & 2 SSs (service subscribers)
- stackelberg game: DCOs set price (leader) -> SSs buy (follower)
- scenarios
	- cooperative DCOs
		- collude and set high price
		- use Kalai-Smorodinsky barganing to divide profits
		- the results are derived mathematically
		- worse system welfare
	- competitive DCOs
		- competition
		- propose a "sub-gradient algorithm" to achieve Nash stable
			- repeat: SSs decide -> DCOs decide
			- repeat: DCOs increase/decrease price and view results
		- the author compared the proposed sub-gradient algorithm with the oridinary noncooperative algo, but I'm not sure what's the difference
		- highest system welfare

