---
tags: GT_Papers
---
#[[Game Theory]] 
#[[Game Theory Papers]]
# privacy-preserving incentive mechanism for the federated cloud-edge learning, PFCEL
## intro
- cloud-edge computing
  - three-layer
    - edge devices, EDs
      - process data locally
    - acccess points, APs
      - nearby edge servers
      - upload to CC
    - cloud center, CC
      - further processing or aggregation
  - minimize overall latency
  - private data of ED entirely exposed to APs
- federated learning (FL) scheme
  - EDs train models locally and only upload models to upper layers
  - preserve privacy while maintaining model accuracy
- federated cloud-edge learning (FCEL) system
  - EDs give models to AP and aggregate → partial model; APs give partial models to CC and aggregate → global model
  - private data outputs may be attached by leveraging the sensitive information in these outputs
    - og data may be partially recovered (reverse engineer)
- differential privacy, DP
  - upload model updates with noise pertubation for privacy
  - avoids high computaion & communication overhead
  - pertubations affect model → privacy-accuracy trade-off
  - add Gaussian noise permuation
    - noice scaler over a threashold → AP unable to revover data
    - large noice scale → hard to converge
## goal & model
- optimal contract design problem
  - obtain a global model with desired accuracy in a certain time period while preserving EDs' data privacy
  - APs motivate EDs to participate without knowing EDs' privacy senstivitiy
  - CC determine the monetary incentive for lower layers for max model accuracy, 3 layer Stackelberg game + optimal contract design problem
    - CC pay APs, compensate what APs pay EDs
    - APs pay EDs, compensate the data leakage of EDs
      - choose different privacy budget
      - contract theory
    - constraints
      - [[incentive compatibility]], IC
      - [[incentive rationality]], IR
      - privacy budget $\epsilon$ reasonable
      - total rewards < total incentive
    - 3 layer Stackelberg game, TLSG
      - CC 預期 APs & EDs 策略，先手
    - use gradient ascent to update coeff. until winthin threashold → optimized coeff.
## results
- as noise scale increase, data leakage decrease & test loss increase exponentially
- APs ↑ $U_{CC}$ ↓；EDs ↑ $U_{CC}$ ↑
- comparison with DP-FedAvg
  - DP-FedAvg
    - only has CC & EDs
  - PFCEL converges faster, achieves higher accuracy & lower test loss than DP-FedAvg
- test accuracy & test loss are close th those with zero noise scales
- EDs ↑ test accuracy ↑ test loss ↓
  - non-i.i.d. degree of the whole data set decreases
