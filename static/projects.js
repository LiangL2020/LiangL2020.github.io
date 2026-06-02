const projects = {
  ml: [
    {
      id: "ml-agentic-planning",
      title: "Hierarchical Agentic Planning",
      overview: "This project explored a hierarchical robotics framework that separates high-level task interpretation from low-level skill execution. The proposed system uses a large language model to convert natural language instructions into structured task parameters, while a reinforcement learning policy executes the corresponding robotic skill in simulation. My implemented work focused on the low-level reinforcement learning component for goal-conditioned robotic control.",
      challenge: "Long-horizon robotic tasks are difficult because a single policy often needs to learn both what goal to pursue and how to physically execute it. This project addressed that problem by separating task specification from control execution, then testing whether a goal-conditioned PPO policy could learn to perform the goal in a custom manipulation environment.",
      built: "I built a custom environments in MetaWorld using MuJoCo, where a simulated Sawyer robot arm had to perform a certain goal. One example would be where the robot arm has to press a colored button out of two different ones randomly placed on the desk. Each episode randomly selected one of two colored buttons as the target, and the observation space was augmented with a one-hot color vector to condition the policy on the goal.</br></br>I trained PPO agents under multiple reward configurations to study how reward design affected learning. The final reward setup combined reach-based shaping with a correct-button press bonus and an incorrect-button penalty, allowing the agent to learn successful goal-conditioned behavior and reach a 98%+ success rate after around 300,000 training steps.",
      contributions: [
        "Designed custom robotic manipulation environments in MetaWorld/MuJoCo.",
        "Augmented the observation space with a one-hot goal representation to support task-conditioned control.",
        "Trained PPO agents to execute goal-conditioned button-pressing skills.",
        "Implemented and compared multiple reward configurations, including reach rewards, press bonuses, and incorrect-button penalties.",
        "Analyzed reward curves, success rates, and rollout behavior to identify failure modes responsible for low task success rates.",
        "Improved performance through reward shaping, achieving a 100% success rate after approximately 300,000 training steps.",
        "Outlined future integration with language-based goal representations such as BERT embeddings or LLM-generated structured task parameters."
      ],
      technologies: "Python, PyTorch, PPO, Reinforcement Learning, MuJoCo, MetaWorld, NumPy, Reward Shaping"
    },

    {
      id: "ml-rl-control",
      title: "One-Step Actor-Critic for Discrete and Continuous Control",
      overview: "This project evaluated policy-gradient reinforcement learning algorithms in both discrete and continuous control environments. The goal was to understand how learning stability, representation choices, and hyperparameters affect performance across different domains, including a grid-world navigation task and an inverted pendulum control problem.",

      challenge: "Policy-gradient methods are often sensitive to learning rates, state representations, and function approximators. While discrete environments can often be solved with tabular methods, continuous control introduces additional challenges such as unstable updates, large state spaces, and poor convergence. The project focused on diagnosing these issues and identifying configurations that improve learning performance.",

      built: "I implemented the One-Step Actor-Critic algorithm from scratch and evaluated it on both discrete and continuous reinforcement learning environments. For the Cat-Monster Grid World, I developed tabular policy and value-function representations and performed extensive hyperparameter analysis using learning curves, value-function error, and convergence metrics.</br></br>For the Inverted Pendulum domain, I experimented with both neural-network and discretized state-action representations. After observing unstable learning with neural networks, I redesigned the environment using discretized state and action spaces, systematically evaluating different bin configurations and learning rates to improve convergence behavior.",

      contributions: [
        "Implemented One-Step Actor-Critic from scratch using temporal-difference value updates.",
        "Developed tabular policy and value-function representations for discrete environments.",
        "Performed large-scale hyperparameter sweeps across learning rates and update configurations.",
        "Evaluated learning performance using MSE, cumulative steps, reward trajectories, and value-function estimation error.",
        "Investigated convergence failures in continuous-control settings using neural-network function approximation.",
        "Compared neural-network and discretized state-action representations for the inverted pendulum domain.",
        "Designed and evaluated multiple state and action discretization strategies to improve training stability.",
        "Identified configurations that achieved stable convergence in the pendulum task after approximately 20,000 episodes.",
        "Analyzed training dynamics to understand the relationship between learning rates, representation choices, and policy performance."
      ],

      technologies: "Python, NumPy, PyTorch, Reinforcement Learning, One-Step Actor-Critic, Policy Gradients, Hyperparameter Optimization"
    },
    {
      id: "ml-wildlife-monitor",
      title: "Cross-Location Generalization in Wildlife Detection",
      overview: "This project investigated how well object detection models generalize to unseen environments in wildlife monitoring applications. Using the Caltech Camera Traps (CCT) dataset, I evaluated YOLOv5's ability to detect and classify animal species across geographically distinct locations with varying backgrounds, lighting conditions, and environmental characteristics.",

      challenge: "Computer vision models often perform well on environments seen during training but struggle when deployed in new locations. Wildlife monitoring presents a particularly difficult generalization problem because species appear under different lighting conditions, backgrounds, camera angles, and levels of occlusion. The goal was to understand the factors limiting cross-location generalization and identify common failure modes.",

      built: "I trained a YOLOv5 object detection model on a subset of the Caltech Camera Traps dataset containing more than 57,000 images collected across 20 different camera trap locations. I developed the data preparation pipeline, configured the training process, and evaluated performance using precision, recall, mAP, confusion matrices, and qualitative prediction analysis.</br></br>To better understand generalization failures, I analyzed validation outputs, confusion patterns, and environmental factors affecting performance. This included investigating species misclassification, background confusion, class imbalance, and the impact of lighting and scene variability on model behavior.",

      contributions: [
        "Trained and evaluated YOLOv5 on a 57k+ image wildlife monitoring dataset spanning 20 geographic locations.",
        "Configured and optimized the end-to-end object detection training pipeline using PyTorch and CUDA.",
        "Analyzed model performance using precision, recall, mAP@50, confusion matrices, and validation metrics.",
        "Performed error analysis to identify failure modes in unseen environments.",
        "Investigated class imbalance effects and their impact on detection and classification performance.",
        "Identified severe confusion between visually similar species such as cats, dogs, and bobcats.",
        "Diagnosed cases where animals were misclassified as background due to small object size, camouflage, or poor lighting.",
        "Compared detection quality against classification accuracy, showing that localization performance exceeded species classification performance.",
        "Evaluated the impact of environmental factors such as lighting conditions, background complexity, and habitat variation on model generalization."
      ],

      technologies: "Python, PyTorch, YOLOv5, CUDA, OpenCV, Computer Vision, Object Detection, Confusion Matrix Analysis, Model Evaluation"
    },
    {
      id: "ml-uav",
      title: "IMU-Based Gesture Recognition for UAV Control",
      overview: "This project developed a machine learning system that recognizes hand gestures from wearable IMU sensor data and translates them into UAV control commands. The goal was to create a natural and intuitive human-machine interface by replacing traditional controllers with gesture-based interaction.",

      challenge: "Time-series sensor data is inherently noisy and highly dependent on individual users. Small variations in motion, speed, and orientation can produce significantly different sensor readings, making reliable gesture classification difficult. The project focused on building a model that could distinguish similar gestures while remaining robust to real-world variations.",

      built: "I developed the data collection and preprocessing pipeline for accelerometer and gyroscope data captured from an IMU sensor. The collected data was used to train and evaluate gesture classification models capable of recognizing directional and rotational hand motions.</br></br>To improve model robustness, I applied data augmentation techniques, evaluated multiple gesture designs, and analyzed classification performance using precision, recall, and F1-score metrics. I also investigated deployment challenges caused by distribution shifts between offline training data and real-time sensor streams.",

      contributions: [
        "Built an automated data collection pipeline for capturing time-series IMU sensor data.",
        "Collected and curated gesture datasets using accelerometer and gyroscope measurements.",
        "Created an automated dataset generation system for collecting and labeling IMU-based gesture data.",
        "Applied Gaussian noise augmentation to improve robustness against user and environmental variability.",
        "Used stratified sampling to maintain balanced class distributions during training and evaluation.",
        "Evaluated multiple gesture designs and removed classes with poor separability.",
        "Compared classification approaches and selected Random Forest based on empirical performance.",
        "Analyzed model performance using precision, recall, F1-score, and confusion patterns.",
        "Investigated distribution shifts between validation and real-time deployment data.",
        "Identified feature overlap between gesture classes as a major source of classification error.",
        "Deployed the trained classifier into a real-time gesture recognition system achieving 98% validation accuracy."
      ],

      technologies: "Python, Scikit-learn, Random Forest, SVM, Time-Series Classification, Feature Engineering, IMU Sensors, ESP32, NumPy, Data Augmentation"

    }
  ],

  robotics: [
    {
      id: "rb-escape-room",
      title: "Robot Escape Room II",
      overview: "Developed a distributed robotics platform that enabled remote users to control and interact with a physical mobile robot operating inside an escape room environment. The system connected web clients, room infrastructure, and onboard robot software through a real-time communication architecture.",

      challenge: "The robot needed to reliably execute commands from remote users while maintaining synchronization between the robot, game state, and room devices. Network delays, hardware failures, and asynchronous events could easily cause state inconsistencies or unsafe robot behavior.",

      built: "I developed the robot-control infrastructure that connected a Raspberry Pi-based robot with a remote operator interface using WebSockets. The system transmitted motion commands, robot telemetry, and game events in real time while maintaining synchronization across distributed components.</br></br>I designed communication and control workflows that separated robot execution, game logic, and networking responsibilities, improving reliability and simplifying future expansion to additional robots and users.",

      contributions: [
        "Developed software for remote control of a physical mobile robot operating in an escape room environment.",
        "Implemented real-time robot communication using WebSockets over a distributed network architecture.",
        "Designed command and feedback pipelines between web clients, backend services, and onboard robot software.",
        "Managed synchronization between robot state, room state, and user actions across multiple distributed systems.",
        "Debugged hardware-software integration issues including motor control, peripheral interfaces, and message handling.",
        "Created fault-tolerant communication mechanisms using acknowledgements, retries, and timeout handling concepts.",
        "Improved system scalability through separation of communication, control, and game-management layers.",
        "Validated robot behavior through real-world testing with remote users interacting with physical hardware."
      ],

      technologies: "Python, Raspberry Pi, WebSockets, Distributed Systems, Robotics, Networking, Real-Time Communication, State Synchronization"
    },
    {
      id: "rb-slam-exploration",
      title: "Autonomous SLAM and Frontier Exploration",

      overview: "Developed an autonomous exploration system that enabled a mobile robot to map unknown environments, localize itself, and navigate to user-specified goals. The system combined SLAM, frontier-based exploration, path planning, and localization within the ROS ecosystem.",

      challenge: "Autonomous exploration requires a robot to simultaneously build a map, determine where unexplored regions exist, plan safe paths through partially known environments, and maintain accurate localization despite sensor noise and uncertainty.",

      built: "I implemented a frontier-based exploration pipeline using ROS, GMapping, and occupancy-grid maps. The robot continuously identified unexplored frontiers, selected exploration targets, planned collision-free paths, and navigated through unknown environments while incrementally constructing a map.</br></br>For localization, I integrated AMCL particle filtering to allow the robot to recover from kidnapped-robot scenarios and successfully navigate to user-defined goals after relocalization.",

      contributions: [
        "Implemented frontier detection and clustering for autonomous exploration.",
        "Developed frontier selection logic using centroid-based target generation.",
        "Optimized frontier search by restricting computations to valid C-space regions.",
        "Integrated GMapping for simultaneous localization and mapping.",
        "Implemented occupancy-grid processing and configuration-space generation.",
        "Developed A* path planning for navigation in partially explored environments.",
        "Added path-planning penalties to reduce unsafe turns near obstacles.",
        "Integrated AMCL particle-filter localization for kidnapped-robot recovery.",
        "Tuned particle-filter parameters to balance localization accuracy and runtime performance.",
        "Implemented PID-based navigation control for accurate path tracking."
      ],

      technologies: "ROS, GMapping, AMCL, A*, SLAM, Particle Filters, Occupancy Grids, Frontier Exploration, Python, Mobile Robotics, PID Control"

    },
    {
      id: "rb-vision-guided-manipulation",
      title: "Vision-Guided Robotic Manipulation",

      overview: "Developed an autonomous robotic manipulation system capable of detecting, localizing, and sorting colored objects using computer vision and a 3-DOF robotic arm. The project combined perception, calibration, kinematics, trajectory planning, and manipulation into a complete end-to-end robotics pipeline.",

      challenge: "Successful robotic manipulation requires accurate perception and precise motion control. The system needed to reliably identify objects in camera images, transform image coordinates into robot coordinates, generate feasible arm trajectories, and execute pick-and-place motions while avoiding kinematic singularities and positioning errors.",

      built: "I developed a vision-guided pick-and-place system on top of a robotic arm control framework built throughout the course. A camera mounted above the workspace was calibrated using a checkerboard pattern to estimate camera parameters and establish the relationship between image coordinates and the robot workspace.</br></br>The system detected colored objects, transformed image locations into robot coordinates, solved inverse kinematics to generate arm configurations, and executed autonomous pick-and-place motions to sort objects into designated regions. The final system successfully manipulated multiple object types, including colored balls and a toy chick, using a fully autonomous perception-to-action pipeline.",

      contributions: [
        "Implemented forward and inverse kinematics for a 3-DOF robotic manipulator.",
        "Developed Jacobian-based velocity kinematics for real-time end-effector control.",
        "Implemented numerical inverse kinematics and trajectory generation algorithms.",
        "Developed singularity detection and safety mechanisms using Jacobian analysis.",
        "Performed camera calibration using checkerboard-based calibration techniques.",
        "Developed color-based object detection and localization algorithms.",
        "Implemented coordinate transformations between camera and robot reference frames.",
        "Integrated perception outputs with motion planning and manipulation modules.",
        "Generated autonomous pick-and-place trajectories for object sorting tasks.",
        "Built an end-to-end robotic system integrating perception, planning, and manipulation."
      ],

      technologies: "MATLAB, Computer Vision, Camera Calibration, Robotics, Forward Kinematics, Inverse Kinematics, Jacobians, Trajectory Planning, Manipulation, Coordinate Transformations"
    },
    {
      id: "rb-photo-lapar",
      title: "3D Photoacoustic Reconstruction for Robot-Assisted Surgery",

      overview: "Developed a robotic imaging pipeline for reconstructing 3D anatomical models from sequential photoacoustic image slices collected during robot-assisted laparoscopic scanning. The project explored how robotic pose information from the Da Vinci Surgical System could be used to improve visualization of subsurface structures such as blood vessels and nerves.",

      challenge: "Photoacoustic imaging naturally produces a sequence of 2D image slices, making it difficult for surgeons to visualize the underlying anatomy in three dimensions. Accurate reconstruction requires synchronizing imaging data with robot pose information and correctly positioning each image slice within a common reference frame.",

      built: "I developed components of a 3D reconstruction pipeline that combined photoacoustic image data with Da Vinci robot kinematic information. Using robot pose feedback, individual image slices were mapped into a shared coordinate system and assembled into a volumetric representation of the scanned region.</br></br>The reconstructed model provided a foundation for future real-time visualization and image-overlay systems intended to improve surgical awareness of vessels and nerves hidden beneath tissue surfaces.",

      contributions: [
        "Developed methods for reconstructing 3D models from sequential 2D photoacoustic image slices.",
        "Mapped image frames to Da Vinci robot poses using kinematic information.",
        "Designed image-to-pose indexing strategies for volumetric reconstruction.",
        "Implemented coordinate transformations between imaging and robot reference frames.",
        "Created visualization workflows for reconstructed anatomical volumes.",
        "Worked with ROS-based communication pipelines for image and pose data exchange.",
        "Analyzed calibration and offset compensation challenges during reconstruction.",
        "Contributed to a research effort exploring augmented visualization for robot-assisted surgery."
      ],

      technologies: "MATLAB, ROS, dVRK, Da Vinci Surgical System, 3D Reconstruction, Medical Robotics, Photoacoustic Imaging, Coordinate Transformations, Surgical Navigation"

    },
    {
      id: "rb-uav",
      title: "IMU-Based Gesture Recognition for UAV Control",
      overview: "This project developed a real-time human-robot interaction system that enables users to control a UAV through hand gestures. Motion data collected from a wearable IMU sensor was interpreted and translated into flight commands, creating an intuitive alternative to traditional remote controllers.",

      challenge: "Robotic systems require reliable interpretation of noisy sensor inputs and stable command execution. Small variations in user motion, sensor noise, and prediction instability can lead to incorrect robot behavior. The challenge was to build a responsive control pipeline capable of converting human intent into consistent UAV actions in real time.",

      built: "I developed the sensing and control pipeline connecting an IMU sensor, ESP32 microcontroller, gesture recognition system, and UAV control interface. Sensor data was streamed from the wearable device, processed in real time, and converted into flight commands for the drone.</br></br>To improve system reliability, I analyzed prediction instability during live operation and implemented a buffer-based inference mechanism that reduced noisy commands and improved control consistency. The final system supported takeoff, landing, directional movement, and rotational control through natural hand gestures.",

      contributions: [
        "Developed a real-time human-UAV interaction system using wearable motion sensors.",
        "Built the sensor acquisition pipeline for accelerometer and gyroscope data using an IMU and ESP32.",
        "Integrated gesture recognition outputs with UAV command generation and flight control.",
        "Created an automated data collection pipeline for capturing real-time IMU sensor data from wearable devices.",
        "Implemented communication pipelines between sensing, prediction, and control modules.",
        "Designed command mappings between recognized gestures and UAV actions.",
        "Evaluated multiple gesture designs and removed gestures that produced unreliable robot behavior.",
        "Investigated real-time prediction instability and identified limitations of continuous sliding-window inference.",
        "Implemented a buffer-based prediction mechanism to improve command stability and reduce control noise.",
        "Analyzed user-to-user motion variability and its impact on robot control reliability.",
        "Validated the system through real-time UAV flight demonstrations achieving over 80% control accuracy."
      ],

      technologies: "Python, C/C++, ESP32, IMU Sensors, UAV Control, Embedded Systems, Real-Time Systems, Socket Communication, Scikit-learn, Random Forest"

    }
  ],

  sde: [
    {
      id: "sde-escape-room",
      title: "Robot Escape Room II",
      overview: "Built a distributed real-time control platform that enabled remote users to interact with a physical escape room through a web application. The system coordinated user requests, backend services, robot actions, and game-state updates across multiple networked components.",

      challenge: "The platform required maintaining consistency between multiple independent systems while handling asynchronous events, unreliable network communication, and concurrent user interactions. State desynchronization could result in incorrect game behavior or lost commands.",

      built: "Designed and implemented a client-server architecture using WebSockets to support low-latency bidirectional communication between users and physical devices. Developed backend workflows to process commands, synchronize application state, and propagate real-time updates across distributed components.</br></br>Architected the system with clear separation between communication, business logic, and device-control layers, improving maintainability, scalability, and fault isolation.",

      contributions: [
        "Built a real-time communication system using WebSockets for low-latency event delivery.",
        "Designed APIs and message protocols for communication between frontend, backend, and device services.",
        "Implemented distributed state management to synchronize user actions, game logic, and device execution.",
        "Developed backend workflows for command processing, event handling, and state propagation.",
        "Debugged and resolved integration issues involving network messaging, hardware interfaces, and system synchronization.",
        "Improved reliability through acknowledgement handling, retries, timeout detection, and error recovery mechanisms.",
        "Architected modular service boundaries separating communication, application logic, and hardware-control layers.",
        "Evaluated scalability considerations including concurrent users, command queuing, and session management."
      ],

      technologies: "Python, JavaScript, WebSockets, REST APIs, Distributed Systems, Event-Driven Architecture, State Management, Networking"

    },
    {
      id: "sde-aws",
      title: "AWS Project Management System",
      overview: "Developed a cloud-native project management platform that enables users to create projects, manage tasks and subtasks, assign teammates, and track project progress. The system was deployed entirely on AWS using a serverless architecture and supported multiple user views for administrators, projects, and teams.",

      challenge: "Building a scalable web application required coordinating frontend interfaces, backend business logic, cloud infrastructure, and persistent storage. The system needed to maintain data consistency across multiple entities while supporting a growing set of project management operations.",

      built: "I developed the backend architecture and business logic powering the application. This included designing request and response models, implementing data access layers, and building serverless APIs responsible for project, task, and teammate management.</br></br>The backend was deployed using AWS Lambda and integrated with API Gateway and an RDS database, enabling frontend clients to perform CRUD operations through cloud-hosted endpoints. I also contributed to testing, debugging, and integration efforts to ensure reliable communication between application layers.",

      contributions: [
        "Developed backend business logic for project, task, subtask, and teammate management.",
        "Implemented DAOs, request models, response models, and Lambda handlers.",
        "Designed REST-style APIs supporting project creation, task assignment, status tracking, and project administration.",
        "Integrated backend services with AWS Lambda, API Gateway, and RDS.",
        "Designed database interactions for persistent storage and retrieval of application data.",
        "Implemented CRUD operations across multiple interconnected entities.",
        "Created unit tests and edge-case test scenarios to validate backend functionality.",
        "Debugged integration issues involving API payloads, database mappings, and Lambda execution.",
        "Collaborated with frontend and database developers to define shared data contracts and API interfaces.",
        "Contributed to deployment, testing, and maintenance of a fully functional cloud-hosted application."
      ],

      technologies: "Java, AWS Lambda, API Gateway, Amazon RDS, MySQL, REST APIs, Serverless Architecture, DAO Pattern, Unit Testing, GitHub"
    },
    {
      id: "sde-android",
      title: "Android Application System",
      overview: "Developed a native Android application that allowed users to create profiles, browse other users, view detailed profile information, and manage interactions through a mobile interface. The project focused on mobile application architecture, user management workflows, and responsive UI design.",

      challenge: "Mobile applications must efficiently manage user data, navigation flows, and state transitions while maintaining a responsive user experience. The challenge was designing a scalable application structure that could support profile management, user discovery, and dynamic content updates.",

      built: "I developed core application features including user registration, profile management, list-based user browsing, and detailed profile views. The application utilized Android activity navigation and data-driven UI components to provide a seamless user experience across multiple screens.</br></br>I designed data models and interaction workflows that enabled users to view profile information, navigate between screens, and manage application data through a structured mobile architecture.",

      contributions: [
        "Developed native Android application features using Java and Android SDK.",
        "Implemented user registration and profile management workflows.",
        "Built list-based interfaces for browsing and displaying user information.",
        "Designed detailed profile views and screen navigation logic.",
        "Created data models to support user information storage and retrieval.",
        "Implemented event-driven UI interactions and activity lifecycle management.",
        "Developed reusable UI components to improve maintainability.",
        "Tested and debugged application behavior across multiple user interaction scenarios.",
        "Collaborated on application architecture, UI design, and feature integration."
      ],

      technologies: "Java, Android SDK, Android Studio, Mobile Development, UI Design, Activity Lifecycle, RecyclerView/ListView, Event-Driven Programming"

    }
  ]
};

